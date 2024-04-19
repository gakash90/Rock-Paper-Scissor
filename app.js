
let userscore = 0;
let compscore =0;

let choices = document.querySelectorAll(".choice");
let uscore = document.querySelector("#you");
let cscore = document.querySelector("#comp");

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

    

    const winner = userchoice === gencomp ? "It's a tie"
         :(userchoice === "rock" && gencomp === "scissor") ||
          (userchoice === "scissor" && gencomp === "paper") ||
          (userchoice === "paper" && gencomp === "rock")
        ? "User wins"
        : "Computer wins";

        const draw = document.querySelector("#win")
        draw.innerText = winner
        console.log(winner);  

        if(winner ==="User wins"){
            userscore++;
            uscore.innerText=userscore;
        }
        else if(winner==="Computer wins"){
        compscore++;
        cscore.innerText=compscore;
        }
              
};

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userchoice = choice.getAttribute("id")
        playgame(userchoice);

    })
})
    
