function whatPeriod(){
	var d = new Date(); 
	var h = d.getHours();
	var m = d.getMinutes();
	var w = d.getDay();
	var s = d.getSeconds();
	var p = "Nice, it's not school right now!";
	var n = "ERROR!!"; //Should be changed later.
	var t = (h * 3600) + (m * 60) + s; //seconds since midnight

	document.getElementById('date').innerHTML = d;

	$.getJSON('https://spreadsheet.google.com/feeds/list/1QOcAGOgbiweTeFaG85_0Mdf9GjVYHrZz0BvbOojd47E/od6/public/values?alt=json',
	function (data) {
		var data = data.feed.entry;
		console.log(data);
			switch(w){
				case 0:
					document.getElementById("currentperiod").innerHTML = "It's a weekend, what are you doing checking the period?!";
					document.getElementById("nextperiod").innerHTML = "English";
					secnext = (86400 - t) + 29400;
					document.getElementById("secnextperiod").innerHTML = secnext;
					break;
				case 1:
					if (t < 29400) {n = "English"; secnext = 29400 - t}
					else if (29400 <= t && t < 32400) {p = "English"; n = "Science"; secnext = 32400 - t}
					else if (32400 <= t && t < 35400) {p = "Science"; n = "Town Meeting"; secnext = 35400 - t} 
					else if (35400 <= t && t < 34800) {p = "Town Meeting"; n = "Break"; secnext = 34800 - t}  
					else if (34800 <= t && t < 37800) {p = "Break"; n = "Calculus"; secnext = 37800 - t}
					else if (37800 <= t && t < 40800) {p = "Calculus"; n = "Spanish"; secnext = 40800 - t}
					else if (40800 <= t && t < 43200) {p = "Spanish"; n = "Lunch"; secnext = 43200 - t}
					else if (43200 <= t && t < 46200) {p = "Lunch"; n = "Statistics"; secnext = 46200 - t}
					else if (46200 <= t && t < 49200) {p = "Statistics"; n = "History"; secnext = 49200 - t}
					else if (49200 <= t && t < 52200) {p = "History"; n = "Free"; secnext = 52200 - t}
					else if (52200 <= t && t < 55200) {p = "Free"; n = "End of school"; secnext = 55200 - t}
					else {n = "English"; secnext = (86400 - t) + 29400}
					document.getElementById("currentperiod").innerHTML = p;
					document.getElementById("nextperiod").innerHTML = n;
					document.getElementById("secnextperiod").innerHTML = secnext;
					break;
				case 2:
					if (t < 29400) {n = "English"; secnext = 29400 - t}
					else if (29400 <= t && t < 35400) {p = "English"; n = "Advisory"; secnext = 35400 - t}
					else if (35400 <= t && t < 36600) {p = "Advisory"; n= "Break"; secnext = 36600 - t} 
					else if (34800 <= t && t < 38400) {p = "Break"; n = "Science"; secnext = 38400 - t}
					else if (38400 <= t && t < 42000) {p = "Science"; n = "History"; secnext = 42000 - t}
					else if (42000 <= t && t < 45600) {p = "History"; n = "Lunch"; secnext = 45600 - t}
					else if (45600 <= t && t < 49200) {p = "Lunch"; n = "Free"; secnext = 49200 - t}
					else if (49200 <= t && t < 55200) {p = "Free"; n = "End of school"; secnext = 55200 - t}
					else {n = "Calculus"; secnext = (86400 - t) + 29400}
					document.getElementById("currentperiod").innerHTML = p;
					document.getElementById("nextperiod").innerHTML = n;
					document.getElementById("secnextperiod").innerHTML = secnext;
					break;
		
				case 3:
					if (t < 29400) {n = "Calculus"; secnext = 29400 - t}
					else if (29400 <= t && t < 35400) {p = "Calculus"; n = "Town Meeting"; secnext = 35400 - t}
					else if (35400 <= t && t < 36600) {p = "Town Meeting"; n = "Break"; secnext = 36600 - t}
					else if (34800 <= t && t < 38400) {p = "Break"; n = "Flex"; secnext = 38400 - t}
					else if (38400 <= t && t < 42000) {p = "Flex"; n = "Spanish"; secnext = 42000 - t}
					else if (42000 <= t && t < 45600) {p = "Spanish"; n = "Lunch"; secnext = 45600 - t}
					else if (45600 <= t && t < 49200) {p = "Lunch"; n = "Statistics"; secnext = 49200 - t}
					else if (49200 <= t && t < 55200) {p = "Statistics"; n = "End of school"; secnext = 55200 - t}
					else {n = "Science"; secnext = (86400 - t) + 29400}
					document.getElementById("currentperiod").innerHTML = p;
					document.getElementById("nextperiod").innerHTML = n;
					document.getElementById("secnextperiod").innerHTML = secnext;
					break;
		
				case 4:
					if (t < 29400) {n = "English"; secnext = 29400 - t}
					else if (29400 <= t && t < 35400) {p = "Science"; n = "Advisory"; secnext = 35400 - t}
					else if (35400 <= t && t < 36600) {p = "Advisory"; n = "Break"; secnext = 36600 - t}
					else if (34800 <= t && t < 38400) {p = "Break"; n = "English"; secnext = 38400 - t}
					else if (38400 <= t && t < 42000) {p = "English"; n = "Free"; secnext = 42000 - t}
					else if (42000 <= t && t < 45600) {p = "Free"; n = "Lunch"; secnext = 45600 - t}
					else if (45600 <= t && t < 49200) {p = "Lunch"; n = "History"; secnext = 49200 - t}
					else if (49200 <= t && t < 55200) {p = "History"; n = "End of school"; secnext = 55200 - t}
					else {n = "Spanish"; secnext = (86400 - t) + 29400}
					document.getElementById("currentperiod").innerHTML = p;
					document.getElementById("nextperiod").innerHTML = n;
					document.getElementById("secnextperiod").innerHTML = secnext;
					break;
		
				case 5:
					if (t < 29400) {n = "Spanish"; secnext = 29400 - t}
					else if (29400 <= t && t < 35400) {p = "Spanish"; n = "Town Meeting"; secnext = 35400 - t}
					else if (35400 <= t && t < 36600) {p = "Town Meeting"; n = "Break"; secnext = 36600 - t}
					else if (36600 <= t && t < 38400) {p = "Break"; n = "Flex"; secnext = 38400 - t}
					else if (38400 <= t && t < 41400) {p = "Flex"; n = "Calculus"; secnext = 41400 - t}
					else if (41400 <= t && t < 45000) {p = "Calculus"; n = "Lunch"; secnext = 45000 - t}
					else if (45000 <= t && t < 48600) {p = "Lunch"; n = "Statistics"; secnext = 48600 - t}
					else if (48600 <= t && t < 52200) {p = "Statistics"; n = "End of school"; secnext = 52200 - t}
					else {n = "English"; secnext = ((86400 * 3) - t + 29400)}
					document.getElementById("currentperiod").innerHTML = p;
					document.getElementById("nextperiod").innerHTML = n;
					document.getElementById("secnextperiod").innerHTML = secnext;
					break;
				
				case 6:
					document.getElementById("currentperiod").innerHTML = "It's a weekend, what are you doing checking the period?!";
					document.getElementById("nextperiod").innerHTML = "English";
					secnext = ((86400 * 2) - t + 29400);
					document.getElementById("secnextperiod").innerHTML = secnext;
					break;
				default:
					console.log("Not a day of the week");
					}
	var minnext = Number(document.getElementById("secnextperiod").innerHTML) / 60;
	document.getElementById("minnextperiod").innerHTML = Math.round(minnext);
	})}
window.setInterval(function(){
		whatPeriod();
		}, 1000);