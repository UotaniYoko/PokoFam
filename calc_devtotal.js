/*
使用アプリ：原価管理
概要：開発工数アプリのレコードを条件抽出し時間合計を算出します
*/
(function() {
	"use strict";

	kintone.events
			.on(
					//イベント処理
					//※変えない
					[ 'app.record.create.submit', 'app.record.edit.submit' ],
					function(event) {

						//レコード退避処理
						var record = event.record;
						//原価管理の工番退避処理
						var reckoban = record['ルックアップ_工番'].value;

						// 開発工数アプリのID
						var TappId = 340;

						//レコード一括取得処理
						function fetchRecords(appId, koban, opt_offset,
								opt_limit, opt_records) {
							
							//※※レコードの取得は上限が「500件」なので、抽出条件が必要です(query)※※
							//※変えない
							var offset = opt_offset || 0;
							//※変えない
							var limit = opt_limit || 500;
							//※変えない
							var allRecords = opt_records || [];
							var params = {
								app : appId,
								//※※変える※※
								//レコード抽出条件「query」開発アプリの「文字列_工番1」に原価管理の工番が含まれていたらレコードを抽出します
								query : ' 文字列_工番1 like "' + koban
										+ '" or 文字列_工番2 like "' + koban
										+ '" or 文字列_工番3 like "' + koban
										+ '" or 文字列_工番4 like "' + koban
										+ '" or 文字列_工番5 like "' + koban
										+ '"  order by レコード番号 asc limit '
										+ limit + ' offset ' + offset
							};

							//※変えない
							return kintone
									.api('/k/v1/records', 'GET', params)
									.then(
											function(resp) {
												allRecords = allRecords
														.concat(resp.records);
												if (resp.records.length === limit) {
													return fetchRecords(appId,
															offset + limit,
															limit, allRecords);
												}

												return allRecords;
											});
						}
						;

						fetchRecords(TappId, reckoban)
								.then(
										function(records) {
											
											// 開発合計合計フィールドを初期化
											record['数値_開発工数合計'].value = 0;
											// 原価管理アプリの交番を取得
											var no = record['文字列_工番_現場経費'].value;

											// 物品・外注費合計
											// 合計を入れる変数
											var item = 0;

											// /購買報告書アプリのレコード数分処理を繰り返す
											for ( var i = 0; i < records.length; i++) {

												// 工番合計1フィールドのキーチェック
												// 物販キーチェック
												if (records[i]['文字列_工番1']['value'] == no) {
													// 開発工数のキー＝原価管理アプリの場合
													item = Number(record['数値_開発工数合計']['value']);
													item += Number(records[i]['数値_時間1']['value']);
													// 金額加算
													record['数値_開発工数合計']['value'] = item;
													item = 0;
												}

												// 以下工番合計2～5フィールド
												if (records[i]['文字列_工番2']['value'] == no) {
													// 開発工数のキー＝原価管理アプリの場合
													item = Number(record['数値_開発工数合計']['value']);
													item += Number(records[i]['数値_時間2']['value']);
													// 金額加算
													record['数値_開発工数合計']['value'] = item;
													item = 0;
												}
												if (records[i]['文字列_工番3']['value'] == no) {
													// 開発工数のキー＝原価管理アプリの場合
													item = Number(record['数値_開発工数合計']['value']);
													item += Number(records[i]['数値_時間3']['value']);
													// 金額加算
													record['数値_開発工数合計']['value'] = item;
													item = 0;
												}
												if (records[i]['文字列_工番4']['value'] == no) {
													// 開発工数のキー＝原価管理アプリの場合
													item = Number(record['数値_開発工数合計']['value']);
													item += Number(records[i]['数値_時間4']['value']);
													// 金額加算
													record['数値_開発工数合計']['value'] = item;
													item = 0;
												}
												if (records[i]['文字列_工番5']['value'] == no) {
													// 開発工数のキー＝原価管理アプリの場合
													item = Number(record['数値_開発工数合計']['value']);
													item += Number(records[i]['数値_時間5']['value']);
													// 金額加算
													record['数値_開発工数合計']['value'] = item;
													item = 0;
												}											 
											}
											
																				
											//レコード更新処理↓
											var url = 'https://keisokunet.s.cybozu.com/k/v1/record.json';
											var body = {
											    "app": kintone.app.getId(),
											    "id": kintone.app.record.getId(),
											    "record": {
											    	//更新したいフィールドを定義します
											        "数値_開発工数合計": {
											            "value": record['数値_開発工数合計']['value']
											        }											
											    },
											    // CSRF TOKEN: kintone上からAPI(POST, PUT, DELETE)を実行する場合に設定する必要あり
											    "__REQUEST_TOKEN__": kintone.getRequestToken()
											};

											var xhr = new XMLHttpRequest();
											xhr.open('PUT', url);
											xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
											xhr.setRequestHeader('Content-Type', 'application/json');
											xhr.onload = function() {
											    if (xhr.status === 200) {
											        // success
											        console.log(JSON.parse(xhr.responseText));
											    } else {
											        // error
											        console.log(JSON.parse(xhr.responseText));
											    }
											};
											xhr.send(JSON.stringify(body));
											//レコード更新処理↑																																

										});

						return event;

					});

})();