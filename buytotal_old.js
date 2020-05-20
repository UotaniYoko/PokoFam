/*
使用アプリ：原価管理
概要：購買報告書アプリのレコードを取得し、キーをもとに合計金額を算出する(キー：工番+物販or外注)
*/
(function() {
	"use strict";

	// 購買報告書アプリのID
	var TappId = 320;

	//購買報告書アプリのレコードを取得します↓
	function fetchRecords(appId, opt_offset, opt_limit, opt_records) {
		var offset = opt_offset || 0;
		var limit = opt_limit || 500;
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
	//↑

	fetchRecords(TappId)
			.then(
					function(records) {
						//イベント（レコード編集画面、レコード追加画面の実行ボタン押下時）
						kintone.events
								.on(
										[ 'app.record.create.submit',
												'app.record.edit.submit' ],
										function(event) {

											//原価管理アプリのレコード取得を取得
											var record = event.record;
											//物品購入合計フィールドを初期化
											record['数値_物品購入合計'].value = 0;
											//外注購入合計フィールドを初期化
											record['数値_外注費合計'].value = 0;
											//原価管理アプリの交番を取得
											var no = record['文字列_工番_現場経費'].value;

											// 物品・外注費合計
											// 合計を入れる変数
											var item = 0;

											///購買報告書アプリのレコード数分処理を繰り返す
											for ( var i = 0; i < records.length; i++) {

												// 工番合計1フィールドのキーチェック
												//物販キーチェック
												if (records[i]['文字列_工番合計1']['value'] == no	+ "物販") {
													//購買報告書のキー＝原価管理アプリの場合
													item = Number(record['数値_物品購入合計']['value']);
													item += Number(records[i]['数値_工番合計1']['value']);
													//金額加算
													record['数値_物品購入合計']['value'] = item;
													item = 0;
												//外注キーチェック	
												} else if (records[i]['文字列_工番合計1']['value'] == no	+ "外注") {
													//購買報告書のキー＝原価管理アプリの場合
													item = Number(record['数値_外注費合計']['value']);
													item += Number(records[i]['数値_工番合計1']['value']);
													//金額加算
													record['数値_外注費合計']['value'] = item;
													item = 0;
												}
												
												//以下工番合計2～8フィールド

												// 2
												if (records[i]['文字列_工番合計2']['value'] == no	+ "物販") {
													item = Number(record['数値_物品購入合計']['value']);
													item += Number(records[i]['数値_工番合計2']['value']);
													record['数値_物品購入合計']['value'] = item;
													item = 0;
												} else if (records[i]['文字列_工番合計2']['value'] == no + "外注") {
													item = Number(record['数値_外注費合計']['value']);
													item += Number(records[i]['数値_工番合計2']['value']);
													record['数値_外注費合計']['value'] = item;
													item = 0;
												}


												// 3
												if (records[i]['文字列_工番合計3']['value'] == no	+ "物販") {
													item = Number(record['数値_物品購入合計']['value']);
													item += Number(records[i]['数値_工番合計3']['value']);
													record['数値_物品購入合計']['value'] = item;
													item = 0;
												} else if (records[i]['文字列_工番合計3']['value'] == no	+ "外注") {
													item = Number(record['数値_外注費合計']['value']);
													item += Number(records[i]['数値_工番合計3']['value']);
													record['数値_外注費合計']['value'] = item;
													item = 0;
												}

												// 4
												if (records[i]['文字列_工番合計4']['value'] == no	+ "物販") {
													item = Number(record['数値_物品購入合計']['value']);
													item += Number(records[i]['数値_工番合計4']['value']);
													record['数値_物品購入合計']['value'] = item;
													item = 0;
												} else if (records[i]['文字列_工番合計4']['value'] == no	+ "外注") {
													item = Number(record['数値_外注費合計']['value']);
													item += Number(records[i]['数値_工番合計4']['value']);
													record['数値_外注費合計']['value'] = item;
													item = 0;
												}
												
												// 5
												if (records[i]['文字列_工番合計5']['value'] == no	+ "物販") {
													item = Number(record['数値_物品購入合計']['value']);
													item += Number(records[i]['数値_工番合計5']['value']);
													record['数値_物品購入合計']['value'] = item;
													item = 0;
												} else if (records[i]['文字列_工番合計5']['value'] == no	+ "外注") {
													item = Number(record['数値_外注費合計']['value']);
													item += Number(records[i]['数値_工番合計5']['value']);
													record['数値_外注費合計']['value'] = item;
													item = 0;
												}
												
												// 6
												if (records[i]['文字列_工番合計6']['value'] == no	+ "物販") {
													item = Number(record['数値_物品購入合計']['value']);
													item += Number(records[i]['数値_工番合計6']['value']);
													record['数値_物品購入合計']['value'] = item;
													item = 0;
												} else if (records[i]['文字列_工番合計6']['value'] == no	+ "外注") {
													item = Number(record['数値_外注費合計']['value']);
													item += Number(records[i]['数値_工番合計6']['value']);
													record['数値_外注費合計']['value'] = item;
													item = 0;
												}
												
												// 7
												if (records[i]['文字列_工番合計7']['value'] == no	+ "物販") {
													item = Number(record['数値_物品購入合計']['value']);
													item += Number(records[i]['数値_工番合計7']['value']);
													record['数値_物品購入合計']['value'] = item;
													item = 0;
												} else if (records[i]['文字列_工番合計7']['value'] == no	+ "外注") {
													item = Number(record['数値_外注費合計']['value']);
													item += Number(records[i]['数値_工番合計7']['value']);
													record['数値_外注費合計']['value'] = item;
													item = 0;
												}
												
												// 8
												if (records[i]['文字列_工番合計8']['value'] == no	+ "物販") {
													item = Number(record['数値_物品購入合計']['value']);
													item += Number(records[i]['数値_工番合計8']['value']);
													record['数値_物品購入合計']['value'] = item;
													item = 0;
												} else if (records[i]['文字列_工番合計8']['value'] == no	+ "外注") {
													item = Number(record['数値_外注費合計']['value']);
													item += Number(records[i]['数値_工番合計8']['value']);
													record['数値_外注費合計']['value'] = item;
													item = 0;
												}
												
												// 9
												if (records[i]['文字列_工番合計9']['value'] == no	+ "物販") {
													item = Number(record['数値_物品購入合計']['value']);
													item += Number(records[i]['数値_工番合計9']['value']);
													record['数値_物品購入合計']['value'] = item;
													item = 0;
												} else if (records[i]['文字列_工番合計9']['value'] == no	+ "外注") {
													item = Number(record['数値_外注費合計']['value']);
													item += Number(records[i]['数値_工番合計9']['value']);
													record['数値_外注費合計']['value'] = item;
													item = 0;
												}
												
												// 10
												if (records[i]['文字列_工番合計10']['value'] == no	+ "物販") {
													item = Number(record['数値_物品購入合計']['value']);
													item += Number(records[i]['数値_工番合計10']['value']);
													record['数値_物品購入合計']['value'] = item;
													item = 0;
												} else if (records[i]['文字列_工番合計10']['value'] == no	+ "外注") {
													item = Number(record['数値_外注費合計']['value']);
													item += Number(records[i]['数値_工番合計10']['value']);
													record['数値_外注費合計']['value'] = item;
													item = 0;
												}
												
												item = 0;

											}

											return event;

										});

					});

})();