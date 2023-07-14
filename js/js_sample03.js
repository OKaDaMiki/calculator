const arr = new Array();
//const arr = [];
console.log(arr);
arr[0] = 10;
arr[1] = 20;
arr[2] = 40;
arr[3] = 100;
arr[4] = 60;
console.log(arr.length);
//arrの数→　arr.length
//ここで足し算するなら
let ans = 0;
//ans = arr[0] + arr[1] + arr[2];
console.log(ans);
// for(1,2,3){}
// 1：カウンタ変数　　2:繰り返す条件　3:カウンタを増やす（減らす）
for(let i=0; i<arr.length; i++ ){
    //繰り返し条件が満たされるまで内容を繰り返す
    console.log(`${i+1}回実施`);
    ans = ans + arr[i];
    //ans += arr[i];
    //この二行は 0+10=10 をしたあと 10+20=30　して 30+40=70　で何回か計算 
}
console.log(`答えは${ans}です`);

//ans = arr[0] + arr[1] + arr[2];


//連想配列
const arr2 = [];
arr2["name"] = "takimoto";
arr2["age"] = 30;
arr2["hobby"] = "sports";
console.log(arr2);

const btn = document.getElementsByClassName("btn");
const text = document.getElementById("text");
// console.log(btn[0]);
// btn[0].addEventListener("click",() =>{
//     console.log("hello");
// });
// for(let i=0; i<btn.length; i++){
//    btn[i].addEventListener("click", () =>{
//    console.log("hello");
//    });
//}
for(let i=0; i<btn.length; i++){
    btn[i].addEventListener("click", (evt) =>{
    console.dir(evt.target);
    text.innerText = (`${evt.target.innerText}が押されました`);
    });
}