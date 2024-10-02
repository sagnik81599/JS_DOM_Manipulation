// 4 pillars of DOM

// 1. Selection of an elemnet
// 2. Changing HTML
// 3. Changing CSS
// 4. Event Listener


let pra = document.querySelector('h2'); //Selected element
console.log(pra);  // in brower output show
pra.innerHTML = "I am study Adamas University"; // Changing HTML in js file

let pra1 = document.querySelector('h1');
pra1.style.backgroundColor = "pink"; // Changing CSS



let  btn = document.querySelector('.btn1');
btn.addEventListener('click', function(){
    // console.log("Hii");
    btn.innerHTML = "Hello Guys";
    btn.style.backgroundColor = "green";
    btn.style.color = "#fff";

});



var bulb = document.querySelector('.bulb');
var btn2 = document.querySelector('.btn2');

var flag = 0;

btn2.addEventListener("click",function(){

    if(flag == 0){
    bulb.style.backgroundColor = "black";
    flag = 1;
    }
    else{
        bulb.style.backgroundColor = "transparent";
        flag = 0;
    }
});






