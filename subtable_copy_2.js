(function() {
	'use strict';

	kintone.events.on([ 'app.record.edit.show', 'app.record.create.show' ], function(event) {

		var user = kintone.getLoginUser();


		
		if(user.code === 'miura5017' || user.code === 'hamashima0437' || user.code === 'sano7375' || user.code === 'sugimura8919' || user.code === 'koyama3326'){
					
/*			alert('bello^^!' + user.code);*/
							
	        // CÓÌXy[XtB[hÉ{^ðÝu
	        var mySpaceFieldButton = document.createElement('button');
	        mySpaceFieldButton.id = 'my_space_field_button';
	        mySpaceFieldButton.innerText = 'e[uRs[';	
	        
	        mySpaceFieldButton.onclick = function () {
	        	
	    		// uâgcvÌR[hîñæ¾
	        	var rec = kintone.app.record.get(); //R[hîñæ¾
	    		var record = rec.record;
	        	
	    		// Tue[u(âgcF)IuWFNgðæ¾
	    		var tableRecords = record.¤i.value;
	    		// Tue[u(âgcF)ÌàeðzñÉi[
	    		var subtable = [];
	    		for ( var i = 0; i < tableRecords.length; i++) {
	    			subtable.push({
	    				value : {
	    					"¤i¼" : {
	    						value : tableRecords[i].value['¤i¼'].value,
	    						type : 'SINGLE_LINE_TEXT',
	    					},
	    					"iÔ" : {
	    						value : tableRecords[i].value['iÔ'].value,
	    						type : 'SINGLE_LINE_TEXT',
	    					},
	    					"P¿" : {
	    						value : tableRecords[i].value['P¿'].value,
	    						type : 'NUMBER',
	    					},
	    					"Ê" : {
	    						value : tableRecords[i].value['Ê'].value,
	    						type : 'NUMBER', 
	    					},
	    					"àz" : {
	    						value : tableRecords[i].value['àz'].value,
	    						type : 'CALC',
	    					},
	    					"õl" : {
	    						value : tableRecords[i].value['õl'].value,
	    						type : 'SINGLE_LINE_TEXT',
	    					},
	    					"wüæ" : {
	    						value : tableRecords[i].value['wüæ'].value,
	    						type : 'SINGLE_LINE_TEXT',
	    					},
	    					"ó][ú" : {
	    						value : tableRecords[i].value['ó][ú'].value,
	    						type : 'SINGLE_LINE_TEXT',
	    					},
	    					"hbv_E_íÊ" : {
	    						value : tableRecords[i].value['hbv_E_íÊ'].value,
	    						type : 'DROP_DOWN',
	    					},
	    					"út_[iú" : {
	    						value : tableRecords[i].value['út_[iú'].value,
	    						type : 'DATE',
	    					},
	    					"bNAbv_HÔ" : {
	    						value : tableRecords[i].value['bNAbv_HÔ'].value,
	    						type : 'SINGLE_LINE_TEXT',
	    					},
	    					"¶ñ_ªÌ" : {
	    						value : tableRecords[i].value['¶ñ_ªÌ'].value,
	    						type : 'SINGLE_LINE_TEXT',
	    					},
	    					"´¿Ç" : {
	    						value : tableRecords[i].value['´¿Ç'].value,
	    						type : 'DROP_DOWN',
	    					},
	    				}
	    			});
	    		}
	    		
	    		
	    		//e[uú»
	    		record.¤i.value = [];
	    		   			    			    		
	    		
	    		for ( var j = 0; j < tableRecords.length; j++) {
	    			record.¤i.value.push({
	    				value : {
	    					"¤i¼" : {
	    						value : tableRecords[j].value['¤i¼'].value,
	    						type : 'SINGLE_LINE_TEXT',
	    					},
	    					"iÔ" : {
	    						value : tableRecords[j].value['iÔ'].value,
	    						type : 'SINGLE_LINE_TEXT',
	    					},
	    					"P¿" : {
	    						value : tableRecords[j].value['P¿'].value,
	    						type : 'NUMBER', 
	    					},
	    					"Ê" : {
	    						value : tableRecords[j].value['Ê'].value,
	    						type : 'NUMBER', 
	    					},
	    					"àz" : {
	    						value : tableRecords[j].value['àz'].value,
	    						type : 'CALC',
	    					},
	    					"õl" : {
	    						value : tableRecords[j].value['õl'].value,
	    						type : 'SINGLE_LINE_TEXT',
	    					},
	    					"wüæ" : {
	    						value : tableRecords[j].value['wüæ'].value,
	    						type : 'SINGLE_LINE_TEXT',
	    					},
	    					"ó][ú" : {
	    						value : tableRecords[j].value['ó][ú'].value,
	    						type : 'SINGLE_LINE_TEXT',
	    					},
	    					"hbv_E_íÊ" : {
	    						value : tableRecords[j].value['hbv_E_íÊ'].value,
	    						type : 'DROP_DOWN',
	    					},
	    					"út_[iú" : {
	    						value : tableRecords[j].value['út_[iú'].value,
	    						type : 'DATE',
	    					},
	    					"bNAbv_HÔ" : {
	    						value : tableRecords[j].value['bNAbv_HÔ'].value,
	    						type : 'SINGLE_LINE_TEXT',
	    					},
	    					"¶ñ_ªÌ" : {
	    						value : tableRecords[j].value['¶ñ_ªÌ'].value,
	    						type : 'SINGLE_LINE_TEXT',
	    					},
	    					"´¿Ç" : {
	    						value : tableRecords[j].value['´¿Ç'].value,
	    						type : 'DROP_DOWN',
	    					},
	    				}
	    			});
	    		}
	    		
	    		/*record.wR¸T.value.splice(0,1);*/
	        	kintone.app.record.set(rec); //R[hîño^

	        	        	       	       	       	
	        };
	        
	        kintone.app.record.getSpaceElement('button').appendChild(mySpaceFieldButton);
									
			
		}
									
		
		return event;

	});
	
	
	
	

})();