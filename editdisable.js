(function() {
	'use strict';
	kintone.events.on([ 'app.record.edit.show' ], function(event) {
		
		var user = kintone.getLoginUser();
		
		var record = event.record;
		
		if(user.code !== 'kubota4977'){
			
			for ( var i = 0; i < Number(record['����R�[�h']['value'].length); i++) {

				record.����R�[�h.value[i].value.T_����R�[�h_���i.disabled = true;

			};
			
		}

		return event;
		
	});
})();