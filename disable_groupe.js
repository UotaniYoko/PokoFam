(function() {
	"use strict";
	
	kintone.events.on(['app.record.edit.show', 'app.record.detail.show'], function(event) {

		var record = event.record;
		var Cybozu = record['������_�^�C�g��']['value'];
/*		kintone.app.record.setFieldShown('�`�F�b�N�{�b�N�X_0', false);*/
		kintone.app.record.setFieldShown('�O���[�v_�L�b�e�B���O', false);
		/*
		 * kintone.app.record.setFieldShown('����2', false);
		 * kintone.app.record.setFieldShown('����3', false);
		 * kintone.app.record.setFieldShown('����4', false);
		 * kintone.app.record.setFieldShown('����5', false);
		 * kintone.app.record.setFieldShown('����6', false);
		 * $('.row-gaia:has(.control-label-field-gaia)').hide();// ����1~6�p���x���̔�\��
		 */if (Cybozu == '�V�lPC�L�b�e�B���O') {
			 
			 alert('Cybozu:' + Cybozu);		 
				
/*			 kintone.app.record.setFieldShown('�`�F�b�N�{�b�N�X_0', true);*/
			 kintone.app.record.setFieldShown('�O���[�v_�L�b�e�B���O', true);
			/*
			 * $('.row-gaia:has(.control-label-field-gaia)').eq(0).show();//
			 * ����1�p���x���̕\��
			 * $('.row-gaia:has(.control-label-field-gaia)').eq(1).show();//
			 * ����2�p���x���̕\��
			 */}
		return event;
	});
})();