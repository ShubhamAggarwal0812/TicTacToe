let buttons = document.querySelectorAll(".btn");
let resetBtn = document.querySelector("#reset");
let startBtn = document.querySelector("#start");
let newBtn = document.querySelector("#new");
let msg = document.querySelector(".msg");
let container = document.querySelector(".container");
let winnerName = document.querySelector("#winnerName");

startBtn.addEventListener("click", () => {
    container.classList.remove("hide");
    startBtn.classList.add("hide");
    resetBtn.classList.remove("hide");
})

let turnX = true;

const winningPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
];

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (turnX) {
            btn.innerText = "X";
            turnX = false;
        }
        else {
            btn.innerText = "O";
            turnX = true;
        }
        btn.disabled = true;

        checkWinner();
    })
});

const checkWinner = () => {
    for (let pattern of winningPatterns) {
        let pos1Val = buttons[pattern[0]].innerText;
        let pos2Val = buttons[pattern[1]].innerText;
        let pos3Val = buttons[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val == pos2Val && pos2Val == pos3Val) {
                showWinner(pos1Val);
            }
        }
    }
}

const showWinner = (winner) => {
    winnerName.innerText = `Congratulations, 🥳! Winner is ${winner}..`;
    msg.classList.remove("hide");
    disableButtons();
    resetBtn.classList.add("hide");
    newBtn.classList.remove("hide");
}

const disableButtons = () => {
    for (let btn of buttons) {
        btn.disabled = true;
    }
}

const enableButtons = () => {
    for (let btn of buttons) {
        btn.disabled = false;
        btn.innerText = "";
    }
}

resetBtn.addEventListener("click", () => {
    turnX = true;
    enableButtons();
})

newBtn.addEventListener("click", () => {
    turnX = true;
    enableButtons();
    msg.classList.add("hide");
    newBtn.classList.add("hide");
    resetBtn.classList.remove("hide");
})