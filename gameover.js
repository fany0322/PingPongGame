var a=document.getElementById('se');
var name=document.getElementById('name');

let and=0;
var vin;

var timer=setInterval(setScore, 1000);
function setScore(){
    and++;
}
a.innerText=and;
console.log(and);
