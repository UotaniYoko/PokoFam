(function() {
  "use strict";
 
    kintone.events.on([ 'app.record.edit.show', 'app.record.create.show' ], function(event) {
        // 任意のスペースフィールドにボタンを設置
        var mySpaceFieldButton = document.createElement('button');
        mySpaceFieldButton.id = 'my_space_field_button';
        mySpaceFieldButton.innerText = '管理数量セット';
                                         		                       
        mySpaceFieldButton.onclick = function () {

        	var rec = kintone.app.record.get(); //レコード情報取得
        	var record = rec.record;
        	var table = record['出荷機材'].value;        	      	       	
        	       	       	        	        	
    		for ( var i = 0; i < Number(table.length) ; i++) {
			   			  			    			
    			if (table[i].value['管理'].value == "管理番号") {
    				table[i].value['数量'].value = '1';	
    				table[i].value['数量'].disabled = true;		 
    			}
    			else{  				    				
    				table[i].value['数量'].disabled = false;
    			}  			    			
    			
    		}
    		
        	kintone.app.record.set(rec); //レコード情報登録
        	        	       	       	       	
        };
        kintone.app.record.getSpaceElement('button').appendChild(mySpaceFieldButton);
        
		return event;
    });
})();