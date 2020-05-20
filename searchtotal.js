/*
使用アプリ：購買報告書
概要：原価用に合計金額を算出する。キーをもとに合計金額を算出する(キー：工番+物販or外注)
*/
(function() {
	"use strict";

	kintone.events.on([ 'app.record.create.submit' ], function(event) {
		

		var record = event.record;
		
		//原価管理項目初期化
		record['文字列_工番合計1']['value'] = "";
		record['文字列_工番合計2']['value'] = "";
		record['文字列_工番合計3']['value'] = "";
		record['文字列_工番合計4']['value'] = "";
		record['文字列_工番合計5']['value'] = "";
		record['文字列_工番合計6']['value'] = "";
		record['文字列_工番合計7']['value'] = "";
		record['文字列_工番合計8']['value'] = "";
		record['文字列_工番合計9']['value'] = "";
		record['文字列_工番合計10']['value'] = "";
		record['数値_工番合計1']['value'] = 0;
		record['数値_工番合計2']['value'] = 0;
		record['数値_工番合計3']['value'] = 0;
		record['数値_工番合計4']['value'] = 0;
		record['数値_工番合計5']['value'] = 0;
		record['数値_工番合計6']['value'] = 0;
		record['数値_工番合計7']['value'] = 0;
		record['数値_工番合計8']['value'] = 0;
		record['数値_工番合計9']['value'] = 0;
		record['数値_工番合計10']['value'] = 0;

		var tableRecords = event.record.商品.value;

/*		alert('^^bello!数値_工番合計2' + record['数値_工番合計2']['value']);*/
		
/*		var key = tableRecords[0].value['ルックアップ_工番'].value + tableRecords[0].value['原価管理'].value;*/
		
		var flag = 0;
		
		var addnumber = 0;

		for ( var i = 0; i < Number(record['商品']['value'].length) ; i++) {
			
			if(tableRecords[i].value['ルックアップ_工番'].value !== undefined && tableRecords[i].value['原価管理'].value !== undefined){
				
				//1
				if (flag == '0'){					
					//工番合計に値が入っていない
					if(record['文字列_工番合計1']['value']  === '' || record['文字列_工番合計1']['value'] === undefined){			
						record['文字列_工番合計1']['value'] = tableRecords[i].value['ルックアップ_工番'].value + tableRecords[i].value['原価管理'].value;
						addnumber = Number(record['数値_工番合計1']['value']);					
						addnumber += Number(tableRecords[i].value['金額'].value);					
						record['数値_工番合計1']['value'] = addnumber;
						flag = 1;
						addnumber = 0;
					}
					//工番合計に値が入っている
					else{
						//keyが合致する
						if(record['文字列_工番合計1']['value'] == tableRecords[i].value['ルックアップ_工番'].value + tableRecords[i].value['原価管理'].value){
							record['数値_工番合計1']['value'] += Number(tableRecords[i].value['金額'].value);
							flag = 1;
						}		
					}				
				}
				
				//2
				if (flag == '0'){
					//工番合計に値が入っていない
					if(record['文字列_工番合計2']['value']  === '' || record['文字列_工番合計2']['value'] === undefined){
						record['文字列_工番合計2']['value'] = tableRecords[i].value['ルックアップ_工番'].value + tableRecords[i].value['原価管理'].value;
						addnumber = Number(record['数値_工番合計2']['value']);					
						addnumber += Number(tableRecords[i].value['金額'].value);					
						record['数値_工番合計2']['value'] = addnumber;
						flag = 1;
						addnumber = 0;
					}
					//工番合計に値が入っている
					else{
						//keyが合致する
						if(record['文字列_工番合計2']['value'] == tableRecords[i].value['ルックアップ_工番'].value + tableRecords[i].value['原価管理'].value){
							record['数値_工番合計2']['value'] += Number(tableRecords[i].value['金額'].value);
							flag = 1;
						}		
					}				
				}
				
				//3
				if (flag == '0'){
					//工番合計に値が入っていない
					if(record['文字列_工番合計3']['value']  === '' || record['文字列_工番合計3']['value'] === undefined){
						record['文字列_工番合計3']['value'] = tableRecords[i].value['ルックアップ_工番'].value + tableRecords[i].value['原価管理'].value;
						addnumber = Number(record['数値_工番合計3']['value']);					
						addnumber += Number(tableRecords[i].value['金額'].value);					
						record['数値_工番合計3']['value'] = addnumber;
						flag = 1;
						addnumber = 0;
					}
					//工番合計に値が入っている
					else{
						//keyが合致する
						if(record['文字列_工番合計3']['value'] == tableRecords[i].value['ルックアップ_工番'].value + tableRecords[i].value['原価管理'].value){
							record['数値_工番合計3']['value'] += Number(tableRecords[i].value['金額'].value);
							flag = 1;
						}		
					}				
				}
				
				//4
				if (flag == '0'){
					//工番合計に値が入っていない
					if(record['文字列_工番合計4']['value']  === '' || record['文字列_工番合計4']['value'] === undefined){
						record['文字列_工番合計4']['value'] = tableRecords[i].value['ルックアップ_工番'].value + tableRecords[i].value['原価管理'].value;
						addnumber = Number(record['数値_工番合計4']['value']);					
						addnumber += Number(tableRecords[i].value['金額'].value);					
						record['数値_工番合計4']['value'] = addnumber;
						flag = 1;
						addnumber = 0;
					}
					//工番合計に値が入っている
					else{
						//keyが合致する
						if(record['文字列_工番合計4']['value'] == tableRecords[i].value['ルックアップ_工番'].value + tableRecords[i].value['原価管理'].value){
							record['数値_工番合計4']['value'] += Number(tableRecords[i].value['金額'].value);
							flag = 1;
						}		
					}				
				}
				
				//5
				if (flag == '0'){
					//工番合計に値が入っていない
					if(record['文字列_工番合計5']['value']  === '' || record['文字列_工番合計5']['value'] === undefined){
						record['文字列_工番合計5']['value'] = tableRecords[i].value['ルックアップ_工番'].value + tableRecords[i].value['原価管理'].value;
						addnumber = Number(record['数値_工番合計5']['value']);					
						addnumber += Number(tableRecords[i].value['金額'].value);					
						record['数値_工番合計5']['value'] = addnumber;
						flag = 1;
						addnumber = 0;
					}
					//工番合計に値が入っている
					else{
						//keyが合致する
						if(record['文字列_工番合計5']['value'] == tableRecords[i].value['ルックアップ_工番'].value + tableRecords[i].value['原価管理'].value){
							record['数値_工番合計5']['value'] += Number(tableRecords[i].value['金額'].value);
							flag = 1;
						}		
					}				
				}
				
				//6
				if (flag == '0'){
					if(record['文字列_工番合計6']['value']  === '' || record['文字列_工番合計6']['value'] === undefined){
						//工番合計に値が入っていない
						record['文字列_工番合計6']['value'] = tableRecords[i].value['ルックアップ_工番'].value + tableRecords[i].value['原価管理'].value;
						addnumber = Number(record['数値_工番合計6']['value']);					
						addnumber += Number(tableRecords[i].value['金額'].value);					
						record['数値_工番合計6']['value'] = addnumber;
						flag = 1;
						addnumber = 0;
					}
					//工番合計に値が入っている
					else{
						//keyが合致する
						if(record['文字列_工番合計6']['value'] == tableRecords[i].value['ルックアップ_工番'].value + tableRecords[i].value['原価管理'].value){
							record['数値_工番合計6']['value'] += Number(tableRecords[i].value['金額'].value);
							flag = 1;
						}		
					}				
				}

				//7
				if (flag == '0'){
					//工番合計に値が入っていない
					if(record['文字列_工番合計7']['value']  === '' || record['文字列_工番合計7']['value'] === undefined){
						record['文字列_工番合計7']['value'] = tableRecords[i].value['ルックアップ_工番'].value + tableRecords[i].value['原価管理'].value;
						addnumber = Number(record['数値_工番合計7']['value']);					
						addnumber += Number(tableRecords[i].value['金額'].value);					
						record['数値_工番合計7']['value'] = addnumber;
						flag = 1;
						addnumber = 0;
					}
					//工番合計に値が入っている
					else{
						//keyが合致する
						if(record['文字列_工番合計7']['value'] == tableRecords[i].value['ルックアップ_工番'].value + tableRecords[i].value['原価管理'].value){
							record['数値_工番合計7']['value'] += Number(tableRecords[i].value['金額'].value);
							flag = 1;
						}		
					}				
				}
		
				//8
				if (flag == '0'){
					//工番合計に値が入っていない
					if(record['文字列_工番合計8']['value']  === '' || record['文字列_工番合計8']['value'] === undefined){
						record['文字列_工番合計8']['value'] = tableRecords[i].value['ルックアップ_工番'].value + tableRecords[i].value['原価管理'].value;
						addnumber = Number(record['数値_工番合計8']['value']);					
						addnumber += Number(tableRecords[i].value['金額'].value);					
						record['数値_工番合計8']['value'] = addnumber;
						flag = 1;
						addnumber = 0;
					}
					//工番合計に値が入っている
					else{
						//keyが合致する
						if(record['文字列_工番合計8']['value'] == tableRecords[i].value['ルックアップ_工番'].value + tableRecords[i].value['原価管理'].value){
							record['数値_工番合計8']['value'] += Number(tableRecords[i].value['金額'].value);
							flag = 1;
						}		
					}				
				}
				
				//9
				if (flag == '0'){
					//工番合計に値が入っていない
					if(record['文字列_工番合計9']['value']  === '' || record['文字列_工番合計9']['value'] === undefined){
						record['文字列_工番合計9']['value'] = tableRecords[i].value['ルックアップ_工番'].value + tableRecords[i].value['原価管理'].value;
						addnumber = Number(record['数値_工番合計9']['value']);					
						addnumber += Number(tableRecords[i].value['金額'].value);					
						record['数値_工番合計9']['value'] = addnumber;
						flag = 1;
						addnumber = 0;
					}
					//工番合計に値が入っている
					else{
						//keyが合致する
						if(record['文字列_工番合計9']['value'] == tableRecords[i].value['ルックアップ_工番'].value + tableRecords[i].value['原価管理'].value){
							record['数値_工番合計9']['value'] += Number(tableRecords[i].value['金額'].value);
							flag = 1;
						}		
					}				
				}
				
				//10
				if (flag == '0'){
					//工番合計に値が入っていない
					if(record['文字列_工番合計10']['value']  === '' || record['文字列_工番合計10']['value'] === undefined){
						record['文字列_工番合計10']['value'] = tableRecords[i].value['ルックアップ_工番'].value + tableRecords[i].value['原価管理'].value;
						addnumber = Number(record['数値_工番合計10']['value']);					
						addnumber += Number(tableRecords[i].value['金額'].value);					
						record['数値_工番合計10']['value'] = addnumber;
						flag = 1;
						addnumber = 0;
					}
					//工番合計に値が入っている
					else{
						//keyが合致する
						if(record['文字列_工番合計10']['value'] == tableRecords[i].value['ルックアップ_工番'].value + tableRecords[i].value['原価管理'].value){
							record['数値_工番合計10']['value'] += Number(tableRecords[i].value['金額'].value);
							flag = 1;
						}		
					}				
				}				
				
			}
			else{
				
/*				alert('^^bello!');*/
				
			}						
			
			flag = 0;
			addnumber = 0;			
			
		}
		
		//仕切値管理初期化
		
		var sikirineRecords = record['商品'].value;

		var sikirineflag = 0;

		record['文字列_品番1']['value'] = "";
		record['文字列_品番2']['value'] = "";
		record['文字列_品番3']['value'] = "";
		record['文字列_品番4']['value'] = "";
		record['文字列_品番5']['value'] = "";
		record['文字列_品番6']['value'] = "";
		record['文字列_品番7']['value'] = "";
		record['文字列_品番8']['value'] = "";
		record['文字列_品番9']['value'] = "";
		record['文字列_品番10']['value'] = "";
		record['文字列_品番11']['value'] = "";
		record['文字列_品番12']['value'] = "";
		record['文字列_品番13']['value'] = "";
		record['文字列_品番14']['value'] = "";
		record['文字列_品番15']['value'] = "";

		for ( var i = 0; i < Number(record['商品']['value'].length); i++) {

			if (sikirineRecords[i].value['品番'].value !== undefined && sikirineRecords[i].value['品番'].value !== '') {


					// 1
					// 品番に値が入っていない
					if (sikirineflag == '0') {
						if (record['文字列_品番1']['value'] === ''
								|| record['文字列_品番1']['value'] === undefined) {
							record['文字列_品番1']['value'] = sikirineRecords[i].value['品番'].value;
							sikirineflag = 1;
						}
					}

					// 2
					// 品番に値が入っていない
					if (sikirineflag == '0') {
						if (record['文字列_品番2']['value'] === ''
							|| record['文字列_品番2']['value'] === undefined) {
						record['文字列_品番2']['value'] = sikirineRecords[i].value['品番'].value;
						sikirineflag = 1;
						}
					}

					// 3
					// 品番に値が入っていない
					if (sikirineflag == '0') {
						if (record['文字列_品番3']['value'] === ''
							|| record['文字列_品番3']['value'] === undefined) {
						record['文字列_品番3']['value'] = sikirineRecords[i].value['品番'].value;
						sikirineflag = 1;
						}
					}

					// 4
					// 品番に値が入っていない
					if (sikirineflag == '0') {
						if (record['文字列_品番4']['value'] === ''
							|| record['文字列_品番4']['value'] === undefined) {
						record['文字列_品番4']['value'] = sikirineRecords[i].value['品番'].value;
						sikirineflag = 1;
						}
					}

					// 5
					// 品番に値が入っていない
					if (sikirineflag == '0') {
						if (record['文字列_品番5']['value'] === ''
							|| record['文字列_品番5']['value'] === undefined) {
						record['文字列_品番5']['value'] = sikirineRecords[i].value['品番'].value;
						sikirineflag = 1;
						}
					}
					
					// 6
					// 品番に値が入っていない
					if (sikirineflag == '0') {
						if (record['文字列_品番6']['value'] === ''
							|| record['文字列_品番6']['value'] === undefined) {
						record['文字列_品番6']['value'] = sikirineRecords[i].value['品番'].value;
						sikirineflag = 1;
						}
					}
					
					// 7
					// 品番に値が入っていない
					if (sikirineflag == '0') {
						if (record['文字列_品番7']['value'] === ''
							|| record['文字列_品番7']['value'] === undefined) {
						record['文字列_品番7']['value'] = sikirineRecords[i].value['品番'].value;
						sikirineflag = 1;
						}
					}
					
					// 8
					// 品番に値が入っていない
					if (sikirineflag == '0') {
						if (record['文字列_品番8']['value'] === ''
							|| record['文字列_品番8']['value'] === undefined) {
						record['文字列_品番8']['value'] = sikirineRecords[i].value['品番'].value;
						sikirineflag = 1;
						}
					}
					
					// 9
					// 品番に値が入っていない
					if (sikirineflag == '0') {
						if (record['文字列_品番9']['value'] === ''
							|| record['文字列_品番9']['value'] === undefined) {
						record['文字列_品番9']['value'] = sikirineRecords[i].value['品番'].value;
						sikirineflag = 1;
						}
					}
					
					// 10
					// 品番に値が入っていない
					if (sikirineflag == '0') {
						if (record['文字列_品番10']['value'] === ''
							|| record['文字列_品番10']['value'] === undefined) {
						record['文字列_品番10']['value'] = sikirineRecords[i].value['品番'].value;
						sikirineflag = 1;
						}
					}
					
					// 11
					// 品番に値が入っていない
					if (sikirineflag == '0') {
						if (record['文字列_品番11']['value'] === ''
							|| record['文字列_品番11']['value'] === undefined) {
						record['文字列_品番11']['value'] = sikirineRecords[i].value['品番'].value;
						sikirineflag = 1;
						}
					}
					
					// 12
					// 品番に値が入っていない
					if (sikirineflag == '0') {
						if (record['文字列_品番12']['value'] === ''
							|| record['文字列_品番12']['value'] === undefined) {
						record['文字列_品番12']['value'] = sikirineRecords[i].value['品番'].value;
						sikirineflag = 1;
						}
					}
					
					// 13
					// 品番に値が入っていない
					if (sikirineflag == '0') {
						if (record['文字列_品番13']['value'] === ''
							|| record['文字列_品番13']['value'] === undefined) {
						record['文字列_品番13']['value'] = sikirineRecords[i].value['品番'].value;
						sikirineflag = 1;
						}
					}
					
					// 14
					// 品番に値が入っていない
					if (sikirineflag == '0') {
						if (record['文字列_品番14']['value'] === ''
							|| record['文字列_品番14']['value'] === undefined) {
						record['文字列_品番14']['value'] = sikirineRecords[i].value['品番'].value;
						sikirineflag = 1;
						}
					}
					
					// 15
					// 品番に値が入っていない
					if (sikirineflag == '0') {
						if (record['文字列_品番15']['value'] === ''
							|| record['文字列_品番15']['value'] === undefined) {
						record['文字列_品番15']['value'] = sikirineRecords[i].value['品番'].value;
						sikirineflag = 1;
						}
					}					


			}

			sikirineflag = 0;

		}
												
		return event;

	});
	
	kintone.events.on([ 'app.record.edit.submit' ], function(event) {

		var record = event.record;
		
		//原価管理項目初期化
		record['文字列_工番合計1']['value'] = "";
		record['文字列_工番合計2']['value'] = "";
		record['文字列_工番合計3']['value'] = "";
		record['文字列_工番合計4']['value'] = "";
		record['文字列_工番合計5']['value'] = "";
		record['文字列_工番合計6']['value'] = "";
		record['文字列_工番合計7']['value'] = "";
		record['文字列_工番合計8']['value'] = "";
		record['文字列_工番合計9']['value'] = "";
		record['文字列_工番合計10']['value'] = "";
		record['数値_工番合計1']['value'] = 0;
		record['数値_工番合計2']['value'] = 0;
		record['数値_工番合計3']['value'] = 0;
		record['数値_工番合計4']['value'] = 0;
		record['数値_工番合計5']['value'] = 0;
		record['数値_工番合計6']['value'] = 0;
		record['数値_工番合計7']['value'] = 0;
		record['数値_工番合計8']['value'] = 0;
		record['数値_工番合計9']['value'] = 0;
		record['数値_工番合計10']['value'] = 0;

		var tableRecords = event.record.商品.value;
		
/*		var key = tableRecords[0].value['ルックアップ_工番'].value + tableRecords[0].value['原価管理'].value;*/
		
		var flag = 0;
		
		var addnumber = 0;

		for ( var i = 0; i < Number(record['商品']['value'].length) ; i++) {
			
			if(tableRecords[i].value['ルックアップ_工番'].value !== undefined && tableRecords[i].value['原価管理'].value !== undefined){
				
				//1
				if (flag == '0'){					
					//工番合計に値が入っていない
					if(record['文字列_工番合計1']['value']  === '' || record['文字列_工番合計1']['value'] === undefined){			
						record['文字列_工番合計1']['value'] = tableRecords[i].value['ルックアップ_工番'].value + tableRecords[i].value['原価管理'].value;
						addnumber = Number(record['数値_工番合計1']['value']);					
						addnumber += Number(tableRecords[i].value['金額'].value);					
						record['数値_工番合計1']['value'] = addnumber;
						flag = 1;
						addnumber = 0;
					}
					//工番合計に値が入っている
					else{
						//keyが合致する
						if(record['文字列_工番合計1']['value'] == tableRecords[i].value['ルックアップ_工番'].value + tableRecords[i].value['原価管理'].value){
							record['数値_工番合計1']['value'] += Number(tableRecords[i].value['金額'].value);
							flag = 1;
						}		
					}				
				}
				
				//2
				if (flag == '0'){
					//工番合計に値が入っていない
					if(record['文字列_工番合計2']['value']  === '' || record['文字列_工番合計2']['value'] === undefined){
						record['文字列_工番合計2']['value'] = tableRecords[i].value['ルックアップ_工番'].value + tableRecords[i].value['原価管理'].value;
						addnumber = Number(record['数値_工番合計2']['value']);					
						addnumber += Number(tableRecords[i].value['金額'].value);					
						record['数値_工番合計2']['value'] = addnumber;
						flag = 1;
						addnumber = 0;
					}
					//工番合計に値が入っている
					else{
						//keyが合致する
						if(record['文字列_工番合計2']['value'] == tableRecords[i].value['ルックアップ_工番'].value + tableRecords[i].value['原価管理'].value){
							record['数値_工番合計2']['value'] += Number(tableRecords[i].value['金額'].value);
							flag = 1;
						}		
					}				
				}
				
				//3
				if (flag == '0'){
					//工番合計に値が入っていない
					if(record['文字列_工番合計3']['value']  === '' || record['文字列_工番合計3']['value'] === undefined){
						record['文字列_工番合計3']['value'] = tableRecords[i].value['ルックアップ_工番'].value + tableRecords[i].value['原価管理'].value;
						addnumber = Number(record['数値_工番合計3']['value']);					
						addnumber += Number(tableRecords[i].value['金額'].value);					
						record['数値_工番合計3']['value'] = addnumber;
						flag = 1;
						addnumber = 0;
					}
					//工番合計に値が入っている
					else{
						//keyが合致する
						if(record['文字列_工番合計3']['value'] == tableRecords[i].value['ルックアップ_工番'].value + tableRecords[i].value['原価管理'].value){
							record['数値_工番合計3']['value'] += Number(tableRecords[i].value['金額'].value);
							flag = 1;
						}		
					}				
				}
				
				//4
				if (flag == '0'){
					//工番合計に値が入っていない
					if(record['文字列_工番合計4']['value']  === '' || record['文字列_工番合計4']['value'] === undefined){
						record['文字列_工番合計4']['value'] = tableRecords[i].value['ルックアップ_工番'].value + tableRecords[i].value['原価管理'].value;
						addnumber = Number(record['数値_工番合計4']['value']);					
						addnumber += Number(tableRecords[i].value['金額'].value);					
						record['数値_工番合計4']['value'] = addnumber;
						flag = 1;
						addnumber = 0;
					}
					//工番合計に値が入っている
					else{
						//keyが合致する
						if(record['文字列_工番合計4']['value'] == tableRecords[i].value['ルックアップ_工番'].value + tableRecords[i].value['原価管理'].value){
							record['数値_工番合計4']['value'] += Number(tableRecords[i].value['金額'].value);
							flag = 1;
						}		
					}				
				}
				
				//5
				if (flag == '0'){
					//工番合計に値が入っていない
					if(record['文字列_工番合計5']['value']  === '' || record['文字列_工番合計5']['value'] === undefined){
						record['文字列_工番合計5']['value'] = tableRecords[i].value['ルックアップ_工番'].value + tableRecords[i].value['原価管理'].value;
						addnumber = Number(record['数値_工番合計5']['value']);					
						addnumber += Number(tableRecords[i].value['金額'].value);					
						record['数値_工番合計5']['value'] = addnumber;
						flag = 1;
						addnumber = 0;
					}
					//工番合計に値が入っている
					else{
						//keyが合致する
						if(record['文字列_工番合計5']['value'] == tableRecords[i].value['ルックアップ_工番'].value + tableRecords[i].value['原価管理'].value){
							record['数値_工番合計5']['value'] += Number(tableRecords[i].value['金額'].value);
							flag = 1;
						}		
					}				
				}
				
				//6
				if (flag == '0'){
					if(record['文字列_工番合計6']['value']  === '' || record['文字列_工番合計6']['value'] === undefined){
						//工番合計に値が入っていない
						record['文字列_工番合計6']['value'] = tableRecords[i].value['ルックアップ_工番'].value + tableRecords[i].value['原価管理'].value;
						addnumber = Number(record['数値_工番合計6']['value']);					
						addnumber += Number(tableRecords[i].value['金額'].value);					
						record['数値_工番合計6']['value'] = addnumber;
						flag = 1;
						addnumber = 0;
					}
					//工番合計に値が入っている
					else{
						//keyが合致する
						if(record['文字列_工番合計6']['value'] == tableRecords[i].value['ルックアップ_工番'].value + tableRecords[i].value['原価管理'].value){
							record['数値_工番合計6']['value'] += Number(tableRecords[i].value['金額'].value);
							flag = 1;
						}		
					}				
				}

				//7
				if (flag == '0'){
					//工番合計に値が入っていない
					if(record['文字列_工番合計7']['value']  === '' || record['文字列_工番合計7']['value'] === undefined){
						record['文字列_工番合計7']['value'] = tableRecords[i].value['ルックアップ_工番'].value + tableRecords[i].value['原価管理'].value;
						addnumber = Number(record['数値_工番合計7']['value']);					
						addnumber += Number(tableRecords[i].value['金額'].value);					
						record['数値_工番合計7']['value'] = addnumber;
						flag = 1;
						addnumber = 0;
					}
					//工番合計に値が入っている
					else{
						//keyが合致する
						if(record['文字列_工番合計7']['value'] == tableRecords[i].value['ルックアップ_工番'].value + tableRecords[i].value['原価管理'].value){
							record['数値_工番合計7']['value'] += Number(tableRecords[i].value['金額'].value);
							flag = 1;
						}		
					}				
				}
		
				//8
				if (flag == '0'){
					//工番合計に値が入っていない
					if(record['文字列_工番合計8']['value']  === '' || record['文字列_工番合計8']['value'] === undefined){
						record['文字列_工番合計8']['value'] = tableRecords[i].value['ルックアップ_工番'].value + tableRecords[i].value['原価管理'].value;
						addnumber = Number(record['数値_工番合計8']['value']);					
						addnumber += Number(tableRecords[i].value['金額'].value);					
						record['数値_工番合計8']['value'] = addnumber;
						flag = 1;
						addnumber = 0;
					}
					//工番合計に値が入っている
					else{
						//keyが合致する
						if(record['文字列_工番合計8']['value'] == tableRecords[i].value['ルックアップ_工番'].value + tableRecords[i].value['原価管理'].value){
							record['数値_工番合計8']['value'] += Number(tableRecords[i].value['金額'].value);
							flag = 1;
						}		
					}				
				}
				
				//9
				if (flag == '0'){
					//工番合計に値が入っていない
					if(record['文字列_工番合計9']['value']  === '' || record['文字列_工番合計9']['value'] === undefined){
						record['文字列_工番合計9']['value'] = tableRecords[i].value['ルックアップ_工番'].value + tableRecords[i].value['原価管理'].value;
						addnumber = Number(record['数値_工番合計9']['value']);					
						addnumber += Number(tableRecords[i].value['金額'].value);					
						record['数値_工番合計9']['value'] = addnumber;
						flag = 1;
						addnumber = 0;
					}
					//工番合計に値が入っている
					else{
						//keyが合致する
						if(record['文字列_工番合計9']['value'] == tableRecords[i].value['ルックアップ_工番'].value + tableRecords[i].value['原価管理'].value){
							record['数値_工番合計9']['value'] += Number(tableRecords[i].value['金額'].value);
							flag = 1;
						}		
					}				
				}
				
				//10
				if (flag == '0'){
					//工番合計に値が入っていない
					if(record['文字列_工番合計10']['value']  === '' || record['文字列_工番合計10']['value'] === undefined){
						record['文字列_工番合計10']['value'] = tableRecords[i].value['ルックアップ_工番'].value + tableRecords[i].value['原価管理'].value;
						addnumber = Number(record['数値_工番合計10']['value']);					
						addnumber += Number(tableRecords[i].value['金額'].value);					
						record['数値_工番合計10']['value'] = addnumber;
						flag = 1;
						addnumber = 0;
					}
					//工番合計に値が入っている
					else{
						//keyが合致する
						if(record['文字列_工番合計10']['value'] == tableRecords[i].value['ルックアップ_工番'].value + tableRecords[i].value['原価管理'].value){
							record['数値_工番合計10']['value'] += Number(tableRecords[i].value['金額'].value);
							flag = 1;
						}		
					}				
				}
				
			}
			else{
				

				
			}						
			
			flag = 0;
			addnumber = 0;			
			
		}
		
		//仕切値管理初期化
		
		var sikirineRecords = record['商品'].value;

		var sikirineflag = 0;

		record['文字列_品番1']['value'] = "";
		record['文字列_品番2']['value'] = "";
		record['文字列_品番3']['value'] = "";
		record['文字列_品番4']['value'] = "";
		record['文字列_品番5']['value'] = "";
		record['文字列_品番6']['value'] = "";
		record['文字列_品番7']['value'] = "";
		record['文字列_品番8']['value'] = "";
		record['文字列_品番9']['value'] = "";
		record['文字列_品番10']['value'] = "";
		record['文字列_品番11']['value'] = "";
		record['文字列_品番12']['value'] = "";
		record['文字列_品番13']['value'] = "";
		record['文字列_品番14']['value'] = "";
		record['文字列_品番15']['value'] = "";

		for ( var i = 0; i < Number(record['商品']['value'].length); i++) {

			if (sikirineRecords[i].value['品番'].value !== undefined && sikirineRecords[i].value['品番'].value !== '') {


					// 1
					// 品番に値が入っていない
					if (sikirineflag == '0') {
						if (record['文字列_品番1']['value'] === ''
								|| record['文字列_品番1']['value'] === undefined) {
							record['文字列_品番1']['value'] = sikirineRecords[i].value['品番'].value;
							sikirineflag = 1;
						}
					}

					// 2
					// 品番に値が入っていない
					if (sikirineflag == '0') {
						if (record['文字列_品番2']['value'] === ''
							|| record['文字列_品番2']['value'] === undefined) {
						record['文字列_品番2']['value'] = sikirineRecords[i].value['品番'].value;
						sikirineflag = 1;
						}
					}

					// 3
					// 品番に値が入っていない
					if (sikirineflag == '0') {
						if (record['文字列_品番3']['value'] === ''
							|| record['文字列_品番3']['value'] === undefined) {
						record['文字列_品番3']['value'] = sikirineRecords[i].value['品番'].value;
						sikirineflag = 1;
						}
					}

					// 4
					// 品番に値が入っていない
					if (sikirineflag == '0') {
						if (record['文字列_品番4']['value'] === ''
							|| record['文字列_品番4']['value'] === undefined) {
						record['文字列_品番4']['value'] = sikirineRecords[i].value['品番'].value;
						sikirineflag = 1;
						}
					}

					// 5
					// 品番に値が入っていない
					if (sikirineflag == '0') {
						if (record['文字列_品番5']['value'] === ''
							|| record['文字列_品番5']['value'] === undefined) {
						record['文字列_品番5']['value'] = sikirineRecords[i].value['品番'].value;
						sikirineflag = 1;
						}
					}
					
					// 6
					// 品番に値が入っていない
					if (sikirineflag == '0') {
						if (record['文字列_品番6']['value'] === ''
							|| record['文字列_品番6']['value'] === undefined) {
						record['文字列_品番6']['value'] = sikirineRecords[i].value['品番'].value;
						sikirineflag = 1;
						}
					}
					
					// 7
					// 品番に値が入っていない
					if (sikirineflag == '0') {
						if (record['文字列_品番7']['value'] === ''
							|| record['文字列_品番7']['value'] === undefined) {
						record['文字列_品番7']['value'] = sikirineRecords[i].value['品番'].value;
						sikirineflag = 1;
						}
					}
					
					// 8
					// 品番に値が入っていない
					if (sikirineflag == '0') {
						if (record['文字列_品番8']['value'] === ''
							|| record['文字列_品番8']['value'] === undefined) {
						record['文字列_品番8']['value'] = sikirineRecords[i].value['品番'].value;
						sikirineflag = 1;
						}
					}
					
					// 9
					// 品番に値が入っていない
					if (sikirineflag == '0') {
						if (record['文字列_品番9']['value'] === ''
							|| record['文字列_品番9']['value'] === undefined) {
						record['文字列_品番9']['value'] = sikirineRecords[i].value['品番'].value;
						sikirineflag = 1;
						}
					}
					
					// 10
					// 品番に値が入っていない
					if (sikirineflag == '0') {
						if (record['文字列_品番10']['value'] === ''
							|| record['文字列_品番10']['value'] === undefined) {
						record['文字列_品番10']['value'] = sikirineRecords[i].value['品番'].value;
						sikirineflag = 1;
						}
					}
					
					// 11
					// 品番に値が入っていない
					if (sikirineflag == '0') {
						if (record['文字列_品番11']['value'] === ''
							|| record['文字列_品番11']['value'] === undefined) {
						record['文字列_品番11']['value'] = sikirineRecords[i].value['品番'].value;
						sikirineflag = 1;
						}
					}
					
					// 12
					// 品番に値が入っていない
					if (sikirineflag == '0') {
						if (record['文字列_品番12']['value'] === ''
							|| record['文字列_品番12']['value'] === undefined) {
						record['文字列_品番12']['value'] = sikirineRecords[i].value['品番'].value;
						sikirineflag = 1;
						}
					}
					
					// 13
					// 品番に値が入っていない
					if (sikirineflag == '0') {
						if (record['文字列_品番13']['value'] === ''
							|| record['文字列_品番13']['value'] === undefined) {
						record['文字列_品番13']['value'] = sikirineRecords[i].value['品番'].value;
						sikirineflag = 1;
						}
					}
					
					// 14
					// 品番に値が入っていない
					if (sikirineflag == '0') {
						if (record['文字列_品番14']['value'] === ''
							|| record['文字列_品番14']['value'] === undefined) {
						record['文字列_品番14']['value'] = sikirineRecords[i].value['品番'].value;
						sikirineflag = 1;
						}
					}
					
					// 15
					// 品番に値が入っていない
					if (sikirineflag == '0') {
						if (record['文字列_品番15']['value'] === ''
							|| record['文字列_品番15']['value'] === undefined) {
						record['文字列_品番15']['value'] = sikirineRecords[i].value['品番'].value;
						sikirineflag = 1;
						}
					}					


			}

			sikirineflag = 0;

		}

		return event;

	});

})();