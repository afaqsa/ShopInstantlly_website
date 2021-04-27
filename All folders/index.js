function chan(onn)
{
	var image=document.getElementById("ProImg");
	var next=document.getElementsByClassName("next-img");
	if(onn=='1'){
		image.src=next[0].src;
	}
	else if(onn=='2'){
	image.src=next[1].src;
	}
	else{
	image.src=next[2].src;
	}
}
function pass(onn)
{
	if(onn==0){
		var x=document.getElementById("mypass");
		var y=document.getElementById("hide1");
		var z=document.getElementById("hide2");
		if(x.type == 'password'){
			x.type="text";
			y.style.display="none";
			z.style.display="block";
		}
		else{
			x.type="password";
			y.style.display="block";
			z.style.display="none";
		}
	}
	if(onn==1){
		var x=document.getElementById("mypass1");
		var y=document.getElementById("hide3");
		var z=document.getElementById("hide4");
		if(x.type == 'password'){
			x.type="text";
			y.style.display="none";
			z.style.display="block";
		}
		else{
			x.type="password";
			y.style.display="block";
			z.style.display="none";
		}
	}
}
function forgot(){
	window.prompt("Enter your Email");
}
function cal(){
	var password=document.getElementById("mypass").value;
	var Username=document.getElementById("User").value;
	if(password&&Username!=" ")
	{ 
		document.getElementById("link").href="../../home.html";
		localStorage.setItem("Uservalue",Username);
	}
	else{
		window.alert("invaled password/username");
	}
}
function signin()
{
	var firstname=document.getElementById("Firstname").value;
	var lastname=document.getElementById("lastname").value;
	var Username=document.getElementById("User").value;
	var password=document.getElementById("mypass").value;
	var password1=document.getElementById("mypass1").value;
	var email=document.getElementById("email").value;
	if(firstname==""||lastname=="")
	{
		window.alert("Enter first or last name");
	}
	else if(Username=="")
	{
		window.alert("Enter username");
		
	}
	else if(password!=password1 || password=="" || password1=="")
	{
		window.alert("Password not match");
	}
	else if(email=="")
	{
		window.alert("Enter email");
	}
	else if(firstname!=""&&lastname!=""&&Username!=""&&password!=""&&password1!=""&&email!=""&&password==password1)
	{
		document.getElementById("link").href="../../home.html";
		localStorage.setItem("Uservalue",Username);
	}
	
}
function setting(){

	document.getElementById("about").style.display="block";
}
function sett(){
	document.getElementById("about").style.display="none";
}
window.addEventListener('load',() => {
		document.getElementById("Name").innerHTML = localStorage.getItem("Uservalue");
		});
