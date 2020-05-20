(function() {
	"use strict";
	var ardpp_value_conversion = [ 'app.record.detail.process.proceed' ];
	kintone.events.on(ardpp_value_conversion, function(event) {


		
		var record = event['record'];

		var nStatus = event.nextStatus.value;

		if (nStatus === "ŒË‘º³”F") {
			
			alert('bello!^^');

			record['•¶š—ñ_³”FÒ']['value'] = 'ŒË‘ºŒb”üq';

			return event;
		}

	});
})();