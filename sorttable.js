/*
�g�p�A�v���F����Ǘ��A�v��
�T�v�F�T�}���[����ڍ׃e�[�u�����\�[�g���܂�(������̍~��)
*/
(function() {
"use strict";

//�����ς��Ȃ�
/**
 * �e�[�u���̃\�[�g
 * 
 * @param Array table value(ex. event.record.Table.value)
 * @param string orderBy �t�B�[���h�R�[�h(price)
 * @param boolean isDesc ASC(false) or DESC(true)
 */
var sortTable = function(table, orderBy, isDesc) {
    table.sort(function(a, b) {
        var fieldType = a.value[orderBy].type;
        var v1 = a.value[orderBy].value;
        var v2 = b.value[orderBy].value;

        // ���l�Ɠ����͕ϊ����Ă����r
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
//�����ς��Ȃ�

//�����ς��遦��
//�\�[�g���������s�������C�x���g�ɕς���
//���R�[�h�ҏW��ʎ��s���A���R�[�h�ǉ���ʎ��s��
kintone.events.on(["app.record.edit.submit", "app.record.create.submit"], function(event) {
	//�����ς��遦��
	//�\�[�g���s�������e�[�u������
    var table = event.record.�T�}���[����ڍ�.value;
    
    //���ς��Ȃ�
    sortTable(table, 'contact_date', true);
    return event;
});
})();