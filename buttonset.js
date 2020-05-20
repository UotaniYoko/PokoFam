/*
使用アプリ：※未使用※
概要：ボタンを設置し、押下したらテーブルが初期化される
*/
(function() {
  "use strict";
  
    //イベント（レコード編集画面、レコード追加画面を開いた時）
    kintone.events.on([ 'app.record.edit.show', 'app.record.create.show' ], function(event) {
        // 任意のスペースフィールドにボタンを設置
        var mySpaceFieldButton = document.createElement('button');
        mySpaceFieldButton.id = 'my_space_field_button';
        mySpaceFieldButton.innerText = 'テーブル初期化';
        //ボタンクリック処理
        mySpaceFieldButton.onclick = function () {
        	//レコード情報取得
        	var rec = kintone.app.record.get();
        	var record = rec.record;
        	//工数テーブルの初期化
        	record.工数テーブル.value = [];    		
        	//レコード情報登録
        	kintone.app.record.set(rec);             
        };
        //ボタンの設定
        kintone.app.record.getSpaceElement('button').appendChild(mySpaceFieldButton);
    });
})();