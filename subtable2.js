(function() {
	'use strict';

	// ���Ϗ��F�������A�v���̏ڍ׉�ʂ��甄��Ǘ��F�w���\���A�v����

	var salesDao = {};

	kintone.events
			.on(
					'app.record.detail.show',
					function(e) {
						// �u���Ϗ��F�������v�̃��R�[�h���擾
						var record = e.record;
						// �u����Ǘ��F�w���\���v�A�v���̃A�v���̔ԍ�
						salesDao.APP_ID = 320;

						// ���R�[�h�R�s�[�{�^���v�f�쐬
						// ***** ���I�Ƀ{�^���𐶐����Ă��邪�ȗ� *****
						var btnCopy = document.createElement('button');
						btnCopy.id = 'btn_1';
						btnCopy.innerHTML = '�w���\���{�^��';

						// �{�^�����N���b�N�����Ƃ��̃C�x���g
						btnCopy.onclick = function() {
							// ����Ǘ��F�w���\���̃f�[�^�o�^�����s����
							salesDao.insert(record);
						};
						// �w�b�_�[�X�y�[�X�Ƀ{�^���v�f��t��
						kintone.app.record.getHeaderMenuSpaceElement()
								.appendChild(btnCopy);

						// ����Ǘ��F�w���\���A�v����1�s�ǉ��B
						salesDao.insert = function(recordInf) {
//							// ���Ϗ����ׁF�������̊e���ڂ�z��Ɏ擾
//							var productID = []; // ���i�R�[�h
//							var productName = []; // ���i��
//							var unitPrice = []; // �P��
//							var quantity = []; // ����

							// �T�u�e�[�u��(���Ϗ����ׁF������)�I�u�W�F�N�g���擾
							var tableRecords = record.���i.value;
							// �T�u�e�[�u��(���Ϗ����ׁF������)�̓��e��z��Ɋi�[
							var subtable = [];
							for ( var i = 0; i < tableRecords.length; i++) {
								subtable
										.push({
											value : {
												"���i��" : {
													value : tableRecords[i].value['���i��'].value
												},
												"�i��" : {
													value : tableRecords[i].value['�i��'].value
												},
												"�P��" : {
													value : tableRecords[i].value['�P��'].value
												},
												"����" : {
													value : tableRecords[i].value['����'].value
												},
												"���z" : {
													value : tableRecords[i].value['���z'].value
												},
												"���l" : {
													value : tableRecords[i].value['���l'].value
												},
											}
										});
							}
							
							//���R�[�h�m�F�ԍ����擾���܂�(���ݔN������)					
						    var now = new Date();
						    var year = now.getFullYear();
						    var mon = ("0"+(now.getMonth() + 1)).slice(-2);
						    var day =  ("0"+now.getDate()).slice(-2);
						    var hours = ("0"+now.getHours()).slice(-2);
						    var minutes = ("0"+now.getMinutes()).slice(-2);
						    var seconds = ("0"+now.getSeconds()).slice(-2);
						    var checkrecord = year + mon + day + hours + minutes + seconds;												
							
							var params = {
								"app" : salesDao.APP_ID,
								// ���Ϗ��̊�
								"record" : {
									"���b�N�A�b�v" : {
										"value" : recordInf['���b�N�A�b�v']['value']
									},
									"���[�U�[�I��" : {
										"value" : recordInf['���[�U�[�I��']['value']
									},
									"���b�N�A�b�v_0" : {
										"value" : recordInf['���b�N�A�b�v_0']['value']
									},
									"�v�Z_0" : {
										"value" : recordInf['�v�Z_0']['value']
									},
									"���R�[�h�m�F�ԍ�" : {
										"value" : checkrecord
									},
									"���i" : {
										"value" : subtable
									// subtable�̓T�u�e�[�u���̔z��i����̍�����1���ڂŏ����Ă܂��j
									}
								},
							};

							// Kintone REST API ���N�G�X�g
							kintone
									.api(kintone.api.url('/k/v1/record', true),
											'POST', params)
									.then(
											function(resp) {
												// �������A�Ή�����u����Ǘ��F�w���\���A�v���v��ʂ��J��
												if (window
														.confirm('���i���ׂ��w���\���A�v���Ɉڍs���܂����B\n�w���\���A�v�������m�F���������B\n���R�[�h�m�F�ԍ��u' + checkrecord + '�v')) {
													salesDao.showDetail();
												}
											},
											function(resp) {
												// ���s��
												if (resp.message !== undefined) {
													alert(resp.message);
												} else {
													alert('����Ǘ��̓o�^�Ɏ��s���܂���(2)�B');
												}
											});
						};

						// �w�肳�ꂽ����Ǘ��F�w���\���A�v���̏ڍ׉�ʂ��J��
						// salesDao.showDetail = function() {
						// alert('���̋@�\�͌��ݎ�������Ă��܂���B����Ǘ��ɂ͓o�^����Ă��܂��B');
						// };
					});

})();