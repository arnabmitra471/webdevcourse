let WorkingWithStrings = () =>
{
    let name1 = "Arnab Mitra";
    let len = name1.length;
    document.getElementById("a1").innerHTML ="The length of the string is "+len;

    let text = "We are the so called \"Vikings\" from the north";
    document.getElementById("a2").innerHTML = text;

    let fruit = "A quick brown fox jumps over the lazy dog";
    let fruitPart = fruit.slice(-12,-6);
    document.getElementById("a3").innerHTML = fruitPart;

    let st = "I love to create things by programming";
    let upper_st = st.toUpperCase()
    document.getElementById("a4").innerHTML = upper_st;

    let prog = "Python is an awesome programming language";
    let choppedStr = prog.substring(3,19);
    document.getElementById("a5").innerHTML = choppedStr;
    let sliced_str = prog.substr(3,10)
    document.getElementById("a6").innerHTML = sliced_str;

    let likedFruit = "I like apple and mushrooms a lot";
    let updated_liking = likedFruit.replace("apple","mango");
    document.getElementById("a7").innerHTML = updated_liking;

    let str = "STRING METHODS ARE VERY INTERESTING IN JAVASCRIPT";
    let lower_str = str.toLowerCase();
    document.getElementById("a8").innerHTML = lower_str;
}