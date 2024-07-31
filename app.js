let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#newGame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0= true;  

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
         console.log("clicked")
        if(!box.innerText){
            if(turn0){
                box.innerText= "X";
                turn0=false;
            }else{
                box.innerText= "O";
                turn0=true;
            }
            checkWinner();
        }
    });
});
const disable = () =>{
    for (let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = ""; 
    }
};

const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1= boxes[pattern[0]].innerText;
        let pos2= boxes[pattern[1]].innerText;
        let pos3= boxes[pattern[2]].innerText;  
        
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("winner winner chicken dinner");
                disable();
                showWinner(pos1);

            }
        }
        
    }
};

const showWinner = (winner) =>{
    msg.innerText = `Congratulation,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
}

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);