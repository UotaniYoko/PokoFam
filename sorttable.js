/*
使用アプリ：売上管理アプリ
概要：サマリー売上詳細テーブルをソートします(売上日の降順)
*/
(function() {
"use strict";

//↓※変えない
/**
 * テーブルのソート
 * 
 * @param Array table value(ex. event.record.Table.value)
 * @param string orderBy フィールドコード(price)
 * @param boolean isDesc ASC(false) or DESC(true)
 */
var sortTable = function(table, orderBy, isDesc) {
    table.sort(function(a, b) {
        var fieldType = a.value[orderBy].type;
        var v1 = a.value[orderBy].value;
        var v2 = b.value[orderBy].value;

        // 数値と日時は変換してから比較
        switch (fieldType) {
            case 'RECORD_NUMBER':
            case 'NUMBER':
                var v1 = parseFloat(v1);
                var v2 = parseFloat(v2);
                break;
            case 'DATE':
            case 'TIME':
            case 'DATETIME':
            case 'CREATED_TIME':
            case 'UPDATED_TIME':
                var v1 = (new Date(v1)).getTime();
                var v2 = (new Date(v2)).getTime();
                break;
        };

        var pos = isDesc ? -1 : 1;
        if (v1 > v2) {
            return pos;
        }
        if (v1 < v2) {
            return pos * -1;
        }
    });
};
//↑※変えない

//※※変える※※
//ソート処理を実行したいイベントに変える
//レコード編集画面実行時、レコード追加画面実行時
kintone.events.on(["app.record.edit.submit", "app.record.create.submit"], function(event) {
	//※※変える※※
	//ソートを行いたいテーブル名に
    var table = event.record.サマリー売上詳細.value;
    
    //※変えない
    sortTable(table, 'contact_date', true);
    return event;
});
})();