/*
�g�p�A�v���F����Ǘ�(�W�v�p)
�T�v�F����Ǘ��A�v���̃��R�[�h���擾���A�W�v�����܂�(�ꗗ�̃{�^��������)
�W�v�L�[�́u�c�Ə��v�u�c�ƒS���v�u���t�v
*/
(function() {
    "use strict";
    
    //���ς��Ȃ�
    kintone.events.on('app.record.index.show', function(event) {
    	
    	//���ς��Ȃ�
        if (document.getElementById('my_index_button') !== null) {
            return;
        }
        
        //���ς��Ȃ�
        //�{�^�����ꗗ��ʂɔz�u���鏈����
        var myIndexButton = document.createElement('button');
        myIndexButton.id = 'my_index_button';
        //�{�^������ς�������Ες��
        myIndexButton.innerText = '�ꗗ�̃{�^��';
        //��

        //�{�^���N���b�N���̏�����
        myIndexButton.onclick = function() {
        	
        	//����Ǘ��A�v����ID(���R�[�h���擾�������A�v����ID)
        	var TappId = 338;

        	//�ʃA�v���̃��R�[�h�ꊇ�擾������
        	//�����o�O����Ȃ̂ŎQ�l�ɂ��Ȃ��ł�����������
        	//�����Q�l�ɂ������Ώꍇ�͌����Ǘ��A�v���́ucalc.js�v�����Ă�����������
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
        	//�ʃA�v���̃��R�[�h�擾������
        	
        	//���ς��Ȃ�
        	fetchRecords(TappId).then(
        					function(records) {        						
        			            
        						//����Ǘ�(�W�v�p)�̃A�v��ID
        						var body = {
        							    "app": 349,
        							};
        						
        						//���R�[�h�ꊇ�擾����
        							kintone.api(kintone.api.url('/k/v1/records', true), 'GET', body, function(resp) {
        								
        								//�W�v���z�p�̕ϐ��@���������Ă��܂�
        								var total = 0;
        								var totalmikomi = 0;         								 
        								
        								//���R�[�h��1���ȏ゠�����ꍇ�A�W�v�������s���܂�
        								if(resp.records.length >= 1){
        									
        									//�W�v�p�A�v���̃��R�[�h�����J��Ԃ��܂�(resp.records.length)��
        									for ( var i = 0; i < resp.records.length; i++) {
        										
        										//�W�v�p�A�v���Ƀ��R�[�h(resp.records[i])��ϐ�(rec)�ɑޔ����܂�
        										var rec = resp.records[i];        										       										
        										      											        											
    											//�W�v�p�A�v����(rec['���t_�J�n'].value)(rec['���t_�I��'].value)��ϐ��ɑ΂��܂�	
        										var start = rec['���t_�J�n'].value.replace(/-/g,'');   												
        										var end = rec['���t_�I��'].value.replace(/-/g,'');
    											//�W�v�L�[�p�̕ϐ��@���������܂�	
        										//�W�v�A�v���̃L�[
        										var place = "";
        										//����Ǘ��A�v���̃L�[
        										var kanriplace = "";
    												
    											//�W�v�A�v���̃L�[�ޔ�����	
        										if(rec['�h���b�v�_�E��_�c�Ə�'].value !== null){
        											//�c�Ə��ɒl���͂��Ă���Αޔ�	
        											place = rec['�h���b�v�_�E��_�c�Ə�'].value;    													    												
        										}    												
        										else if(Object.keys(rec['���[�U�[�I��_�c�ƒS��'].value).length){        											
        											//�c�ƒS���ɒl�������Ă���Αޔ�
        											place = rec['���[�U�[�I��_�c�ƒS��'].value;    													    												
        										}
        										//�c�Ə��ɂ��c�ƒS���ɂ��l�������Ă��Ȃ��ꍇ�́A���b�Z�[�W���o���܂��B
        										else{		
        											place = "YYY";    													    													    													
        											alert('�c�Ə��Ɖc�ƒS���ǂ�������͂��Ă��Ȃ����R�[�h������܂��B');    												
        										}    												
    													
    												//����Ǘ��A�v���̃��R�[�h�����J��Ԃ��܂�(�L�[��������)��
    												for ( var k = 0; k < records.length; k++) {
    													
    													//����Ǘ��A�v���̃L�[�ޔ�����
        												if(rec['�h���b�v�_�E��_�c�Ə�'].value !== null){
        													//�c�Ə��ɒl���͂��Ă���Αޔ�	
        													kanriplace = records[k]['�h���b�v�_�E��']['value'];   													
        												}
        												else if(Object.keys(rec['���[�U�[�I��_�c�ƒS��'].value).length){
        													//�c�ƒS���ɒl�������Ă���Αޔ�
        													kanriplace = records[k]['���[�U�[�I��']['value']; 
        												}
        												//�c�Ə��ɂ��c�ƒS���ɂ��l�������Ă��Ȃ��ꍇ�́A���肦�Ȃ��l�����܂�(�Ȃ�ƂȂ�)
        												else{
        													kanriplace = "XXX";
        												}
    													
    													
    													//����Ǘ��ƏW�v�p�ŃL�[�����v���邩�̔��菈��
        												//����Ǘ��̉c�Ə�=�W�v�̉c�Ə����聫
    													if(kanriplace === place){
    														
    														//�c�Ə��̃L�[�����v�����ꍇ�͔���Ǘ��̃T�}���[����ڍ׃e�[�u�����Q�Ƃ����z���Z���܂�
    														//�T�}���[����ڍ׃e�[�u����ϐ�(tableRecords)�ɑޔ����܂�
    														var tableRecords = records[k].�T�}���[����ڍ�.value;
    														
    														//�T�}���[����ڍ׃e�[�u���̖��א����A���z���Z�������J��Ԃ��܂�
    														for ( var j = 0; j < tableRecords.length; j++) {
    															
    															//�T�}���[����ڍ׃e�[�u���̓��t�ޔ�����
    															var date = tableRecords[j].value['contact_date'].value.replace(/-/g,'');
    															
    															//���㌎���W�v�̊��Ԃ͈͓̔����̔���
    															if(parseInt(start) <= parseInt(date) && parseInt(date) <= parseInt(end)){
    																
    																//null���蔄����z
    																if (tableRecords[j].value['������z'].value) { 
    																	//������z�̍��Z
    																	total += parseInt(tableRecords[j].value['������z'].value);																	
    																}
    																//null���茩�����z
    																if (tableRecords[j].value['�������z'].value) {
    																	//�������z�̍��Z
    																	totalmikomi += parseInt(tableRecords[j].value['�������z'].value);    																	
    																}
    															}
    														}																												
    													}
        												//����Ǘ��̉c�Ə�=�W�v�̉c�Ə����聪
    													//����Ǘ��̉c�ƒS��=�W�v�̉c�ƒS�����聫
    													else if(Object.keys(rec['���[�U�[�I��_�c�ƒS��'].value).length){
    														if(JSON.stringify(kanriplace) === JSON.stringify(place)){
        														var tableRecords = records[k].�T�}���[����ڍ�.value;												
        														for ( var j = 0; j < tableRecords.length; j++) {
        															
        															var date = tableRecords[j].value['contact_date'].value.replace(/-/g,'');
        															
        															//���㌎���W�v�̊��Ԃ͈͓̔�
        															if(parseInt(start) <= parseInt(date) && parseInt(date) <= parseInt(end)){
        																
        																//null���蔄����z
        																if (tableRecords[j].value['������z'].value) {    																	
        																	total += parseInt(tableRecords[j].value['������z'].value);																	
        																}
        																//null���茩�����z
        																if (tableRecords[j].value['�������z'].value) {   																	
        																	totalmikomi += parseInt(tableRecords[j].value['�������z'].value);    																	
        																}
        															}
        														}    															
    														}
    													}
    													//����Ǘ��̉c�ƒS��=�W�v�̉c�ƒS�����聪
    												}
    												//����Ǘ��A�v���̃��R�[�h�����J��Ԃ��܂�(�L�[��������)��
    												
    												//�B�����v�Z
    												var calc = (Number(total) / Number(rec['���l_�ڕW���z'].value)) * 100;
    												   												    																	
    												
                    								//�W�v�������z���X�V���܂�
    												var putrec = {
                    									    "app": kintone.app.getId(),
                    									    "records": [
                    									        {
                    									            "id": rec['���R�[�h�ԍ�'].value,
                    									            "record": {
                    									                "���l_������z": {
                    									                    "value": total.toLocaleString()
                    									                },
                    									                "���l_�������z": {
                    									                    "value": totalmikomi.toLocaleString()
                    									                },
                    									                "���l_�m�茩��": {
                    									                    "value": (Number(total) + Number(totalmikomi)).toLocaleString()
                    									                },
                    									                "���l_�B����": {
                    									                    "value": Math.round(calc * 100) / 100
                    									                }
                    									                
                    									            }
                    									        }
                    									    ]
                    									};
                    								                    								                     								                   								               									
                    								//���R�[�h�X�V������
    												//�����ς��Ȃ�
    												kintone.api(kintone.api.url('/k/v1/records', true), 'PUT', putrec, function(result) {
                    								    // success
                    								    console.log(result);
                    								}, function(error) {
                    								    // error
                    								    console.log(error);
                    								});
                    								//���R�[�h�X�V������
                    								
                    								total = 0;
                    								totalmikomi = 0;                    								
        										            									                								               								                								        										
        									}        									
        									//�W�v�p�A�v���̃��R�[�h�����J��Ԃ��܂�(resp.records.length)��

        									//�W�v���I������烁�b�Z�[�W���o���܂�
        									alert('�W�v���I���܂����B');	
        									//��ʍX�V����
        									//��������������??
        									window.location.reload();
        								}
        								//���R�[�h��1���ȏ゠�����ꍇ�A�W�v�������s���܂���else
        								else{
            								window.confirm('���R�[�h���Ȃ��̂ŏW�v�ł��܂���');
        								}        								        								       								        								
        								        								        								
										//����
        								return event;        								
        							    
        							}, function(error) {
        							    // error
        							    console.log(error);
        							});
        			                    			                    			            
        					});        	       	
        	
        };
        //�{�^���N���b�N���̏�����

        //���ς��Ȃ�
        //�{�^���v�f����ʂɖ��ߍ��ޏ���
        kintone.app.getHeaderMenuSpaceElement().appendChild(myIndexButton);
    });
})();