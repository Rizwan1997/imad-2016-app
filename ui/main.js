console.log('Loaded!');

var button=document.getElementById('counter');
var cnt = document.getElementById('count');
var counter= 0;
button.onclick=function(){
   counter = counter+1;
   cnt.innerHTML= res.send(counter.toString());
};
    