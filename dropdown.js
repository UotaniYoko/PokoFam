(function() {
  "use strict";
  
  kintone.events.on([
                     'app.record.create.show',
                     'app.record.edit.show',
                   ], function (event) {

                     var choices = {
                       '秋冬ブルゾン': ['1280'],
                       '秋冬カーゴパンツ': ['1283'],
                       '秋冬パンツ(ポケットなし)': ['1282'],
                       '長袖シャツ': ['1293'],
                       '防寒着上(ブルゾン)': ['JIT 48340'],
                       '防寒着上(コート)': ['JIT 48343'],
                       '防寒着下': ['-'],
                       '春夏ブルゾン': ['1294'],
                       '春夏カーゴパンツ': ['1296'],
                       '春夏パンツ': ['1290'],
                       '半袖シャツ': ['1292'],
                       'ポロシャツ': ['6180'],
                       'フルハーネス対応空調服': ['KE98101']
                     };
                     var tableCode = 'Table';
                     var column1Code = '品名';
                     var column1Label = '品名';
                     var column2Code = '品番';
                     var column2Label = '品番';
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

