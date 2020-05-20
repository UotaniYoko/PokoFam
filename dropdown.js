(function() {
  "use strict";
  
  kintone.events.on([
                     'app.record.create.show',
                     'app.record.edit.show',
                   ], function (event) {

                     var choices = {
                       '�H�~�u���]��': ['1280'],
                       '�H�~�J�[�S�p���c': ['1283'],
                       '�H�~�p���c(�|�P�b�g�Ȃ�)': ['1282'],
                       '�����V���c': ['1293'],
                       '�h������(�u���]��)': ['JIT 48340'],
                       '�h������(�R�[�g)': ['JIT 48343'],
                       '�h������': ['-'],
                       '�t�ău���]��': ['1294'],
                       '�t�ăJ�[�S�p���c': ['1296'],
                       '�t�ăp���c': ['1290'],
                       '�����V���c': ['1292'],
                       '�|���V���c': ['6180'],
                       '�t���n�[�l�X�Ή��󒲕�': ['KE98101']
                     };
                     var tableCode = 'Table';
                     var column1Code = '�i��';
                     var column1Label = '�i��';
                     var column2Code = '�i��';
                     var column2Label = '�i��';
                     var spaceCode = 'space';

                     choices = Object.keys(choices).reduce(function (modifiedChoices, category) {
                       modifiedChoices[category] = [''].concat(choices[category]);
                       return modifiedChoices;
                     }, { '': [''] });
                     var defaultRowData = {
                       [column1Code]: {
                         items: Object.keys(choices).map(function (category) { return { label: category || '-----', value: category }; }),
                         value: ''
                       },
                       [column2Code]: {
                         items: [{ label: '-----', value: '' }],
                         value: ''
                       },
                     };
                     var initialData = event.record[tableCode].value.map(function (recordTableRow) {
                       return {
                         [column1Code]: {
                           items: defaultRowData[column1Code].items,
                           value: recordTableRow.value[column1Code].value || '' },
                         [column2Code]: {
                           items: choices[recordTableRow.value[column1Code].value || ''].map(function (choice) {
                             return { label: choice || '-----', value: choice };
                           }),
                           value: recordTableRow.value[column2Code].value || ''
                         }
                       };
                     });
                     var columns = [{
                       header: column1Label,
                       cell: function () { return kintoneUIComponent.createTableCell('dropdown', column1Code) }
                     }, {
                       header: column2Label,
                       cell: function () { return kintoneUIComponent.createTableCell('dropdown', column2Code) }
                     }];
                     var kucTable = new kintoneUIComponent.Table({
                       data: initialData,
                       defaultRowData: defaultRowData,
                       columns: columns
                     });
                     var setRecord = function (kucTableValue) {
                       var record = kintone.app.record.get();
                       record.record[tableCode].value = kucTableValue.map(function (kucTableRow) {
                         return {
                           value: Object.keys(kucTableRow).reduce(function (recordTableRow, column) {
                             recordTableRow[column] = {
                               type: 'SINGLE_LINE_TEXT',
                               value: kucTableRow[column].value || ''
                             };
                             return recordTableRow;
                           }, {})
                         };
                       });
                       kintone.app.record.set(record);
                     };
                     kucTable.on('cellChange', function (e) {
                       setRecord(e.data);
                       if (e.fieldName !== column1Code) return;
                       e.data[e.rowIndex][column2Code] = {
                         items: choices[e.data[e.rowIndex][column1Code].value].map(function (choice) {
                           return { label: choice || '-----', value: choice };
                         }),
                         value: ''
                       };
                       kucTable.setValue(e.data);
                     });
                     kucTable.on('rowAdd', function (e) {
                       setTimeout(function () {
                         setRecord(e.data);
                       });
                     });
                     kucTable.on('rowRemove', function (e) {
                       setRecord(e.data);
                     });
                     kintone.app.record.setFieldShown(tableCode, false);
                     kintone.app.record.getSpaceElement(spaceCode).appendChild(kucTable.render());
                   });
  

  
  
})();

