(function() {
  "use strict";
 
    kintone.events.on([ 'app.record.edit.show', 'app.record.create.show' ], function(event) {
        // 任意のスペースフィールドにボタンを設置
        var mySpaceFieldButton = document.createElement('button');
        mySpaceFieldButton.id = 'my_space_field_button';
        mySpaceFieldButton.innerText = '品番・色セット';
                                         		                       
        mySpaceFieldButton.onclick = function () {

        	var rec = kintone.app.record.get(); //レコード情報取得
        	var record = rec.record;
        	var table = record['Table'].value;        	      	       	
        	       	       	        	        	
    		for ( var i = 0; i < Number(table.length) ; i++) {
    			
/*    			alert('＾＾'+ table[i].value['ドロップダウン_品名'].value);*/   			    			
			   			  			    			
    			if (table[i].value['ドロップダウン_品名'].value == "秋冬ブルゾン") {
    				table[i].value['品番'].value = '1280';	
    				table[i].value['色'].value = '61(モスグリーン)';		 
    				table[i].value['数値_金額'].value = '7900';
        			table[i].value['ドロップダウン_サイズ'].disabled = false;
        			table[i].value['ドロップダウン_ズボン用サイズ'].disabled = true;
    			}
    			else if(table[i].value['ドロップダウン_品名'].value == "秋冬カーゴパンツ") 
    			{  				    				
    				table[i].value['品番'].value = '1283';	
    				table[i].value['色'].value = '61(モスグリーン)';    				
    				table[i].value['数値_金額'].value = '6000';		 
        			table[i].value['ドロップダウン_サイズ'].disabled = true;
        			table[i].value['ドロップダウン_ズボン用サイズ'].disabled = false;
    			}
    			else if(table[i].value['ドロップダウン_品名'].value == "秋冬パンツ(ポケットなし)") 
    			{  				    				
    				table[i].value['品番'].value = '1282';	
    				table[i].value['色'].value = '61(モスグリーン)';    				
    				table[i].value['数値_金額'].value = '5400';		 
        			table[i].value['ドロップダウン_サイズ'].disabled = true;
        			table[i].value['ドロップダウン_ズボン用サイズ'].disabled = false;
    			}
    			else if(table[i].value['ドロップダウン_品名'].value == "長袖シャツ") 
    			{  				    				
    				table[i].value['品番'].value = '1293';	
    				table[i].value['色'].value = '61(モスグリーン)';    				
    				table[i].value['数値_金額'].value = '5400';		 
        			table[i].value['ドロップダウン_サイズ'].disabled = false;
        			table[i].value['ドロップダウン_ズボン用サイズ'].disabled = true;
    			}
    			else if(table[i].value['ドロップダウン_品名'].value == "防寒着上(ブルゾン)") 
    			{  				    				
    				table[i].value['品番'].value = 'JIT 48340';	
    				table[i].value['色'].value = '-';    				
    				table[i].value['数値_金額'].value = '19000';		 
        			table[i].value['ドロップダウン_サイズ'].disabled = false;
        			table[i].value['ドロップダウン_ズボン用サイズ'].disabled = true;
    			}
    			else if(table[i].value['ドロップダウン_品名'].value == "防寒着上(コート)") 
    			{  				    				
    				table[i].value['品番'].value = 'JIT 48343';	
    				table[i].value['色'].value = '-';    				
    				table[i].value['数値_金額'].value = '21300';		 
        			table[i].value['ドロップダウン_サイズ'].disabled = false;
        			table[i].value['ドロップダウン_ズボン用サイズ'].disabled = true;
    			}
    			else if(table[i].value['ドロップダウン_品名'].value == "防寒着下") 
    			{  				    				
    				table[i].value['品番'].value = '-';	
    				table[i].value['色'].value = '-';    				
    				table[i].value['数値_金額'].value = '13700';		 
        			table[i].value['ドロップダウン_サイズ'].disabled = false;
        			table[i].value['ドロップダウン_ズボン用サイズ'].disabled = true;
    			}
    			else if(table[i].value['ドロップダウン_品名'].value == "春夏ブルゾン") 
    			{  				    				
    				table[i].value['品番'].value = '1294';	
    				table[i].value['色'].value = '61(モスグリーン)';    				
    				table[i].value['数値_金額'].value = '6600';		 
        			table[i].value['ドロップダウン_サイズ'].disabled = false;
        			table[i].value['ドロップダウン_ズボン用サイズ'].disabled = true;
    			}
    			else if(table[i].value['ドロップダウン_品名'].value == "春夏カーゴパンツ") 
    			{  				    				
    				table[i].value['品番'].value = '1296';	
    				table[i].value['色'].value = '61(モスグリーン)';    				
    				table[i].value['数値_金額'].value = '5300';		 
        			table[i].value['ドロップダウン_サイズ'].disabled = false;
        			table[i].value['ドロップダウン_ズボン用サイズ'].disabled = true;
    			}
    			else if(table[i].value['ドロップダウン_品名'].value == "春夏パンツ") 
    			{  				    				
    				table[i].value['品番'].value = '1290';	
    				table[i].value['色'].value = '61(モスグリーン)';    				
    				table[i].value['数値_金額'].value = '4900';		 
        			table[i].value['ドロップダウン_サイズ'].disabled = false;
        			table[i].value['ドロップダウン_ズボン用サイズ'].disabled = true;
    			}
    			else if(table[i].value['ドロップダウン_品名'].value == "半袖シャツ") 
    			{  				    				
    				table[i].value['品番'].value = '1292';	
    				table[i].value['色'].value = '61(モスグリーン)';    				
    				table[i].value['数値_金額'].value = '5100';		 
        			table[i].value['ドロップダウン_サイズ'].disabled = false;
        			table[i].value['ドロップダウン_ズボン用サイズ'].disabled = true;
    			}
    			else if(table[i].value['ドロップダウン_品名'].value == "ポロシャツ") 
    			{  				    				
    				table[i].value['品番'].value = '6180';	
    				table[i].value['色'].value = '10(コン)';    				
    				table[i].value['数値_金額'].value = '0';		 
        			table[i].value['ドロップダウン_サイズ'].disabled = false;
        			table[i].value['ドロップダウン_ズボン用サイズ'].disabled = true;
    			}
    			else if(table[i].value['ドロップダウン_品名'].value == "フルハーネス対応空調服") 
    			{  				    				
    				table[i].value['品番'].value = 'KE98101';	
    				table[i].value['色'].value = '22(シルバーグレー)';    				
    				table[i].value['数値_金額'].value = '0';
        			table[i].value['ドロップダウン_サイズ'].disabled = false;
        			table[i].value['ドロップダウン_ズボン用サイズ'].disabled = true;
    			}
    			
    			table[i].value['品番'].disabled = true;
    			table[i].value['色'].disabled = true;
				table[i].value['数値_金額'].disabled = true;		 

    			
    		}
    		
        	kintone.app.record.set(rec); //レコード情報登録
        	        	       	       	       	
        };
        
        
        kintone.app.record.getSpaceElement('button').appendChild(mySpaceFieldButton);
        
		return event;
    });
})();