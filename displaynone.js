
/*
 * �񓚂̏����ɂ���ĕʃt�B�[���h�̕\��/��\����؂�ւ���T���v���v���O����
 * Copyright (c) 2014 Cybozu
 * 
 * Licensed under the MIT License
 */
(function() {
    "use strict";

    //���R�[�h�̒ǉ��A�ҏW�A�ڍ׉�ʂœK�p����
    var events = ['app.record.detail.show',
                  'app.record.create.show',
                  'app.record.edit.show'];

    kintone.events.on(events, function(event) {

/*        var record = event.record;*/
    	
		alert('�o��(�O�O)');
    
        kintone.app.record.setFieldShown('������_�e�X�g', false);

    });
})(); 
