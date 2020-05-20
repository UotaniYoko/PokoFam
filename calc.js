/*
使用アプリ：原価管理
概要：原価金額の計算・判定と購買申請アプリのレコードを取得し現場経費(購買申請書)の合計金額計算を行います
*/
(function() {
	"use strict";

	kintone.events
			.on(
					[ 'app.record.create.submit', 'app.record.edit.submit' ],
					function(event) {

						var record = event.record;
						var num1 = 0;
						var num2 = 0;
						var num3 = 0;

						// 現場利益(粗利/C)の計算
						if (record['数値_売上金額']['value'] !== ''
								|| record['数値_売上金額']['value'] !== undefined) {
							num1 = Number(record['数値_粗利']['value']);
							num2 = Number(record['数値_売上金額']['value']);
							
							var work =  Math.round(num1 / num2 * 100);
							if(isNaN(work)){
								record['数値_現場利益']['value'] = '0';
							}
							else{
								record['数値_現場利益']['value'] = work;
							}
						}

						// 数値_受注金額比較1の計算
						if (record['数値_B労務費']['value'] !== ''
								|| record['数値_B労務費']['value'] !== undefined) {
							num1 = Number(record['数値_B労務費']['value']);
							num2 = Number(record['数値_社員人件費']['value']);
							num3 = Number(record['数値_外注費']['value']);
							
							var work =  Math.round((num1 - num2 - num3)	/ num1 * 100);
							if(isNaN(work)){
								record['数値_受注金額比較1']['value'] = '0';
							}
							else{
								record['数値_受注金額比較1']['value'] = work;
							}							
						}
						num1 = Number(record['数値_受注金額比較1']['value']);
						if (num1 > 60) {
							record['文字列_受注金額比較1']['value'] = 'A';
						} else if (num1 > 40) {
							record['文字列_受注金額比較1']['value'] = 'B';
						} else if (num1 > 20) {
							record['文字列_受注金額比較1']['value'] = 'C';
						} else {
							record['文字列_受注金額比較1']['value'] = 'D';
						}

						// 数値_受注金額比較2の計算
						if (record['数値_B直接経費']['value'] !== ''
								|| record['数値_B直接経費']['value'] !== undefined) {
							num1 = Number(record['数値_B直接経費']['value']);
							num2 = Number(record['数値_直接経費']['value']);
							
							var work =  Math.round((num1 - num2) / num1 * 100);
							if(isNaN(work)){
								record['数値_受注金額比較2']['value'] = '0';
							}
							else{
								record['数値_受注金額比較2']['value'] = work;
							}							
						}
						num1 = Number(record['数値_受注金額比較2']['value']);
						if (num1 > 60) {
							record['文字列_受注金額比較2']['value'] = 'A';
						} else if (num1 > 40) {
							record['文字列_受注金額比較2']['value'] = 'B';
						} else if (num1 > 20) {
							record['文字列_受注金額比較2']['value'] = 'C';
						} else {
							record['文字列_受注金額比較2']['value'] = 'D';
						}

						// 数値_受注金額比較3の計算
						if (record['数値_B機材費']['value'] !== ''
								|| record['数値_B機材費']['value'] !== undefined) {
							num1 = Number(record['数値_B機材費']['value']);
							num2 = Number(record['数値_機材費損料']['value']);
							
							var work =  Math.round((num1 - num2) / num1 * 100);
							if(isNaN(work)){
								record['数値_受注金額比較3']['value'] = '0';
							}
							else{
								record['数値_受注金額比較3']['value'] = work;
							}
						}
						num1 = Number(record['数値_受注金額比較3']['value']);
						if (num1 > 60) {
							record['文字列_受注金額比較3']['value'] = 'A';
						} else if (num1 > 40) {
							record['文字列_受注金額比較3']['value'] = 'B';
						} else if (num1 > 20) {
							record['文字列_受注金額比較3']['value'] = 'C';
						} else {
							record['文字列_受注金額比較3']['value'] = 'D';
						}

						// 数値_受注金額比較4の計算
						if (record['数値_B諸経費']['value'] !== ''
								|| record['数値_B諸経費']['value'] !== undefined) {
							num1 = Number(record['数値_B諸経費']['value']);
							num2 = Number(record['数値_機材費']['value']);
							
							var work =  Math.round((num1 - num2) / num1 * 100);
							if(isNaN(work)){
								record['数値_受注金額比較4']['value'] = '0';
							}
							else{
								record['数値_受注金額比較4']['value'] = work;
							}							
						}
						num1 = Number(record['数値_受注金額比較4']['value']);
						if (num1 > 60) {
							record['文字列_受注金額比較4']['value'] = 'A';
						} else if (num1 > 40) {
							record['文字列_受注金額比較4']['value'] = 'B';
						} else if (num1 > 20) {
							record['文字列_受注金額比較4']['value'] = 'C';
						} else {
							record['文字列_受注金額比較4']['value'] = 'D';
						}

						// 数値_受注金額比較5の計算
						if (record['数値_受注金額']['value'] !== ''
								|| record['数値_受注金額']['value'] !== undefined) {
							num1 = Number(record['数値_受注金額']['value']);
							num2 = Number(record['数値_原価合計']['value']);
							
							var work =  Math.round((num1 - num2) / num1 * 100);
							if(isNaN(work)){
								record['数値_受注金額比較5']['value'] = '0';
							}
							else{
								record['数値_受注金額比較5']['value'] = work;
							}																																									
						}

						// 数値_売上金額比較1の計算
						if (record['数値_C労務費']['value'] !== ''
								|| record['数値_C労務費']['value'] !== undefined) {
							num1 = Number(record['数値_C労務費']['value']);
							num2 = Number(record['数値_社員人件費']['value']);
							num3 = Number(record['数値_外注費']['value']);
							
							var work =  Math.round((num1 - num2 - num3) / num1 * 100);
							if(isNaN(work)){
								record['数値_売上金額比較1']['value'] = '0';
							}
							else{
								record['数値_売上金額比較1']['value'] = work;
							}																					
						}
						num1 = Number(record['数値_売上金額比較1']['value']);
						if (num1 > 60) {
							record['文字列_売上金額比較1']['value'] = 'A';
						} else if (num1 > 40) {
							record['文字列_売上金額比較1']['value'] = 'B';
						} else if (num1 > 20) {
							record['文字列_売上金額比較1']['value'] = 'C';
						} else {
							record['文字列_売上金額比較1']['value'] = 'D';
						}

						// 数値_売上金額比較2の計算
						if (record['数値_C直接経費']['value'] !== ''
								|| record['数値_C直接経費']['value'] !== undefined) {
							num1 = Number(record['数値_C直接経費']['value']);
							num2 = Number(record['数値_直接経費']['value']);
							
							var work =  Math.round((num1 - num2) / num1 * 100);
							if(isNaN(work)){
								record['数値_売上金額比較2']['value'] = '0';
							}
							else{
								record['数値_売上金額比較2']['value'] = work;
							}							
						}
						num1 = Number(record['数値_売上金額比較2']['value']);
						if (num1 > 60) {
							record['文字列_売上金額比較2']['value'] = 'A';
						} else if (num1 > 40) {
							record['文字列_売上金額比較2']['value'] = 'B';
						} else if (num1 > 20) {
							record['文字列_売上金額比較2']['value'] = 'C';
						} else {
							record['文字列_売上金額比較2']['value'] = 'D';
						}

						// 数値_売上金額比較3の計算
						if (record['数値_C機材費']['value'] !== ''
								|| record['数値_C機材費']['value'] !== undefined) {
							num1 = Number(record['数値_C機材費']['value']);
							num2 = Number(record['数値_機材費損料']['value']);
							
							var work =  Math.round((num1 - num2) / num1 * 100);
							if(isNaN(work)){
								record['数値_売上金額比較3']['value'] = '0';
							}
							else{
								record['数値_売上金額比較3']['value'] = work;
							}
						}
						num1 = Number(record['数値_売上金額比較3']['value']);
						if (num1 > 60) {
							record['文字列_売上金額比較3']['value'] = 'A';
						} else if (num1 > 40) {
							record['文字列_売上金額比較3']['value'] = 'B';
						} else if (num1 > 20) {
							record['文字列_売上金額比較3']['value'] = 'C';
						} else {
							record['文字列_売上金額比較3']['value'] = 'D';
						}

						// 数値_売上金額比較4の計算
						if (record['数値_C諸経費']['value'] !== ''
								|| record['数値_C諸経費']['value'] !== undefined) {
							num1 = Number(record['数値_C諸経費']['value']);
							num2 = Number(record['数値_機材費']['value']);
							
							var work =  Math.round((num1 - num2) / num1 * 100);
							if(isNaN(work)){
								record['数値_売上金額比較4']['value'] = '0';
							}
							else{
								record['数値_売上金額比較4']['value'] = work;
							}
						}
						num1 = Number(record['数値_売上金額比較4']['value']);
						if (num1 > 60) {
							record['文字列_売上金額比較4']['value'] = 'A';
						} else if (num1 > 40) {
							record['文字列_売上金額比較4']['value'] = 'B';
						} else if (num1 > 20) {
							record['文字列_売上金額比較4']['value'] = 'C';
						} else {
							record['文字列_売上金額比較4']['value'] = 'D';
						}

						// 数値_売上金額比較5の計算
						if (record['数値_売上金額']['value'] !== ''
								|| record['数値_売上金額']['value'] !== undefined) {
							num1 = Number(record['数値_売上金額']['value']);
							num2 = Number(record['数値_原価合計']['value']);
							
							var work =  Math.round((num1 - num2) / num1 * 100);
							if(isNaN(work)){
								record['数値_売上金額比較5']['value'] = '0';
							}
							else{
								record['数値_売上金額比較5']['value'] = work;
							}
						}

						// 確定判定
						if (record['数値_現場利益']['value'] !== ''
								|| record['数値_現場利益']['value'] !== undefined) {
							num1 = Number(record['数値_現場利益']['value']);
							if (num1 > 60) {
								record['文字列_確定判定']['value'] = 'A';
							} else if (num1 > 40) {
								record['文字列_確定判定']['value'] = 'B';
							} else if (num1 > 20) {
								record['文字列_確定判定']['value'] = 'C';
							} else {
								record['文字列_確定判定']['value'] = 'D';
							}
						}

						var reckoban = record['ルックアップ_工番'].value;

						// 購買報告書アプリのID
						var TappId = 320;

						function fetchRecords(appId, koban, opt_offset,
								opt_limit, opt_records) {
							


							var offset = opt_offset || 0;
							var limit = opt_limit || 500;
							var allRecords = opt_records || [];
							var params = {
								app : appId,
								query : ' 文字列_工番合計1 like "' + koban
										+ '" or 文字列_工番合計2 like "' + koban
										+ '" or 文字列_工番合計3 like "' + koban
										+ '" or 文字列_工番合計4 like "' + koban
										+ '" or 文字列_工番合計5 like "' + koban
										+ '" or 文字列_工番合計6 like "' + koban
										+ '" or 文字列_工番合計7 like "' + koban
										+ '" or 文字列_工番合計8 like "' + koban
										+ '" or 文字列_工番合計9 like "' + koban
										+ '" or 文字列_工番合計10 like "' + koban
										+ '"  order by レコード番号 asc limit '
										+ limit + ' offset ' + offset
							};

							var str = ' 文字列_工番合計1 like "' + koban
									+ '" or 文字列_工番合計2 like "' + koban
									+ '" or 文字列_工番合計3 like "' + koban
									+ '" or 文字列_工番合計4 like "' + koban
									+ '" or 文字列_工番合計5 like "' + koban
									+ '" or 文字列_工番合計6 like "' + koban
									+ '" or 文字列_工番合計7 like "' + koban
									+ '" or 文字列_工番合計8 like "' + koban
									+ '" or 文字列_工番合計9 like "' + koban
									+ '" or 文字列_工番合計10 like "' + koban
									+ '"  order by レコード番号 asc limit ' + limit
									+ ' offset ' + offset;

							console.log(str);

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
											
											  



											// 物品購入合計フィールドを初期化
											record['数値_物品購入合計'].value = 0;
											// 外注購入合計フィールドを初期化
											record['数値_外注費合計'].value = 0;
											// 原価管理アプリの交番を取得
											var no = record['文字列_工番_現場経費'].value;

											// 物品・外注費合計
											// 合計を入れる変数
											var item = 0;

											// /購買報告書アプリのレコード数分処理を繰り返す
											for ( var i = 0; i < records.length; i++) {

												// 工番合計1フィールドのキーチェック
												// 物販キーチェック
												if (records[i]['文字列_工番合計1']['value'] == no
														+ "物販") {
													// 購買報告書のキー＝原価管理アプリの場合
													item = Number(record['数値_物品購入合計']['value']);
													item += Number(records[i]['数値_工番合計1']['value']);
													// 金額加算
													record['数値_物品購入合計']['value'] = item;
													item = 0;
													// 外注キーチェック
												} else if (records[i]['文字列_工番合計1']['value'] == no
														+ "外注") {
													// 購買報告書のキー＝原価管理アプリの場合
													item = Number(record['数値_外注費合計']['value']);
													item += Number(records[i]['数値_工番合計1']['value']);
													// 金額加算
													record['数値_外注費合計']['value'] = item;
													item = 0;
												}

												// 以下工番合計2～8フィールド

												// 2
												if (records[i]['文字列_工番合計2']['value'] == no
														+ "物販") {
													item = Number(record['数値_物品購入合計']['value']);
													item += Number(records[i]['数値_工番合計2']['value']);
													record['数値_物品購入合計']['value'] = item;
													item = 0;
												} else if (records[i]['文字列_工番合計2']['value'] == no
														+ "外注") {
													item = Number(record['数値_外注費合計']['value']);
													item += Number(records[i]['数値_工番合計2']['value']);
													record['数値_外注費合計']['value'] = item;
													item = 0;
												}

												

												 

												// 3
												if (records[i]['文字列_工番合計3']['value'] == no
														+ "物販") {
													item = Number(record['数値_物品購入合計']['value']);
													item += Number(records[i]['数値_工番合計3']['value']);

													record['数値_物品購入合計']['value'] = item;

													item = 0;
												} else if (records[i]['文字列_工番合計3']['value'] == no
														+ "外注") {
													item = Number(record['数値_外注費合計']['value']);
													item += Number(records[i]['数値_工番合計3']['value']);
													record['数値_外注費合計']['value'] = item;
													item = 0;
												}

												// 4
												if (records[i]['文字列_工番合計4']['value'] == no
														+ "物販") {
													item = Number(record['数値_物品購入合計']['value']);
													item += Number(records[i]['数値_工番合計4']['value']);
													record['数値_物品購入合計']['value'] = item;
													item = 0;
												} else if (records[i]['文字列_工番合計4']['value'] == no
														+ "外注") {
													item = Number(record['数値_外注費合計']['value']);
													item += Number(records[i]['数値_工番合計4']['value']);
													record['数値_外注費合計']['value'] = item;
													item = 0;
												}

												// 5
												if (records[i]['文字列_工番合計5']['value'] == no
														+ "物販") {
													item = Number(record['数値_物品購入合計']['value']);
													item += Number(records[i]['数値_工番合計5']['value']);
													record['数値_物品購入合計']['value'] = item;
													item = 0;
												} else if (records[i]['文字列_工番合計5']['value'] == no
														+ "外注") {
													item = Number(record['数値_外注費合計']['value']);
													item += Number(records[i]['数値_工番合計5']['value']);
													record['数値_外注費合計']['value'] = item;
													item = 0;
												}

												// 6
												if (records[i]['文字列_工番合計6']['value'] == no
														+ "物販") {
													item = Number(record['数値_物品購入合計']['value']);
													item += Number(records[i]['数値_工番合計6']['value']);
													record['数値_物品購入合計']['value'] = item;
													item = 0;
												} else if (records[i]['文字列_工番合計6']['value'] == no
														+ "外注") {
													item = Number(record['数値_外注費合計']['value']);
													item += Number(records[i]['数値_工番合計6']['value']);
													record['数値_外注費合計']['value'] = item;
													item = 0;
												}

												// 7
												if (records[i]['文字列_工番合計7']['value'] == no
														+ "物販") {
													item = Number(record['数値_物品購入合計']['value']);
													item += Number(records[i]['数値_工番合計7']['value']);
													record['数値_物品購入合計']['value'] = item;
													item = 0;
												} else if (records[i]['文字列_工番合計7']['value'] == no
														+ "外注") {
													item = Number(record['数値_外注費合計']['value']);
													item += Number(records[i]['数値_工番合計7']['value']);
													record['数値_外注費合計']['value'] = item;
													item = 0;
												}

												// 8
												if (records[i]['文字列_工番合計8']['value'] == no
														+ "物販") {
													item = Number(record['数値_物品購入合計']['value']);
													item += Number(records[i]['数値_工番合計8']['value']);
													record['数値_物品購入合計']['value'] = item;
													item = 0;
												} else if (records[i]['文字列_工番合計8']['value'] == no
														+ "外注") {
													item = Number(record['数値_外注費合計']['value']);
													item += Number(records[i]['数値_工番合計8']['value']);
													record['数値_外注費合計']['value'] = item;
													item = 0;
												}

												// 9
												if (records[i]['文字列_工番合計9']['value'] == no
														+ "物販") {
													item = Number(record['数値_物品購入合計']['value']);
													item += Number(records[i]['数値_工番合計9']['value']);
													record['数値_物品購入合計']['value'] = item;
													item = 0;
												} else if (records[i]['文字列_工番合計9']['value'] == no
														+ "外注") {
													item = Number(record['数値_外注費合計']['value']);
													item += Number(records[i]['数値_工番合計9']['value']);
													record['数値_外注費合計']['value'] = item;
													item = 0;
												}

												// 10
												if (records[i]['文字列_工番合計10']['value'] == no
														+ "物販") {
													item = Number(record['数値_物品購入合計']['value']);
													item += Number(records[i]['数値_工番合計10']['value']);
													record['数値_物品購入合計']['value'] = item;
													item = 0;
												} else if (records[i]['文字列_工番合計10']['value'] == no
														+ "外注") {
													item = Number(record['数値_外注費合計']['value']);
													item += Number(records[i]['数値_工番合計10']['value']);
													record['数値_外注費合計']['value'] = item;
													item = 0;
												}

												item = 0;

											}
											
																				
											var url = 'https://keisokunet.s.cybozu.com/k/v1/record.json';
											var body = {
											    "app": kintone.app.getId(),
											    "id": kintone.app.record.getId(),
											    "record": {
											        "数値_物品購入合計": {
											            "value": record['数値_物品購入合計']['value']
											        },
											        "数値_外注費合計": {
											            "value": record['数値_外注費合計']['value']
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
																					

										});

						return event;

					});

})();