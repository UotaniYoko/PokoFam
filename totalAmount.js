(function() {
  "use strict";
  kintone.events.on([
    'app.record.detail.show',
    'app.record.edit.show'
  ], function(event){
    // �܂��A�A�v���̃t�B�[���h�ݒ���擾���Ă���
    RelatedRecordsFieldManager.prototype.getFieldProperties().then(function(){
      // �֘A����Č��ꗗ�̃��R�[�h���擾����
      (new RelatedRecordsFieldManager('�֘A���R�[�h�ꗗ�ʐM��')).getRecords(event.record).then(function(records){
        // space1�ɍ��v��p�̍��v�l��\��
        kintone.app.record.getSpaceElement("space1").innerHTML =
          records.reduce(function(sum, record){
            return sum + Number(record.�����g�p���z.value);
          }, 0).toLocaleString();
      });
/*      // �֘A���銈�������̃��R�[�h���擾����
      (new RelatedRecordsFieldManager('��������')).getRecords(event.record).then(function(records){
        // space2�Ƀ��R�[�h����\��
        kintone.app.record.getSpaceElement("space2").innerHTML = records.length;
      });*/
    });
  });
})();
