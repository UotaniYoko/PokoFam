(function() {
  "use strict";
 
    kintone.events.on([ 'app.record.edit.show', 'app.record.create.show' ], function(event) {
        // �C�ӂ̃X�y�[�X�t�B�[���h�Ƀ{�^����ݒu
        var mySpaceFieldButton = document.createElement('button');
        mySpaceFieldButton.id = 'my_space_field_button';
        mySpaceFieldButton.innerText = '�i�ԁE�F�Z�b�g';
                                         		                       
        mySpaceFieldButton.onclick = function () {

        	var rec = kintone.app.record.get(); //���R�[�h���擾
        	var record = rec.record;
        	var table = record['Table'].value;        	      	       	
        	       	       	        	        	
    		for ( var i = 0; i < Number(table.length) ; i++) {
    			
/*    			alert('�O�O'+ table[i].value['�h���b�v�_�E��_�i��'].value);*/   			    			
			   			  			    			
    			if (table[i].value['�h���b�v�_�E��_�i��'].value == "�H�~�u���]��") {
    				table[i].value['�i��'].value = '1280';	
    				table[i].value['�F'].value = '61(���X�O���[��)';		 
    				table[i].value['���l_���z'].value = '7900';
        			table[i].value['�h���b�v�_�E��_�T�C�Y'].disabled = false;
        			table[i].value['�h���b�v�_�E��_�Y�{���p�T�C�Y'].disabled = true;
    			}
    			else if(table[i].value['�h���b�v�_�E��_�i��'].value == "�H�~�J�[�S�p���c") 
    			{  				    				
    				table[i].value['�i��'].value = '1283';	
    				table[i].value['�F'].value = '61(���X�O���[��)';    				
    				table[i].value['���l_���z'].value = '6000';		 
        			table[i].value['�h���b�v�_�E��_�T�C�Y'].disabled = true;
        			table[i].value['�h���b�v�_�E��_�Y�{���p�T�C�Y'].disabled = false;
    			}
    			else if(table[i].value['�h���b�v�_�E��_�i��'].value == "�H�~�p���c(�|�P�b�g�Ȃ�)") 
    			{  				    				
    				table[i].value['�i��'].value = '1282';	
    				table[i].value['�F'].value = '61(���X�O���[��)';    				
    				table[i].value['���l_���z'].value = '5400';		 
        			table[i].value['�h���b�v�_�E��_�T�C�Y'].disabled = true;
        			table[i].value['�h���b�v�_�E��_�Y�{���p�T�C�Y'].disabled = false;
    			}
    			else if(table[i].value['�h���b�v�_�E��_�i��'].value == "�����V���c") 
    			{  				    				
    				table[i].value['�i��'].value = '1293';	
    				table[i].value['�F'].value = '61(���X�O���[��)';    				
    				table[i].value['���l_���z'].value = '5400';		 
        			table[i].value['�h���b�v�_�E��_�T�C�Y'].disabled = false;
        			table[i].value['�h���b�v�_�E��_�Y�{���p�T�C�Y'].disabled = true;
    			}
    			else if(table[i].value['�h���b�v�_�E��_�i��'].value == "�h������(�u���]��)") 
    			{  				    				
    				table[i].value['�i��'].value = 'JIT 48340';	
    				table[i].value['�F'].value = '-';    				
    				table[i].value['���l_���z'].value = '19000';		 
        			table[i].value['�h���b�v�_�E��_�T�C�Y'].disabled = false;
        			table[i].value['�h���b�v�_�E��_�Y�{���p�T�C�Y'].disabled = true;
    			}
    			else if(table[i].value['�h���b�v�_�E��_�i��'].value == "�h������(�R�[�g)") 
    			{  				    				
    				table[i].value['�i��'].value = 'JIT 48343';	
    				table[i].value['�F'].value = '-';    				
    				table[i].value['���l_���z'].value = '21300';		 
        			table[i].value['�h���b�v�_�E��_�T�C�Y'].disabled = false;
        			table[i].value['�h���b�v�_�E��_�Y�{���p�T�C�Y'].disabled = true;
    			}
    			else if(table[i].value['�h���b�v�_�E��_�i��'].value == "�h������") 
    			{  				    				
    				table[i].value['�i��'].value = '-';	
    				table[i].value['�F'].value = '-';    				
    				table[i].value['���l_���z'].value = '13700';		 
        			table[i].value['�h���b�v�_�E��_�T�C�Y'].disabled = false;
        			table[i].value['�h���b�v�_�E��_�Y�{���p�T�C�Y'].disabled = true;
    			}
    			else if(table[i].value['�h���b�v�_�E��_�i��'].value == "�t�ău���]��") 
    			{  				    				
    				table[i].value['�i��'].value = '1294';	
    				table[i].value['�F'].value = '61(���X�O���[��)';    				
    				table[i].value['���l_���z'].value = '6600';		 
        			table[i].value['�h���b�v�_�E��_�T�C�Y'].disabled = false;
        			table[i].value['�h���b�v�_�E��_�Y�{���p�T�C�Y'].disabled = true;
    			}
    			else if(table[i].value['�h���b�v�_�E��_�i��'].value == "�t�ăJ�[�S�p���c") 
    			{  				    				
    				table[i].value['�i��'].value = '1296';	
    				table[i].value['�F'].value = '61(���X�O���[��)';    				
    				table[i].value['���l_���z'].value = '5300';		 
        			table[i].value['�h���b�v�_�E��_�T�C�Y'].disabled = false;
        			table[i].value['�h���b�v�_�E��_�Y�{���p�T�C�Y'].disabled = true;
    			}
    			else if(table[i].value['�h���b�v�_�E��_�i��'].value == "�t�ăp���c") 
    			{  				    				
    				table[i].value['�i��'].value = '1290';	
    				table[i].value['�F'].value = '61(���X�O���[��)';    				
    				table[i].value['���l_���z'].value = '4900';		 
        			table[i].value['�h���b�v�_�E��_�T�C�Y'].disabled = false;
        			table[i].value['�h���b�v�_�E��_�Y�{���p�T�C�Y'].disabled = true;
    			}
    			else if(table[i].value['�h���b�v�_�E��_�i��'].value == "�����V���c") 
    			{  				    				
    				table[i].value['�i��'].value = '1292';	
    				table[i].value['�F'].value = '61(���X�O���[��)';    				
    				table[i].value['���l_���z'].value = '5100';		 
        			table[i].value['�h���b�v�_�E��_�T�C�Y'].disabled = false;
        			table[i].value['�h���b�v�_�E��_�Y�{���p�T�C�Y'].disabled = true;
    			}
    			else if(table[i].value['�h���b�v�_�E��_�i��'].value == "�|���V���c") 
    			{  				    				
    				table[i].value['�i��'].value = '6180';	
    				table[i].value['�F'].value = '10(�R��)';    				
    				table[i].value['���l_���z'].value = '0';		 
        			table[i].value['�h���b�v�_�E��_�T�C�Y'].disabled = false;
        			table[i].value['�h���b�v�_�E��_�Y�{���p�T�C�Y'].disabled = true;
    			}
    			else if(table[i].value['�h���b�v�_�E��_�i��'].value == "�t���n�[�l�X�Ή��󒲕�") 
    			{  				    				
    				table[i].value['�i��'].value = 'KE98101';	
    				table[i].value['�F'].value = '22(�V���o�[�O���[)';    				
    				table[i].value['���l_���z'].value = '0';
        			table[i].value['�h���b�v�_�E��_�T�C�Y'].disabled = false;
        			table[i].value['�h���b�v�_�E��_�Y�{���p�T�C�Y'].disabled = true;
    			}
    			
    			table[i].value['�i��'].disabled = true;
    			table[i].value['�F'].disabled = true;
				table[i].value['���l_���z'].disabled = true;		 

    			
    		}
    		
        	kintone.app.record.set(rec); //���R�[�h���o�^
        	        	       	       	       	
        };
        
        
        kintone.app.record.getSpaceElement('button').appendChild(mySpaceFieldButton);
        
		return event;
    });
})();