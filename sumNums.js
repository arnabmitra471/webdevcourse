let sum = () =>{
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let res = num1 + num2;
    // alert(typeof(res));
    document.getElementById("result").innerHTML = "The sum of the numbers is "+res;
}