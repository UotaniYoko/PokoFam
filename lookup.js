/*
使用アプリ：購買申請書アプリ
概要：稟議書アプリからルックアップでテーブルを持ってきます
注意事項：
1.参照元と参照先アプリのテーブルレイアウトを同一にする(テーブル名、フィールドコード、項目数全て)
2.参照先アプリにレコードID(数値フィールド)を定義し、フィールドコード名を「レコード」にする
3.↑で定義したレコードIDの位置を1番下に配置する
4.参照先のルックアップ設定に「レコード」を設定する
5.lookup.jsソースの変えるべき所は変えて定義する
*/
(function() {
	'use strict';
	
	kintone.events
			.on(
					//※変えない
					[ 'app.record.create.change.レコード',	'app.record.edit.change.レコード' ],
					function(event) {

						//※※変える※※
						//参照先のルックアップのフィールドコードに変える
						var targetAppId = kintone.app.getLookupTargetAppId('Lookup');
						//※変えない
						var targetRecordId = event.record['レコード'].value;

						// ルックアップクリアをしたらテーブルを空にする処理
						//※変えない
						if (!targetRecordId) {
							
							//※※変える※※
							//参照したいテーブル名に変える
							event.record['商品'].value = [];
							return event;
						}

						//※変えない
						var body = {
							app : targetAppId,
							id : targetRecordId,
						};
						kintone
								.api(
										//※変えない
										kintone.api.url('/k/v1/record', true),
										'GET',
										body,
										function(resp) {

											//※※変える※※
											//参照したいテーブル名に変える											
											event.record['商品'].value = resp.record['商品'].value;
											
											
											//ルックアップしたテーブルを編集不可にしたい場合は↓のコメントを外す
											/*
											 * // サブテーブルを編集不可にする場合
											 * event.record['商品'].value.forEach(function(obj) {
											 * Object.keys(obj.value).forEach(function(params) {
											 * obj.value[params].disabled =
											 * true; }); });
											 */

											//※変えない
											kintone.app.record.set(event);
											//※変えない
										}, function(err) {
											//※変えない
											alert('REST APIでエラーが発生しました');
										});

						//ルックアップ以外にも参照元から持ってきたいデータがあったら定義します↓
/*						var record = event.record;						
						record['文字列_発注先']['value'] = record['Lookup']['value'];*/
						//↑

					});
})();