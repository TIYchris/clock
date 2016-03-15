$(document).ready(function() {

    setInterval(increment, 1000);

    function increment() {
        var now = new Date();

        var hours = now.getHours() % 12;
        if (hours === 0) {
        	hours = 12;
        }

        var minutes = now.getMinutes();
        var seconds = now.getSeconds();
        var ampm = now.getHours() < 12 ? "AM" : "PM";

        $("#hours").html(hours);
        $("#min").html(withLeadingZero(minutes));
        $("#sec").html(withLeadingZero(seconds));
        $("#timeOfDay").html(ampm);
    }

    function withLeadingZero(number) {
		return (number < 10 ? '0' : '') + number
    }
});




/*

  	// Convert an hours component of "0" to "12"
  	currentHours = ( currentHours == 0 ) ? 12 : currentHours;

  	// Compose the string for display
  	var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
  	*/
