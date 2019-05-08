window.setInterval(function(){$.getJSON("https://spreadsheets.google.com/feeds/list/16C4Uw_MbDiTYBALY89yexhW8OVrpaMIp5DYK-b4YJbY/od6/public/basic?alt=json",
function whatPeriod(data) {

	var d = new Date(); 
	var h = d.getHours();
	var m = d.getMinutes();
	var w = d.getDay();
	var s = d.getSeconds();
	var p = "Nice, it's not school right now!";
	var n = "ERROR!! var n was not changed (for next period)";
	var t = (h * 3600) + (m * 60) + s; //seconds since midnight
	var data = data.feed.entry;
	cpn = getpersonnumber(document.getElementById('currentpersoninput').value); //current person number

	function time (timeinput){
		var string = timeinput.split(':', 2);
		var hrs = string[0];
		var mins = string[1];
		var total = (hrs * 3600) + (mins * 60);
		return total;
	}

	function getperiod (personnumber, period) {
		var allperiods = data[personnumber]['content']['$t'];
		var eachperiod = allperiods.split(',');
		var finalperiod = eachperiod[period - 1].trim().slice(4 , allperiods.length);
		return finalperiod;
	}

	function getpersonnumber (directinput) {
		var input = directinput.trim();
		var number = 0;
		if (input == "") {return 0}
		else {
			do {number = number + 1} 
			while (input != data[number]['title']['$t']);
		}
		return number;
	}

	switch(w){
		case 0:
			document.getElementById("currentperiod").innerHTML = "It's a weekend, what are you doing checking the period?!";
			document.getElementById("nextperiod").innerHTML = getperiod(cpn, 1);
			secnext = (time("24:00") - t) + time("8:10");
			document.getElementById("secnextperiod").innerHTML = secnext;
			break;
		
		case 1:
			if (t < time("8:10")) {n = getperiod(cpn, 1); secnext = time("8:10") - t}
			else if (time("8:10") <= t && t < time("9:00")) {p = getperiod(cpn, 1); n = getperiod(cpn, 2); secnext = time("9:00") - t}
			else if (time("9:00") <= t && t < time("9:50")) {p = getperiod(cpn, 2); n = "Town Meeting"; secnext = time("9:50") - t} 
			else if (time("9:50") <= t && t < time("10:10")) {p = "Town Meeting"; n = "Break"; secnext = time("10:10") - t}  
			else if (time("10:10") <= t && t < time("10:30")) {p = "Break"; n = getperiod(cpn, 3); secnext = time("10:30") - t}
			else if (time("10:30") <= t && t < time("11:20")) {p = getperiod(cpn, 3); n = getperiod(cpn, 4); secnext = time("11:20") - t}
			else if (time("11:20") <= t && t < time("12:10")) {p = getperiod(cpn, 4); n = "Lunch"; secnext = time("12:10") - t}
			else if (time("12:10") <= t && t < time("12:50")) {p = "Lunch"; n = getperiod(cpn, 5); secnext = time("12:50") - t}
			else if (time("12:50") <= t && t < time("13:40")) {p = getperiod(cpn, 5); n = getperiod(cpn, 6); secnext = time("13:40") - t}
			else if (time("13:40") <= t && t < time("14:30")) {p = getperiod(cpn, 6); n = getperiod(cpn, 7); secnext = time("14:30") - t}
			else if (time("14:30") <= t && t < time("15:20")) {p = getperiod(cpn, 7); n = "End of school"; secnext = time("15:20") - t}
			else {n = getperiod(cpn, 1); secnext = (time("24:00") - t) + time("8:10")}
			document.getElementById("currentperiod").innerHTML = p;
			document.getElementById("nextperiod").innerHTML = n;
			document.getElementById("secnextperiod").innerHTML = secnext;
			break;
		
		case 2:
			if (t < time("8:10")) {n = getperiod(cpn, 1); secnext = time("8:10") - t}
			else if (time("8:10") <= t && t < time("9:50")) {p = getperiod(cpn, 1); n = "Advisory"; secnext = time("9:50") - t}
			else if (time("9:50") <= t && t < time("10:10")) {p = "Advisory"; n= "Break"; secnext = time("10:10") - t} 
			else if (time("10:10") <= t && t < time("10:40")) {p = "Break"; n = getperiod(cpn, 2); secnext = time("10:40") - t}
			else if (time("10:40") <= t && t < time("11:40")) {p = getperiod(cpn, 2); n = getperiod(cpn, 6); secnext = time("11:40") - t}
			else if (time("11:40") <= t && t < time("12:40")) {p = getperiod(cpn, 6); n = "Lunch"; secnext = time("12:40") - t}
			else if (time("12:40") <= t && t < time("13:40")) {p = "Lunch"; n = getperiod(cpn, 7); secnext = time("13:40") - t}
			else if (time("13:40") <= t && t < time("15:20")) {p = getperiod(cpn, 7); n = "End of school"; secnext = time("15:20") - t}
			else {n = getperiod(cpn, 3); secnext = (time("24:00") - t) + time("8:10")}
			document.getElementById("currentperiod").innerHTML = p;
			document.getElementById("nextperiod").innerHTML = n;
			document.getElementById("secnextperiod").innerHTML = secnext;
			break;

		case 3:
			if (t < time("8:10")) {n = getperiod(cpn, 3); secnext = time("8:10") - t}
			else if (time("8:10") <= t && t < time("9:50")) {p = getperiod(cpn, 3); n = "Town Meeting"; secnext = time("9:50") - t}
			else if (time("9:50") <= t && t < time("10:10")) {p = "Town Meeting"; n = "Break"; secnext = time("10:10") - t}
			else if (time("10:10") <= t && t < time("10:40")) {p = "Break"; n = "Flex"; secnext = time("10:40") - t}
			else if (time("10:40") <= t && t < time("11:40")) {p = "Flex"; n = getperiod(cpn, 4); secnext = time("11:40") - t}
			else if (time("11:40") <= t && t < time("12:40")) {p = getperiod(cpn, 4); n = "Lunch"; secnext = time("12:40") - t}
			else if (time("12:40") <= t && t < time("13:40")) {p = "Lunch"; n = getperiod(cpn, 5); secnext = time("13:40") - t}
			else if (time("13:40") <= t && t < time("15:20")) {p = getperiod(cpn, 5); n = "End of school"; secnext = time("15:20") - t}
			else {n = getperiod(cpn, 2); secnext = (time("24:00") - t) + time("8:10")}
			document.getElementById("currentperiod").innerHTML = p;
			document.getElementById("nextperiod").innerHTML = n;
			document.getElementById("secnextperiod").innerHTML = secnext;
			break;

		case 4:
			if (t < time("8:10")) {n = getperiod(cpn, 2); secnext = time("8:10") - t}
			else if (time("8:10") <= t && t < time("9:50")) {p = getperiod(cpn, 2); n = "Advisory"; secnext = time("9:50") - t}
			else if (time("9:50") <= t && t < time("10:10")) {p = "Advisory"; n = "Break"; secnext = time("10:10") - t}
			else if (time("10:10") <= t && t < time("10:40")) {p = "Break"; n = getperiod(cpn, 1); secnext = time("10:40") - t}
			else if (time("10:40") <= t && t < time("11:40")) {p = getperiod(cpn, 1); n = getperiod(cpn, 7); secnext = time("11:40") - t}
			else if (time("11:40") <= t && t < time("12:40")) {p = getperiod(cpn, 7); n = "Lunch"; secnext = time("12:40") - t}
			else if (time("12:40") <= t && t < time("13:40")) {p = "Lunch"; n = getperiod(cpn, 6); secnext = time("13:40") - t}
			else if (time("13:40") <= t && t < time("15:20")) {p = getperiod(cpn, 6); n = "End of school"; secnext = time("15:20") - t}
			else {n = getperiod(cpn, 4); secnext = (time("24:00") - t) + time("8:10")}
			document.getElementById("currentperiod").innerHTML = p;
			document.getElementById("nextperiod").innerHTML = n;
			document.getElementById("secnextperiod").innerHTML = secnext;
			break;

		case 5:
			if (t < time("8:10")) {n = getperiod(cpn, 4); secnext = time("8:10") - t}
			else if (time("8:10") <= t && t < time("9:50")) {p = getperiod(cpn, 4); n = "Town Meeting"; secnext = time("9:50") - t}
			else if (time("9:50") <= t && t < time("10:10")) {p = "Town Meeting"; n = "Break"; secnext = time("10:10") - t}
			else if (time("10:10") <= t && t < time("10:40")) {p = "Break"; n = "Flex"; secnext = time("10:40") - t}
			else if (time("10:40") <= t && t < time("11:30")) {p = "Flex"; n = getperiod(cpn, 3); secnext = time("11:30") - t}
			else if (time("11:30") <= t && t < time("12:30")) {p = getperiod(cpn, 3); n = "Lunch"; secnext = time("12:30") - t}
			else if (time("12:30") <= t && t < time("13:30")) {p = "Lunch"; n = getperiod(cpn, 5); secnext = time("13:30") - t}
			else if (time("13:30") <= t && t < time("14:30")) {p = getperiod(cpn, 5); n = "End of school"; secnext = time("14:30") - t}
			else {n = getperiod(cpn, 1); secnext = ((time("24:00") * 3) - t + time("8:10"))}
			document.getElementById("currentperiod").innerHTML = p;
			document.getElementById("nextperiod").innerHTML = n;
			document.getElementById("secnextperiod").innerHTML = secnext;
			break;
		
		case 6:
			document.getElementById("currentperiod").innerHTML = "It's a weekend, what are you doing checking the period?!";
			document.getElementById("nextperiod").innerHTML = getperiod(cpn, 1);
			secnext = ((time("24:00") * 2) - t + time("8:10"));
			document.getElementById("secnextperiod").innerHTML = secnext;
			break;
		
		default:
			console.log("Not a day of the week");
	}
	var minnext = Number(document.getElementById("secnextperiod").innerHTML) / 60;
	document.getElementById("minnextperiod").innerHTML = Math.round(minnext);
	document.getElementById('date').innerHTML = d;
	console.log(data);
})},100)
