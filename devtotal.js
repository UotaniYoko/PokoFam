(function() {
	"use strict";

	kintone.events.on([ 'app.record.create.submit', 'app.record.edit.submit' ], function(event) {

		var record = event.record;

		var tableRecords = event.record.�H���e�[�u��.value;
		
		var addnumber = 0;

		for ( var i = 0; i < Number(record['�H���e�[�u��']['value'].length) ; i++) {
			
			if(tableRecords[i].value['���l_����'].value !== undefined){
							
				addnumber = Number(tableRecords[i].value['���l_����'].value);
				addnumber += Number(tableRecords[i].value['���l_���v'].value);
				tableRecords[i].value['���l_���v'].value = addnumber;				
			}
			
						
			
			addnumber = 0;
			tableRecords[i].value['���l_����'].value = '';

		
			
		}

		return event;

	});

})();