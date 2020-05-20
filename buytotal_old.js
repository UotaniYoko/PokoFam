/*
�g�p�A�v���F�����Ǘ�
�T�v�F�w���񍐏��A�v���̃��R�[�h���擾���A�L�[�����Ƃɍ��v���z���Z�o����(�L�[�F�H��+����or�O��)
*/
(function() {
	"use strict";

	// �w���񍐏��A�v����ID
	var TappId = 320;

	//�w���񍐏��A�v���̃��R�[�h���擾���܂���
	function fetchRecords(appId, opt_offset, opt_limit, opt_records) {
		var offset = opt_offset || 0;
		var limit = opt_limit || 500;
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
	//��

	fetchRecords(TappId)
			.then(
					function(records) {
						//�C�x���g�i���R�[�h�ҏW��ʁA���R�[�h�ǉ���ʂ̎��s�{�^���������j
						kintone.events
								.on(
										[ 'app.record.create.submit',
												'app.record.edit.submit' ],
										function(event) {

											//�����Ǘ��A�v���̃��R�[�h�擾���擾
											var record = event.record;
											//���i�w�����v�t�B�[���h��������
											record['���l_���i�w�����v'].value = 0;
											//�O���w�����v�t�B�[���h��������
											record['���l_�O����v'].value = 0;
											//�����Ǘ��A�v���̌�Ԃ��擾
											var no = record['������_�H��_����o��'].value;

											// ���i�E�O����v
											// ���v������ϐ�
											var item = 0;

											///�w���񍐏��A�v���̃��R�[�h�����������J��Ԃ�
											for ( var i = 0; i < records.length; i++) {

												// �H�ԍ��v1�t�B�[���h�̃L�[�`�F�b�N
												//���̃L�[�`�F�b�N
												if (records[i]['������_�H�ԍ��v1']['value'] == no	+ "����") {
													//�w���񍐏��̃L�[�������Ǘ��A�v���̏ꍇ
													item = Number(record['���l_���i�w�����v']['value']);
													item += Number(records[i]['���l_�H�ԍ��v1']['value']);
													//���z���Z
													record['���l_���i�w�����v']['value'] = item;
													item = 0;
												//�O���L�[�`�F�b�N	
												} else if (records[i]['������_�H�ԍ��v1']['value'] == no	+ "�O��") {
													//�w���񍐏��̃L�[�������Ǘ��A�v���̏ꍇ
													item = Number(record['���l_�O����v']['value']);
													item += Number(records[i]['���l_�H�ԍ��v1']['value']);
													//���z���Z
													record['���l_�O����v']['value'] = item;
													item = 0;
												}
												
												//�ȉ��H�ԍ��v2�`8�t�B�[���h

												// 2
												if (records[i]['������_�H�ԍ��v2']['value'] == no	+ "����") {
													item = Number(record['���l_���i�w�����v']['value']);
													item += Number(records[i]['���l_�H�ԍ��v2']['value']);
													record['���l_���i�w�����v']['value'] = item;
													item = 0;
												} else if (records[i]['������_�H�ԍ��v2']['value'] == no + "�O��") {
													item = Number(record['���l_�O����v']['value']);
													item += Number(records[i]['���l_�H�ԍ��v2']['value']);
													record['���l_�O����v']['value'] = item;
													item = 0;
												}


												// 3
												if (records[i]['������_�H�ԍ��v3']['value'] == no	+ "����") {
													item = Number(record['���l_���i�w�����v']['value']);
													item += Number(records[i]['���l_�H�ԍ��v3']['value']);
													record['���l_���i�w�����v']['value'] = item;
													item = 0;
												} else if (records[i]['������_�H�ԍ��v3']['value'] == no	+ "�O��") {
													item = Number(record['���l_�O����v']['value']);
													item += Number(records[i]['���l_�H�ԍ��v3']['value']);
													record['���l_�O����v']['value'] = item;
													item = 0;
												}

												// 4
												if (records[i]['������_�H�ԍ��v4']['value'] == no	+ "����") {
													item = Number(record['���l_���i�w�����v']['value']);
													item += Number(records[i]['���l_�H�ԍ��v4']['value']);
													record['���l_���i�w�����v']['value'] = item;
													item = 0;
												} else if (records[i]['������_�H�ԍ��v4']['value'] == no	+ "�O��") {
													item = Number(record['���l_�O����v']['value']);
													item += Number(records[i]['���l_�H�ԍ��v4']['value']);
													record['���l_�O����v']['value'] = item;
													item = 0;
												}
												
												// 5
												if (records[i]['������_�H�ԍ��v5']['value'] == no	+ "����") {
													item = Number(record['���l_���i�w�����v']['value']);
													item += Number(records[i]['���l_�H�ԍ��v5']['value']);
													record['���l_���i�w�����v']['value'] = item;
													item = 0;
												} else if (records[i]['������_�H�ԍ��v5']['value'] == no	+ "�O��") {
													item = Number(record['���l_�O����v']['value']);
													item += Number(records[i]['���l_�H�ԍ��v5']['value']);
													record['���l_�O����v']['value'] = item;
													item = 0;
												}
												
												// 6
												if (records[i]['������_�H�ԍ��v6']['value'] == no	+ "����") {
													item = Number(record['���l_���i�w�����v']['value']);
													item += Number(records[i]['���l_�H�ԍ��v6']['value']);
													record['���l_���i�w�����v']['value'] = item;
													item = 0;
												} else if (records[i]['������_�H�ԍ��v6']['value'] == no	+ "�O��") {
													item = Number(record['���l_�O����v']['value']);
													item += Number(records[i]['���l_�H�ԍ��v6']['value']);
													record['���l_�O����v']['value'] = item;
													item = 0;
												}
												
												// 7
												if (records[i]['������_�H�ԍ��v7']['value'] == no	+ "����") {
													item = Number(record['���l_���i�w�����v']['value']);
													item += Number(records[i]['���l_�H�ԍ��v7']['value']);
													record['���l_���i�w�����v']['value'] = item;
													item = 0;
												} else if (records[i]['������_�H�ԍ��v7']['value'] == no	+ "�O��") {
													item = Number(record['���l_�O����v']['value']);
													item += Number(records[i]['���l_�H�ԍ��v7']['value']);
													record['���l_�O����v']['value'] = item;
													item = 0;
												}
												
												// 8
												if (records[i]['������_�H�ԍ��v8']['value'] == no	+ "����") {
													item = Number(record['���l_���i�w�����v']['value']);
													item += Number(records[i]['���l_�H�ԍ��v8']['value']);
													record['���l_���i�w�����v']['value'] = item;
													item = 0;
												} else if (records[i]['������_�H�ԍ��v8']['value'] == no	+ "�O��") {
													item = Number(record['���l_�O����v']['value']);
													item += Number(records[i]['���l_�H�ԍ��v8']['value']);
													record['���l_�O����v']['value'] = item;
													item = 0;
												}
												
												// 9
												if (records[i]['������_�H�ԍ��v9']['value'] == no	+ "����") {
													item = Number(record['���l_���i�w�����v']['value']);
													item += Number(records[i]['���l_�H�ԍ��v9']['value']);
													record['���l_���i�w�����v']['value'] = item;
													item = 0;
												} else if (records[i]['������_�H�ԍ��v9']['value'] == no	+ "�O��") {
													item = Number(record['���l_�O����v']['value']);
													item += Number(records[i]['���l_�H�ԍ��v9']['value']);
													record['���l_�O����v']['value'] = item;
													item = 0;
												}
												
												// 10
												if (records[i]['������_�H�ԍ��v10']['value'] == no	+ "����") {
													item = Number(record['���l_���i�w�����v']['value']);
													item += Number(records[i]['���l_�H�ԍ��v10']['value']);
													record['���l_���i�w�����v']['value'] = item;
													item = 0;
												} else if (records[i]['������_�H�ԍ��v10']['value'] == no	+ "�O��") {
													item = Number(record['���l_�O����v']['value']);
													item += Number(records[i]['���l_�H�ԍ��v10']['value']);
													record['���l_�O����v']['value'] = item;
													item = 0;
												}
												
												item = 0;

											}

											return event;

										});

					});

})();