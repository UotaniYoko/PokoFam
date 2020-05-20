/*
 * ���������̕��������̃T���v���v���O����
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

	// ���R�[�h�ꗗ�̕\�����Ƀt�B�[���h�l�̏����ɉ����āA�����F�A�t�B�[���h�̔w�i�F��ύX����
	kintone.events.on('app.record.index.show', function(event) {
		var bgColor = '#F22C5A';
		// ��(�X�e�[�^�X)
		var elStatus = kintone.app.getFieldElements('�h���b�v�_�E��_��');
		// ��o����
		var elUrgent = kintone.app.getFieldElements('���t_��o����');

		for ( var i = 0; i < elStatus.length; i++) {
			var record = event.records[i];
			// elStatus[i].style.backgroundColor = bgColor;

			switch (record['�h���b�v�_�E��_��']['value']) {
			case "�o�������͈˗�":

				/*
				 * if (elUrgent[i]['value'] === "���}") { elUrgent[i].style.color =
				 * '#ff0000'; elUrgent[i].style.fontWeight = 'bold'; }
				 */

				var teisyutsukigen = record['���t_��o����']['value'].replace(/-/g,
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
			 * case "������": elStatus[i].style.color = '#0000ff'; break; default:
			 * elStatus[i].style.color = '#0000ff'; break;
			 */
			}

			/*
			 * if (record['Urgent']['value'][0] === "���}") {
			 * elUrgent[i].style.color = '#ff0000'; elUrgent[i].style.fontWeight =
			 * 'bold'; }
			 */
		}
	});

	// ���R�[�h�ڍ׉�ʂ̕\�����Ƀt�B�[���h�l�ɉ����ĕ����F��ύX����
	kintone.events.on('app.record.detail.show', function(event) {
		var elUrgent = kintone.app.record.getFieldElement('���t_��o����');
		var detailrecord = event.record;
		var detaildeadline = detailrecord['���t_��o����']['value'].replace(/-/g,'');
		 	
		if (detailrecord['�h���b�v�_�E��_��']['value'] == "�o�������͈˗�" && detaildeadline < nowdate) {
			elUrgent.style.backgroundColor = '#F22C5A';
		}
	});

})();
