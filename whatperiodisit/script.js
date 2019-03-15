function whatPeriod(){
	var d = new Date(); 
	var h = d.getHours();
	var m = d.getMinutes();
	var w = d.getDay();
	var s = d.getSeconds();
	var p = "Nice, it's not school right now!";
	var n = "ERROR!! var n was not changed";
	var t = (h * 3600) + (m * 60) + s; //seconds since midnight

	document.getElementById('date').innerHTML = d;

	function time (time){
		var string = time.split(':', 2);
		var hrs = string[0];
		var mins = string[1];
		var total = (hrs * 3600) + (mins * 60);
		return total;
	};

	switch(w){
		case 0:
			document.getElementById("currentperiod").innerHTML = "It's a weekend, what are you doing checking the period?!";
			document.getElementById("nextperiod").innerHTML = 1;
			secnext = (time("24:00") - t) + time("8:10");
			document.getElementById("secnextperiod").innerHTML = secnext;
			break;
		
		case 1:
			if (t < time("8:10")) {n = 1; secnext = time("8:10") - t}
			else if (time("8:10") <= t && t < time("9:00")) {p = 1; n = 2; secnext = time("9:00") - t}
			else if (time("9:00") <= t && t < time("9:50")) {p = 2; n = "Town Meeting"; secnext = time("9:50") - t} 
			else if (time("9:50") <= t && t < time("10:10")) {p = "Town Meeting"; n = "Break"; secnext = time("10:10") - t}  
			else if (time("10:10") <= t && t < time("10:30")) {p = "Break"; n = 3; secnext = time("10:30") - t}
			else if (time("10:30") <= t && t < time("11:20")) {p = 3; n = 4; secnext = time("11:20") - t}
			else if (time("11:20") <= t && t < time("12:10")) {p = 4; n = "Lunch"; secnext = time("12:10") - t}
			else if (time("12:10") <= t && t < time("12:50")) {p = "Lunch"; n = 5; secnext = time("12:50") - t}
			else if (time("12:50") <= t && t < time("13:40")) {p = 5; n = 6; secnext = time("13:40") - t}
			else if (time("13:40") <= t && t < time("14:30")) {p = 6; n = 7; secnext = time("14:30") - t}
			else if (time("14:30") <= t && t < time("15:20")) {p = 7; n = "End of school"; secnext = time("15:20") - t}
			else {n = 1; secnext = (time("24:00") - t) + time("8:10")}
			document.getElementById("currentperiod").innerHTML = p;
			document.getElementById("nextperiod").innerHTML = n;
			document.getElementById("secnextperiod").innerHTML = secnext;
			break;
		
		case 2:
			if (t < time("8:10")) {n = 1; secnext = time("8:10") - t}
			else if (time("8:10") <= t && t < time("9:50")) {p = 1; n = "Advisory"; secnext = time("9:50") - t}
			else if (time("9:50") <= t && t < time("10:10")) {p = "Advisory"; n= "Break"; secnext = time("10:10") - t} 
			else if (time("10:10") <= t && t < time("10:40")) {p = "Break"; n = 2; secnext = time("10:40") - t}
			else if (time("10:40") <= t && t < time("11:40")) {p = 2; n = 6; secnext = time("11:40") - t}
			else if (time("11:40") <= t && t < time("12:40")) {p = 6; n = "Lunch"; secnext = time("12:40") - t}
			else if (time("12:40") <= t && t < time("13:40")) {p = "Lunch"; n = 7; secnext = time("13:40") - t}
			else if (time("13:40") <= t && t < time("15:20")) {p = 7; n = "End of school"; secnext = time("15:20") - t}
			else {n = 3; secnext = (time("24:00") - t) + time("8:10")}
			document.getElementById("currentperiod").innerHTML = p;
			document.getElementById("nextperiod").innerHTML = n;
			document.getElementById("secnextperiod").innerHTML = secnext;
			break;

		case 3:
			if (t < time("8:10")) {n = 3; secnext = time("8:10") - t}
			else if (time("8:10") <= t && t < time("9:50")) {p = 3; n = "Town Meeting"; secnext = time("9:50") - t}
			else if (time("9:50") <= t && t < time("10:10")) {p = "Town Meeting"; n = "Break"; secnext = time("10:10") - t}
			else if (time("10:10") <= t && t < time("10:40")) {p = "Break"; n = "Flex"; secnext = time("10:40") - t}
			else if (time("10:40") <= t && t < time("11:40")) {p = "Flex"; n = 4; secnext = time("11:40") - t}
			else if (time("11:40") <= t && t < time("12:40")) {p = 4; n = "Lunch"; secnext = time("12:40") - t}
			else if (time("12:40") <= t && t < time("13:40")) {p = "Lunch"; n = 5; secnext = time("13:40") - t}
			else if (time("13:40") <= t && t < time("15:20")) {p = 5; n = "End of school"; secnext = time("15:20") - t}
			else {n = 2; secnext = (time("24:00") - t) + time("8:10")}
			document.getElementById("currentperiod").innerHTML = p;
			document.getElementById("nextperiod").innerHTML = n;
			document.getElementById("secnextperiod").innerHTML = secnext;
			break;

		case 4:
			if (t < time("8:10")) {n = 1; secnext = time("8:10") - t}
			else if (time("8:10") <= t && t < time("9:50")) {p = 2; n = "Advisory"; secnext = time("9:50") - t}
			else if (time("9:50") <= t && t < time("10:10")) {p = "Advisory"; n = "Break"; secnext = time("10:10") - t}
			else if (time("10:10") <= t && t < time("10:40")) {p = "Break"; n = 1; secnext = time("10:40") - t}
			else if (time("10:40") <= t && t < time("11:40")) {p = 1; n = 7; secnext = time("11:40") - t}
			else if (time("11:40") <= t && t < time("12:40")) {p = 7; n = "Lunch"; secnext = time("12:40") - t}
			else if (time("12:40") <= t && t < time("13:40")) {p = "Lunch"; n = 6; secnext = time("13:40") - t}
			else if (time("13:40") <= t && t < time("15:20")) {p = 6; n = "End of school"; secnext = time("15:20") - t}
			else {n = 4; secnext = (time("24:00") - t) + time("8:10")}
			document.getElementById("currentperiod").innerHTML = p;
			document.getElementById("nextperiod").innerHTML = n;
			document.getElementById("secnextperiod").innerHTML = secnext;
			break;

		case 5:
			if (t < time("8:10")) {n = 4; secnext = time("8:10") - t}
			else if (time("8:10") <= t && t < time("9:50")) {p = 4; n = "Town Meeting"; secnext = time("9:50") - t}
			else if (time("9:50") <= t && t < time("10:10")) {p = "Town Meeting"; n = "Break"; secnext = time("10:10") - t}
			else if (time("10:10") <= t && t < time("10:40")) {p = "Break"; n = "Flex"; secnext = time("10:40") - t}
			else if (time("10:40") <= t && t < time("11:30")) {p = "Flex"; n = 3; secnext = time("11:30") - t}
			else if (time("11:30") <= t && t < time("12:30")) {p = 3; n = "Lunch"; secnext = time("12:30") - t}
			else if (time("12:30") <= t && t < time("13:30")) {p = "Lunch"; n = 5; secnext = time("13:30") - t}
			else if (time("13:30") <= t && t < time("14:30")) {p = 5; n = "End of school"; secnext = time("14:30") - t}
			else {n = 1; secnext = ((time("24:00") * 3) - t + time("8:10"))}
			document.getElementById("currentperiod").innerHTML = p;
			document.getElementById("nextperiod").innerHTML = n;
			document.getElementById("secnextperiod").innerHTML = secnext;
			break;
		
		case 6:
			document.getElementById("currentperiod").innerHTML = "It's a weekend, what are you doing checking the period?!";
			document.getElementById("nextperiod").innerHTML = 1;
			secnext = ((time("24:00") * 2) - t + time("8:10"));
			document.getElementById("secnextperiod").innerHTML = secnext;
			break;
		
		default:
			console.log("Not a day of the week");
	}
	var minnext = Number(document.getElementById("secnextperiod").innerHTML) / 60;
	document.getElementById("minnextperiod").innerHTML = Math.round(minnext);
}
window.setInterval(function(){
		whatPeriod();
		}, 1000);