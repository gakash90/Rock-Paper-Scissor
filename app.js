
let userTrun = 0;
let compTrun =0;

let choices = document.querySelectorAll(".choice");

const compchoice = ()=>{
const options = ["rock ","paper", "scissor"]
const randomValue = Math.floor(Math.random()*3);
return options[randomValue];

};
const playgame = (userchoice)=>{
    console.log(userchoice);
    const gencomp = compchoice();
    console.log("computer choice"+" "+ gencomp);

    if(gencomp === userchoice){
        const draw = document.querySelector("#win")
        draw.innerText = "draw"
        console.log("draw");
    }
    const winner =
    userchoice === gencomp
        ? "It's a tie"
        : (userchoice === "rock" && gencomp === "scissor") ||
          (userchoice === "scissor" && gencomp === "paper") ||
          (userchoice === "paper" && gencomp === "rock")
        ? "User wins"
        : "Computer wins";
console.log(winner);
};

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userchoice = choice.getAttribute("id")
        playgame(userchoice);

    })
})
    
