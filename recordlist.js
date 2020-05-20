(function () {
  "use strict";
  kintone.events.on(['app.record.detail.show', 'app.record.edit.show'], function (event) {
    // まず、アプリのフィールド設定を取得しておく
    RelatedRecordsFieldManager.prototype.getFieldProperties().then(function () {
      // 関連する助成金一覧のレコードを取得する
      (new RelatedRecordsFieldManager('関連レコード一覧')).getRecords(event.record).then(function (records) {
        // space1に項目Noの合計値を表示
        kintone.app.record.getSpaceElement("space1").innerHTML = records.reduce(function (sum, record) {
          return sum + Number(record.数値.value);
        }, 0).toLocaleString();
/*        // space2にレコード数を表示
        kintone.app.record.getSpaceElement("space2").innerHTML = records.length;*/
      });
    });
  });
  // コンストラクタ定義
  var RelatedRecordsFieldManager = (function(fieldCode){
    function RelatedRecordsFieldManager(fieldCode) {
      this.fieldCode = fieldCode;
      this.targetAppId = kintone.app.getRelatedRecordsTargetAppId(fieldCode);
      this.property = this.fieldProperties[fieldCode].referenceTable;
    }
    RelatedRecordsFieldManager.prototype = {
      selfAppId: kintone.app.getId(),
      records: [],
      limit: 500,
      offset: 0,
      getFieldProperties: function(){
        return kintone.api(kintone.api.url('/k/v1/app/form/fields', true), 'GET', {
          app: RelatedRecordsFieldManager.prototype.selfAppId,
        }).then(function(response){
          RelatedRecordsFieldManager.prototype.fieldProperties = response.properties;
        });
      },
      query: function(record){
        return (
          this.property.condition.relatedField +
          '="' +
          record[this.property.condition.field].value +
          (this.property.filterCond ? '" and ' : '"') +
          this.property.filterCond
        );
      },
      getRecords: function(record){
        var _this = this;
        return kintone.api(kintone.api.url('/k/v1/records', true), 'GET', {
          app: this.targetAppId,
          query:
            this.query(record) +
            ' order by ' + this.property.sort +
            ' limit ' + this.limit +
            ' offset ' + this.offset
        }).then(function(response){
          _this.records = _this.records.concat(response.records);
          _this.offset += response.records.length;
          if(response.records.length === _this.limit){
            return _this.getRecords(record);
          }else{
            return _this.records;
          }
        });
      }
    };
    return RelatedRecordsFieldManager;
  })();
})();