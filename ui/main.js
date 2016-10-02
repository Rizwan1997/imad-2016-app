console.log('Loaded!');

var button=document.getElementById('counter');

button.onclick=function(){
   var request = new XMLHttpRequest();
   request.onreadystatecharge = function(){
       if(request.readystate=== XMLHttpRequest.DONE){
           if(request.status===200){
               var counter= request.responseText;
               var cnt=document.getElementById('count');

               cnt.innerHTML= counter.toString();

           }
       }
   };
   request.open('GET','http://rizwan1997.imad.hasura-app.io/counter',true);
   request.send(null);
};
    
var nameinput=document.getElementById('name');
var name1= nameinput.value;
submit.onclick= function(){
    var names= ['name1','name2','name3'];
    var list= '';
    for(var i=0;i<names.lenght;i++){
    list+='<li'>names[i]'</li>'; }
    var ul=document.getElementById('namelist');
    ul.innerHTML= list;
};