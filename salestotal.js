(function() {
	"use strict";

	// ����Ǘ��A�v����ID
	var TappId = 338;

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

	fetchRecords(TappId)
			.then(
					function(records) {

						kintone.events
								.on(
										[ 'app.record.edit.submit' ],
										function(event) {

											// �W�v�p�̊��ԁE�c�Ə����擾
											var record = event.record;										
											var total = 0;
																								
											// ���v�Z�o
											
											if (record['���t_�J�n'].value !== undefined	&& record['���t_�I��'].value !== undefined && record['�h���b�v�_�E��_�c�Ə�'].value !== undefined) {

												var start = record['���t_�J�n'].value.replace(/-/g,'');
												var end = record['���t_�I��'].value.replace(/-/g,'');
												var place = record['�h���b�v�_�E��_�c�Ə�'].value;
												
												for ( var i = 0; i < records.length; i++) {
													
													//����Ǘ��̉c�Ə�=�W�v�̉c�Ə�����
													if(records[i]['�h���b�v�_�E��']['value'] == place){														
														
														var tableRecords = records[i].�T�}���[����ڍ�.value;												
														for ( var j = 0; j < tableRecords.length; j++) {
															
															var date = tableRecords[j].value['contact_date'].value.replace(/-/g,'');
															
															//���㌎���W�v�̊��Ԃ͈͓̔�
															if(parseInt(start) <= parseInt(date) && parseInt(date) <= parseInt(end)){
																
																//null����
																if (tableRecords[j].value['������z'].value !== undefined) {
																	/*																alert('^^bello!;' + tableRecords[j].value['������z'].value);*/
																	
																	total += parseInt(tableRecords[j].value['������z'].value);																	
																}
																																															

																			
															}
														}																												
													}																																							
												}												
											}
											
											
											
											record['���l_������z'].value = total.toLocaleString();

											return event;

										});

					});

})();