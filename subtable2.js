(function() {
	'use strict';

	// 見積書：注文書アプリの詳細画面から売上管理：購買申請アプリへ

	var salesDao = {};

	kintone.events
			.on(
					'app.record.detail.show',
					function(e) {
						// 「見積書：注文書」のレコード情報取得
						var record = e.record;
						// 「売上管理：購買申請」アプリのアプリの番号
						salesDao.APP_ID = 320;

						// レコードコピーボタン要素作成
						// ***** 動的にボタンを生成しているが省略 *****
						var btnCopy = document.createElement('button');
						btnCopy.id = 'btn_1';
						btnCopy.innerHTML = '購買申請ボタン';

						// ボタンをクリックしたときのイベント
						btnCopy.onclick = function() {
							// 売上管理：購買申請のデータ登録を実行する
							salesDao.insert(record);
						};
						// ヘッダースペースにボタン要素を付加
						kintone.app.record.getHeaderMenuSpaceElement()
								.appendChild(btnCopy);

						// 売上管理：購買申請アプリに1行追加。
						salesDao.insert = function(recordInf) {
//							// 見積書明細：注文書の各項目を配列に取得
//							var productID = []; // 商品コード
//							var productName = []; // 商品名
//							var unitPrice = []; // 単価
//							var quantity = []; // 数量

							// サブテーブル(見積書明細：注文書)オブジェクトを取得
							var tableRecords = record.商品.value;
							// サブテーブル(見積書明細：注文書)の内容を配列に格納
							var subtable = [];
							for ( var i = 0; i < tableRecords.length; i++) {
								subtable
										.push({
											value : {
												"商品名" : {
													value : tableRecords[i].value['商品名'].value
												},
												"品番" : {
													value : tableRecords[i].value['品番'].value
												},
												"単価" : {
													value : tableRecords[i].value['単価'].value
												},
												"数量" : {
													value : tableRecords[i].value['数量'].value
												},
												"金額" : {
													value : tableRecords[i].value['金額'].value
												},
												"備考" : {
													value : tableRecords[i].value['備考'].value
												},
											}
										});
							}
							
							//レコード確認番号を取得します(現在年月時刻)					
						    var now = new Date();
						    var year = now.getFullYear();
						    var mon = ("0"+(now.getMonth() + 1)).slice(-2);
						    var day =  ("0"+now.getDate()).slice(-2);
						    var hours = ("0"+now.getHours()).slice(-2);
						    var minutes = ("0"+now.getMinutes()).slice(-2);
						    var seconds = ("0"+now.getSeconds()).slice(-2);
						    var checkrecord = year + mon + day + hours + minutes + seconds;												
							
							var params = {
								"app" : salesDao.APP_ID,
								// 見積書の鑑
								"record" : {
									"ルックアップ" : {
										"value" : recordInf['ルックアップ']['value']
									},
									"ユーザー選択" : {
										"value" : recordInf['ユーザー選択']['value']
									},
									"ルックアップ_0" : {
										"value" : recordInf['ルックアップ_0']['value']
									},
									"計算_0" : {
										"value" : recordInf['計算_0']['value']
									},
									"レコード確認番号" : {
										"value" : checkrecord
									},
									"商品" : {
										"value" : subtable
									// subtableはサブテーブルの配列（これの作り方を1項目で書いてます）
									}
								},
							};

							// Kintone REST API リクエスト
							kintone
									.api(kintone.api.url('/k/v1/record', true),
											'POST', params)
									.then(
											function(resp) {
												// 成功時、対応する「売上管理：購買申請アプリ」画面を開く
												if (window
														.confirm('商品明細を購買申請アプリに移行しました。\n購買申請アプリをご確認ください。\nレコード確認番号「' + checkrecord + '」')) {
													salesDao.showDetail();
												}
											},
											function(resp) {
												// 失敗時
												if (resp.message !== undefined) {
													alert(resp.message);
												} else {
													alert('売上管理の登録に失敗しました(2)。');
												}
											});
						};

						// 指定された売上管理：購買申請アプリの詳細画面を開く
						// salesDao.showDetail = function() {
						// alert('この機能は現在実装されていません。売上管理には登録されています。');
						// };
					});

})();