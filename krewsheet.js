// �C�x���g�n���h���[�̓o�^�����s����
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
		
		if(rows['�h���b�v�_�E��']['value'] == "����"){			
			tokyo += Number(rows['U3']['value']);			
		}
		else if(rows['�h���b�v�_�E��']['value'] == "����"){
			fukuoka += Number(rows['U3']['value']);						
		}
		else if(rows['�h���b�v�_�E��']['value'] == "�D�y"){
			sapporo += Number(rows['U3']['value']);					    						
		}

	}
       
    var el = document.createElement('a');
    el.textContent = '�������v�F' + tokyo.toLocaleString();
    kintone.app.getHeaderMenuSpaceElement().appendChild(el);

    var fl = document.createElement('b');
    fl.textContent = '�������v�F' + fukuoka.toLocaleString();
    kintone.app.getHeaderMenuSpaceElement().appendChild(fl);
    
    var gl = document.createElement('c');
    gl.textContent = '�D�y���v�F' + sapporo.toLocaleString();
    kintone.app.getHeaderMenuSpaceElement().appendChild(gl);
    
    
});