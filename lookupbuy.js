(function() {
	'use strict';
	
	kintone.events
			.on(
					[ 'app.record.create.change.���R�[�h',
							'app.record.edit.change.���R�[�h' ],
					function(event) {

						var targetAppId = kintone.app
								.getLookupTargetAppId('Lookup');
						var targetRecordId = event.record['���R�[�h'].value;
						
						alert('^^');


						// ���b�N�A�b�v�N���A��������e�[�u������ɂ���
						if (!targetRecordId) {
							event.record['�o�׋@��'].value = [];
							return event;
						}

						var body = {
							app : targetAppId,
							id : targetRecordId,
						};
						kintone
								.api(
										kintone.api.url('/k/v1/record', true),
										'GET',
										body,
										function(resp) {
											event.record['�o�׋@��'].value = resp.record['�o�׋@��'].value;
											
											
											  // �T�u�e�[�u����ҏW�s�ɂ���ꍇ
											  event.record['�o�׋@��'].value.forEach(function(obj) {
											  Object.keys(obj.value).forEach(function(params) {
											  obj.value[params].disabled =
											  true; }); });
											 
											kintone.app.record.set(event);
											
											
										}, function(err) {
											alert('REST API�ŃG���[���������܂���');
										});


					});
})();