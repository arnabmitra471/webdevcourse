function checkAge(){
    let age = document.getElementById("checkAge").value;
    if(age >=18)
    {
        document.getElementById("result").innerHTML = "You are eligible to drive"
    }
    else
    {
        document.getElementById("result").innerHTML = "You are not eligible to drive"
    }
}
let btn = document.getElementById("submitAge")
btn.addEventListener("click",checkAge)