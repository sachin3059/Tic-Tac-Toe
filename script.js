let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newbtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");


let turnO = true; // playerX, playerY

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];



const resetGame = boxes.forEach((box) => {
    box.addEventListener('click', () => {
       // console.log("box clicked");
        if(turnO){
            box.innerHTML = "O";
            turnO = false;
        }
        else{
            box.innerHTML = "X";
            turnO = true;
        }

        box.disabled = true;

        checkWinner();
       
    });
});

const reset_Game = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("msg-container");
}

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
    }
};

const showWinner = (winner) => {
    msg.innerHTML = `Congratuations, Winner is ${winner}`;
    msgContainer.classList.remove("msg-container")
    disableBoxes();
};



const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerHTML
        let pos2Val = boxes[pattern[1]].innerHTML
        let pos3Val = boxes[pattern[2]].innerHTML
        
        if(pos1Val != "" && pos2Val != "" && pos3Val!= ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                //console.log("winner", pos1Val);
                showWinner(pos1Val);
            }
        }
    } 
};


newbtn.addEventListener("click", reset_Game);
resetBtn.addEventListener("click", reset_Game);

