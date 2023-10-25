Table of contents
[Introduction](#webdevcourse)

[CSS Selectors](#selectors-in-css)

[Element Selector](#element-selector)

[Id Selector](#id-selector)

[Class Selector](#class-selector)

[Grouping Selector](#grouping-selector)

[detaiils about core web development](#details-about-the-tutorial)
# webdevcourse
In This repository there is everything from starting to end in the web development course.

## details about the tutorial
HTML, CSS and Javascript are the core components of a website. If a web developer knows **HTML**, **CSS** and **Javascript** then he can work with a library like React. It is a Javascript library that is used to build eye catching User Interfaces (UIs).

We have covered the entire HTML, CSS and JS in the web development course.

Interested in exploring HTML, CSS amd JS ? With CSS you can create amazing websites with awesome looks.

Come along with me in this exciting journey.

Here are some examples of JS and CSS

```js
let num1 = 25;
let num2 = 45
let res = num1 + num2
document.getElementById("container").innerHTML = "Hi everyone out there";

let hello = ()=>{
    console.log("Hello everyone")
}

hello()

function printName(name)
{
    // This code prints the name passed to the function in the console.
    console.log(name)
}
```
# Selectors in CSS
There are four types of basic selectors in CSS

* Element Selector
* Id Selector
* Class Selector
* Grouping Selector


## Element selector
```CSS
p
{
    background-color: red;
    text-align: center
}
```
This is an example of element selector in CSS. In this example all `p` elements on the webpage are selected and the `background-color: red` declaration makes their background color red

## ID Selector
If we want to style only the `p` element with `id="first para` so we can target the that particular paragraph by its Id using the id selector in CSS. To select a particular element by its id we can write `#id`

```CSS
p#firstPara
{
    border: 2px solid cornflowerblue;
    font-family: tahoma;
    font-size: 23px;
    font-weight: bold;
}
```

## Class Selector

Class Selector allows us to select elements on the webpage by their class name. The class selector is represented by the . (period) character.

Have a look at the following code that illustrates this.

```CSS
.box
{
    width: 300px;
    margin: auto;
    padding: 10px;
    color: yellow;
    background-color: dodgerblue
}
```
In the example code above the `.box` class is styled with the specified properties

## Grouping selector

The grouping selector is used when we want to apply the same style to multiple elements. For eg.

```CSS
p,span
{
    color: orange;
    background-color: khaki;
}
```