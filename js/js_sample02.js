"use strict";

console.log("1");
console.log(1);
console.log(1+1);
console.log("1"+"1");
let wage = 1000;
// console.log("時給は" + wage);
console.log(`時給は${wage}`);
wage = 1200;
console.log(`時給は${wage}`);

let numA = 10;
let numB = 2;
console.log(numA % numB);
// + - * / %→余りを出す

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const ans = document.getElementById("ans");
const btn = document.getElementById("btn");
console.log(num1.value);
console.log(num2.value);
console.log(ans);
console.log(btn);

btn.addEventListener("click",() => {
    console.log(Number(num1.value));
    console.log(Number(num2.value));
    ans.value = Number(num1.value) + Number(num2.value)
    
});

// どこに　なにをする　を書く
// ansのvalueにnum1のvalueを表示
