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
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
let numC = "error";

console.log(num1.value);
console.log(num2.value);
console.log(ans);
console.log(btn5);

if(true){
    console.log("true");
}
else{
    console.log("false");
}

btn5.addEventListener("click",() => {
    //console.log(numC);
    // console.log(Number(num1.value));
    // console.log(Number(num2.value));
    if(numC == "+"){
        console.log("足し算する");
        ans.value = Number(num1.value) + Number(num2.value);
    }
    else if(numC == "-"){
        ans.value = Number(num1.value) - Number(num2.value);
    }
    else if(numC == "*"){
        ans.value = Number(num1.value) * Number(num2.value);
    }
    else if(numC == "/"){
        ans.value = Number(num1.value) / Number(num2.value);
    }
    else {
        console.log("error");
        num1.value = "";
        num2.value = "";
    }

    // if(btn1){
    //     ans.value = Number(num1.value) + Number(num2.value)
    // }
    // else if(btn2){
    //     ans.value = Number(num1.value) - Number(num2.value)
    // }
    // else if(btn3){
    //     ans.value = Number(num1.value) * Number(num2.value)
    // }
    // else if(btn4){
    //     ans.value = Number(num1.value) / Number(num2.value)
    // }
      
});
btn1.addEventListener("click",() =>{
//    console.log("+");
    numC = "+";
})
btn2.addEventListener("click",() =>{
    //    console.log("+");
    numC = "-";
})
btn3.addEventListener("click",() =>{
    //    console.log("+");
    numC = "*";
})
btn4.addEventListener("click",() =>{
    //    console.log("+");
    numC = "/";
})
