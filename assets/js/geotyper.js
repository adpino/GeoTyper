// var toBeTyped = $("#toBeTyped").text();
// var completed = "";
// toBeTyped = toBeTyped.replace(/\n/g, " ");
// var words = toBeTyped.split(" ");
// var curr = words[0];
// toBeTyped = toBeTyped.substr(curr.length);

var res;

$.ajaxSetup({
    async: false
});


var directionsAPI = "https://maps.googleapis.com/maps/api/directions/json";
$.getJSON(directionsAPI, {
	origin: "38.935185, -77.074064",
	destination: "38.892326, -77.044000",
	key: "AIzaSyB2h4Ll8-Xki8ZGaMTnVZ7GLJUK9Zf0hrI"
}).done(function(result) {
	console.log(result.routes[0].legs[0]);
	console.log(result.routes[0].legs[0].steps);
	console.log(result.routes[0].legs[0].steps[0].html_instructions);
	res = result.routes[0].legs[0].steps[0].html_instructions;
});

$.ajaxSetup({
    async: true
});
res = res.replace(/(<b>|<\/b>)/g, "");

$("#toBeTyped").html(res);
var toBeTyped = $("#toBeTyped").text();
var completed = "";
toBeTyped = toBeTyped.replace(/\n/g, " ");
var words = toBeTyped.split(" ");
var curr = words[0];
toBeTyped = toBeTyped.substr(curr.length);

$("input").bind("input", function() {
	var input = $(this).val();
	var inputLen = input.length;

	if (input == words[0].substr(0, inputLen)) {
		$(this).removeClass("error");
		$("#toBeTyped").text(words[0].substr(inputLen) + toBeTyped);
		$("#curr").text(input);
		$("#curr").addClass("correct");
	} else if (input == words[0] + " ") {
		words.shift();
		$("input").val("");
		$("#completed").text($("#completed").text() + " " + $("#curr").text() + " ");
		$("#curr").text("");
		toBeTyped = toBeTyped.substr(words[0].length + 1)
	} else {
		$(this).addClass("error");
	}
});

$("#toBeTyped").on("click", function(event) {
	console.log($(this).text());
}); 
