(function() {
	"use strict";
	
	kintone.events.on(['app.record.create.change.出荷機材', 'app.record.edit.change.出荷機材', 'app.record.create.show'], function(event) {

		var record = event.record;		
		var tableRecords = event.record.出荷機材.value;
		
		for ( var i = 0; i < Number(record['出荷機材']['value'].length) ; i++) {			
			if (tableRecords[i].value['管理'].value == "管理番号") {
				tableRecords[i].value['数量'].value = '1';	
				record.出荷機材.value[i].value.数量.disabled = true;		 
			}
			else{
				record.出荷機材.value[i].value.数量.disabled = false;		 			
			}						
		}	
		return event;
	});
})();