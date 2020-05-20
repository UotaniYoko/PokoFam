(function() {
	'use strict';
	kintone.events.on([ 'app.record.edit.show' ], function(event) {
		
		var user = kintone.getLoginUser();
		
		var record = event.record;
		
		if(user.code !== 'kubota4977'){
			
			for ( var i = 0; i < Number(record['売上コード']['value'].length); i++) {

				record.売上コード.value[i].value.T_売上コード_商品.disabled = true;

			};
			
		}

		return event;
		
	});
})();