/*
�g�p�A�v���F����Ǘ��A�v��
�T�v�F�\���`�F�b�N�{�b�N�X���`�F�b�N��Ԃ̎��͔p�Ŏʐ^�Y�t�t�@�C����\���A��`�F�b�N��Ԃ̎��͔�\���ɂ���
*/
(function() {
	"use strict";
	
	//�C�x���g�i�\���`�F�b�N�{�b�N�X�̒l���ς�������A���R�[�h�ڍ׉�ʁE���R�[�h�ǉ���ʁE���R�[�h�ҏW��ʂ��J�������j
	kintone.events.on(['app.record.create.change.�`�F�b�N�{�b�N�X', 'app.record.edit.change.�`�F�b�N�{�b�N�X', 'app.record.detail.show', 'app.record.create.show', 'app.record.edit.show'], function(event) {

		//���R�[�h���擾
		var record = event.record;
		//�`�F�b�N�{�b�N�X�̒l���擾
		var Cybozu = record['�`�F�b�N�{�b�N�X']['value'];
		//�f�t�H���g�Ŕp�Ŏʐ^�Y�t�t�@�C���͔�\���ɂ���
		kintone.app.record.setFieldShown('�Y�t�t�@�C��_�p�Վʐ^', false);

		//�`�F�b�N�{�b�N�X�̒l���\���̏ꍇ
		if (Cybozu.indexOf('�\��') != -1) {
			//�p�Ŏʐ^�Y�t�t�@�C����\��������
			kintone.app.record.setFieldShown('�Y�t�t�@�C��_�p�Վʐ^', true);

		}
		return event;
	});
})();