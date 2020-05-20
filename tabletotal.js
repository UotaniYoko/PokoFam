(function() {
	"use strict";

	var fields = [ '�����Ǘ�', '���z', '���i' ];
	var kamokuInfos = {
		'�O��' : '�O�����v',
		'����' : '���̍��v',
	};

	var events = [ "app.record.edit.show", "app.record.create.show" ];
	fields.forEach(function(field) {
		events.push("app.record.edit.change." + field);
		events.push("app.record.create.change." + field);
	});

	var totalFields = [];
	Object.keys(kamokuInfos).forEach(function(kamoku) {
		var tcode = kamokuInfos[kamoku];
		if (totalFields.indexOf(tcode) < 0) {
			totalFields.push(tcode);
		}
	});

	kintone.events.on(events, function(event) {
		var record = event.record;
		totalFields.forEach(function(tcode) {
			record[tcode].value = 0;
			record[tcode].disabled = true;
		});
		var subTable = record['���i'].value;
		subTable.forEach(function(rows) {
			var kamoku = rows.value['�����Ǘ�'].value;
			if (Object.keys(kamokuInfos).indexOf(kamoku) >= 0) {
				var tcode = kamokuInfos[kamoku];
				if (rows.value['���z'].value) {
					record[tcode].value += Number(rows.value['���z'].value);
				}
			}
		});

		return event;
	});
})();