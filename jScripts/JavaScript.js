//function myFunc() {
//	document.getElementById("result").innerHTML = ""

//	var num = Math.floor(Math.random() * 10);
//	console.log(num)
//		var mySum = 0;
//		for (i = 1; i <= num; i++) {
//			mySum += i;
//			document.getElementById("result").innerHTML = mySum.toString() + "<br />";
//		}

//	}

//function myFunc() {
//    document.getElementById("result").innerHTML = "";
//    var num = parseInt(document.getElementById("Text1").value);
//    if (num > 10000) {
//        var numToStr = num.toString();

//        for (var i = 0; i <= numToStr.length; i++) {

//            var digit = parseInt(numToStr[i]);

//            for (var l = 0; l < digit; l++) {
//                document.getElementById("result").innerHTML += digit.toString();
//            }

//            document.getElementById("result").innerHTML += "<br>";

//        }
//    }
//    else {
//        document.getElementById("result").innerHTML = "הזמן מספר גדול מ10000";
//    }
////}
//function myFunc() {

//    var myVar = document.getElementById("Text1").value;
//    var place = 0;
//    for (var i = 0; i <= myVar.length || place > 0; i++) {
//        if (myVar[i] > 0) {
//            place = myVar[i];
//            console.log(place);
//            document.getElementById("result").innerHTML = "the number " + place.toString() + " was found after " + i.toString() + "letters";
//        }
//        //else {
//        //    document.getElementById("result").innerHTML = "no mumber";
//        //}

//    }



//}

function myFunc() {
    var myVar = document.getElementById("Text1").value;
    var myNum = 0;
    var found = "no";
    while (myVar.length < 0 && found == "no") {
        var letter = myVar[myNum]
        
    }
}