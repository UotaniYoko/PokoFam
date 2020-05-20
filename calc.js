/*
�g�p�A�v���F�����Ǘ�
�T�v�F�������z�̌v�Z�E����ƍw���\���A�v���̃��R�[�h���擾������o��(�w���\����)�̍��v���z�v�Z���s���܂�
*/
(function() {
	"use strict";

	kintone.events
			.on(
					[ 'app.record.create.submit', 'app.record.edit.submit' ],
					function(event) {

						var record = event.record;
						var num1 = 0;
						var num2 = 0;
						var num3 = 0;

						// ���ꗘ�v(�e��/C)�̌v�Z
						if (record['���l_������z']['value'] !== ''
								|| record['���l_������z']['value'] !== undefined) {
							num1 = Number(record['���l_�e��']['value']);
							num2 = Number(record['���l_������z']['value']);
							
							var work =  Math.round(num1 / num2 * 100);
							if(isNaN(work)){
								record['���l_���ꗘ�v']['value'] = '0';
							}
							else{
								record['���l_���ꗘ�v']['value'] = work;
							}
						}

						// ���l_�󒍋��z��r1�̌v�Z
						if (record['���l_B�J����']['value'] !== ''
								|| record['���l_B�J����']['value'] !== undefined) {
							num1 = Number(record['���l_B�J����']['value']);
							num2 = Number(record['���l_�Ј��l����']['value']);
							num3 = Number(record['���l_�O����']['value']);
							
							var work =  Math.round((num1 - num2 - num3)	/ num1 * 100);
							if(isNaN(work)){
								record['���l_�󒍋��z��r1']['value'] = '0';
							}
							else{
								record['���l_�󒍋��z��r1']['value'] = work;
							}							
						}
						num1 = Number(record['���l_�󒍋��z��r1']['value']);
						if (num1 > 60) {
							record['������_�󒍋��z��r1']['value'] = 'A';
						} else if (num1 > 40) {
							record['������_�󒍋��z��r1']['value'] = 'B';
						} else if (num1 > 20) {
							record['������_�󒍋��z��r1']['value'] = 'C';
						} else {
							record['������_�󒍋��z��r1']['value'] = 'D';
						}

						// ���l_�󒍋��z��r2�̌v�Z
						if (record['���l_B���ڌo��']['value'] !== ''
								|| record['���l_B���ڌo��']['value'] !== undefined) {
							num1 = Number(record['���l_B���ڌo��']['value']);
							num2 = Number(record['���l_���ڌo��']['value']);
							
							var work =  Math.round((num1 - num2) / num1 * 100);
							if(isNaN(work)){
								record['���l_�󒍋��z��r2']['value'] = '0';
							}
							else{
								record['���l_�󒍋��z��r2']['value'] = work;
							}							
						}
						num1 = Number(record['���l_�󒍋��z��r2']['value']);
						if (num1 > 60) {
							record['������_�󒍋��z��r2']['value'] = 'A';
						} else if (num1 > 40) {
							record['������_�󒍋��z��r2']['value'] = 'B';
						} else if (num1 > 20) {
							record['������_�󒍋��z��r2']['value'] = 'C';
						} else {
							record['������_�󒍋��z��r2']['value'] = 'D';
						}

						// ���l_�󒍋��z��r3�̌v�Z
						if (record['���l_B�@�ޔ�']['value'] !== ''
								|| record['���l_B�@�ޔ�']['value'] !== undefined) {
							num1 = Number(record['���l_B�@�ޔ�']['value']);
							num2 = Number(record['���l_�@�ޔ��']['value']);
							
							var work =  Math.round((num1 - num2) / num1 * 100);
							if(isNaN(work)){
								record['���l_�󒍋��z��r3']['value'] = '0';
							}
							else{
								record['���l_�󒍋��z��r3']['value'] = work;
							}
						}
						num1 = Number(record['���l_�󒍋��z��r3']['value']);
						if (num1 > 60) {
							record['������_�󒍋��z��r3']['value'] = 'A';
						} else if (num1 > 40) {
							record['������_�󒍋��z��r3']['value'] = 'B';
						} else if (num1 > 20) {
							record['������_�󒍋��z��r3']['value'] = 'C';
						} else {
							record['������_�󒍋��z��r3']['value'] = 'D';
						}

						// ���l_�󒍋��z��r4�̌v�Z
						if (record['���l_B���o��']['value'] !== ''
								|| record['���l_B���o��']['value'] !== undefined) {
							num1 = Number(record['���l_B���o��']['value']);
							num2 = Number(record['���l_�@�ޔ�']['value']);
							
							var work =  Math.round((num1 - num2) / num1 * 100);
							if(isNaN(work)){
								record['���l_�󒍋��z��r4']['value'] = '0';
							}
							else{
								record['���l_�󒍋��z��r4']['value'] = work;
							}							
						}
						num1 = Number(record['���l_�󒍋��z��r4']['value']);
						if (num1 > 60) {
							record['������_�󒍋��z��r4']['value'] = 'A';
						} else if (num1 > 40) {
							record['������_�󒍋��z��r4']['value'] = 'B';
						} else if (num1 > 20) {
							record['������_�󒍋��z��r4']['value'] = 'C';
						} else {
							record['������_�󒍋��z��r4']['value'] = 'D';
						}

						// ���l_�󒍋��z��r5�̌v�Z
						if (record['���l_�󒍋��z']['value'] !== ''
								|| record['���l_�󒍋��z']['value'] !== undefined) {
							num1 = Number(record['���l_�󒍋��z']['value']);
							num2 = Number(record['���l_�������v']['value']);
							
							var work =  Math.round((num1 - num2) / num1 * 100);
							if(isNaN(work)){
								record['���l_�󒍋��z��r5']['value'] = '0';
							}
							else{
								record['���l_�󒍋��z��r5']['value'] = work;
							}																																									
						}

						// ���l_������z��r1�̌v�Z
						if (record['���l_C�J����']['value'] !== ''
								|| record['���l_C�J����']['value'] !== undefined) {
							num1 = Number(record['���l_C�J����']['value']);
							num2 = Number(record['���l_�Ј��l����']['value']);
							num3 = Number(record['���l_�O����']['value']);
							
							var work =  Math.round((num1 - num2 - num3) / num1 * 100);
							if(isNaN(work)){
								record['���l_������z��r1']['value'] = '0';
							}
							else{
								record['���l_������z��r1']['value'] = work;
							}																					
						}
						num1 = Number(record['���l_������z��r1']['value']);
						if (num1 > 60) {
							record['������_������z��r1']['value'] = 'A';
						} else if (num1 > 40) {
							record['������_������z��r1']['value'] = 'B';
						} else if (num1 > 20) {
							record['������_������z��r1']['value'] = 'C';
						} else {
							record['������_������z��r1']['value'] = 'D';
						}

						// ���l_������z��r2�̌v�Z
						if (record['���l_C���ڌo��']['value'] !== ''
								|| record['���l_C���ڌo��']['value'] !== undefined) {
							num1 = Number(record['���l_C���ڌo��']['value']);
							num2 = Number(record['���l_���ڌo��']['value']);
							
							var work =  Math.round((num1 - num2) / num1 * 100);
							if(isNaN(work)){
								record['���l_������z��r2']['value'] = '0';
							}
							else{
								record['���l_������z��r2']['value'] = work;
							}							
						}
						num1 = Number(record['���l_������z��r2']['value']);
						if (num1 > 60) {
							record['������_������z��r2']['value'] = 'A';
						} else if (num1 > 40) {
							record['������_������z��r2']['value'] = 'B';
						} else if (num1 > 20) {
							record['������_������z��r2']['value'] = 'C';
						} else {
							record['������_������z��r2']['value'] = 'D';
						}

						// ���l_������z��r3�̌v�Z
						if (record['���l_C�@�ޔ�']['value'] !== ''
								|| record['���l_C�@�ޔ�']['value'] !== undefined) {
							num1 = Number(record['���l_C�@�ޔ�']['value']);
							num2 = Number(record['���l_�@�ޔ��']['value']);
							
							var work =  Math.round((num1 - num2) / num1 * 100);
							if(isNaN(work)){
								record['���l_������z��r3']['value'] = '0';
							}
							else{
								record['���l_������z��r3']['value'] = work;
							}
						}
						num1 = Number(record['���l_������z��r3']['value']);
						if (num1 > 60) {
							record['������_������z��r3']['value'] = 'A';
						} else if (num1 > 40) {
							record['������_������z��r3']['value'] = 'B';
						} else if (num1 > 20) {
							record['������_������z��r3']['value'] = 'C';
						} else {
							record['������_������z��r3']['value'] = 'D';
						}

						// ���l_������z��r4�̌v�Z
						if (record['���l_C���o��']['value'] !== ''
								|| record['���l_C���o��']['value'] !== undefined) {
							num1 = Number(record['���l_C���o��']['value']);
							num2 = Number(record['���l_�@�ޔ�']['value']);
							
							var work =  Math.round((num1 - num2) / num1 * 100);
							if(isNaN(work)){
								record['���l_������z��r4']['value'] = '0';
							}
							else{
								record['���l_������z��r4']['value'] = work;
							}
						}
						num1 = Number(record['���l_������z��r4']['value']);
						if (num1 > 60) {
							record['������_������z��r4']['value'] = 'A';
						} else if (num1 > 40) {
							record['������_������z��r4']['value'] = 'B';
						} else if (num1 > 20) {
							record['������_������z��r4']['value'] = 'C';
						} else {
							record['������_������z��r4']['value'] = 'D';
						}

						// ���l_������z��r5�̌v�Z
						if (record['���l_������z']['value'] !== ''
								|| record['���l_������z']['value'] !== undefined) {
							num1 = Number(record['���l_������z']['value']);
							num2 = Number(record['���l_�������v']['value']);
							
							var work =  Math.round((num1 - num2) / num1 * 100);
							if(isNaN(work)){
								record['���l_������z��r5']['value'] = '0';
							}
							else{
								record['���l_������z��r5']['value'] = work;
							}
						}

						// �m�蔻��
						if (record['���l_���ꗘ�v']['value'] !== ''
								|| record['���l_���ꗘ�v']['value'] !== undefined) {
							num1 = Number(record['���l_���ꗘ�v']['value']);
							if (num1 > 60) {
								record['������_�m�蔻��']['value'] = 'A';
							} else if (num1 > 40) {
								record['������_�m�蔻��']['value'] = 'B';
							} else if (num1 > 20) {
								record['������_�m�蔻��']['value'] = 'C';
							} else {
								record['������_�m�蔻��']['value'] = 'D';
							}
						}

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
								query : ' ������_�H�ԍ��v1 like "' + koban
										+ '" or ������_�H�ԍ��v2 like "' + koban
										+ '" or ������_�H�ԍ��v3 like "' + koban
										+ '" or ������_�H�ԍ��v4 like "' + koban
										+ '" or ������_�H�ԍ��v5 like "' + koban
										+ '" or ������_�H�ԍ��v6 like "' + koban
										+ '" or ������_�H�ԍ��v7 like "' + koban
										+ '" or ������_�H�ԍ��v8 like "' + koban
										+ '" or ������_�H�ԍ��v9 like "' + koban
										+ '" or ������_�H�ԍ��v10 like "' + koban
										+ '"  order by ���R�[�h�ԍ� asc limit '
										+ limit + ' offset ' + offset
							};

							var str = ' ������_�H�ԍ��v1 like "' + koban
									+ '" or ������_�H�ԍ��v2 like "' + koban
									+ '" or ������_�H�ԍ��v3 like "' + koban
									+ '" or ������_�H�ԍ��v4 like "' + koban
									+ '" or ������_�H�ԍ��v5 like "' + koban
									+ '" or ������_�H�ԍ��v6 like "' + koban
									+ '" or ������_�H�ԍ��v7 like "' + koban
									+ '" or ������_�H�ԍ��v8 like "' + koban
									+ '" or ������_�H�ԍ��v9 like "' + koban
									+ '" or ������_�H�ԍ��v10 like "' + koban
									+ '"  order by ���R�[�h�ԍ� asc limit ' + limit
									+ ' offset ' + offset;

							console.log(str);

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
											
																				
											var url = 'https://keisokunet.s.cybozu.com/k/v1/record.json';
											var body = {
											    "app": kintone.app.getId(),
											    "id": kintone.app.record.getId(),
											    "record": {
											        "���l_���i�w�����v": {
											            "value": record['���l_���i�w�����v']['value']
											        },
											        "���l_�O����v": {
											            "value": record['���l_�O����v']['value']
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
																					

										});

						return event;

					});

})();