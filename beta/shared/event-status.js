/* ICA event lifecycle helper — Product Owner rule 2026-10-11.
   Once the local calendar date has moved past an event date, its operational
   public status is conclusa regardless of a stale source status value. */
(function(root){
  function localDateKey(now){
    const d=now instanceof Date?now:new Date(now);
    const y=d.getFullYear();
    const m=String(d.getMonth()+1).padStart(2,'0');
    const day=String(d.getDate()).padStart(2,'0');
    return y+'-'+m+'-'+day;
  }

  function isISODate(value){
    return /^\d{4}-\d{2}-\d{2}$/.test(String(value||''));
  }

  function effectiveStatus(event,now){
    if(event&&isISODate(event.date)&&event.date<localDateKey(now||new Date())){
      return 'conclusa';
    }
    return event?.status||'';
  }

  function normalize(events,now){
    return (Array.isArray(events)?events:[]).map(event=>{
      const status=effectiveStatus(event,now);
      return status===event?.status?event:{...event,status,status_derived_from_date:true};
    });
  }

  root.ICAEventStatus={effectiveStatus,normalize,localDateKey};
})(window);
