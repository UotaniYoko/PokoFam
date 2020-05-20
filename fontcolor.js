/*
Žg—pƒAƒvƒŠFŒ´‰¿ŠÇ—
ŠT—vF”»’è’l‚ðŠî‚ÉƒtƒB[ƒ‹ƒh‚Ì”wŒiF‚ð•Ï‚¦‚Ü‚·
*/
(function() {
	"use strict";

	//ƒCƒxƒ“ƒgˆ—¦•Ï‚¦‚È‚¢(ƒŒƒCƒAƒEƒgF‚ð•Ï‚¦‚é‚È‚Ç‚ÌƒtƒHƒ“ƒgˆ—‚Íuapp.record.detail.showvƒCƒxƒ“ƒg‚µ‚©‘Î‰ž‚µ‚È‚¢)
	kintone.events.on([ 'app.record.detail.show' ], function(event) {

		//ƒŒƒR[ƒh‘Þ”ðˆ—
		var record = event.record;
		//”wŒiF‚ð•ÏX‚µ‚½‚¢ƒtƒB[ƒ‹ƒh—v‘f‚Ì‘Þ”ðˆ—«
		var elUrgent = kintone.app.record.getFieldElement('•¶Žš—ñ_Žó’‹àŠz”äŠr1');
		var char2 = kintone.app.record.getFieldElement('•¶Žš—ñ_Žó’‹àŠz”äŠr2');
		var char3 = kintone.app.record.getFieldElement('•¶Žš—ñ_Žó’‹àŠz”äŠr3');
		var char4 = kintone.app.record.getFieldElement('•¶Žš—ñ_Žó’‹àŠz”äŠr4');
		var elUrgent2 = kintone.app.record.getFieldElement('•¶Žš—ñ_”„ã‹àŠz”äŠr1');
		var char5 = kintone.app.record.getFieldElement('•¶Žš—ñ_”„ã‹àŠz”äŠr2');
		var char6 = kintone.app.record.getFieldElement('•¶Žš—ñ_”„ã‹àŠz”äŠr3');
		var char7 = kintone.app.record.getFieldElement('•¶Žš—ñ_”„ã‹àŠz”äŠr4');
		var elUrgent3 = kintone.app.record.getFieldElement('•¶Žš—ñ_Šm’è”»’è');
		//”wŒiF‚ð•ÏX‚µ‚½‚¢ƒtƒB[ƒ‹ƒh—v‘f‚Ì‘Þ”ðˆ—ª

		//”»’è’l‚Ì—p‚Ì•Ï”@‰Šú‰»‚µ‚Ü‚·
		var num1 = 0;

		// •¶Žš—ñ_Žó’‹àŠz”äŠr1‚Ì”»’è
		num1 = Number(record['”’l_Žó’‹àŠz”äŠr1']['value']);
		if (num1 > 60) {
			//”»’è’l‚ª60‚ð’´‚¦‚½‚ç”wŒiF‚ðu#228B22v—Î
			elUrgent.style.backgroundColor = '#228B22';
		} else if (num1 > 40) {
			//”»’è’l‚ª40‚ð’´‚¦‚½‚ç”wŒiF‚ðu#0000FFvÂ
			elUrgent.style.backgroundColor = '#0000FF';
		} else if (num1 > 20) {
			//”»’è’l‚ª20‚ð’´‚¦‚½‚ç”wŒiF‚ðu#FFFF00v‰©
			elUrgent.style.backgroundColor = '#FFFF00';
		} else {
			//”»’è’l‚ª20‚ð’´‚¦‚½‚ç”wŒiF‚ðu#FF0000vÔ
			elUrgent.style.backgroundColor = '#FF0000';
		}

		// •¶Žš—ñ_Žó’‹àŠz”äŠr2‚Ì”»’è
		num1 = Number(record['”’l_Žó’‹àŠz”äŠr2']['value']);
		if (num1 > 60) {
			char2.style.backgroundColor = '#228B22';
		} else if (num1 > 40) {
			char2.style.backgroundColor = '#0000FF';
		} else if (num1 > 20) {
			char2.style.backgroundColor = '#FFFF00';
		} else {
			char2.style.backgroundColor = '#FF0000';
		}

		// •¶Žš—ñ_Žó’‹àŠz”äŠr3‚Ì”»’è
		num1 = Number(record['”’l_Žó’‹àŠz”äŠr3']['value']);
		if (num1 > 60) {
			char3.style.backgroundColor = '#228B22';
		} else if (num1 > 40) {
			char3.style.backgroundColor = '#0000FF';
		} else if (num1 > 20) {
			char3.style.backgroundColor = '#FFFF00';
		} else {
			char3.style.backgroundColor = '#FF0000';
		}

		// •¶Žš—ñ_Žó’‹àŠz”äŠr4‚Ì”»’è
		num1 = Number(record['”’l_Žó’‹àŠz”äŠr4']['value']);
		if (num1 > 60) {
			char4.style.backgroundColor = '#228B22';
		} else if (num1 > 40) {
			char4.style.backgroundColor = '#0000FF';
		} else if (num1 > 20) {
			char4.style.backgroundColor = '#FFFF00';
		} else {
			char4.style.backgroundColor = '#FF0000';
		}

		// •¶Žš—ñ_”„ã‹àŠz”äŠr1‚Ì”»’è
		num1 = Number(record['”’l_”„ã‹àŠz”äŠr1']['value']);
		if (num1 > 60) {
			elUrgent2.style.backgroundColor = '#228B22';
		} else if (num1 > 40) {
			elUrgent2.style.backgroundColor = '#0000FF';
		} else if (num1 > 20) {
			elUrgent2.style.backgroundColor = '#FFFF00';
		} else {
			elUrgent2.style.backgroundColor = '#FF0000';
		}

		// •¶Žš—ñ_”„ã‹àŠz”äŠr2‚Ì”»’è
		num1 = Number(record['”’l_”„ã‹àŠz”äŠr2']['value']);
		if (num1 > 60) {
			char5.style.backgroundColor = '#228B22';
		} else if (num1 > 40) {
			char5.style.backgroundColor = '#0000FF';
		} else if (num1 > 20) {
			char5.style.backgroundColor = '#FFFF00';
		} else {
			char5.style.backgroundColor = '#FF0000';
		}

		// •¶Žš—ñ_”„ã‹àŠz”äŠr3‚Ì”»’è
		num1 = Number(record['”’l_”„ã‹àŠz”äŠr3']['value']);
		if (num1 > 60) {
			char6.style.backgroundColor = '#228B22';
		} else if (num1 > 40) {
			char6.style.backgroundColor = '#0000FF';
		} else if (num1 > 20) {
			char6.style.backgroundColor = '#FFFF00';
		} else {
			char6.style.backgroundColor = '#FF0000';
		}

		// •¶Žš—ñ_”„ã‹àŠz”äŠr4‚Ì”»’è
		num1 = Number(record['”’l_”„ã‹àŠz”äŠr4']['value']);
		if (num1 > 60) {
			char7.style.backgroundColor = '#228B22';
		} else if (num1 > 40) {
			char7.style.backgroundColor = '#0000FF';
		} else if (num1 > 20) {
			char7.style.backgroundColor = '#FFFF00';
		} else {
			char7.style.backgroundColor = '#FF0000';
		}

		// •¶Žš—ñ_Šm’è”»’è
		num1 = record['•¶Žš—ñ_Šm’è”»’è']['value'];
		if (num1 == 'A') {
			elUrgent3.style.backgroundColor = '#228B22';
		} else if (num1 == 'B') {
			elUrgent3.style.backgroundColor = '#0000FF';
		} else if (num1 == 'C') {
			elUrgent3.style.backgroundColor = '#FFFF00';
		} else if (num1 == 'D') {
			elUrgent3.style.backgroundColor = '#FF0000';
		}
		else{}

		return event;

	});

})();