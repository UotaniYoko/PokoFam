(function() {
	'use strict';

	kintone.events.on([ 'app.record.edit.show', 'app.record.create.show' ], function(event) {

		var user = kintone.getLoginUser();


		
		if(user.code === 'miura5017' || user.code === 'hamashima0437' || user.code === 'sano7375' || user.code === 'sugimura8919' || user.code === 'koyama3326'){
					
/*			alert('bello^^!' + user.code);*/
							
	        // 任意のスペースフィールドにボタンを設置
	        var mySpaceFieldButton = document.createElement('button');
	        mySpaceFieldButton.id = 'my_space_field_button';
	        mySpaceFieldButton.innerText = 'テーブルコピー';	
	        
	        mySpaceFieldButton.onclick = function () {
	        	
	    		// 「稟議書」のレコード情報取得
	        	var rec = kintone.app.record.get(); //レコード情報取得
	    		var record = rec.record;
	        	
	    		// サブテーブル(稟議書：旧)オブジェクトを取得
	    		var tableRecords = record.商品.value;
	    		// サブテーブル(稟議書：旧)の内容を配列に格納
	    		var subtable = [];
	    		for ( var i = 0; i < tableRecords.length; i++) {
	    			subtable.push({
	    				value : {
	    					"商品名" : {
	    						value : tableRecords[i].value['商品名'].value,
	    						type : 'SINGLE_LINE_TEXT',
	    					},
	    					"品番" : {
	    						value : tableRecords[i].value['品番'].value,
	    						type : 'SINGLE_LINE_TEXT',
	    					},
	    					"単価" : {
	    						value : tableRecords[i].value['単価'].value,
	    						type : 'NUMBER',
	    					},
	    					"数量" : {
	    						value : tableRecords[i].value['数量'].value,
	    						type : 'NUMBER', 
	    					},
	    					"金額" : {
	    						value : tableRecords[i].value['金額'].value,
	    						type : 'CALC',
	    					},
	    					"備考" : {
	    						value : tableRecords[i].value['備考'].value,
	    						type : 'SINGLE_LINE_TEXT',
	    					},
	    					"購入先" : {
	    						value : tableRecords[i].value['購入先'].value,
	    						type : 'SINGLE_LINE_TEXT',
	    					},
	    					"希望納期" : {
	    						value : tableRecords[i].value['希望納期'].value,
	    						type : 'SINGLE_LINE_TEXT',
	    					},
	    					"ドロップダウン_種別" : {
	    						value : tableRecords[i].value['ドロップダウン_種別'].value,
	    						type : 'DROP_DOWN',
	    					},
	    					"日付_納品日" : {
	    						value : tableRecords[i].value['日付_納品日'].value,
	    						type : 'DATE',
	    					},
	    					"ルックアップ_工番" : {
	    						value : tableRecords[i].value['ルックアップ_工番'].value,
	    						type : 'SINGLE_LINE_TEXT',
	    					},
	    					"文字列_略称" : {
	    						value : tableRecords[i].value['文字列_略称'].value,
	    						type : 'SINGLE_LINE_TEXT',
	    					},
	    					"原価管理" : {
	    						value : tableRecords[i].value['原価管理'].value,
	    						type : 'DROP_DOWN',
	    					},
	    				}
	    			});
	    		}
	    		
	    		
	    		//テーブル初期化
	    		record.購買審査T.value = [];
	    		   			    			    		
	    		
	    		for ( var j = 0; j < tableRecords.length; j++) {
	    			record.購買審査T.value.push({
	    				value : {
	    					"文字列__1行__4" : {
	    						value : tableRecords[j].value['商品名'].value,
	    						type : 'SINGLE_LINE_TEXT',
	    					},
	    					"文字列__1行__1" : {
	    						value : tableRecords[j].value['品番'].value,
	    						type : 'SINGLE_LINE_TEXT',
	    					},
	    					"単価_0" : {
	    						value : tableRecords[j].value['単価'].value,
	    						type : 'NUMBER', 
	    					},
	    					"数量_0" : {
	    						value : tableRecords[j].value['数量'].value,
	    						type : 'NUMBER', 
	    					},
	    					"小計_0" : {
	    						value : tableRecords[j].value['金額'].value,
	    						type : 'CALC',
	    					},
	    					"文字列__1行__6" : {
	    						value : tableRecords[j].value['備考'].value,
	    						type : 'SINGLE_LINE_TEXT',
	    					},
	    					"文字列__1行__2" : {
	    						value : tableRecords[j].value['購入先'].value,
	    						type : 'SINGLE_LINE_TEXT',
	    					},
	    					"文字列__1行__3" : {
	    						value : tableRecords[j].value['希望納期'].value,
	    						type : 'SINGLE_LINE_TEXT',
	    					},
	    					"ドロップダウン_種別_0" : {
	    						value : tableRecords[j].value['ドロップダウン_種別'].value,
	    						type : 'DROP_DOWN',
	    					},
	    					"日付_納品日_0" : {
	    						value : tableRecords[j].value['日付_納品日'].value,
	    						type : 'DATE',
	    					},
	    					"ルックアップ_工番_0" : {
	    						value : tableRecords[j].value['ルックアップ_工番'].value,
	    						type : 'SINGLE_LINE_TEXT',
	    					},
	    					"文字列_略称_0" : {
	    						value : tableRecords[j].value['文字列_略称'].value,
	    						type : 'SINGLE_LINE_TEXT',
	    					},
	    					"原価管理_0" : {
	    						value : tableRecords[j].value['原価管理'].value,
	    						type : 'DROP_DOWN',
	    					},
	    				}
	    			});
	    		}
	    		
	    		/*record.購買審査T.value.splice(0,1);*/
	        	kintone.app.record.set(rec); //レコード情報登録

	        	        	       	       	       	
	        };
	        
	        kintone.app.record.getSpaceElement('button').appendChild(mySpaceFieldButton);
									
			
		}
									
		
		return event;

	});

})();