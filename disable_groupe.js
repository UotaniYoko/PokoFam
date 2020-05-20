(function() {
	"use strict";
	
	kintone.events.on(['app.record.edit.show', 'app.record.detail.show'], function(event) {

		var record = event.record;
		var Cybozu = record['文字列_タイトル']['value'];
/*		kintone.app.record.setFieldShown('チェックボックス_0', false);*/
		kintone.app.record.setFieldShown('グループ_キッティング', false);
		/*
		 * kintone.app.record.setFieldShown('項目2', false);
		 * kintone.app.record.setFieldShown('項目3', false);
		 * kintone.app.record.setFieldShown('項目4', false);
		 * kintone.app.record.setFieldShown('項目5', false);
		 * kintone.app.record.setFieldShown('項目6', false);
		 * $('.row-gaia:has(.control-label-field-gaia)').hide();// 項目1~6用ラベルの非表示
		 */if (Cybozu == '新人PCキッティング') {
			 
			 alert('Cybozu:' + Cybozu);		 
				
/*			 kintone.app.record.setFieldShown('チェックボックス_0', true);*/
			 kintone.app.record.setFieldShown('グループ_キッティング', true);
			/*
			 * $('.row-gaia:has(.control-label-field-gaia)').eq(0).show();//
			 * 項目1用ラベルの表示
			 * $('.row-gaia:has(.control-label-field-gaia)').eq(1).show();//
			 * 項目2用ラベルの表示
			 */}
		return event;
	});
})();