// Using the var keyword to declare a variable

let x = 10;
const h = 100;
// Here x is 10
{
    let x = 2;
    // Here x is 2
    console.log("The value of x inside the block is",x);
    const h = [34,98,12,90,12,87,156,15,20,32,100,87,310,187];
    console.log("The value of h inside the block is",h);
}
// Here x is also 2
console.log("The value of x outside the block is",x)
console.log("The value of h outside the block is",h);

let checkAdult = (age)=>{
    return age>=18;
}

let d = [87,98,12,90,109,76,27,90,17,13,11,10,9,7,8];

let result = d.filter(checkAdult)
console.log(result);

console.log(d.slice(4,8));

