/*
�g�p�A�v���F�����Ǘ�
�T�v�F�J���H���A�v���̃��R�[�h���������o�����ԍ��v���Z�o���܂�
*/
(function() {
	"use strict";

	kintone.events
			.on(
					//�C�x���g����
					//���ς��Ȃ�
					[ 'app.record.create.submit', 'app.record.edit.submit' ],
					function(event) {

						//���R�[�h�ޔ�����
						var record = event.record;
						//�����Ǘ��̍H�ԑޔ�����
						var reckoban = record['���b�N�A�b�v_�H��'].value;

						// �J���H���A�v����ID
						var TappId = 340;

						//���R�[�h�ꊇ�擾����
						function fetchRecords(appId, koban, opt_offset,
								opt_limit, opt_records) {
							
							//�������R�[�h�̎擾�͏�����u500���v�Ȃ̂ŁA���o�������K�v�ł�(query)����
							//���ς��Ȃ�
							var offset = opt_offset || 0;
							//���ς��Ȃ�
							var limit = opt_limit || 500;
							//���ς��Ȃ�
							var allRecords = opt_records || [];
							var params = {
								app : appId,
								//�����ς��遦��
								//���R�[�h���o�����uquery�v�J���A�v���́u������_�H��1�v�Ɍ����Ǘ��̍H�Ԃ��܂܂�Ă����烌�R�[�h�𒊏o���܂�
								query : ' ������_�H��1 like "' + koban
										+ '" or ������_�H��2 like "' + koban
										+ '" or ������_�H��3 like "' + koban
										+ '" or ������_�H��4 like "' + koban
										+ '" or ������_�H��5 like "' + koban
										+ '"  order by ���R�[�h�ԍ� asc limit '
										+ limit + ' offset ' + offset
							};

							//���ς��Ȃ�
							return kintone
									.api('/k/v1/records', 'GET', params)
									.then(
											function(resp) {
												allRecords = allRecords
														.concat(resp.records);
												if (resp.records.length === limit) {
													return fetchRecords(appId,
															offset + limit,
															limit, allRecords);
												}

												return allRecords;
											});
						}
						;

						fetchRecords(TappId, reckoban)
								.then(
										function(records) {
											
											// �J�����v���v�t�B�[���h��������
											record['���l_�J���H�����v'].value = 0;
											// �����Ǘ��A�v���̌�Ԃ��擾
											var no = record['������_�H��_����o��'].value;

											// ���i�E�O����v
											// ���v������ϐ�
											var item = 0;

											// /�w���񍐏��A�v���̃��R�[�h�����������J��Ԃ�
											for ( var i = 0; i < records.length; i++) {

												// �H�ԍ��v1�t�B�[���h�̃L�[�`�F�b�N
												// ���̃L�[�`�F�b�N
												if (records[i]['������_�H��1']['value'] == no) {
													// �J���H���̃L�[�������Ǘ��A�v���̏ꍇ
													item = Number(record['���l_�J���H�����v']['value']);
													item += Number(records[i]['���l_����1']['value']);
													// ���z���Z
													record['���l_�J���H�����v']['value'] = item;
													item = 0;
												}

												// �ȉ��H�ԍ��v2�`5�t�B�[���h
												if (records[i]['������_�H��2']['value'] == no) {
													// �J���H���̃L�[�������Ǘ��A�v���̏ꍇ
													item = Number(record['���l_�J���H�����v']['value']);
													item += Number(records[i]['���l_����2']['value']);
													// ���z���Z
													record['���l_�J���H�����v']['value'] = item;
													item = 0;
												}
												if (records[i]['������_�H��3']['value'] == no) {
													// �J���H���̃L�[�������Ǘ��A�v���̏ꍇ
													item = Number(record['���l_�J���H�����v']['value']);
													item += Number(records[i]['���l_����3']['value']);
													// ���z���Z
													record['���l_�J���H�����v']['value'] = item;
													item = 0;
												}
												if (records[i]['������_�H��4']['value'] == no) {
													// �J���H���̃L�[�������Ǘ��A�v���̏ꍇ
													item = Number(record['���l_�J���H�����v']['value']);
													item += Number(records[i]['���l_����4']['value']);
													// ���z���Z
													record['���l_�J���H�����v']['value'] = item;
													item = 0;
												}
												if (records[i]['������_�H��5']['value'] == no) {
													// �J���H���̃L�[�������Ǘ��A�v���̏ꍇ
													item = Number(record['���l_�J���H�����v']['value']);
													item += Number(records[i]['���l_����5']['value']);
													// ���z���Z
													record['���l_�J���H�����v']['value'] = item;
													item = 0;
												}											 
											}
											
																				
											//���R�[�h�X�V������
											var url = 'https://keisokunet.s.cybozu.com/k/v1/record.json';
											var body = {
											    "app": kintone.app.getId(),
											    "id": kintone.app.record.getId(),
											    "record": {
											    	//�X�V�������t�B�[���h���`���܂�
											        "���l_�J���H�����v": {
											            "value": record['���l_�J���H�����v']['value']
											        }											
											    },
											    // CSRF TOKEN: kintone�ォ��API(POST, PUT, DELETE)�����s����ꍇ�ɐݒ肷��K�v����
											    "__REQUEST_TOKEN__": kintone.getRequestToken()
											};

											var xhr = new XMLHttpRequest();
											xhr.open('PUT', url);
											xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
											xhr.setRequestHeader('Content-Type', 'application/json');
											xhr.onload = function() {
											    if (xhr.status === 200) {
											        // success
											        console.log(JSON.parse(xhr.responseText));
											    } else {
											        // error
											        console.log(JSON.parse(xhr.responseText));
											    }
											};
											xhr.send(JSON.stringify(body));
											//���R�[�h�X�V������																																

										});

						return event;

					});

})();