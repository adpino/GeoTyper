var toBeTyped = $("#toBeTyped").text();

$("input").keypress(function (e) {
    var c = String.fromCharCode(e.which);
    //process the single character or
    //console.log(c);
    
    if (c == toBeTyped.charAt(0) || (c ==  toBeTyped.charAt(1) && toBeTyped.charAt(0) == "\n")) {
    	toBeTyped = toBeTyped.substr(1);
    	$("#completed").append(c);
    	$("#toBeTyped").text(toBeTyped); 
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

    	//console.log(toBeTyped);
    	//console.log(toBeTyped.charAt(0))
    }
    //existing text before c
    var textValue = $(this).val();
    // console.log(textValue);
    var fulltext = textValue + c;
    //process the full text
    
});

$("#toBeTyped").on("click", function(event) {
	console.log($(this).text());
}); 