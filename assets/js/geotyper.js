$("input").keypress(function (e) {
    var c = String.fromCharCode(e.which);
    //process the single character or
    console.log(c);
    //existing text before c
    var textValue = $(this).val();
    console.log(textValue);
    var fulltext = textValue + c;
    //process the full text
});

$("#toBeTyped").on("click", function(event) {
	console.log($(this).text());
});