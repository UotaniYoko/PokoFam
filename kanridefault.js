(function() {
  "use strict";
 
    kintone.events.on([ 'app.record.edit.show', 'app.record.create.show' ], function(event) {
        // �C�ӂ̃X�y�[�X�t�B�[���h�Ƀ{�^����ݒu
        var mySpaceFieldButton = document.createElement('button');
        mySpaceFieldButton.id = 'my_space_field_button';
        mySpaceFieldButton.innerText = '�Ǘ����ʃZ�b�g';
                                         		                       
        mySpaceFieldButton.onclick = function () {

        	var rec = kintone.app.record.get(); //���R�[�h���擾
        	var record = rec.record;
        	var table = record['�o�׋@��'].value;        	      	       	
        	       	       	        	        	
    		for ( var i = 0; i < Number(table.length) ; i++) {
			   			  			    			
    			if (table[i].value['�Ǘ�'].value == "�Ǘ��ԍ�") {
    				table[i].value['����'].value = '1';	
    				table[i].value['����'].disabled = true;		 
    			}
    			else{  				    				
    				table[i].value['����'].disabled = false;
    			}  			    			
    			
    		}
    		
        	kintone.app.record.set(rec); //���R�[�h���o�^
        	        	       	       	       	
        };
        kintone.app.record.getSpaceElement('button').appendChild(mySpaceFieldButton);
        
		return event;
    });
})();