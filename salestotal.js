(function() {
	"use strict";

	// 売上管理アプリのID
	var TappId = 338;

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

	fetchRecords(TappId)
			.then(
					function(records) {

						kintone.events
								.on(
										[ 'app.record.edit.submit' ],
										function(event) {

											// 集計用の期間・営業所を取得
											var record = event.record;										
											var total = 0;
																								
											// 合計算出
											
											if (record['日付_開始'].value !== undefined	&& record['日付_終了'].value !== undefined && record['ドロップダウン_営業所'].value !== undefined) {

												var start = record['日付_開始'].value.replace(/-/g,'');
												var end = record['日付_終了'].value.replace(/-/g,'');
												var place = record['ドロップダウン_営業所'].value;
												
												for ( var i = 0; i < records.length; i++) {
													
													//売上管理の営業所=集計の営業所判定
													if(records[i]['ドロップダウン']['value'] == place){														
														
														var tableRecords = records[i].サマリー売上詳細.value;												
														for ( var j = 0; j < tableRecords.length; j++) {
															
															var date = tableRecords[j].value['contact_date'].value.replace(/-/g,'');
															
															//売上月が集計の期間の範囲内
															if(parseInt(start) <= parseInt(date) && parseInt(date) <= parseInt(end)){
																
																//null判定
																if (tableRecords[j].value['売上金額'].value !== undefined) {
																	/*																alert('^^bello!;' + tableRecords[j].value['売上金額'].value);*/
																	
																	total += parseInt(tableRecords[j].value['売上金額'].value);																	
																}
																																															

																			
															}
														}																												
													}																																							
												}												
											}
											
											
											
											record['数値_売上金額'].value = total.toLocaleString();

											return event;

										});

					});

})();