(function() {
    "use strict";
    kintone.events.on('app.record.index.show', function(event) {
        if (document.getElementById('my_index_button') !== null) {
            return;
        }

        var myIndexButton = document.createElement('button');
        myIndexButton.id = 'my_index_button';
        myIndexButton.innerText = '一覧のボタン';

        // ボタンクリック時の処理
        myIndexButton.onclick = function() {
        	
        	// 売上管理アプリのID
        	var TappId = 338;

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
        										
        										if (rec['日付_開始'].value !== null	&& rec['日付_終了'].value !== null && rec['ドロップダウン_営業所'].value !== null) {
       											        											
    												var start = rec['日付_開始'].value.replace(/-/g,'');
    												var end = rec['日付_終了'].value.replace(/-/g,'');
    												var place = rec['ドロップダウン_営業所'].value;
    												
    												for ( var k = 0; k < records.length; k++) {
    													
    													//売上管理の営業所=集計の営業所判定
    													if(records[k]['ドロップダウン']['value'] == place){    														
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
    												
    												//達成率計算
    												var calc = (Number(total) / Number(rec['数値_目標金額'].value)) * 100;
    												   												
/*    												alert('calc;' + calc);*/    																	
    												
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
        									
        									alert('集計が終わりました。');	       									
        									window.location.reload();
        								}
        								else{
            								window.confirm('レコードがないので集計できません');
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