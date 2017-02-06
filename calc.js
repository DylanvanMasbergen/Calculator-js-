function cls() {
	register.innerHTML ='';
}
function test (parms){
  register.innerHTML+= parms.target.innerHTML;
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
