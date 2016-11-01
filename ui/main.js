var button = document.getElementById("counter");
var counter;
button.onclick = function(){
    counter = counter + 1;
    var span = document.getElementById("count");
    span.innerHTML = counter.toString();
}

