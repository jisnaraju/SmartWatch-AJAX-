                                                          // correct time displaying//
function startTime() {
 var today = new Date();
 var h = today.getHours();
 var m = today.getMinutes();
 var s = today.getSeconds();
 m = checkTime(m);
 s = checkTime(s);
 document.getElementById('txt').innerHTML =
 h + ":" + m + ":" + s;
 var t = setTimeout(startTime, 500);
}
function checkTime(i) {
 if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
 return i;
}
                                        //AJAX//


$('nav a').on('click', function(e) {
 e.preventDefault();
 var url = this.href;
 $('nav a.current').removeClass('current');
 $(this).addClass('current');
 $('#content').remove();
 $('#section').load(url + '#content');
});
                            //  Audio play and pause//

function playAudio() { 
    var x = document.getElementById("myAudio"); 
  x.play();
   document.getElementById("plays").style.visibility="hidden";
   document.getElementById("pauses").style.visibility="visible";
} 

function pauseAudio() { 
    var x = document.getElementById("myAudio"); 
  x.pause(); 
   document.getElementById("pauses").style.visibility="hidden";
   document.getElementById("plays").style.visibility="visible";
   
} 

function prevAudio(){
  var y = document.getElementById("myAudio1"); 
  document.getElementById("myAudio2").pause();
  document.getElementById("previous").style.visibility="visible";
  y.play();
}
function nextAudio(){
  var y = document.getElementById("myAudio2"); 
  document.getElementById("myAudio1").pause();
  document.getElementById("next").style.visibility="visible";
  y.play();
}
                        //timer count//  
var sec=0;
var min=0;
var hr=0;
var dissec=0;
var dismin=0;
var dishr=0;
function stopwatch()
{
sec++;
if(sec/60===1)
{
 sec=1;
 min++;
      if(min/60===1)
  {
      min=0;
      hr++;
  }
}
if(sec<10)
{
dissec="0"+sec.toString();
}
else
{
dissec=sec;
}
if(min<10)
{
dismin="0"+min.toString();
}
else
{
dismin=min;
}
if(hr<10)
{
dishr="0"+hr.toString();
}
else
{
dishr=hr;
}
document.getElementById("display").innerHTML=dishr+":"+dismin+":"+dissec;
} 
var id;
function start()
{
id= window.setInterval(stopwatch,1000);
}
function stop()
{
window.clearInterval(id);
}




