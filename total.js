(function() {
	"use strict";

	// アプリAのID
	var TappId = 320;

	function fetchRecords(appId, opt_offset, opt_limit, opt_records) {
		var offset = opt_offset || 0;
		var limit = opt_limit || 100;
		var allRecords = opt_records || [];
		var params = {
			app : appId,
			query : 'order by レコード番号 asc limit ' + limit + ' offset ' + offset
		};
		return kintone.api('/k/v1/records', 'GET', params).then(function(resp) {
			allRecords = allRecords.concat(resp.records);
			if (resp.records.length === limit) {
				return fetchRecords(appId, offset + limit, limit, allRecords);
			}

			return allRecords;
		});

	}

	fetchRecords(TappId).then(
			function(records) {

				kintone.events.on([ 'app.record.edit.submit' ], function(event) {

					// アプリBの設定日付を取得
					var record = event.record;
/*					var start = record['日付'].value;
					var end = record['日付_0'].value;*/

					// アプリAの商品1の合計数を入れる変数
					var item1 = 0;

					for ( var i = 0; i < records.length; i++) {
						
						 if (!(records[i]['ルックアップ_合計']['value'] == 0)){
							 
								// アプリAの商品1の合計数を取得
								item1 = item1 + parseInt(records[i]['ルックアップ_合計']['value']);
							 
							 }																	
					}

					alert('工番ごと合計は「' + item1.toLocaleString() + '」です。');
					
					// アプリBの商品1フィールドにアプリAの商品1の合計数をセット
					record['数値_レコード合計']['value'] = item1;

					return event;

				});

			});

})();