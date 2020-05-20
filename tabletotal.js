(function() {
	"use strict";

	var fields = [ '原価管理', '金額', '商品' ];
	var kamokuInfos = {
		'外注' : '外注合計',
		'物販' : '物販合計',
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
		var subTable = record['商品'].value;
		subTable.forEach(function(rows) {
			var kamoku = rows.value['原価管理'].value;
			if (Object.keys(kamokuInfos).indexOf(kamoku) >= 0) {
				var tcode = kamokuInfos[kamoku];
				if (rows.value['金額'].value) {
					record[tcode].value += Number(rows.value['金額'].value);
				}
			}
		});

		return event;
	});
})();