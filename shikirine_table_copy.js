(function() {
	"use strict";
	kintone.events.on('app.record.detail.show', function(event) {
		var params = {
			app : 18,
			query : "ID in (" + event.record.ID.value + ")"
		};
		kintone.api('/k/v18/records', 'GET', params, function(resp) {
			var table = document.createElement("table");
			var tr1 = table.insertRow();
			var td1_1 = tr1.insertCell();
			td1_1.innerText = '受注日';
			var td1_2 = tr1.insertCell();
			td1_2.innerText = '個数';
			resp.records.forEach(function(record) {
				record.Table.value.forEach(function(row) {
					if (row.value.ID.value === event.record.ID.value) {
						var tr2 = table.insertRow();
						var td2_1 = tr2.insertCell();
						td2_1.innerText = record.受注日.value;
						var td2_2 = tr2.insertCell();
						td2_2.innerText = row.value.個数.value;
					}
				});
			});
			document.getElementById("record-gaia").appendChild(table);
		});
		return event;
	});
})();