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
