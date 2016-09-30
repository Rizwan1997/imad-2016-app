console.log('Loaded!');

var button=document.getElementById('counter');
var cnt=document.getElementById('count');

button.onclick=function(){
   var request = new XMLHttpRequest();
   request.onreadystatecharge = function(){
       if(request.readystate=== XMLHttpRequest.DONE){
           if(request.status===200){
               var counter= request.responseText;
               cnt.innerHTML= counter.toString();

           }
       }
   };
   request.open('GET','http://rizwan1997.imad.hasura-app.io/counter',true);
   request.send(counter);
};
    