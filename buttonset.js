/*
�g�p�A�v���F�����g�p��
�T�v�F�{�^����ݒu���A����������e�[�u���������������
*/
(function() {
  "use strict";
  
    //�C�x���g�i���R�[�h�ҏW��ʁA���R�[�h�ǉ���ʂ��J�������j
    kintone.events.on([ 'app.record.edit.show', 'app.record.create.show' ], function(event) {
        // �C�ӂ̃X�y�[�X�t�B�[���h�Ƀ{�^����ݒu
        var mySpaceFieldButton = document.createElement('button');
        mySpaceFieldButton.id = 'my_space_field_button';
        mySpaceFieldButton.innerText = '�e�[�u��������';
        //�{�^���N���b�N����
        mySpaceFieldButton.onclick = function () {
        	//���R�[�h���擾
        	var rec = kintone.app.record.get();
        	var record = rec.record;
        	//�H���e�[�u���̏�����
        	record.�H���e�[�u��.value = [];    		
        	//���R�[�h���o�^
        	kintone.app.record.set(rec);             
        };
        //�{�^���̐ݒ�
        kintone.app.record.getSpaceElement('button').appendChild(mySpaceFieldButton);
    });
})();