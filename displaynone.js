
/*
 * 回答の条件によって別フィールドの表示/非表示を切り替えるサンプルプログラム
 * Copyright (c) 2014 Cybozu
 * 
 * Licensed under the MIT License
 */
(function() {
    "use strict";

    //レコードの追加、編集、詳細画面で適用する
    var events = ['app.record.detail.show',
                  'app.record.create.show',
                  'app.record.edit.show'];

    kintone.events.on(events, function(event) {

/*        var record = event.record;*/
    	
		alert('出た(＾＾)');
    
        kintone.app.record.setFieldShown('文字列_テスト', false);

    });
})(); 
