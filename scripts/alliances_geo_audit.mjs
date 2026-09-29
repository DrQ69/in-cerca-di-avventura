import fs from 'node:fs/promises';

const alliances=JSON.parse(await fs.readFile('data/alliances.json','utf8'));
const calibration=JSON.parse(await fs.readFile('data/map-italia-calibration.json','utf8'));

const errors=[];
const entities=(alliances.entities||[]).filter(e=>e.type==='community'&&e.status==='pilot');
const anchors=calibration.anchors||[];
const anchorById=new Map(anchors.map(a=>[a.entity_id,a]));

if(anchors.length<(calibration.rules?.minimum_anchor_count||3)){
  errors.push('MAP-GEO-001: insufficient reviewed anchors');
}

for(const entity of entities){
  if(!entity.geo)errors.push(entity.id+': missing geo metadata');
  if(entity.geo?.region_verified!==entity.region)errors.push(entity.id+': region verification mismatch');
  if(entity.map_placement?.calibration_id!==calibration.calibration_id)errors.push(entity.id+': wrong/missing calibration id');
  if(!Number.isFinite(entity.x)||!Number.isFinite(entity.y))errors.push(entity.id+': invalid map coordinates');

  const anchor=anchorById.get(entity.id);
  if(!anchor)errors.push(entity.id+': missing calibration anchor');
  if(anchor){
    const fields=['city','region'];
    for(const field of fields){
      if(String(anchor[field])!==String(entity[field]))errors.push(entity.id+': '+field+' differs from calibration anchor');
    }
    if(Math.abs(anchor.latitude-entity.geo.latitude)>1e-5||Math.abs(anchor.longitude-entity.geo.longitude)>1e-5){
      errors.push(entity.id+': geographic coordinates differ from calibration anchor');
    }
    if(Math.abs(anchor.map_x-entity.x)>0.01||Math.abs(anchor.map_y-entity.y)>0.01){
      errors.push(entity.id+': rendered map coordinates differ from reviewed calibration anchor');
    }
  }
}

const sortedLon=[...entities].sort((a,b)=>a.geo.longitude-b.geo.longitude);
for(let i=1;i<sortedLon.length;i++){
  if(!(sortedLon[i].x>sortedLon[i-1].x)){
    errors.push('Longitude/map-x order mismatch: '+sortedLon[i-1].city+' -> '+sortedLon[i].city);
  }
}
const sortedLat=[...entities].sort((a,b)=>b.geo.latitude-a.geo.latitude);
for(let i=1;i<sortedLat.length;i++){
  if(!(sortedLat[i].y>sortedLat[i-1].y)){
    errors.push('Latitude/map-y order mismatch: '+sortedLat[i-1].city+' -> '+sortedLat[i].city);
  }
}

const minDistance=calibration.rules?.minimum_marker_center_distance_logical||62;
for(let i=0;i<entities.length;i++){
  for(let j=i+1;j<entities.length;j++){
    const a=entities[i],b=entities[j];
    const distance=Math.hypot(a.x-b.x,a.y-b.y);
    if(distance<minDistance){
      errors.push('Marker centers too close: '+a.city+' / '+b.city+' = '+distance.toFixed(1));
    }
  }
}

const crema=entities.find(e=>e.city==='Crema');
const prato=entities.find(e=>e.city==='Prato');
const roma=entities.find(e=>e.city==='Roma');
if(crema&&prato&&roma){
  if(!(crema.geo.latitude>prato.geo.latitude&&prato.geo.latitude>roma.geo.latitude))errors.push('Real latitude order Crema > Prato > Roma failed');
  if(!(crema.geo.longitude<prato.geo.longitude&&prato.geo.longitude<roma.geo.longitude))errors.push('Real longitude order Crema < Prato < Roma failed');
  if(!(crema.y<prato.y&&prato.y<roma.y))errors.push('Map vertical order Crema -> Prato -> Roma failed');
  if(!(crema.x<prato.x&&prato.x<roma.x))errors.push('Map horizontal order Crema -> Prato -> Roma failed');
}

if(errors.length){
  console.error('MAP-GEO-001 audit: FAIL');
  for(const e of errors)console.error('- '+e);
  process.exit(1);
}

console.log('MAP-GEO-001 audit: PASS');
console.log('- '+entities.length+' published pilot communities have verified geo metadata');
console.log('- reviewed anchor coordinates match rendered data');
console.log('- geographic ordering is consistent with map ordering');
console.log('- marker center separation passes');
