function login()
{
	var user=document.getElementById("user").value;
	user=user.trim();
if(user=="")
{
document.getElementById("user").style.borderColor="red";
}
else{
document.getElementById("user").style.borderColor="";
}	

var pwd=document.getElementById("pwd").value;
pwd=pwd.trim();
if(pwd=="")
{
document.getElementById("pwd").style.borderColor="red";
}
else{
document.getElementById("pwd").style.borderColor="";
}
}


function signup()
{
	var name=document.getElementById("name").value;
	name=name.trim();
	if(name=="")
	{
		document.getElementById("name").style.borderColor="red";
	}
	else{
		document.getElementById("name").style.borderColor="";
	}
	
		
	var mobile=document.getElementById("mobile").value;
	mobile=mobile.trim();
	if(mobile=="")
	{
		document.getElementById("mobile").style.borderColor="red";
	}
	else{
		document.getElementById("mobile").style.borderColor="";
	}
	
	
	var email=document.getElementById("email").value;
	email=email.trim();
	if(email=="")
	{
		document.getElementById("email").style.borderColor="red";
	}
	else{
		document.getElementById("email").style.borderColor="";
	}
	
	var pwd1=document.getElementById("pwd1").value;
	pwd1=pwd1.trim();
	if(pwd1=="")
	{
		document.getElementById("pwd1").style.borderColor="red";
	}
	else{
		document.getElementById("pwd1").style.borderColor="";
	}
	
	var male=document.getElementById("male").checked;
	var female=document.getElementById("female").checked;
	if(male==true || female==true)
	{
		document.getElementById("gendererror").style.display="none";
	}
	else{
		document.getElementById("gendererror").style.display="block";
	}
}