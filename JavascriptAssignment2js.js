//question 1:
alert("Question 1 answer:" + " " + Date());
//question 2:
function question2(){
	var question2=document.getElementById('question2');
	question2.src="https://th.bing.com/th/id/OIP.EcOXZb2tDdXmuJjRcIFzWwHaE4?pid=ImgDet&rs=1";
}
//question 3:
function question3(){
	document.getElementById('question3').innerHTML='New Content';
}
//question 4:
function question4(){
	alert('I love ICS!');
}
//question5:
function question5(){
	var question5=document.getElementById('question5');
	question5.style.backgroundColor='pink';
	question5.style.fontFamily='Arial';
	question5.style.textAlign='center';
}
//question6:
function question6more(f) {
  return (5/9) * (f-32);
}

function question6() {
  document.getElementById("question6").innerHTML = question6more(20);
}
//question7:
	function question7(){
    var a=parseFloat(prompt('please enter the first number'));
    var b=parseFloat(prompt('please enter the last number'));
    document.getElementById('solution1').innerHTML=a+b;
}	

	function question7more(){
	document.getElementById('solution1').innerHTML=0;
}
//question8:
function question8(){
    var a=prompt('please enter the first name');
    var b=prompt('please enter the last name');
    document.getElementById('solution2').innerHTML="Nice to meet you"+" "+a+" "+b;
}	