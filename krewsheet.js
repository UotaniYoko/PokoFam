// イベントハンドラーの登録を実行する
var handler = function(event) {
    console.log(event);
};
kintone.events.on('app.record.index.show', function(event) {
    krewsheet.events.on('app.record.index.show', handler);
    
    var record = event.records;
    var tokyo = 0;
    var fukuoka = 0;
    var sapporo = 0;
    
	for ( var i = 0; i < record.length; i++) {
		var rows = event.records[i];
		
		if(rows['ドロップダウン']['value'] == "東京"){			
			tokyo += Number(rows['U3']['value']);			
		}
		else if(rows['ドロップダウン']['value'] == "福岡"){
			fukuoka += Number(rows['U3']['value']);						
		}
		else if(rows['ドロップダウン']['value'] == "札幌"){
			sapporo += Number(rows['U3']['value']);					    						
		}

	}
       
    var el = document.createElement('a');
    el.textContent = '東京合計：' + tokyo.toLocaleString();
    kintone.app.getHeaderMenuSpaceElement().appendChild(el);

    var fl = document.createElement('b');
    fl.textContent = '福岡合計：' + fukuoka.toLocaleString();
    kintone.app.getHeaderMenuSpaceElement().appendChild(fl);
    
    var gl = document.createElement('c');
    gl.textContent = '札幌合計：' + sapporo.toLocaleString();
    kintone.app.getHeaderMenuSpaceElement().appendChild(gl);
    
    
});