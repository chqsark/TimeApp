function start() {
	var current = new Date();
	var year = current.getFullYear(); // yyyy
	var month = current.getMonth(); // 0~11
	var day = current.getDate();    // 1~31
	var dRate;

	// making sure origin is always in the past or equal to today
	if (month < 10 || (month == 10 && day < 28)) {
		var origin = new Date(year - 1, 9, 5);
	} else {
		var origin = new Date(year, 9, 5);
	}
	if (origin.getFullYear()+1 % 4 == 0 || origin.getFullYear()+1 % 400 == 0) {
		dRate = 0.98360655737
	} else {
		dRate = 0.98630136986
	}
	var timeDiff = Math.abs(current.getTime() - origin.getTime());
	var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 	
	var degree = diffDays * dRate;
    var srotate = "rotate(" + degree + "deg)";
    $("#sec").css({"-moz-transform" : srotate, "-webkit-transform" : srotate});
}

$(document).ready(function() {
    start();
});