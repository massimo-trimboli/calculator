//event listners
let buttons = document.querySelectorAll(".a-button");

for(let button of buttons){
    button.addEventListener("click", function(evt){
        buttonPress(button);
        let screen = document.querySelector(".screen h2");
        ajustSize(screen);
    })
}

function buttonPress(btn){
    let screenText = document.querySelector('.screen h2');


    switch(btn.dataset.val){
        case "AC":
            screenText.innerHTML = "";
            
            resetTextSize(screenText);
            break;
        case "=":
            let equation = screenText.innerText
            let answer = eval(equation);
            screenText.innerHTML = answer
            // screenText.innerHTML = ` = ${equation}`;

            ajustSize(screenText);
            break;
        default:
            screenText.innerHTML += btn.dataset.val;
            // console.log(btn.dataset.val);

            ajustSize(screenText);
            break;
    }
}