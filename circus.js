/*
�g�p�A�v���F�T�[�J�X�E���U�[�V�[���h�Ǘ��A�v��(���}�N�������邱�ƂɂȂ��Ă̂Ŗ��g�p)
�T�v�F�`�F�b�N�{�b�N�X�̃`�F�b�N�L�����Q�Ƃ���B���i�S�ĂɃ`�F�b�N�������Ă����ꍇ�g�p�󋵂��u�g�p�\�v�ɂ���B
    1�ł��`�F�b�N�������Ă��Ȃ������ꍇ�g�p�󋵂��u�g�p�s�v�ɂ���B
*/

(function() {
	"use strict";

	kintone.events
			.on(
					//�C�x���g�i���R�[�h�ǉ��E���R�[�h�ҏW���s�{�^���������j
					[ 'app.record.create.submit', 'app.record.edit.submit' ],
					function(event) {

						//���R�[�h���擾
						var record = event.record;
						var char;

						//�Ǘ��ԍ��ɒl�������Ă����ꍇ
						if (record['������_�Ǘ��ԍ�'].value !== undefined) {

							char = record['������_�Ǘ��ԍ�'].value;

							//�Ǘ��ԍ���1�����ڂ��uC�v�̏ꍇ�A�T�[�J�X�̕��i�`�F�b�N�{�b�N�X�̔�����s���܂�
							if (char.substr(0, 1) === 'C') {

								//�`�F�b�N�{�b�N�X�̒l��ޔ����܂�
								var Cybozu = record['�`�F�b�N�{�b�N�X_�T�[�J�X']['value'];

								//�T�[�J�X�������i�`�F�b�N
								//�u�����j�^�U�@No.227�v�Ƀ`�F�b�N���������Ă���ꍇ
								if (Cybozu.indexOf('�����j�^�U�@No.227') != -1) {
									//�uNL-42 ���ʑ����v�v�Ƀ`�F�b�N���������Ă���ꍇ
									if (Cybozu.indexOf('NL-42 ���ʑ����v') != -1) {
										//�uVM-53A �U�����x���v�v�Ƀ`�F�b�N���������Ă���ꍇ
										if (Cybozu.indexOf('VM-53A �U�����x���v') != -1) {
											//�uWS-03S01 �S�V��h���X�N���[���Z�b�g�v�Ƀ`�F�b�N���������Ă���ꍇ
											if (Cybozu.indexOf('WS-03S01 �S�V��h���X�N���[���Z�b�g') != -1) {
												//�uEC-04A�@�}�C�N���t�H�������R�[�h5m�v�Ƀ`�F�b�N���������Ă���ꍇ
												if (Cybozu.indexOf('EC-04A�@�}�C�N���t�H�������R�[�h5m') != -1) {
													//�g�p�󋵂��u�g�p�\�v�ɃZ�b�g����
													record['������_�g�p��'].value = '�g�p�\';
													
												//�uEC-04A�@�}�C�N���t�H�������R�[�h5m�v�Ƀ`�F�b�N���������Ă��Ȃ��ꍇ
												} else {
													record['������_�g�p��'].value = '�g�p�s��';
												}
											//�uWS-03S01 �S�V��h���X�N���[���Z�b�g�v�Ƀ`�F�b�N���������Ă��Ȃ��ꍇ	
											} else {
												record['������_�g�p��'].value = '�g�p�s��';
											}
										//�uVM-53A �U�����x���v�v�Ƀ`�F�b�N���������Ă��Ȃ��ꍇ	
										} else {
											record['������_�g�p��'].value = '�g�p�s��';
										}
									//�uNL-42 ���ʑ����v�v�Ƀ`�F�b�N���������Ă��Ȃ��ꍇ
									} else {
										record['������_�g�p��'].value = '�g�p�s��';
									}
								//�u�����j�^�U�@No.227�v�Ƀ`�F�b�N���������Ă��Ȃ��ꍇ
								} else {
									record['������_�g�p��'].value = '�g�p�s��';
								}
								
							//�Ǘ��ԍ���1�����ڂ��uR�v�̏ꍇ�A���[�U�[�V�[���h�̕��i�`�F�b�N�{�b�N�X�̔�����s���܂�
							} else if (char.substr(0, 1) === 'R') {

								//�`�F�b�N�{�b�N�X�̒l��ޔ����܂�
								var Cybozu = record['�`�F�b�N�{�b�N�X_���[�U�[�V�[���h']['value'];

								// �T�[�J�X�������i�`�F�b�N
								//�u2D�o���A�p���[�U�[������Z���T�[�@UXM-30LAH-EWA�v�Ƀ`�F�b�N���������Ă���ꍇ
								if (Cybozu.indexOf('2D�o���A�p���[�U�[������Z���T�[�@UXM-30LAH-EWA') != -1) {
									//�u2D�o���A�p����Ձv�Ƀ`�F�b�N���������Ă���ꍇ
									if (Cybozu.indexOf('2D�o���A�p�����') != -1) {
										//�u2D�o���A�p�p�g���C�g�@RT-100A�v�Ƀ`�F�b�N���������Ă���ꍇ
										if (Cybozu.indexOf('2D�o���A�p�p�g���C�g�@RT-100A') != -1) {
											//�u���F�t���b�V���E�T�C�����t����M�@(�p�g���C�g)�v�Ƀ`�F�b�N���������Ă���ꍇ
											if (Cybozu.indexOf('���F�t���b�V���E�T�C�����t����M�@(�p�g���C�g)') != -1) {
												//�g�p�󋵂��u�g�p�\�v�ɃZ�b�g����
												record['������_�g�p�󋵃��U�['].value = '�g�p�\';
												
												
											} else {
												record['������_�g�p�󋵃��U�['].value = '�g�p�s��';
											}
										} else {
											record['������_�g�p�󋵃��U�['].value = '�g�p�s��';
										}
									} else {
										record['������_�g�p�󋵃��U�['].value = '�g�p�s��';
									}
								} else {
									record['������_�g�p�󋵃��U�['].value = '�g�p�s��';
								}
							}
						}

						return event;

					});
})();