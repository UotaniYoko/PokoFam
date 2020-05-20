(function() {
	"use strict";

	// �A�v��A��ID
	var TappId = 320;

	function fetchRecords(appId, opt_offset, opt_limit, opt_records) {
		var offset = opt_offset || 0;
		var limit = opt_limit || 100;
		var allRecords = opt_records || [];
		var params = {
			app : appId,
			query : 'order by ���R�[�h�ԍ� asc limit ' + limit + ' offset ' + offset
		};
		return kintone.api('/k/v1/records', 'GET', params).then(function(resp) {
			allRecords = allRecords.concat(resp.records);
			if (resp.records.length === limit) {
				return fetchRecords(appId, offset + limit, limit, allRecords);
			}

			return allRecords;
		});

	}

	fetchRecords(TappId).then(
			function(records) {

				kintone.events.on([ 'app.record.edit.submit' ], function(event) {

					// �A�v��B�̐ݒ���t���擾
					var record = event.record;
/*					var start = record['���t'].value;
					var end = record['���t_0'].value;*/

					// �A�v��A�̏��i1�̍��v��������ϐ�
					var item1 = 0;

					for ( var i = 0; i < records.length; i++) {
						
						 if (!(records[i]['���b�N�A�b�v_���v']['value'] == 0)){
							 
								// �A�v��A�̏��i1�̍��v�����擾
								item1 = item1 + parseInt(records[i]['���b�N�A�b�v_���v']['value']);
							 
							 }																	
					}

					alert('�H�Ԃ��ƍ��v�́u' + item1.toLocaleString() + '�v�ł��B');
					
					// �A�v��B�̏��i1�t�B�[���h�ɃA�v��A�̏��i1�̍��v�����Z�b�g
					record['���l_���R�[�h���v']['value'] = item1;

					return event;

				});

			});

})();