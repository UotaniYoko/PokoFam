(function() {
	"use strict";

	kintone.events.on([ 'app.record.create.submit', 'app.record.edit.submit' ], function(event) {

		var record = event.record;

		var tableRecords = event.record.工数テーブル.value;
		
		var addnumber = 0;

		for ( var i = 0; i < Number(record['工数テーブル']['value'].length) ; i++) {
			
			if(tableRecords[i].value['数値_時間'].value !== undefined){
							
				addnumber = Number(tableRecords[i].value['数値_時間'].value);
				addnumber += Number(tableRecords[i].value['数値_合計'].value);
				tableRecords[i].value['数値_合計'].value = addnumber;				
			}
			
						
			
			addnumber = 0;
			tableRecords[i].value['数値_時間'].value = '';

		
			
		}

		return event;

	});

})();