const box = document.querySelector(".container");
const colorValue = document.querySelector(".colorHEXValue");
const btn = document.querySelector("button");
const palete = document.querySelector(".palete");

function random_BG_color(){

    let hex = ['0' , '1' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9' , 'a' , 'b' , 'c' , 'd' , 'e' , 'f']
    let a;

    function populate(a){
        for(let i = 0; i < 6; i++){
        let x = Math.floor(Math.random() * 16);
        let y = hex[x];
        a += y;
        console.log(a);

        }
        return a;
    }
    console.log(a);

    let Color = populate('#');
    box.style.background = Color;
    palete.innerHTML = Color;
}
    
btn.addEventListener("click", random_BG_color);
