/*
使用アプリ：原価管理
概要：判定値を基にフィールドの背景色を変えます
*/
(function() {
	"use strict";

	//イベント処理※変えない(レイアウト色を変えるなどのフォント処理は「app.record.detail.show」イベントしか対応しない)
	kintone.events.on([ 'app.record.detail.show' ], function(event) {

		//レコード退避処理
		var record = event.record;
		//背景色を変更したいフィールド要素の退避処理↓
		var elUrgent = kintone.app.record.getFieldElement('文字列_受注金額比較1');
		var char2 = kintone.app.record.getFieldElement('文字列_受注金額比較2');
		var char3 = kintone.app.record.getFieldElement('文字列_受注金額比較3');
		var char4 = kintone.app.record.getFieldElement('文字列_受注金額比較4');
		var elUrgent2 = kintone.app.record.getFieldElement('文字列_売上金額比較1');
		var char5 = kintone.app.record.getFieldElement('文字列_売上金額比較2');
		var char6 = kintone.app.record.getFieldElement('文字列_売上金額比較3');
		var char7 = kintone.app.record.getFieldElement('文字列_売上金額比較4');
		var elUrgent3 = kintone.app.record.getFieldElement('文字列_確定判定');
		//背景色を変更したいフィールド要素の退避処理↑

		//判定値の用の変数　初期化します
		var num1 = 0;

		// 文字列_受注金額比較1の判定
		num1 = Number(record['数値_受注金額比較1']['value']);
		if (num1 > 60) {
			//判定値が60を超えたら背景色を「#228B22」緑
			elUrgent.style.backgroundColor = '#228B22';
		} else if (num1 > 40) {
			//判定値が40を超えたら背景色を「#0000FF」青
			elUrgent.style.backgroundColor = '#0000FF';
		} else if (num1 > 20) {
			//判定値が20を超えたら背景色を「#FFFF00」黄
			elUrgent.style.backgroundColor = '#FFFF00';
		} else {
			//判定値が20を超えたら背景色を「#FF0000」赤
			elUrgent.style.backgroundColor = '#FF0000';
		}

		// 文字列_受注金額比較2の判定
		num1 = Number(record['数値_受注金額比較2']['value']);
		if (num1 > 60) {
			char2.style.backgroundColor = '#228B22';
		} else if (num1 > 40) {
			char2.style.backgroundColor = '#0000FF';
		} else if (num1 > 20) {
			char2.style.backgroundColor = '#FFFF00';
		} else {
			char2.style.backgroundColor = '#FF0000';
		}

		// 文字列_受注金額比較3の判定
		num1 = Number(record['数値_受注金額比較3']['value']);
		if (num1 > 60) {
			char3.style.backgroundColor = '#228B22';
		} else if (num1 > 40) {
			char3.style.backgroundColor = '#0000FF';
		} else if (num1 > 20) {
			char3.style.backgroundColor = '#FFFF00';
		} else {
			char3.style.backgroundColor = '#FF0000';
		}

		// 文字列_受注金額比較4の判定
		num1 = Number(record['数値_受注金額比較4']['value']);
		if (num1 > 60) {
			char4.style.backgroundColor = '#228B22';
		} else if (num1 > 40) {
			char4.style.backgroundColor = '#0000FF';
		} else if (num1 > 20) {
			char4.style.backgroundColor = '#FFFF00';
		} else {
			char4.style.backgroundColor = '#FF0000';
		}

		// 文字列_売上金額比較1の判定
		num1 = Number(record['数値_売上金額比較1']['value']);
		if (num1 > 60) {
			elUrgent2.style.backgroundColor = '#228B22';
		} else if (num1 > 40) {
			elUrgent2.style.backgroundColor = '#0000FF';
		} else if (num1 > 20) {
			elUrgent2.style.backgroundColor = '#FFFF00';
		} else {
			elUrgent2.style.backgroundColor = '#FF0000';
		}

		// 文字列_売上金額比較2の判定
		num1 = Number(record['数値_売上金額比較2']['value']);
		if (num1 > 60) {
			char5.style.backgroundColor = '#228B22';
		} else if (num1 > 40) {
			char5.style.backgroundColor = '#0000FF';
		} else if (num1 > 20) {
			char5.style.backgroundColor = '#FFFF00';
		} else {
			char5.style.backgroundColor = '#FF0000';
		}

		// 文字列_売上金額比較3の判定
		num1 = Number(record['数値_売上金額比較3']['value']);
		if (num1 > 60) {
			char6.style.backgroundColor = '#228B22';
		} else if (num1 > 40) {
			char6.style.backgroundColor = '#0000FF';
		} else if (num1 > 20) {
			char6.style.backgroundColor = '#FFFF00';
		} else {
			char6.style.backgroundColor = '#FF0000';
		}

		// 文字列_売上金額比較4の判定
		num1 = Number(record['数値_売上金額比較4']['value']);
		if (num1 > 60) {
			char7.style.backgroundColor = '#228B22';
		} else if (num1 > 40) {
			char7.style.backgroundColor = '#0000FF';
		} else if (num1 > 20) {
			char7.style.backgroundColor = '#FFFF00';
		} else {
			char7.style.backgroundColor = '#FF0000';
		}

		// 文字列_確定判定
		num1 = record['文字列_確定判定']['value'];
		if (num1 == 'A') {
			elUrgent3.style.backgroundColor = '#228B22';
		} else if (num1 == 'B') {
			elUrgent3.style.backgroundColor = '#0000FF';
		} else if (num1 == 'C') {
			elUrgent3.style.backgroundColor = '#FFFF00';
		} else if (num1 == 'D') {
			elUrgent3.style.backgroundColor = '#FF0000';
		}
		else{}

		return event;

	});

})();