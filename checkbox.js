/*
使用アプリ：治具管理アプリ
概要：表示チェックボックスがチェック状態の時は廃版写真添付ファイルを表示、非チェック状態の時は非表示にする
*/
(function() {
	"use strict";
	
	//イベント（表示チェックボックスの値が変わった時、レコード詳細画面・レコード追加画面・レコード編集画面を開いた時）
	kintone.events.on(['app.record.create.change.チェックボックス', 'app.record.edit.change.チェックボックス', 'app.record.detail.show', 'app.record.create.show', 'app.record.edit.show'], function(event) {

		//レコード情報取得
		var record = event.record;
		//チェックボックスの値を取得
		var Cybozu = record['チェックボックス']['value'];
		//デフォルトで廃版写真添付ファイルは非表示にする
		kintone.app.record.setFieldShown('添付ファイル_廃盤写真', false);

		//チェックボックスの値が表示の場合
		if (Cybozu.indexOf('表示') != -1) {
			//廃版写真添付ファイルを表示させる
			kintone.app.record.setFieldShown('添付ファイル_廃盤写真', true);

		}
		return event;
	});
})();