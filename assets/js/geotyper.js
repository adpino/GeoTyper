var toBeTyped = $("#toBeTyped").text();
var completed = ""

//$("input").keypress(function (e) {
$("input").keypress(function (e) {
    var c = String.fromCharCode(e.which);
    // console.log(c)
    //process the single character or
    //console.log(c);

    if (c == toBeTyped.charAt(0) || (c ==  toBeTyped.charAt(1) && toBeTyped.charAt(0) == "\n")) {
    	$(this).removeClass("error");
    	toBeTyped = toBeTyped.substr(1);
    	completed += c;
    	//console.log(completed);
    	//$("#completed").text(completed);
    	// console.log($("#completed").text())
    	 $("#toBeTyped").text(toBeTyped); // this line messes up span
    	if (toBeTyped.charAt(0) == "\n") {
    		toBeTyped = toBeTyped.substr(1);
    	}
    	// console.log("|" + c + "|" + toBeTyped.charAt(0) + "|")
    	//console.log($("#toBeTyped").html())	
    	if (toBeTyped.charAt(0) == ' ') {
    		$("#toBeTyped").html("&nbsp;" + $("#toBeTyped").html());
    	}
    	if (c == " ") {
    		$(this).val("")
    	}
    	$("#completed").text(completed);
    	console.log($("#completed").text())
    	//console.log(toBeTyped);
    	//console.log(toBeTyped.charAt(0))
    } else {
    	$(this).addClass("error");
    }
    //existing text before c
    var textValue = $(this).val();
    // console.log(textValue);
    var fulltext = textValue + c;
    //process the full text
    
});

$("input").keydown(function (e) {
	if (e.keyCode === 8) {	
    	console.log("BACKSPACE")
    } 
});;

$("#toBeTyped").on("click", function(event) {
	console.log($(this).text());
}); 