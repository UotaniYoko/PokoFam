(function() {
	"use strict";
	var ardpp_value_conversion = [ 'app.record.detail.process.proceed' ];
	kintone.events.on(ardpp_value_conversion, function(event) {


		
		var record = event['record'];

		var nStatus = event.nextStatus.value;

		if (nStatus === "�ˑ����F") {
			
			alert('bello!^^');

			record['������_���F��']['value'] = '�ˑ��b���q';

			return event;
		}

	});
})();