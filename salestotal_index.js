/*
使用アプリ：売上管理(集計用)
概要：売上管理アプリのレコードを取得し、集計をします(一覧のボタン押下時)
集計キーは「営業所」「営業担当」「日付」
*/
(function() {
    "use strict";
    
    //※変えない
    kintone.events.on('app.record.index.show', function(event) {
    	
    	//※変えない
        if (document.getElementById('my_index_button') !== null) {
            return;
        }
        
        //※変えない
        //ボタンを一覧画面に配置する処理↓
        var myIndexButton = document.createElement('button');
        myIndexButton.id = 'my_index_button';
        //ボタン名を変えたければ変わる
        myIndexButton.innerText = '一覧のボタン';
        //↑

        //ボタンクリック時の処理↓
        myIndexButton.onclick = function() {
        	
        	//売上管理アプリのID(レコードを取得したいアプリのID)
        	var TappId = 338;

        	//別アプリのレコード一括取得処理↓
        	//※※バグありなので参考にしないでください※※
        	//※※参考にしたいば場合は原価管理アプリの「calc.js」を見てください※※
        	function fetchRecords(appId, opt_offset, opt_limit, opt_records) {
        		var offset = opt_offset || 0;
        		var limit = opt_limit || 100;
        		var allRecords = opt_records || [];
        		var params = {
        			app : appId,
        			query : 'order by レコード番号 asc limit ' + limit + ' offset ' + offset
        		};
        		return kintone.api('/k/v1/records', 'GET', params).then(function(resp) {
        			allRecords = allRecords.concat(resp.records);
        			if (resp.records.length === limit) {
        				return fetchRecords(appId, offset + limit, limit, allRecords);
        			}
        			return allRecords;
        		});

        	}
        	//別アプリのレコード取得処理↑
        	
        	//※変えない
        	fetchRecords(TappId).then(
        					function(records) {        						
        			            
        						//売上管理(集計用)のアプリID
        						var body = {
        							    "app": 349,
        							};
        						
        						//レコード一括取得処理
        							kintone.api(kintone.api.url('/k/v1/records', true), 'GET', body, function(resp) {
        								
        								//集計金額用の変数　初期化しています
        								var total = 0;
        								var totalmikomi = 0;         								 
        								
        								//レコードが1件以上あった場合、集計処理を行います
        								if(resp.records.length >= 1){
        									
        									//集計用アプリのレコード数分繰り返します(resp.records.length)↓
        									for ( var i = 0; i < resp.records.length; i++) {
        										
        										//集計用アプリにレコード(resp.records[i])を変数(rec)に退避します
        										var rec = resp.records[i];        										       										
        										      											        											
    											//集計用アプリの(rec['日付_開始'].value)(rec['日付_終了'].value)を変数に対します	
        										var start = rec['日付_開始'].value.replace(/-/g,'');   												
        										var end = rec['日付_終了'].value.replace(/-/g,'');
    											//集計キー用の変数　初期化します	
        										//集計アプリのキー
        										var place = "";
        										//売上管理アプリのキー
        										var kanriplace = "";
    												
    											//集計アプリのキー退避処理	
        										if(rec['ドロップダウン_営業所'].value !== null){
        											//営業所に値がはっていれば退避	
        											place = rec['ドロップダウン_営業所'].value;    													    												
        										}    												
        										else if(Object.keys(rec['ユーザー選択_営業担当'].value).length){        											
        											//営業担当に値が入っていれば退避
        											place = rec['ユーザー選択_営業担当'].value;    													    												
        										}
        										//営業所にも営業担当にも値が入っていない場合は、メッセージを出します。
        										else{		
        											place = "YYY";    													    													    													
        											alert('営業所と営業担当どちらも入力していないレコードがあります。');    												
        										}    												
    													
    												//売上管理アプリのレコード数分繰り返します(キー検索処理)↓
    												for ( var k = 0; k < records.length; k++) {
    													
    													//売上管理アプリのキー退避処理
        												if(rec['ドロップダウン_営業所'].value !== null){
        													//営業所に値がはっていれば退避	
        													kanriplace = records[k]['ドロップダウン']['value'];   													
        												}
        												else if(Object.keys(rec['ユーザー選択_営業担当'].value).length){
        													//営業担当に値が入っていれば退避
        													kanriplace = records[k]['ユーザー選択']['value']; 
        												}
        												//営業所にも営業担当にも値が入っていない場合は、ありえない値を入れます(なんとなく)
        												else{
        													kanriplace = "XXX";
        												}
    													
    													
    													//売上管理と集計用でキーが合致するかの判定処理
        												//売上管理の営業所=集計の営業所判定↓
    													if(kanriplace === place){
    														
    														//営業所のキーが合致した場合は売上管理のサマリー売上詳細テーブルを参照し金額合算します
    														//サマリー売上詳細テーブルを変数(tableRecords)に退避します
    														var tableRecords = records[k].サマリー売上詳細.value;
    														
    														//サマリー売上詳細テーブルの明細数分、金額合算処理を繰り返します
    														for ( var j = 0; j < tableRecords.length; j++) {
    															
    															//サマリー売上詳細テーブルの日付退避処理
    															var date = tableRecords[j].value['contact_date'].value.replace(/-/g,'');
    															
    															//売上月が集計の期間の範囲内かの判定
    															if(parseInt(start) <= parseInt(date) && parseInt(date) <= parseInt(end)){
    																
    																//null判定売上金額
    																if (tableRecords[j].value['売上金額'].value) { 
    																	//売上金額の合算
    																	total += parseInt(tableRecords[j].value['売上金額'].value);																	
    																}
    																//null判定見込金額
    																if (tableRecords[j].value['見込金額'].value) {
    																	//見込金額の合算
    																	totalmikomi += parseInt(tableRecords[j].value['見込金額'].value);    																	
    																}
    															}
    														}																												
    													}
        												//売上管理の営業所=集計の営業所判定↑
    													//売上管理の営業担当=集計の営業担当判定↓
    													else if(Object.keys(rec['ユーザー選択_営業担当'].value).length){
    														if(JSON.stringify(kanriplace) === JSON.stringify(place)){
        														var tableRecords = records[k].サマリー売上詳細.value;												
        														for ( var j = 0; j < tableRecords.length; j++) {
        															
        															var date = tableRecords[j].value['contact_date'].value.replace(/-/g,'');
        															
        															//売上月が集計の期間の範囲内
        															if(parseInt(start) <= parseInt(date) && parseInt(date) <= parseInt(end)){
        																
        																//null判定売上金額
        																if (tableRecords[j].value['売上金額'].value) {    																	
        																	total += parseInt(tableRecords[j].value['売上金額'].value);																	
        																}
        																//null判定見込金額
        																if (tableRecords[j].value['見込金額'].value) {   																	
        																	totalmikomi += parseInt(tableRecords[j].value['見込金額'].value);    																	
        																}
        															}
        														}    															
    														}
    													}
    													//売上管理の営業担当=集計の営業担当判定↑
    												}
    												//売上管理アプリのレコード数分繰り返します(キー検索処理)↑
    												
    												//達成率計算
    												var calc = (Number(total) / Number(rec['数値_目標金額'].value)) * 100;
    												   												    																	
    												
                    								//集計した金額を更新します
    												var putrec = {
                    									    "app": kintone.app.getId(),
                    									    "records": [
                    									        {
                    									            "id": rec['レコード番号'].value,
                    									            "record": {
                    									                "数値_売上金額": {
                    									                    "value": total.toLocaleString()
                    									                },
                    									                "数値_見込金額": {
                    									                    "value": totalmikomi.toLocaleString()
                    									                },
                    									                "数値_確定見込": {
                    									                    "value": (Number(total) + Number(totalmikomi)).toLocaleString()
                    									                },
                    									                "数値_達成率": {
                    									                    "value": Math.round(calc * 100) / 100
                    									                }
                    									                
                    									            }
                    									        }
                    									    ]
                    									};
                    								                    								                     								                   								               									
                    								//レコード更新処理↓
    												//※※変えない
    												kintone.api(kintone.api.url('/k/v1/records', true), 'PUT', putrec, function(result) {
                    								    // success
                    								    console.log(result);
                    								}, function(error) {
                    								    // error
                    								    console.log(error);
                    								});
                    								//レコード更新処理↑
                    								
                    								total = 0;
                    								totalmikomi = 0;                    								
        										            									                								               								                								        										
        									}        									
        									//集計用アプリのレコード数分繰り返します(resp.records.length)↑

        									//集計が終わったらメッセージを出します
        									alert('集計が終わりました。');	
        									//画面更新処理
        									//あった方が無難??
        									window.location.reload();
        								}
        								//レコードが1件以上あった場合、集計処理を行いますのelse
        								else{
            								window.confirm('レコードがないので集計できません');
        								}        								        								       								        								
        								        								        								
										//いる
        								return event;        								
        							    
        							}, function(error) {
        							    // error
        							    console.log(error);
        							});
        			                    			                    			            
        					});        	       	
        	
        };
        //ボタンクリック時の処理↑

        //※変えない
        //ボタン要素を画面に埋め込む処理
        kintone.app.getHeaderMenuSpaceElement().appendChild(myIndexButton);
    });
})();