(function() {
	"use strict";
	kintone.events.on('app.record.detail.show', function(event) {
		
		//ƒŒƒR[ƒh‘Ş”ğˆ—
		var record = event.record;
		//Œ´‰¿ŠÇ—‚ÌH”Ô‘Ş”ğˆ—
		var reckoban = record['Œ^”Ô'].value;
					
		var params = {
			app : 320,
			query : ' •¶š—ñ_H”Ô1 like "' + koban
			+ '" or •¶š—ñ_H”Ô2 like "' + koban
			+ '" or •¶š—ñ_H”Ô3 like "' + koban
			+ '" or •¶š—ñ_H”Ô4 like "' + koban
			+ '" or •¶š—ñ_H”Ô5 like "' + koban
			+ '"  order by ƒŒƒR[ƒh”Ô†  '
		};
		
		
		kintone.api('/k/v18/records', 'GET', params, function(resp) {
			var table = document.createElement("table");
			var tr1 = table.insertRow();
			var td1_1 = tr1.insertCell();
			td1_1.innerText = 'ó’“ú';
			var td1_2 = tr1.insertCell();
			td1_2.innerText = 'ŒÂ”';
			resp.records.forEach(function(record) {
				record.Table.value.forEach(function(row) {
					if (row.value.ID.value === event.record.ID.value) {
						var tr2 = table.insertRow();
						var td2_1 = tr2.insertCell();
						td2_1.innerText = record.ó’“ú.value;
						var td2_2 = tr2.insertCell();
						td2_2.innerText = row.value.ŒÂ”.value;
					}
				});
			});
			document.getElementById("record-gaia").appendChild(table);
		});
		return event;
	});
})();