(function() {
	"use strict";
	
	kintone.events.on(['app.record.create.change.�o�׋@��', 'app.record.edit.change.�o�׋@��', 'app.record.create.show'], function(event) {

		var record = event.record;		
		var tableRecords = event.record.�o�׋@��.value;
		
		for ( var i = 0; i < Number(record['�o�׋@��']['value'].length) ; i++) {			
			if (tableRecords[i].value['�Ǘ�'].value == "�Ǘ��ԍ�") {
				tableRecords[i].value['����'].value = '1';	
				record.�o�׋@��.value[i].value.����.disabled = true;		 
			}
			else{
				record.�o�׋@��.value[i].value.����.disabled = false;		 			
			}						
		}	
		return event;
	});
})();