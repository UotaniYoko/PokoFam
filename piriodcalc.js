(function() {
	"use strict";
	kintone.events.on([ 'app.record.edit.submit' ], function(event) {

		var record = event.record;
		var tableRecords = event.record.�o�׋@��.value;

		for ( var i = 0; i < Number(record['�o�׋@��']['value'].length); i++) {

			if (tableRecords[i].value['�o�ד�'].value !== undefined
					&& tableRecords[i].value['���ɓ�'].value !== undefined) {

				// �����Z�o
				//��r������t�I�u�W�F�N�g���Q��`����
				var day1 = new Date(tableRecords[i].value['�o�ד�'].value);
				var day2 = new Date(tableRecords[i].value['���ɓ�'].value);			 
				//���������߂�i86,400,000�~���b���P���j
				var termDay = (day2 - day1) / 86400000;
				
				var resulta = 0;
				var resultb = 0;
				var resultc = 0;
				var resulttotal = 0;
				
				if(termDay >= 31 ){				
					//������31�Ŋ���A�؎̂�
					resulta = Math.floor(termDay / 31); 
					//������31�Ŋ���A���܂�
					resultb = termDay % 31;
					
					//���܂肪��������
					if(resultb >= 1){					
						resultc = dayscalc(resultb);					
					}															
				}
				else{					
					resultc = dayscalc(termDay);					
				}
				
				resulttotal = resulta + resultc;
				tableRecords[i].value['T_����'].value = resulttotal; 

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