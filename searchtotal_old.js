/*
�g�p�A�v���F�w���񍐏�
�T�v�F�����p�ɍ��v���z���Z�o����B�L�[�����Ƃɍ��v���z���Z�o����(�L�[�F�H��+����or�O��)
*/
(function() {
	"use strict";

	kintone.events.on([ 'app.record.create.submit' ], function(event) {
		

		var record = event.record;
		
		//�����Ǘ����ڏ�����
		record['������_�H�ԍ��v1']['value'] = "";
		record['������_�H�ԍ��v2']['value'] = "";
		record['������_�H�ԍ��v3']['value'] = "";
		record['������_�H�ԍ��v4']['value'] = "";
		record['������_�H�ԍ��v5']['value'] = "";
		record['������_�H�ԍ��v6']['value'] = "";
		record['������_�H�ԍ��v7']['value'] = "";
		record['������_�H�ԍ��v8']['value'] = "";
		record['������_�H�ԍ��v9']['value'] = "";
		record['������_�H�ԍ��v10']['value'] = "";
		record['���l_�H�ԍ��v1']['value'] = 0;
		record['���l_�H�ԍ��v2']['value'] = 0;
		record['���l_�H�ԍ��v3']['value'] = 0;
		record['���l_�H�ԍ��v4']['value'] = 0;
		record['���l_�H�ԍ��v5']['value'] = 0;
		record['���l_�H�ԍ��v6']['value'] = 0;
		record['���l_�H�ԍ��v7']['value'] = 0;
		record['���l_�H�ԍ��v8']['value'] = 0;
		record['���l_�H�ԍ��v9']['value'] = 0;
		record['���l_�H�ԍ��v10']['value'] = 0;

		var tableRecords = event.record.���i.value;

/*		alert('^^bello!���l_�H�ԍ��v2' + record['���l_�H�ԍ��v2']['value']);*/
		
/*		var key = tableRecords[0].value['���b�N�A�b�v_�H��'].value + tableRecords[0].value['�����Ǘ�'].value;*/
		
		var flag = 0;
		
		var addnumber = 0;

		for ( var i = 0; i < Number(record['���i']['value'].length) ; i++) {
			
			if(tableRecords[i].value['���b�N�A�b�v_�H��'].value !== undefined && tableRecords[i].value['�����Ǘ�'].value !== undefined){
				
				//1
				if (flag == '0'){					
					//�H�ԍ��v�ɒl�������Ă��Ȃ�
					if(record['������_�H�ԍ��v1']['value']  === '' || record['������_�H�ԍ��v1']['value'] === undefined){			
						record['������_�H�ԍ��v1']['value'] = tableRecords[i].value['���b�N�A�b�v_�H��'].value + tableRecords[i].value['�����Ǘ�'].value;
						addnumber = Number(record['���l_�H�ԍ��v1']['value']);					
						addnumber += Number(tableRecords[i].value['���z'].value);					
						record['���l_�H�ԍ��v1']['value'] = addnumber;
						flag = 1;
						addnumber = 0;
					}
					//�H�ԍ��v�ɒl�������Ă���
					else{
						//key�����v����
						if(record['������_�H�ԍ��v1']['value'] == tableRecords[i].value['���b�N�A�b�v_�H��'].value + tableRecords[i].value['�����Ǘ�'].value){
							record['���l_�H�ԍ��v1']['value'] += Number(tableRecords[i].value['���z'].value);
							flag = 1;
						}		
					}				
				}
				
				//2
				if (flag == '0'){
					//�H�ԍ��v�ɒl�������Ă��Ȃ�
					if(record['������_�H�ԍ��v2']['value']  === '' || record['������_�H�ԍ��v2']['value'] === undefined){
						record['������_�H�ԍ��v2']['value'] = tableRecords[i].value['���b�N�A�b�v_�H��'].value + tableRecords[i].value['�����Ǘ�'].value;
						addnumber = Number(record['���l_�H�ԍ��v2']['value']);					
						addnumber += Number(tableRecords[i].value['���z'].value);					
						record['���l_�H�ԍ��v2']['value'] = addnumber;
						flag = 1;
						addnumber = 0;
					}
					//�H�ԍ��v�ɒl�������Ă���
					else{
						//key�����v����
						if(record['������_�H�ԍ��v2']['value'] == tableRecords[i].value['���b�N�A�b�v_�H��'].value + tableRecords[i].value['�����Ǘ�'].value){
							record['���l_�H�ԍ��v2']['value'] += Number(tableRecords[i].value['���z'].value);
							flag = 1;
						}		
					}				
				}
				
				//3
				if (flag == '0'){
					//�H�ԍ��v�ɒl�������Ă��Ȃ�
					if(record['������_�H�ԍ��v3']['value']  === '' || record['������_�H�ԍ��v3']['value'] === undefined){
						record['������_�H�ԍ��v3']['value'] = tableRecords[i].value['���b�N�A�b�v_�H��'].value + tableRecords[i].value['�����Ǘ�'].value;
						addnumber = Number(record['���l_�H�ԍ��v3']['value']);					
						addnumber += Number(tableRecords[i].value['���z'].value);					
						record['���l_�H�ԍ��v3']['value'] = addnumber;
						flag = 1;
						addnumber = 0;
					}
					//�H�ԍ��v�ɒl�������Ă���
					else{
						//key�����v����
						if(record['������_�H�ԍ��v3']['value'] == tableRecords[i].value['���b�N�A�b�v_�H��'].value + tableRecords[i].value['�����Ǘ�'].value){
							record['���l_�H�ԍ��v3']['value'] += Number(tableRecords[i].value['���z'].value);
							flag = 1;
						}		
					}				
				}
				
				//4
				if (flag == '0'){
					//�H�ԍ��v�ɒl�������Ă��Ȃ�
					if(record['������_�H�ԍ��v4']['value']  === '' || record['������_�H�ԍ��v4']['value'] === undefined){
						record['������_�H�ԍ��v4']['value'] = tableRecords[i].value['���b�N�A�b�v_�H��'].value + tableRecords[i].value['�����Ǘ�'].value;
						addnumber = Number(record['���l_�H�ԍ��v4']['value']);					
						addnumber += Number(tableRecords[i].value['���z'].value);					
						record['���l_�H�ԍ��v4']['value'] = addnumber;
						flag = 1;
						addnumber = 0;
					}
					//�H�ԍ��v�ɒl�������Ă���
					else{
						//key�����v����
						if(record['������_�H�ԍ��v4']['value'] == tableRecords[i].value['���b�N�A�b�v_�H��'].value + tableRecords[i].value['�����Ǘ�'].value){
							record['���l_�H�ԍ��v4']['value'] += Number(tableRecords[i].value['���z'].value);
							flag = 1;
						}		
					}				
				}
				
				//5
				if (flag == '0'){
					//�H�ԍ��v�ɒl�������Ă��Ȃ�
					if(record['������_�H�ԍ��v5']['value']  === '' || record['������_�H�ԍ��v5']['value'] === undefined){
						record['������_�H�ԍ��v5']['value'] = tableRecords[i].value['���b�N�A�b�v_�H��'].value + tableRecords[i].value['�����Ǘ�'].value;
						addnumber = Number(record['���l_�H�ԍ��v5']['value']);					
						addnumber += Number(tableRecords[i].value['���z'].value);					
						record['���l_�H�ԍ��v5']['value'] = addnumber;
						flag = 1;
						addnumber = 0;
					}
					//�H�ԍ��v�ɒl�������Ă���
					else{
						//key�����v����
						if(record['������_�H�ԍ��v5']['value'] == tableRecords[i].value['���b�N�A�b�v_�H��'].value + tableRecords[i].value['�����Ǘ�'].value){
							record['���l_�H�ԍ��v5']['value'] += Number(tableRecords[i].value['���z'].value);
							flag = 1;
						}		
					}				
				}
				
				//6
				if (flag == '0'){
					if(record['������_�H�ԍ��v6']['value']  === '' || record['������_�H�ԍ��v6']['value'] === undefined){
						//�H�ԍ��v�ɒl�������Ă��Ȃ�
						record['������_�H�ԍ��v6']['value'] = tableRecords[i].value['���b�N�A�b�v_�H��'].value + tableRecords[i].value['�����Ǘ�'].value;
						addnumber = Number(record['���l_�H�ԍ��v6']['value']);					
						addnumber += Number(tableRecords[i].value['���z'].value);					
						record['���l_�H�ԍ��v6']['value'] = addnumber;
						flag = 1;
						addnumber = 0;
					}
					//�H�ԍ��v�ɒl�������Ă���
					else{
						//key�����v����
						if(record['������_�H�ԍ��v6']['value'] == tableRecords[i].value['���b�N�A�b�v_�H��'].value + tableRecords[i].value['�����Ǘ�'].value){
							record['���l_�H�ԍ��v6']['value'] += Number(tableRecords[i].value['���z'].value);
							flag = 1;
						}		
					}				
				}

				//7
				if (flag == '0'){
					//�H�ԍ��v�ɒl�������Ă��Ȃ�
					if(record['������_�H�ԍ��v7']['value']  === '' || record['������_�H�ԍ��v7']['value'] === undefined){
						record['������_�H�ԍ��v7']['value'] = tableRecords[i].value['���b�N�A�b�v_�H��'].value + tableRecords[i].value['�����Ǘ�'].value;
						addnumber = Number(record['���l_�H�ԍ��v7']['value']);					
						addnumber += Number(tableRecords[i].value['���z'].value);					
						record['���l_�H�ԍ��v7']['value'] = addnumber;
						flag = 1;
						addnumber = 0;
					}
					//�H�ԍ��v�ɒl�������Ă���
					else{
						//key�����v����
						if(record['������_�H�ԍ��v7']['value'] == tableRecords[i].value['���b�N�A�b�v_�H��'].value + tableRecords[i].value['�����Ǘ�'].value){
							record['���l_�H�ԍ��v7']['value'] += Number(tableRecords[i].value['���z'].value);
							flag = 1;
						}		
					}				
				}
		
				//8
				if (flag == '0'){
					//�H�ԍ��v�ɒl�������Ă��Ȃ�
					if(record['������_�H�ԍ��v8']['value']  === '' || record['������_�H�ԍ��v8']['value'] === undefined){
						record['������_�H�ԍ��v8']['value'] = tableRecords[i].value['���b�N�A�b�v_�H��'].value + tableRecords[i].value['�����Ǘ�'].value;
						addnumber = Number(record['���l_�H�ԍ��v8']['value']);					
						addnumber += Number(tableRecords[i].value['���z'].value);					
						record['���l_�H�ԍ��v8']['value'] = addnumber;
						flag = 1;
						addnumber = 0;
					}
					//�H�ԍ��v�ɒl�������Ă���
					else{
						//key�����v����
						if(record['������_�H�ԍ��v8']['value'] == tableRecords[i].value['���b�N�A�b�v_�H��'].value + tableRecords[i].value['�����Ǘ�'].value){
							record['���l_�H�ԍ��v8']['value'] += Number(tableRecords[i].value['���z'].value);
							flag = 1;
						}		
					}				
				}
				
				//9
				if (flag == '0'){
					//�H�ԍ��v�ɒl�������Ă��Ȃ�
					if(record['������_�H�ԍ��v9']['value']  === '' || record['������_�H�ԍ��v9']['value'] === undefined){
						record['������_�H�ԍ��v9']['value'] = tableRecords[i].value['���b�N�A�b�v_�H��'].value + tableRecords[i].value['�����Ǘ�'].value;
						addnumber = Number(record['���l_�H�ԍ��v9']['value']);					
						addnumber += Number(tableRecords[i].value['���z'].value);					
						record['���l_�H�ԍ��v9']['value'] = addnumber;
						flag = 1;
						addnumber = 0;
					}
					//�H�ԍ��v�ɒl�������Ă���
					else{
						//key�����v����
						if(record['������_�H�ԍ��v9']['value'] == tableRecords[i].value['���b�N�A�b�v_�H��'].value + tableRecords[i].value['�����Ǘ�'].value){
							record['���l_�H�ԍ��v9']['value'] += Number(tableRecords[i].value['���z'].value);
							flag = 1;
						}		
					}				
				}
				
				//10
				if (flag == '0'){
					//�H�ԍ��v�ɒl�������Ă��Ȃ�
					if(record['������_�H�ԍ��v10']['value']  === '' || record['������_�H�ԍ��v10']['value'] === undefined){
						record['������_�H�ԍ��v10']['value'] = tableRecords[i].value['���b�N�A�b�v_�H��'].value + tableRecords[i].value['�����Ǘ�'].value;
						addnumber = Number(record['���l_�H�ԍ��v10']['value']);					
						addnumber += Number(tableRecords[i].value['���z'].value);					
						record['���l_�H�ԍ��v10']['value'] = addnumber;
						flag = 1;
						addnumber = 0;
					}
					//�H�ԍ��v�ɒl�������Ă���
					else{
						//key�����v����
						if(record['������_�H�ԍ��v10']['value'] == tableRecords[i].value['���b�N�A�b�v_�H��'].value + tableRecords[i].value['�����Ǘ�'].value){
							record['���l_�H�ԍ��v10']['value'] += Number(tableRecords[i].value['���z'].value);
							flag = 1;
						}		
					}				
				}				
				
			}
			else{
				
/*				alert('^^bello!');*/
				
			}						
			
			flag = 0;
			addnumber = 0;			
			
		}

		return event;

	});
	
	kintone.events.on([ 'app.record.edit.submit' ], function(event) {

		var record = event.record;
		
		//�����Ǘ����ڏ�����
		record['������_�H�ԍ��v1']['value'] = "";
		record['������_�H�ԍ��v2']['value'] = "";
		record['������_�H�ԍ��v3']['value'] = "";
		record['������_�H�ԍ��v4']['value'] = "";
		record['������_�H�ԍ��v5']['value'] = "";
		record['������_�H�ԍ��v6']['value'] = "";
		record['������_�H�ԍ��v7']['value'] = "";
		record['������_�H�ԍ��v8']['value'] = "";
		record['������_�H�ԍ��v9']['value'] = "";
		record['������_�H�ԍ��v10']['value'] = "";
		record['���l_�H�ԍ��v1']['value'] = 0;
		record['���l_�H�ԍ��v2']['value'] = 0;
		record['���l_�H�ԍ��v3']['value'] = 0;
		record['���l_�H�ԍ��v4']['value'] = 0;
		record['���l_�H�ԍ��v5']['value'] = 0;
		record['���l_�H�ԍ��v6']['value'] = 0;
		record['���l_�H�ԍ��v7']['value'] = 0;
		record['���l_�H�ԍ��v8']['value'] = 0;
		record['���l_�H�ԍ��v9']['value'] = 0;
		record['���l_�H�ԍ��v10']['value'] = 0;

		var tableRecords = event.record.���i.value;
		
/*		var key = tableRecords[0].value['���b�N�A�b�v_�H��'].value + tableRecords[0].value['�����Ǘ�'].value;*/
		
		var flag = 0;
		
		var addnumber = 0;

		for ( var i = 0; i < Number(record['���i']['value'].length) ; i++) {
			
			if(tableRecords[i].value['���b�N�A�b�v_�H��'].value !== undefined && tableRecords[i].value['�����Ǘ�'].value !== undefined){
				
				//1
				if (flag == '0'){					
					//�H�ԍ��v�ɒl�������Ă��Ȃ�
					if(record['������_�H�ԍ��v1']['value']  === '' || record['������_�H�ԍ��v1']['value'] === undefined){			
						record['������_�H�ԍ��v1']['value'] = tableRecords[i].value['���b�N�A�b�v_�H��'].value + tableRecords[i].value['�����Ǘ�'].value;
						addnumber = Number(record['���l_�H�ԍ��v1']['value']);					
						addnumber += Number(tableRecords[i].value['���z'].value);					
						record['���l_�H�ԍ��v1']['value'] = addnumber;
						flag = 1;
						addnumber = 0;
					}
					//�H�ԍ��v�ɒl�������Ă���
					else{
						//key�����v����
						if(record['������_�H�ԍ��v1']['value'] == tableRecords[i].value['���b�N�A�b�v_�H��'].value + tableRecords[i].value['�����Ǘ�'].value){
							record['���l_�H�ԍ��v1']['value'] += Number(tableRecords[i].value['���z'].value);
							flag = 1;
						}		
					}				
				}
				
				//2
				if (flag == '0'){
					//�H�ԍ��v�ɒl�������Ă��Ȃ�
					if(record['������_�H�ԍ��v2']['value']  === '' || record['������_�H�ԍ��v2']['value'] === undefined){
						record['������_�H�ԍ��v2']['value'] = tableRecords[i].value['���b�N�A�b�v_�H��'].value + tableRecords[i].value['�����Ǘ�'].value;
						addnumber = Number(record['���l_�H�ԍ��v2']['value']);					
						addnumber += Number(tableRecords[i].value['���z'].value);					
						record['���l_�H�ԍ��v2']['value'] = addnumber;
						flag = 1;
						addnumber = 0;
					}
					//�H�ԍ��v�ɒl�������Ă���
					else{
						//key�����v����
						if(record['������_�H�ԍ��v2']['value'] == tableRecords[i].value['���b�N�A�b�v_�H��'].value + tableRecords[i].value['�����Ǘ�'].value){
							record['���l_�H�ԍ��v2']['value'] += Number(tableRecords[i].value['���z'].value);
							flag = 1;
						}		
					}				
				}
				
				//3
				if (flag == '0'){
					//�H�ԍ��v�ɒl�������Ă��Ȃ�
					if(record['������_�H�ԍ��v3']['value']  === '' || record['������_�H�ԍ��v3']['value'] === undefined){
						record['������_�H�ԍ��v3']['value'] = tableRecords[i].value['���b�N�A�b�v_�H��'].value + tableRecords[i].value['�����Ǘ�'].value;
						addnumber = Number(record['���l_�H�ԍ��v3']['value']);					
						addnumber += Number(tableRecords[i].value['���z'].value);					
						record['���l_�H�ԍ��v3']['value'] = addnumber;
						flag = 1;
						addnumber = 0;
					}
					//�H�ԍ��v�ɒl�������Ă���
					else{
						//key�����v����
						if(record['������_�H�ԍ��v3']['value'] == tableRecords[i].value['���b�N�A�b�v_�H��'].value + tableRecords[i].value['�����Ǘ�'].value){
							record['���l_�H�ԍ��v3']['value'] += Number(tableRecords[i].value['���z'].value);
							flag = 1;
						}		
					}				
				}
				
				//4
				if (flag == '0'){
					//�H�ԍ��v�ɒl�������Ă��Ȃ�
					if(record['������_�H�ԍ��v4']['value']  === '' || record['������_�H�ԍ��v4']['value'] === undefined){
						record['������_�H�ԍ��v4']['value'] = tableRecords[i].value['���b�N�A�b�v_�H��'].value + tableRecords[i].value['�����Ǘ�'].value;
						addnumber = Number(record['���l_�H�ԍ��v4']['value']);					
						addnumber += Number(tableRecords[i].value['���z'].value);					
						record['���l_�H�ԍ��v4']['value'] = addnumber;
						flag = 1;
						addnumber = 0;
					}
					//�H�ԍ��v�ɒl�������Ă���
					else{
						//key�����v����
						if(record['������_�H�ԍ��v4']['value'] == tableRecords[i].value['���b�N�A�b�v_�H��'].value + tableRecords[i].value['�����Ǘ�'].value){
							record['���l_�H�ԍ��v4']['value'] += Number(tableRecords[i].value['���z'].value);
							flag = 1;
						}		
					}				
				}
				
				//5
				if (flag == '0'){
					//�H�ԍ��v�ɒl�������Ă��Ȃ�
					if(record['������_�H�ԍ��v5']['value']  === '' || record['������_�H�ԍ��v5']['value'] === undefined){
						record['������_�H�ԍ��v5']['value'] = tableRecords[i].value['���b�N�A�b�v_�H��'].value + tableRecords[i].value['�����Ǘ�'].value;
						addnumber = Number(record['���l_�H�ԍ��v5']['value']);					
						addnumber += Number(tableRecords[i].value['���z'].value);					
						record['���l_�H�ԍ��v5']['value'] = addnumber;
						flag = 1;
						addnumber = 0;
					}
					//�H�ԍ��v�ɒl�������Ă���
					else{
						//key�����v����
						if(record['������_�H�ԍ��v5']['value'] == tableRecords[i].value['���b�N�A�b�v_�H��'].value + tableRecords[i].value['�����Ǘ�'].value){
							record['���l_�H�ԍ��v5']['value'] += Number(tableRecords[i].value['���z'].value);
							flag = 1;
						}		
					}				
				}
				
				//6
				if (flag == '0'){
					if(record['������_�H�ԍ��v6']['value']  === '' || record['������_�H�ԍ��v6']['value'] === undefined){
						//�H�ԍ��v�ɒl�������Ă��Ȃ�
						record['������_�H�ԍ��v6']['value'] = tableRecords[i].value['���b�N�A�b�v_�H��'].value + tableRecords[i].value['�����Ǘ�'].value;
						addnumber = Number(record['���l_�H�ԍ��v6']['value']);					
						addnumber += Number(tableRecords[i].value['���z'].value);					
						record['���l_�H�ԍ��v6']['value'] = addnumber;
						flag = 1;
						addnumber = 0;
					}
					//�H�ԍ��v�ɒl�������Ă���
					else{
						//key�����v����
						if(record['������_�H�ԍ��v6']['value'] == tableRecords[i].value['���b�N�A�b�v_�H��'].value + tableRecords[i].value['�����Ǘ�'].value){
							record['���l_�H�ԍ��v6']['value'] += Number(tableRecords[i].value['���z'].value);
							flag = 1;
						}		
					}				
				}

				//7
				if (flag == '0'){
					//�H�ԍ��v�ɒl�������Ă��Ȃ�
					if(record['������_�H�ԍ��v7']['value']  === '' || record['������_�H�ԍ��v7']['value'] === undefined){
						record['������_�H�ԍ��v7']['value'] = tableRecords[i].value['���b�N�A�b�v_�H��'].value + tableRecords[i].value['�����Ǘ�'].value;
						addnumber = Number(record['���l_�H�ԍ��v7']['value']);					
						addnumber += Number(tableRecords[i].value['���z'].value);					
						record['���l_�H�ԍ��v7']['value'] = addnumber;
						flag = 1;
						addnumber = 0;
					}
					//�H�ԍ��v�ɒl�������Ă���
					else{
						//key�����v����
						if(record['������_�H�ԍ��v7']['value'] == tableRecords[i].value['���b�N�A�b�v_�H��'].value + tableRecords[i].value['�����Ǘ�'].value){
							record['���l_�H�ԍ��v7']['value'] += Number(tableRecords[i].value['���z'].value);
							flag = 1;
						}		
					}				
				}
		
				//8
				if (flag == '0'){
					//�H�ԍ��v�ɒl�������Ă��Ȃ�
					if(record['������_�H�ԍ��v8']['value']  === '' || record['������_�H�ԍ��v8']['value'] === undefined){
						record['������_�H�ԍ��v8']['value'] = tableRecords[i].value['���b�N�A�b�v_�H��'].value + tableRecords[i].value['�����Ǘ�'].value;
						addnumber = Number(record['���l_�H�ԍ��v8']['value']);					
						addnumber += Number(tableRecords[i].value['���z'].value);					
						record['���l_�H�ԍ��v8']['value'] = addnumber;
						flag = 1;
						addnumber = 0;
					}
					//�H�ԍ��v�ɒl�������Ă���
					else{
						//key�����v����
						if(record['������_�H�ԍ��v8']['value'] == tableRecords[i].value['���b�N�A�b�v_�H��'].value + tableRecords[i].value['�����Ǘ�'].value){
							record['���l_�H�ԍ��v8']['value'] += Number(tableRecords[i].value['���z'].value);
							flag = 1;
						}		
					}				
				}
				
				//9
				if (flag == '0'){
					//�H�ԍ��v�ɒl�������Ă��Ȃ�
					if(record['������_�H�ԍ��v9']['value']  === '' || record['������_�H�ԍ��v9']['value'] === undefined){
						record['������_�H�ԍ��v9']['value'] = tableRecords[i].value['���b�N�A�b�v_�H��'].value + tableRecords[i].value['�����Ǘ�'].value;
						addnumber = Number(record['���l_�H�ԍ��v9']['value']);					
						addnumber += Number(tableRecords[i].value['���z'].value);					
						record['���l_�H�ԍ��v9']['value'] = addnumber;
						flag = 1;
						addnumber = 0;
					}
					//�H�ԍ��v�ɒl�������Ă���
					else{
						//key�����v����
						if(record['������_�H�ԍ��v9']['value'] == tableRecords[i].value['���b�N�A�b�v_�H��'].value + tableRecords[i].value['�����Ǘ�'].value){
							record['���l_�H�ԍ��v9']['value'] += Number(tableRecords[i].value['���z'].value);
							flag = 1;
						}		
					}				
				}
				
				//10
				if (flag == '0'){
					//�H�ԍ��v�ɒl�������Ă��Ȃ�
					if(record['������_�H�ԍ��v10']['value']  === '' || record['������_�H�ԍ��v10']['value'] === undefined){
						record['������_�H�ԍ��v10']['value'] = tableRecords[i].value['���b�N�A�b�v_�H��'].value + tableRecords[i].value['�����Ǘ�'].value;
						addnumber = Number(record['���l_�H�ԍ��v10']['value']);					
						addnumber += Number(tableRecords[i].value['���z'].value);					
						record['���l_�H�ԍ��v10']['value'] = addnumber;
						flag = 1;
						addnumber = 0;
					}
					//�H�ԍ��v�ɒl�������Ă���
					else{
						//key�����v����
						if(record['������_�H�ԍ��v10']['value'] == tableRecords[i].value['���b�N�A�b�v_�H��'].value + tableRecords[i].value['�����Ǘ�'].value){
							record['���l_�H�ԍ��v10']['value'] += Number(tableRecords[i].value['���z'].value);
							flag = 1;
						}		
					}				
				}
				
			}
			else{
				

				
			}						
			
			flag = 0;
			addnumber = 0;			
			
		}

		return event;

	});

})();