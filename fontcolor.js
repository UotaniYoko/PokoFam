/*
�g�p�A�v���F�����Ǘ�
�T�v�F����l����Ƀt�B�[���h�̔w�i�F��ς��܂�
*/
(function() {
	"use strict";

	//�C�x���g�������ς��Ȃ�(���C�A�E�g�F��ς���Ȃǂ̃t�H���g�����́uapp.record.detail.show�v�C�x���g�����Ή����Ȃ�)
	kintone.events.on([ 'app.record.detail.show' ], function(event) {

		//���R�[�h�ޔ�����
		var record = event.record;
		//�w�i�F��ύX�������t�B�[���h�v�f�̑ޔ�������
		var elUrgent = kintone.app.record.getFieldElement('������_�󒍋��z��r1');
		var char2 = kintone.app.record.getFieldElement('������_�󒍋��z��r2');
		var char3 = kintone.app.record.getFieldElement('������_�󒍋��z��r3');
		var char4 = kintone.app.record.getFieldElement('������_�󒍋��z��r4');
		var elUrgent2 = kintone.app.record.getFieldElement('������_������z��r1');
		var char5 = kintone.app.record.getFieldElement('������_������z��r2');
		var char6 = kintone.app.record.getFieldElement('������_������z��r3');
		var char7 = kintone.app.record.getFieldElement('������_������z��r4');
		var elUrgent3 = kintone.app.record.getFieldElement('������_�m�蔻��');
		//�w�i�F��ύX�������t�B�[���h�v�f�̑ޔ�������

		//����l�̗p�̕ϐ��@���������܂�
		var num1 = 0;

		// ������_�󒍋��z��r1�̔���
		num1 = Number(record['���l_�󒍋��z��r1']['value']);
		if (num1 > 60) {
			//����l��60�𒴂�����w�i�F���u#228B22�v��
			elUrgent.style.backgroundColor = '#228B22';
		} else if (num1 > 40) {
			//����l��40�𒴂�����w�i�F���u#0000FF�v��
			elUrgent.style.backgroundColor = '#0000FF';
		} else if (num1 > 20) {
			//����l��20�𒴂�����w�i�F���u#FFFF00�v��
			elUrgent.style.backgroundColor = '#FFFF00';
		} else {
			//����l��20�𒴂�����w�i�F���u#FF0000�v��
			elUrgent.style.backgroundColor = '#FF0000';
		}

		// ������_�󒍋��z��r2�̔���
		num1 = Number(record['���l_�󒍋��z��r2']['value']);
		if (num1 > 60) {
			char2.style.backgroundColor = '#228B22';
		} else if (num1 > 40) {
			char2.style.backgroundColor = '#0000FF';
		} else if (num1 > 20) {
			char2.style.backgroundColor = '#FFFF00';
		} else {
			char2.style.backgroundColor = '#FF0000';
		}

		// ������_�󒍋��z��r3�̔���
		num1 = Number(record['���l_�󒍋��z��r3']['value']);
		if (num1 > 60) {
			char3.style.backgroundColor = '#228B22';
		} else if (num1 > 40) {
			char3.style.backgroundColor = '#0000FF';
		} else if (num1 > 20) {
			char3.style.backgroundColor = '#FFFF00';
		} else {
			char3.style.backgroundColor = '#FF0000';
		}

		// ������_�󒍋��z��r4�̔���
		num1 = Number(record['���l_�󒍋��z��r4']['value']);
		if (num1 > 60) {
			char4.style.backgroundColor = '#228B22';
		} else if (num1 > 40) {
			char4.style.backgroundColor = '#0000FF';
		} else if (num1 > 20) {
			char4.style.backgroundColor = '#FFFF00';
		} else {
			char4.style.backgroundColor = '#FF0000';
		}

		// ������_������z��r1�̔���
		num1 = Number(record['���l_������z��r1']['value']);
		if (num1 > 60) {
			elUrgent2.style.backgroundColor = '#228B22';
		} else if (num1 > 40) {
			elUrgent2.style.backgroundColor = '#0000FF';
		} else if (num1 > 20) {
			elUrgent2.style.backgroundColor = '#FFFF00';
		} else {
			elUrgent2.style.backgroundColor = '#FF0000';
		}

		// ������_������z��r2�̔���
		num1 = Number(record['���l_������z��r2']['value']);
		if (num1 > 60) {
			char5.style.backgroundColor = '#228B22';
		} else if (num1 > 40) {
			char5.style.backgroundColor = '#0000FF';
		} else if (num1 > 20) {
			char5.style.backgroundColor = '#FFFF00';
		} else {
			char5.style.backgroundColor = '#FF0000';
		}

		// ������_������z��r3�̔���
		num1 = Number(record['���l_������z��r3']['value']);
		if (num1 > 60) {
			char6.style.backgroundColor = '#228B22';
		} else if (num1 > 40) {
			char6.style.backgroundColor = '#0000FF';
		} else if (num1 > 20) {
			char6.style.backgroundColor = '#FFFF00';
		} else {
			char6.style.backgroundColor = '#FF0000';
		}

		// ������_������z��r4�̔���
		num1 = Number(record['���l_������z��r4']['value']);
		if (num1 > 60) {
			char7.style.backgroundColor = '#228B22';
		} else if (num1 > 40) {
			char7.style.backgroundColor = '#0000FF';
		} else if (num1 > 20) {
			char7.style.backgroundColor = '#FFFF00';
		} else {
			char7.style.backgroundColor = '#FF0000';
		}

		// ������_�m�蔻��
		num1 = record['������_�m�蔻��']['value'];
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