(function() {
	"use strict";
	kintone.events.on([ 'app.record.edit.submit' ], function(event) {

		var record = event.record;
		var tableRecords = event.record.出荷機材.value;

		for ( var i = 0; i < Number(record['出荷機材']['value'].length); i++) {

			if (tableRecords[i].value['出荷日'].value !== undefined
					&& tableRecords[i].value['入庫日'].value !== undefined) {

				// 日数算出
				//比較する日付オブジェクトを２つ定義する
				var day1 = new Date(tableRecords[i].value['出荷日'].value);
				var day2 = new Date(tableRecords[i].value['入庫日'].value);			 
				//差日を求める（86,400,000ミリ秒＝１日）
				var termDay = (day2 - day1) / 86400000;
				
				var resulta = 0;
				var resultb = 0;
				var resultc = 0;
				var resulttotal = 0;
				
				if(termDay >= 31 ){				
					//日数を31で割る、切捨て
					resulta = Math.floor(termDay / 31); 
					//日数を31で割る、あまり
					resultb = termDay % 31;
					
					//あまりがあったら
					if(resultb >= 1){					
						resultc = dayscalc(resultb);					
					}															
				}
				else{					
					resultc = dayscalc(termDay);					
				}
				
				resulttotal = resulta + resultc;
				tableRecords[i].value['T_期間'].value = resulttotal; 

			}
		}
							
		function dayscalc(days) {						
			var dyasresult = 0;			
									
			if(days >= 28){
				dyasresult = 1;
			}
			else if(25 <= days || days >= 27){
				dyasresult = 0.9;				
			}
			else if(22 <= days || days >= 24){						
				dyasresult = 0.8;				
			}
			else if(19 <= days || days >= 21){						
				dyasresult = 0.7;				
			}
			else if(16 <= days || days >= 18){						
				dyasresult = 0.6;				
			}
			else if(13 <= days || days >= 15){						
				dyasresult = 0.5;				
			}
			else if(10 <= days || days >= 12){						
				dyasresult = 0.4;				
			}
			else if(7 <= days || days >= 9){						
				dyasresult = 0.3;				
			}
			else if(4 <= days || days >= 6){						
				dyasresult = 0.2;				
			}
			else if(1 <= days || days >= 3){						
				dyasresult = 0.1;				
			}												
			else{				
			}																															

			return dyasresult;
		}
		return event;
	});
})();