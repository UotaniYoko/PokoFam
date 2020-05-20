/*
 * 条件書式の文字装飾のサンプルプログラム
 * Copyright (c) 2013 Cybozu
 *
 * Licensed under the MIT License
 */
(function() {
	"use strict";

	var now = new Date();
	var year = now.getFullYear();
	var mon = ("0" + (now.getMonth() + 1)).slice(-2);
	var day = ("0" + now.getDate()).slice(-2);
	var nowdate = year + mon + day;

	// レコード一覧の表示時にフィールド値の条件に応じて、文字色、フィールドの背景色を変更する
	kintone.events.on('app.record.index.show', function(event) {
		var bgColor = '#F22C5A';
		// 状況(ステータス)
		var elStatus = kintone.app.getFieldElements('ドロップダウン_状況');
		// 提出期日
		var elUrgent = kintone.app.getFieldElements('日付_提出期日');

		for ( var i = 0; i < elStatus.length; i++) {
			var record = event.records[i];
			// elStatus[i].style.backgroundColor = bgColor;

			switch (record['ドロップダウン_状況']['value']) {
			case "出来高入力依頼":

				/*
				 * if (elUrgent[i]['value'] === "至急") { elUrgent[i].style.color =
				 * '#ff0000'; elUrgent[i].style.fontWeight = 'bold'; }
				 */

				var teisyutsukigen = record['日付_提出期日']['value'].replace(/-/g,
						'');

				if (teisyutsukigen < nowdate) {
					elUrgent[i].style.backgroundColor = bgColor;
				}

				/*
				 * alert('teisyutsukigen:' + teisyutsukigen.replace(/-/g,'') +
				 * ';output:' + s);
				 */

				break;
			/*
			 * case "処理中": elStatus[i].style.color = '#0000ff'; break; default:
			 * elStatus[i].style.color = '#0000ff'; break;
			 */
			}

			/*
			 * if (record['Urgent']['value'][0] === "至急") {
			 * elUrgent[i].style.color = '#ff0000'; elUrgent[i].style.fontWeight =
			 * 'bold'; }
			 */
		}
	});

	// レコード詳細画面の表示時にフィールド値に応じて文字色を変更する
	kintone.events.on('app.record.detail.show', function(event) {
		var elUrgent = kintone.app.record.getFieldElement('日付_提出期日');
		var detailrecord = event.record;
		var detaildeadline = detailrecord['日付_提出期日']['value'].replace(/-/g,'');
		 	
		if (detailrecord['ドロップダウン_状況']['value'] == "出来高入力依頼" && detaildeadline < nowdate) {
			elUrgent.style.backgroundColor = '#F22C5A';
		}
	});

})();
