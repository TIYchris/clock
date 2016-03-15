$(document).ready(function() {

    setInterval(increment, 50);

    var color = 0;

    function increment() {
        color += 10;

        var hex = color.toString(16).toUpperCase();
        hex = "#" + ("000000" + hex).substr(-6,6)
        $("#color").html(hex);
        $("body").css("background-color", hex);
    }
});





