
function inputfunction(val){
            document.getElementById("output").value+=val 
}

function solve() 
         { 
             let x = document.getElementById("output").value 
             let y = eval(x) 
             document.getElementById("output").value = y 
         }
         
function clr() 
         { 
             document.getElementById("output").value = "" 
         }