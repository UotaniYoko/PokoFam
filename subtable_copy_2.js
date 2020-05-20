(function() {
	'use strict';

	kintone.events.on([ 'app.record.edit.show', 'app.record.create.show' ], function(event) {

		var user = kintone.getLoginUser();


		
		if(user.code === 'miura5017' || user.code === 'hamashima0437' || user.code === 'sano7375' || user.code === 'sugimura8919' || user.code === 'koyama3326'){
					
/*			alert('bello^^!' + user.code);*/
							
	        // �C�ӂ̃X�y�[�X�t�B�[���h�Ƀ{�^����ݒu
	        var mySpaceFieldButton = document.createElement('button');
	        mySpaceFieldButton.id = 'my_space_field_button';
	        mySpaceFieldButton.innerText = '�e�[�u���R�s�[';	
	        
	        mySpaceFieldButton.onclick = function () {
	        	
	    		// �u�g�c���v�̃��R�[�h���擾
	        	var rec = kintone.app.record.get(); //���R�[�h���擾
	    		var record = rec.record;
	        	
	    		// �T�u�e�[�u��(�g�c���F��)�I�u�W�F�N�g���擾
	    		var tableRecords = record.�����i.value;
	    		// �T�u�e�[�u��(�g�c���F��)�̓��e��z��Ɋi�[
	    		var subtable = [];
	    		for ( var i = 0; i < tableRecords.length; i++) {
	    			subtable.push({
	    				value : {
	    					"�����i��" : {
	    						value : tableRecords[i].value['�����i��'].value,
	    						type : 'SINGLE_LINE_TEXT',
	    					},
	    					"���i��" : {
	    						value : tableRecords[i].value['���i��'].value,
	    						type : 'SINGLE_LINE_TEXT',
	    					},
	    					"���P��" : {
	    						value : tableRecords[i].value['���P��'].value,
	    						type : 'NUMBER',
	    					},
	    					"������" : {
	    						value : tableRecords[i].value['������'].value,
	    						type : 'NUMBER', 
	    					},
	    					"�����z" : {
	    						value : tableRecords[i].value['�����z'].value,
	    						type : 'CALC',
	    					},
	    					"�����l" : {
	    						value : tableRecords[i].value['�����l'].value,
	    						type : 'SINGLE_LINE_TEXT',
	    					},
	    					"���w����" : {
	    						value : tableRecords[i].value['���w����'].value,
	    						type : 'SINGLE_LINE_TEXT',
	    					},
	    					"����]�[��" : {
	    						value : tableRecords[i].value['����]�[��'].value,
	    						type : 'SINGLE_LINE_TEXT',
	    					},
	    					"���h���b�v�_�E��_���" : {
	    						value : tableRecords[i].value['���h���b�v�_�E��_���'].value,
	    						type : 'DROP_DOWN',
	    					},
	    					"�����t_�[�i��" : {
	    						value : tableRecords[i].value['�����t_�[�i��'].value,
	    						type : 'DATE',
	    					},
	    					"�����b�N�A�b�v_�H��" : {
	    						value : tableRecords[i].value['�����b�N�A�b�v_�H��'].value,
	    						type : 'SINGLE_LINE_TEXT',
	    					},
	    					"��������_����" : {
	    						value : tableRecords[i].value['��������_����'].value,
	    						type : 'SINGLE_LINE_TEXT',
	    					},
	    					"�������Ǘ�" : {
	    						value : tableRecords[i].value['�������Ǘ�'].value,
	    						type : 'DROP_DOWN',
	    					},
	    				}
	    			});
	    		}
	    		
	    		
	    		//�e�[�u��������
	    		record.���i.value = [];
	    		   			    			    		
	    		
	    		for ( var j = 0; j < tableRecords.length; j++) {
	    			record.���i.value.push({
	    				value : {
	    					"���i��" : {
	    						value : tableRecords[j].value['�����i��'].value,
	    						type : 'SINGLE_LINE_TEXT',
	    					},
	    					"�i��" : {
	    						value : tableRecords[j].value['���i��'].value,
	    						type : 'SINGLE_LINE_TEXT',
	    					},
	    					"�P��" : {
	    						value : tableRecords[j].value['���P��'].value,
	    						type : 'NUMBER', 
	    					},
	    					"����" : {
	    						value : tableRecords[j].value['������'].value,
	    						type : 'NUMBER', 
	    					},
	    					"���z" : {
	    						value : tableRecords[j].value['�����z'].value,
	    						type : 'CALC',
	    					},
	    					"���l" : {
	    						value : tableRecords[j].value['�����l'].value,
	    						type : 'SINGLE_LINE_TEXT',
	    					},
	    					"�w����" : {
	    						value : tableRecords[j].value['���w����'].value,
	    						type : 'SINGLE_LINE_TEXT',
	    					},
	    					"��]�[��" : {
	    						value : tableRecords[j].value['����]�[��'].value,
	    						type : 'SINGLE_LINE_TEXT',
	    					},
	    					"�h���b�v�_�E��_���" : {
	    						value : tableRecords[j].value['���h���b�v�_�E��_���'].value,
	    						type : 'DROP_DOWN',
	    					},
	    					"���t_�[�i��" : {
	    						value : tableRecords[j].value['�����t_�[�i��'].value,
	    						type : 'DATE',
	    					},
	    					"���b�N�A�b�v_�H��" : {
	    						value : tableRecords[j].value['�����b�N�A�b�v_�H��'].value,
	    						type : 'SINGLE_LINE_TEXT',
	    					},
	    					"������_����" : {
	    						value : tableRecords[j].value['��������_����'].value,
	    						type : 'SINGLE_LINE_TEXT',
	    					},
	    					"�����Ǘ�" : {
	    						value : tableRecords[j].value['�������Ǘ�'].value,
	    						type : 'DROP_DOWN',
	    					},
	    				}
	    			});
	    		}
	    		
	    		/*record.�w���R��T.value.splice(0,1);*/
	        	kintone.app.record.set(rec); //���R�[�h���o�^

	        	        	       	       	       	
	        };
	        
	        kintone.app.record.getSpaceElement('button').appendChild(mySpaceFieldButton);
									
			
		}
									
		
		return event;

	});
	
	
	
	

})();