let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userscorep = document.querySelector("#user");
const compscorep = document.querySelector("#comp");
const gencompchoice = () => {
    const options = ["rock","paper","scissors"];
    const randidx = Math.floor(Math.random() * 3 );
    return options[randidx];

};

const drawgame = () => {
   // console.log("Game was draw");
    msg.innerText = "Game was Draw. Play again";
    msg.style.backgroundColor = "blue";
};

const showwinner = (userwin, userchoice, compchoice) => {
    if(userwin){
        userScore++;
       
        userscorep.innerText = userScore;
       // console.log("YOU WIN!");
        msg.innerText = `You Win your${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "orange";
    }else{
        compScore++;
        compscorep.innerText = compScore;
    //console.log("YOU LOSE!");
    msg.innerText = `You Lose ${compchoice} beats your${userchoice}`;
    msg.style.backgroundColor = "green";

}
};

const playgame = (userchoice) => {
    console.log("user choice = ",userchoice);
    const compchoice = gencompchoice();
    console.log("comp choice = ",compchoice);
    if(userchoice === compchoice){
        drawgame();
    }else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin = compchoice === "paper" ? false : true;


        }
        else if(userchoice === "paper"){
            userwin = compchoice === "scissors" ? false : true;
        }else {
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin, userchoice, compchoice);


    }

    


};


choices.forEach((choice)=>{
   // console.log(choice);
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        //console.log("choice was clicked");
        playgame(userchoice);


    });
});