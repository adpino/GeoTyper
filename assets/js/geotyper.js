var toBeTyped = $("#toBeTyped").text();
var completed = "";
toBeTyped = toBeTyped.replace(/\n/g, " ");
var words = toBeTyped.split(" ");
var curr = words[0];
toBeTyped = toBeTyped.substr(curr.length)

$("input").bind("input", function() {
	var input = $(this).val();
	var inputLen = input.length;
	if (input == words[0].substr(0, inputLen)) {
		$(this).removeClass("error");
		// console.log(input);
		var toBe = $("#toBeTyped").text();
		console.log(toBeTyped);
		console.log(words[0].substr(inputLen));
		$("#toBeTyped").text(words[0].substr(inputLen) + toBeTyped);
		$("#curr").text(input);
		$("#curr").addClass("correct");
	} else if (input == words[0] + " ") {
		words.shift();
		$("input").val("");
		// toBeTyped = toBeTyped.substr(1);
		$("#completed").text($("#completed").text() + " " + $("#curr").text() + " ");
		$("#curr").text("");
		toBeTyped = toBeTyped.substr(words[0].length + 1)
		// console.log(words[0]);
	} else {
		$(this).addClass("error");
	}
});

// $("input").keypress(function (e) {
//     var c = String.fromCharCode(e.which);
//   	// console.log($(this).val());
//     if (c == toBeTyped.charAt(0) || (c ==  toBeTyped.charAt(1) && toBeTyped.charAt(0) == "\n") && c  != " ") {
//     	$(this).removeClass("error");
//     	if (toBeTyped.charAt(1) == "\n") {
//     		console.log("-------")
//     	}
//     	toBeTyped = toBeTyped.substr(1);
//     	if (toBeTyped.charAt(0) == " ") {
//     		toBeTyped = " " + toBeTyped;
//     	}
//     	completed += c;
// 	   	$("#toBeTyped").text(toBeTyped); // this line messes up span
//     	$("#completed").text(completed);
//     } else if (c == toBeTyped.charAt(0) && c == " ") {
//     } else {
//     	$(this).addClass("error");
//     }
    
// });

// $("input").keydown(function (e) {
// 	if (e.keyCode === 8) {	
//     	var temp = $("input").val().slice(0, -1);
//     	var tempLen = temp.length;
    	
//     	if (temp == words[0].substring(0, tempLen)) {
//     		console.log("should have removed");
//     		$("input").removeClass("error");
//     	}
//     } 
// });

// $("input").keyup(function (e) {
// 	var c = String.fromCharCode(e.which);

//     if (c == toBeTyped.charAt(0) && c == " ") {
//     	console.log("Space and charAt(0)")
//     	$(this).removeClass("error");
//     	toBeTyped = toBeTyped.substr(1);
//     	completed += c;
    
// 	   	$("#toBeTyped").text(toBeTyped); // this line messes up span
    
//     	if (c == " " && $("input").val() == words[0] + " ") {
//     		words.shift();
//     		$("input").val("");
//     		toBeTyped = toBeTyped.substr(1);
//     	}
//     	$("#completed").text(completed);
//     }
// });

$("#toBeTyped").on("click", function(event) {
	console.log($(this).text());
}); 
