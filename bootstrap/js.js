// JavaScript Document

var min = 0;
var sec = 0;
var milisec = 0;
var interval;

var minitues = document.getElementById("min");
var second = document.getElementById("sec");
var mili_second = document.getElementById("msec");

function milisecond()
{
	milisec ++;
	mili_second.innerHTML = milisec;
	
	if(milisec >= 100)
		{
			sec ++ ;
			second.innerHTML = sec;
			milisec = 0;
		}
	if(sec >= 60)
		{
			min ++;
			minitues.innerHTML=min;
			sec = 0 ; milisec = 0;
		}
}

document.getElementById("pause").style.display = "none";
document.getElementById("restart").disabled = true;
function start()
{
interval = setInterval(milisecond,10);
	document.getElementById("start").style.display="none";
	document.getElementById("restart").style.display="inline";
	document.getElementById("pause").style.display="inline";
	document.getElementById("pause").disabled = false;
	document.getElementById("restart").disabled = false;
	document.getElementById("record").disabled = false;
}

function pause()
{
	clearInterval(interval);
	document.getElementById("start").disabled=false;
	document.getElementById("start").style.display="inline";
	document.getElementById("restart").style.display="inline";
	document.getElementById("record").style.display="inline";
	document.getElementById("pause").style.display="none";
}


function restart()
{
	min =0;
	milisec = 0;
	sec = 0;
	minitues.innerHTML = min;
	mili_second.innerHTML = milisec;
	second.innerHTML = sec;
	
	pause()
	start()
		document.getElementById("restart").style.display="none";
	document.getElementById("record").style.display="inline";
	document.getElementById("pause").style.display="inline";
	document.getElementById("start").style.display="inline";
	document.getElementById("start").disabled=true;
	
}

function record()
{
	
	var a = document.getElementsByTagName("tr");
	var c = a.length + "" + ") ";
	
     var m = document.getElementById("mins");
	var s = document.getElementById("secs");
	var ms = document.getElementById("msecs");
	var k =  document.getElementById("n");
	k.innerHTML =c + "";
	m.innerHTML = min + "m ";
	s.innerHTML = sec + "s "; 
	ms.innerHTML = milisec + "ms ";
	
	

	
	
	
    var tr = k.parentNode.parentNode.cloneNode(true);
    document.getElementById('tbl').appendChild(tr);
	
	document.getElementById("start").disable = false;

}
	



	
	