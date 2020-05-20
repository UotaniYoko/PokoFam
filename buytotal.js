/*
�g�p�A�v���F�����Ǘ�
�T�v�F�w���񍐏��A�v���̃��R�[�h���擾���A�L�[�����Ƃɍ��v���z���Z�o����(�L�[�F�H��+����or�O��)
 */

(function() {
	"use strict";
	kintone.events
			.on(
					[ 'app.record.create.submit', 'app.record.edit.submit' ],
					function(event) {

						// �����Ǘ��A�v���̃��R�[�h�擾���擾
						var record = event.record;
						var reckoban = record['���b�N�A�b�v_�H��'].value;

						// �w���񍐏��A�v����ID
						var TappId = 320;
						


						function fetchRecords(appId, koban, opt_offset,
								opt_limit, opt_records) {

							var offset = opt_offset || 0;
							var limit = opt_limit || 500;
							var allRecords = opt_records || [];
							var params = {
								app : appId,
								query :	' ������_�H�ԍ��v1 like "' + koban +  '" or ������_�H�ԍ��v2 like "' + koban +  '" or ������_�H�ԍ��v3 like "' + koban +  '" or ������_�H�ԍ��v4 like "' + koban +  '" or ������_�H�ԍ��v5 like "' + koban +  '" or ������_�H�ԍ��v6 like "' + koban +  '" or ������_�H�ԍ��v7 like "' + koban +  '" or ������_�H�ԍ��v8 like "' + koban +  '" or ������_�H�ԍ��v9 like "' + koban +  '" or ������_�H�ԍ��v10 like "' + koban +  '"  order by ���R�[�h�ԍ� asc limit ' + limit	+ ' offset ' + offset
							};
							
							var str = ' ������_�H�ԍ��v1 like "' + koban +  '" or ������_�H�ԍ��v2 like "' + koban +  '" or ������_�H�ԍ��v3 like "' + koban +  '" or ������_�H�ԍ��v4 like "' + koban +  '" or ������_�H�ԍ��v5 like "' + koban +  '" or ������_�H�ԍ��v6 like "' + koban +  '" or ������_�H�ԍ��v7 like "' + koban +  '" or ������_�H�ԍ��v8 like "' + koban +  '" or ������_�H�ԍ��v9 like "' + koban +  '" or ������_�H�ԍ��v10 like "' + koban +  '"  order by ���R�[�h�ԍ� asc limit ' + limit	+ ' offset ' + offset;
													
							console.log(str);							
							
							return kintone
									.api('/k/v1/records', 'GET', params)
									.then(
											function(resp) {
												allRecords = allRecords
														.concat(resp.records);
												if (resp.records.length === limit) {
													return fetchRecords(appId,offset + limit,limit, allRecords);
												}

												return allRecords;
											});												
						};
						

						fetchRecords(TappId, reckoban)
								.then(
										function(records) {

											// ���i�w�����v�t�B�[���h��������
											record['���l_���i�w�����v'].value = 0;
											// �O���w�����v�t�B�[���h��������
											record['���l_�O����v'].value = 0;
											// �����Ǘ��A�v���̌�Ԃ��擾
											var no = record['������_�H��_����o��'].value;

											// ���i�E�O����v
											// ���v������ϐ�
											var item = 0;

											// /�w���񍐏��A�v���̃��R�[�h�����������J��Ԃ�
											for ( var i = 0; i < records.length; i++) {

												// �H�ԍ��v1�t�B�[���h�̃L�[�`�F�b�N
												// ���̃L�[�`�F�b�N
												if (records[i]['������_�H�ԍ��v1']['value'] == no
														+ "����") {
													// �w���񍐏��̃L�[�������Ǘ��A�v���̏ꍇ
													item = Number(record['���l_���i�w�����v']['value']);
													item += Number(records[i]['���l_�H�ԍ��v1']['value']);
													// ���z���Z
													record['���l_���i�w�����v']['value'] = item;
													item = 0;
													// �O���L�[�`�F�b�N
												} else if (records[i]['������_�H�ԍ��v1']['value'] == no
														+ "�O��") {
													// �w���񍐏��̃L�[�������Ǘ��A�v���̏ꍇ
													item = Number(record['���l_�O����v']['value']);
													item += Number(records[i]['���l_�H�ԍ��v1']['value']);
													// ���z���Z
													record['���l_�O����v']['value'] = item;
													item = 0;
												}

												// �ȉ��H�ԍ��v2�`8�t�B�[���h

												// 2
												if (records[i]['������_�H�ԍ��v2']['value'] == no
														+ "����") {
													item = Number(record['���l_���i�w�����v']['value']);
													item += Number(records[i]['���l_�H�ԍ��v2']['value']);
													record['���l_���i�w�����v']['value'] = item;
													item = 0;
												} else if (records[i]['������_�H�ԍ��v2']['value'] == no
														+ "�O��") {
													item = Number(record['���l_�O����v']['value']);
													item += Number(records[i]['���l_�H�ԍ��v2']['value']);
													record['���l_�O����v']['value'] = item;
													item = 0;
												}

												/*
												 * alert('records:' +
												 * records[i]['������_�H�ԍ��v3']['value'] +
												 * ',����:' + no + "����");
												 */

												// 3
												if (records[i]['������_�H�ԍ��v3']['value'] == no
														+ "����") {
													item = Number(record['���l_���i�w�����v']['value']);
													item += Number(records[i]['���l_�H�ԍ��v3']['value']);

													record['���l_���i�w�����v']['value'] = item;

													item = 0;
												} else if (records[i]['������_�H�ԍ��v3']['value'] == no
														+ "�O��") {
													item = Number(record['���l_�O����v']['value']);
													item += Number(records[i]['���l_�H�ԍ��v3']['value']);
													record['���l_�O����v']['value'] = item;
													item = 0;
												}

												// 4
												if (records[i]['������_�H�ԍ��v4']['value'] == no
														+ "����") {
													item = Number(record['���l_���i�w�����v']['value']);
													item += Number(records[i]['���l_�H�ԍ��v4']['value']);
													record['���l_���i�w�����v']['value'] = item;
													item = 0;
												} else if (records[i]['������_�H�ԍ��v4']['value'] == no
														+ "�O��") {
													item = Number(record['���l_�O����v']['value']);
													item += Number(records[i]['���l_�H�ԍ��v4']['value']);
													record['���l_�O����v']['value'] = item;
													item = 0;
												}

												// 5
												if (records[i]['������_�H�ԍ��v5']['value'] == no
														+ "����") {
													item = Number(record['���l_���i�w�����v']['value']);
													item += Number(records[i]['���l_�H�ԍ��v5']['value']);
													record['���l_���i�w�����v']['value'] = item;
													item = 0;
												} else if (records[i]['������_�H�ԍ��v5']['value'] == no
														+ "�O��") {
													item = Number(record['���l_�O����v']['value']);
													item += Number(records[i]['���l_�H�ԍ��v5']['value']);
													record['���l_�O����v']['value'] = item;
													item = 0;
												}

												// 6
												if (records[i]['������_�H�ԍ��v6']['value'] == no
														+ "����") {
													item = Number(record['���l_���i�w�����v']['value']);
													item += Number(records[i]['���l_�H�ԍ��v6']['value']);
													record['���l_���i�w�����v']['value'] = item;
													item = 0;
												} else if (records[i]['������_�H�ԍ��v6']['value'] == no
														+ "�O��") {
													item = Number(record['���l_�O����v']['value']);
													item += Number(records[i]['���l_�H�ԍ��v6']['value']);
													record['���l_�O����v']['value'] = item;
													item = 0;
												}

												// 7
												if (records[i]['������_�H�ԍ��v7']['value'] == no
														+ "����") {
													item = Number(record['���l_���i�w�����v']['value']);
													item += Number(records[i]['���l_�H�ԍ��v7']['value']);
													record['���l_���i�w�����v']['value'] = item;
													item = 0;
												} else if (records[i]['������_�H�ԍ��v7']['value'] == no
														+ "�O��") {
													item = Number(record['���l_�O����v']['value']);
													item += Number(records[i]['���l_�H�ԍ��v7']['value']);
													record['���l_�O����v']['value'] = item;
													item = 0;
												}

												// 8
												if (records[i]['������_�H�ԍ��v8']['value'] == no
														+ "����") {
													item = Number(record['���l_���i�w�����v']['value']);
													item += Number(records[i]['���l_�H�ԍ��v8']['value']);
													record['���l_���i�w�����v']['value'] = item;
													item = 0;
												} else if (records[i]['������_�H�ԍ��v8']['value'] == no
														+ "�O��") {
													item = Number(record['���l_�O����v']['value']);
													item += Number(records[i]['���l_�H�ԍ��v8']['value']);
													record['���l_�O����v']['value'] = item;
													item = 0;
												}

												// 9
												if (records[i]['������_�H�ԍ��v9']['value'] == no
														+ "����") {
													item = Number(record['���l_���i�w�����v']['value']);
													item += Number(records[i]['���l_�H�ԍ��v9']['value']);
													record['���l_���i�w�����v']['value'] = item;
													item = 0;
												} else if (records[i]['������_�H�ԍ��v9']['value'] == no
														+ "�O��") {
													item = Number(record['���l_�O����v']['value']);
													item += Number(records[i]['���l_�H�ԍ��v9']['value']);
													record['���l_�O����v']['value'] = item;
													item = 0;
												}

												// 10
												if (records[i]['������_�H�ԍ��v10']['value'] == no
														+ "����") {
													item = Number(record['���l_���i�w�����v']['value']);
													item += Number(records[i]['���l_�H�ԍ��v10']['value']);
													record['���l_���i�w�����v']['value'] = item;
													item = 0;
												} else if (records[i]['������_�H�ԍ��v10']['value'] == no
														+ "�O��") {
													item = Number(record['���l_�O����v']['value']);
													item += Number(records[i]['���l_�H�ԍ��v10']['value']);
													record['���l_�O����v']['value'] = item;
													item = 0;
												}

												item = 0;

											}

											var putrec = {
												"app" : kintone.app.getId(),
												"id" : kintone.app.record.getId(),
												"record" : {
													"���l_���i�w�����v" : {
														"value" : record['���l_���i�w�����v']['value']
													},
													"���l_�O����v" : {
														"value" : record['���l_�O����v']['value']
													}
												}
											};
											
																					 
											

											kintone.api(kintone.api.url('/k/v1/records', true),'PUT', putrec, function(result) {
														// success
														console.log(result);
													}, function(error) {
														// error
														console.log(error);
													});

										});



						return event;
					});
})();