(function() {
    "use strict";
    kintone.events.on('app.record.index.show', function(event) {
        if (document.getElementById('my_index_button') !== null) {
            return;
        }

        var myIndexButton = document.createElement('button');
        myIndexButton.id = 'my_index_button';
        myIndexButton.innerText = '�ꗗ�̃{�^��';

        // �{�^���N���b�N���̏���
        myIndexButton.onclick = function() {
        	
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

        	fetchRecords(TappId).then(
        					function(records) {        						
        			            
        						var body = {
        							    "app": 349,
        							};

        							kintone.api(kintone.api.url('/k/v1/records', true), 'GET', body, function(resp) {
        							    // success
        								
        								var total = 0;
        								var totalmikomi = 0;         								 
        								
        								if(resp.records.length >= 1){
        									
        									for ( var i = 0; i < resp.records.length; i++) {
        										
        										var rec = resp.records[i];        										       										
        										
        										if (rec['���t_�J�n'].value !== null	&& rec['���t_�I��'].value !== null && rec['�h���b�v�_�E��_�c�Ə�'].value !== null) {
       											        											
    												var start = rec['���t_�J�n'].value.replace(/-/g,'');
    												var end = rec['���t_�I��'].value.replace(/-/g,'');
    												var place = rec['�h���b�v�_�E��_�c�Ə�'].value;
    												
    												for ( var k = 0; k < records.length; k++) {
    													
    													//����Ǘ��̉c�Ə�=�W�v�̉c�Ə�����
    													if(records[k]['�h���b�v�_�E��']['value'] == place){    														
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
    												
    												//�B�����v�Z
    												var calc = (Number(total) / Number(rec['���l_�ڕW���z'].value)) * 100;
    												   												
/*    												alert('calc;' + calc);*/    																	
    												
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
                    								                    								                     								                   								               									
                    								kintone.api(kintone.api.url('/k/v1/records', true), 'PUT', putrec, function(result) {
                    								    // success
                    								    console.log(result);
                    								}, function(error) {
                    								    // error
                    								    console.log(error);
                    								});
                    								
                    								total = 0;
                    								totalmikomi = 0;
                    								
        										}
        										            									                								               								                								        										
        									}        									
        									
        									alert('�W�v���I���܂����B');	       									
        									window.location.reload();
        								}
        								else{
            								window.confirm('���R�[�h���Ȃ��̂ŏW�v�ł��܂���');
        								}        								        								       								        								
        								        								        								
										return event;        								
        							    
        							}, function(error) {
        							    // error
        							    console.log(error);
        							});
        			                    			                    			            
        					});        	       	
        	
        };

        kintone.app.getHeaderMenuSpaceElement().appendChild(myIndexButton);
    });
})();