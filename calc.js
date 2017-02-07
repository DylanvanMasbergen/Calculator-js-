var getal1=0;
var operator="";

function calculate() {
	var getalInDisplay = parseInt(document.getElementById('register').innerHTML);
	if (operator == "+") {
		var uitkomst = getal1 + getalInDisplay;
    }
    if (operator == "-") {
    	var uitkomst = getal1 - getalInDisplay;
    }
    if (operator == "*") {
    	var uitkomst = getal1 * getalInDisplay;
    }
    if (operator == "/") {
    	var uitkomst = getal1 / getalInDisplay;
    }

	
	document.getElementById('register').innerHTML = uitkomst;

}

function cls() {
	register.innerHTML ='';
}

function test (parms){
  register.innerHTML+= parms.target.innerHTML;
}

function Plus() {
	getal1 = parseInt(document.getElementById('register').innerHTML);
	document.getElementById('register').innerHTML = '';
	operator="+";
	
}
function min() {
	getal1 = parseInt(document.getElementById('register').innerHTML);
	document.getElementById('register').innerHTML = '';
	operator="-";
}
function deel() {
	getal1 = parseInt(document.getElementById('register').innerHTML);
	document.getElementById('register').innerHTML = '';
	operator="/";
}
function keer() {
	getal1 = parseInt(document.getElementById('register').innerHTML);
	document.getElementById('register').innerHTML = '';
	operator="*";
}


document.getElementById("btn1").addEventListener("click", test);
document.getElementById("btn2").addEventListener("click", test);
document.getElementById("btn3").addEventListener("click", test);
document.getElementById("btn4").addEventListener("click", test);
document.getElementById("btn5").addEventListener("click", test);
document.getElementById("btn6").addEventListener("click", test);
document.getElementById("btn7").addEventListener("click", test);
document.getElementById("btn8").addEventListener("click", test);
document.getElementById("btn9").addEventListener("click", test);
document.getElementById("btn0").addEventListener("click", test);
document.getElementById("btnc").addEventListener("click", cls);

document.getElementById("plus").addEventListener("click", Plus );
document.getElementById("calculate").addEventListener("click", calculate );
document.getElementById("min").addEventListener("click", min );
document.getElementById("deel").addEventListener("click", deel );
document.getElementById("keer").addEventListener("click", keer );
//document.getElementById("opr5").addEventListener("click", );


       
      
