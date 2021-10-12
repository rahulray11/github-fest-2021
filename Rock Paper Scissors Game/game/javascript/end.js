var b = localStorage.getItem("myValue");
document.getElementById('changed').innerHTML = b;

var c = localStorage.getItem("myValue1");
document.getElementById('change1').innerHTML = c;

var d = localStorage.getItem("myValue2");
document.getElementById('change2').innerHTML = d;

var e = localStorage.getItem("myValue3");
document.getElementById('change3').innerHTML = e;


function new_game() {
    window.location.href = "/index.html";
}