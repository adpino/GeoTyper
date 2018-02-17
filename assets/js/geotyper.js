var toBeTyped = $("#toBeTyped").text();
var completed = "";
toBeTyped = toBeTyped.replace(/\n/g, " ");
var words = toBeTyped.split(" ");
// console.log(words);
//console.log(toBeTyped)
//$("input").keypress(function (e) {
$("input").keypress(function (e) {
    var c = String.fromCharCode(e.which);
    // console.log(c)
    //process the single character or
    //console.log(c);

    if (c == toBeTyped.charAt(0) || (c ==  toBeTyped.charAt(1) && toBeTyped.charAt(0) == "\n") && c  != " ") {
    	$(this).removeClass("error");
    	if (toBeTyped.charAt(1) == "\n") {
    		console.log("-------")
    		//$("#toBeTyped").html("&nbsp;" + $("#toBeTyped").html());
    	}
    	toBeTyped = toBeTyped.substr(1);
    	if (toBeTyped.charAt(0) == " ") {
    		toBeTyped = " " + toBeTyped;
    	}
    	completed += c;
    	//console.log(completed);
    	//$("#completed").text(completed);
    	// console.log($("#completed").text())
	   	$("#toBeTyped").text(toBeTyped); // this line messes up span
    	
    	// if (toBeTyped.charAt(0) == "\n") {
    	// 	toBeTyped = " " + toBeTyped.substr(1);            // works if change 3rd line and uncomment
    	// 	if (toBeTyped.charAt(0) == " ") {
    	// 		console.log("11111");
    	// 	}
    	// }

    	// console.log("|" + c + "|" + toBeTyped.charAt(0) + "|")
    	//console.log($("#toBeTyped").html())	
    	
    	// if (c == " " && $(this).val() == words[0]) {
    	// 	words.shift();
    	// 	$(this).val("");
    	// 	console.log("");
    	// }


    	$("#completed").text(completed);
    	//console.log($("#completed").text())
    	//console.log(toBeTyped);
    	//console.log(toBeTyped.charAt(0))
    	// console.log(toBeTyped.charAt(0));
    } else if (c == toBeTyped.charAt(0) && c == " ") {
    } else {
    	$(this).addClass("error");
    }
    
});

$("input").keydown(function (e) {
	if (e.keyCode === 8) {	
    	console.log("BACKSPACE")
    	console.log($("input").val().slice(0, -1));
    	var temp = $("input").val().slice(0, -1);
    	var tempLen = temp.length;
    	console.log(temp + " " + words[0].substring(0, tempLen));
    	if (temp == words[0].substring(0, tempLen)) {
    		console.log("should have removed");
    		$("input").removeClass("error");
    	}

    } 
});

$("input").keyup(function (e) {
	var c = String.fromCharCode(e.which);
    // if (c == " ") {
    // 	console.log("SPACEe	")
    // }
    console.log(c + " " + toBeTyped.charAt(0));
    if (c == toBeTyped.charAt(0) && c == " ") {
    	console.log("Space and charAt(0)")
    	$(this).removeClass("error");
    	toBeTyped = toBeTyped.substr(1);
    	completed += c;
    
	   	$("#toBeTyped").text(toBeTyped); // this line messes up span
    
    	if (c == " " && $("input").val() == words[0] + " ") {
    		words.shift();
    		$("input").val("");
    		toBeTyped = toBeTyped.substr(1);
    	}
    	$("#completed").text(completed);
    	console.log(toBeTyped.charAt(0));
    }
});

$("#toBeTyped").on("click", function(event) {
	console.log($(this).text());
}); 