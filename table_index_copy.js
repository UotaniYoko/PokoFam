(function() {
	"use strict";
	kintone.events.on('app.record.detail.show', function(event) {
		
		//���R�[�h�ޔ�����
		var record = event.record;
		//�����Ǘ��̍H�ԑޔ�����
		var reckoban = record['�^��'].value;
					
		var params = {
			app : 320,
			query : ' ������_�H��1 like "' + koban
			+ '" or ������_�H��2 like "' + koban
			+ '" or ������_�H��3 like "' + koban
			+ '" or ������_�H��4 like "' + koban
			+ '" or ������_�H��5 like "' + koban
			+ '"  order by ���R�[�h�ԍ�  '
		};
		
		
		kintone.api('/k/v18/records', 'GET', params, function(resp) {
			var table = document.createElement("table");
			var tr1 = table.insertRow();
			var td1_1 = tr1.insertCell();
			td1_1.innerText = '�󒍓�';
			var td1_2 = tr1.insertCell();
			td1_2.innerText = '��';
			resp.records.forEach(function(record) {
				record.Table.value.forEach(function(row) {
					if (row.value.ID.value === event.record.ID.value) {
						var tr2 = table.insertRow();
						var td2_1 = tr2.insertCell();
						td2_1.innerText = record.�󒍓�.value;
						var td2_2 = tr2.insertCell();
						td2_2.innerText = row.value.��.value;
					}
				});
			});
			document.getElementById("record-gaia").appendChild(table);
		});
		return event;
	});
})();