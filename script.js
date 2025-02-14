
//add event
addButton.addEventListener('click', function(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let addButton = document.getElementById("addButton").value;
    let result = document.getElementById("result");

//perfom the calculations
let sum =parseFloat(num1) + parseFloat(num2);
 
    result.innerHTML = sum;
});