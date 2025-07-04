//generate numbers
/*let nums = []
for(let i=9; i>-1; i--){
    nums.push(i)
}*/
nums = [];
nums.push(7,8,9,4,5,6,1,2,3,0)
//add parentheses
nums.push("(",")");

//symbols
let symbols = [
    "AC",
    " + ",
    " - ",
    " * ",
    " / ",
    ".",
    "="
]

//generate number buttons
let parent = document.querySelector(".buttons .numbers");
generateButtons(nums, parent)

//generate symbol buttons
parent = document.querySelector(".buttons .other-buttons");
generateButtons(symbols, parent)




function generateButtons(names, parent){
    for(let name of names){
        let button = document.createElement("div");
        button.dataset.val = name
        //to grab them later
        button.classList.add("a-button");
        parent.appendChild(button);

        let buttonText = document.createElement("p");
        buttonText.innerHTML = name;
        button.appendChild(buttonText);
    }
}
