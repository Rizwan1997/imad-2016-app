console.log('Loaded!');

var button=document.getElementById('counter');

button.onclick=function(){
   var request = new XMLHttpRequest();
   request.onreadystatecharge = function(){
       if(request.readystate=== XMLHttpRequest.DONE){
           if (this.readyState == 4 && this.status == 200){
               var counter= request.responseText;
               var cnt=document.getElementById('count');

               cnt.innerHTML= counter.toString();

           }
       }
   };
   request.open('GET','http://rizwan1997.imad.hasura-app.io/counter',true);
   request.send(counter);
};
    

var submit=document.getElementById('submit_btn');
submit.onclick= function(){
     
   var request = new XMLHttpRequest();
      xhttp.onreadystatecharge = function(){
           if(request.readystate=== XMLHttpRequest.DONE){
           if (this.readyState == 4 && this.status == 200){
        var names = this.responseText;
        names = JSON.parse(names);
        var list = '';
        for(var i=0;i<names.length;i++){
            list+= '<li>' +names[i]+ '</li';
        }
        var ul = document.getElementById('namelist');
        ul.innerHTML = list;
           } } 
};

var nameInput = document.getElementById('name');
var name = nameInput.value;
   xhttp.open('GET','http://rizwan1997.imad.hasura-app.io/submit-name/name=' + name,true);
      xhttp.send(counter);
};
