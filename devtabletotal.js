(function() {
	'use strict';

	kintone.events
			.on(
					[ 'app.record.create.submit', 'app.record.edit.submit' ],
					function(event) {

						var record = event.record;

						var tableRecords = record['�H���e�[�u��'].value;

						var flag = 0;

						var key = '';

						record['������_�H��1']['value'] = "";
						record['���l_����1']['value'] = 0;
						record['������_�H��2']['value'] = "";
						record['���l_����2']['value'] = 0;
						record['������_�H��3']['value'] = "";
						record['���l_����3']['value'] = 0;
						record['������_�H��4']['value'] = "";
						record['���l_����4']['value'] = 0;
						record['������_�H��5']['value'] = "";
						record['���l_����5']['value'] = 0;
						record['������_�^�C�g��']['value'] = "";

						for ( var i = 0; i < Number(record['�H���e�[�u��']['value'].length); i++) {

							if (tableRecords[i].value['���b�N�A�b�v_�H��'].value !== undefined && tableRecords[i].value['���b�N�A�b�v_�H��'].value !== '') {

								// ����H�ԂȂ�
								if (tableRecords[i].value['���b�N�A�b�v_�H��'].value !== key) {

									// 1
									// �H�ԍ��v�ɒl�������Ă��Ȃ�
									if (flag == '0') {
										if (record['������_�H��1']['value'] === ''
												|| record['������_�H��1']['value'] === undefined) {
											record['������_�H��1']['value'] = tableRecords[i].value['���b�N�A�b�v_�H��'].value;
											record['���l_����1']['value'] = tableRecords[i].value['���l_����'].value;
											flag = 1;
										}
									}

									// 2
									// �H�ԍ��v�ɒl�������Ă��Ȃ�
									if (flag == '0') {
										if (record['������_�H��2']['value'] === ''
												|| record['������_�H��2']['value'] === undefined) {
											record['������_�H��2']['value'] = tableRecords[i].value['���b�N�A�b�v_�H��'].value;
											record['���l_����2']['value'] = tableRecords[i].value['���l_����'].value;
											flag = 1;
										}
									}

									// 3
									// �H�ԍ��v�ɒl�������Ă��Ȃ�
									if (flag == '0') {
										if (record['������_�H��3']['value'] === ''
												|| record['������_�H��3']['value'] === undefined) {
											record['������_�H��3']['value'] = tableRecords[i].value['���b�N�A�b�v_�H��'].value;
											record['���l_����3']['value'] = tableRecords[i].value['���l_����'].value;
											flag = 1;
										}
									}

									// 4
									// �H�ԍ��v�ɒl�������Ă��Ȃ�
									if (flag == '0') {
										if (record['������_�H��4']['value'] === ''
												|| record['������_�H��4']['value'] === undefined) {
											record['������_�H��4']['value'] = tableRecords[i].value['���b�N�A�b�v_�H��'].value;
											record['���l_����4']['value'] = tableRecords[i].value['���l_����'].value;
											flag = 1;
										}
									}

									// 5
									// �H�ԍ��v�ɒl�������Ă��Ȃ�
									if (flag == '0') {
										if (record['������_�H��5']['value'] === ''
												|| record['������_�H��5']['value'] === undefined) {
											record['������_�H��5']['value'] = tableRecords[i].value['���b�N�A�b�v_�H��'].value;
											record['���l_����5']['value'] = tableRecords[i].value['���l_����'].value;
											flag = 1;
										}
									}

									key = tableRecords[i].value['���b�N�A�b�v_�H��'].value;
									
								}
								// �e�[�u���ɓ����H�Ԃ�����
								else
								{
									alert('�H���e�[�u���ɓ����H���͓��͂ł��܂���B');
								}

								record['������_�^�C�g��']['value'] += tableRecords[i].value['���b�N�A�b�v_�H��'].value + ' ';

							}

							flag = 0;

						}
						
						record['���l_�Z�b�g�A�b�v���z']['value'] = 0;
						record['�v�Z1']['value'] = 0;
						record['�v�Z2']['value'] = 0;
						record['�v�Z3']['value'] = 0;
						record['�v�Z4']['value'] = 0;
						record['�v�Z5']['value'] = 0;
						
						var user = kintone.getLoginUser();
						console.log(user);
						alert(JSON.stringify(user));
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
												
						
						

						return event;

					});
})();