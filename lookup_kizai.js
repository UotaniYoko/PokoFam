/*
�g�p�A�v���F�w���\�����A�v��
�T�v�F�g�c���A�v�����烋�b�N�A�b�v�Ńe�[�u���������Ă��܂�
���ӎ����F
1.�Q�ƌ��ƎQ�Ɛ�A�v���̃e�[�u�����C�A�E�g�𓯈�ɂ���(�e�[�u�����A�t�B�[���h�R�[�h�A���ڐ��S��)
2.�Q�Ɛ�A�v���Ƀ��R�[�hID(���l�t�B�[���h)���`���A�t�B�[���h�R�[�h�����u���R�[�h�v�ɂ���
3.���Œ�`�������R�[�hID�̈ʒu��1�ԉ��ɂ���
*/
(function() {
	'use strict';
	
	kintone.events
			.on(
					//���ς��Ȃ�
					[ 'app.record.create.change.���R�[�h',
							'app.record.edit.change.���R�[�h' ],
					function(event) {

						//���ς��Ȃ�
						var targetAppId = kintone.app
								.getLookupTargetAppId('Lookup');
						//���ς��Ȃ�
						var targetRecordId = event.record['���R�[�h'].value;

						// ���b�N�A�b�v�N���A��������e�[�u������ɂ���
						//���ς��Ȃ�
						if (!targetRecordId) {
							
							//�����ς��遦��
							//�Q�Ƃ������e�[�u�����ɕς���
							event.record['����R�[�h'].value = [];
							return event;
						}

						//���ς��Ȃ�
						var body = {
							app : targetAppId,
							id : targetRecordId,
						};
						kintone
								.api(
										//���ς��Ȃ�
										kintone.api.url('/k/v1/record', true),
										'GET',
										body,
										function(resp) {

											//�����ς��遦��
											//�Q�Ƃ������e�[�u�����ɕς���											
											event.record['����R�[�h'].value = resp.record['����R�[�h'].value;
											
											
											//���b�N�A�b�v�����e�[�u����ҏW�s�ɂ������ꍇ�́��̃R�����g���O��
											/*
											 * // �T�u�e�[�u����ҏW�s�ɂ���ꍇ
											 * event.record['���i'].value.forEach(function(obj) {
											 * Object.keys(obj.value).forEach(function(params) {
											 * obj.value[params].disabled =
											 * true; }); });
											 */

											//���ς��Ȃ�
											kintone.app.record.set(event);
											//���ς��Ȃ�
										}, function(err) {
											//���ς��Ȃ�
											alert('REST API�ŃG���[���������܂���');
										});




					});
})();