(function() {
	'use strict';

	kintone.events
			.on(
					[ 'app.record.create.submit', 'app.record.edit.submit' ],
					function(event) {

						var record = event.record;

						var tableRecords = record['工数テーブル'].value;

						var flag = 0;

						var key = '';

						record['文字列_工番1']['value'] = "";
						record['数値_時間1']['value'] = 0;
						record['文字列_工番2']['value'] = "";
						record['数値_時間2']['value'] = 0;
						record['文字列_工番3']['value'] = "";
						record['数値_時間3']['value'] = 0;
						record['文字列_工番4']['value'] = "";
						record['数値_時間4']['value'] = 0;
						record['文字列_工番5']['value'] = "";
						record['数値_時間5']['value'] = 0;
						record['文字列_タイトル']['value'] = "";

						for ( var i = 0; i < Number(record['工数テーブル']['value'].length); i++) {

							if (tableRecords[i].value['ルックアップ_工番'].value !== undefined && tableRecords[i].value['ルックアップ_工番'].value !== '') {

								// 同一工番なし
								if (tableRecords[i].value['ルックアップ_工番'].value !== key) {

									// 1
									// 工番合計に値が入っていない
									if (flag == '0') {
										if (record['文字列_工番1']['value'] === ''
												|| record['文字列_工番1']['value'] === undefined) {
											record['文字列_工番1']['value'] = tableRecords[i].value['ルックアップ_工番'].value;
											record['数値_時間1']['value'] = tableRecords[i].value['数値_時間'].value;
											flag = 1;
										}
									}

									// 2
									// 工番合計に値が入っていない
									if (flag == '0') {
										if (record['文字列_工番2']['value'] === ''
												|| record['文字列_工番2']['value'] === undefined) {
											record['文字列_工番2']['value'] = tableRecords[i].value['ルックアップ_工番'].value;
											record['数値_時間2']['value'] = tableRecords[i].value['数値_時間'].value;
											flag = 1;
										}
									}

									// 3
									// 工番合計に値が入っていない
									if (flag == '0') {
										if (record['文字列_工番3']['value'] === ''
												|| record['文字列_工番3']['value'] === undefined) {
											record['文字列_工番3']['value'] = tableRecords[i].value['ルックアップ_工番'].value;
											record['数値_時間3']['value'] = tableRecords[i].value['数値_時間'].value;
											flag = 1;
										}
									}

									// 4
									// 工番合計に値が入っていない
									if (flag == '0') {
										if (record['文字列_工番4']['value'] === ''
												|| record['文字列_工番4']['value'] === undefined) {
											record['文字列_工番4']['value'] = tableRecords[i].value['ルックアップ_工番'].value;
											record['数値_時間4']['value'] = tableRecords[i].value['数値_時間'].value;
											flag = 1;
										}
									}

									// 5
									// 工番合計に値が入っていない
									if (flag == '0') {
										if (record['文字列_工番5']['value'] === ''
												|| record['文字列_工番5']['value'] === undefined) {
											record['文字列_工番5']['value'] = tableRecords[i].value['ルックアップ_工番'].value;
											record['数値_時間5']['value'] = tableRecords[i].value['数値_時間'].value;
											flag = 1;
										}
									}

									key = tableRecords[i].value['ルックアップ_工番'].value;
									
								}
								// テーブルに同じ工番がある
								else
								{
									alert('工数テーブルに同じ工数は入力できません。');
								}

								record['文字列_タイトル']['value'] += tableRecords[i].value['ルックアップ_工番'].value + ' ';

							}

							flag = 0;

						}
						
						record['数値_セットアップ金額']['value'] = 0;
						record['計算1']['value'] = 0;
						record['計算2']['value'] = 0;
						record['計算3']['value'] = 0;
						record['計算4']['value'] = 0;
						record['計算5']['value'] = 0;
						
						var user = kintone.getLoginUser();
						console.log(user);
						alert(JSON.stringify(user));
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
												
						
						

						return event;

					});
})();