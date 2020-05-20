(function() {
	'use strict';
	
	kintone.events
			.on(
					[ 'app.record.create.change.レコード',
							'app.record.edit.change.レコード' ],
					function(event) {

						var targetAppId = kintone.app
								.getLookupTargetAppId('Lookup');
						var targetRecordId = event.record['レコード'].value;
						
						alert('^^');


						// ルックアップクリアをしたらテーブルを空にする
						if (!targetRecordId) {
							event.record['出荷機材'].value = [];
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
											event.record['出荷機材'].value = resp.record['出荷機材'].value;
											
											
											  // サブテーブルを編集不可にする場合
											  event.record['出荷機材'].value.forEach(function(obj) {
											  Object.keys(obj.value).forEach(function(params) {
											  obj.value[params].disabled =
											  true; }); });
											 
											kintone.app.record.set(event);
											
											
										}, function(err) {
											alert('REST APIでエラーが発生しました');
										});


					});
})();