let boxes = document.querySelectorAll('.btn');
let reset = document.querySelector('.reset');
let msgContainer = document.querySelector('.msgContainer');
let msg = document.querySelector('#msg');
let newGame = document.querySelector('.newGame');

let input0 = true;

let winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach(function(box){
    box.addEventListener('click', function(){
        if(input0){
            box.innerText = 'O';
            if(box.innerText === 'O'){
                box.style.color = 'red';
            }
            input0 = false;
        }else{
            box.innerText = 'X';
            if(box.innerText === 'X'){
                box.style.color = 'green';
            }
            input0 = true;
        }
        box.disabled = true;
        checkWinner();
    })
});

const disabledBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = '';
    }
}

const NewGame = () => {
    input0 = true;
    enableBoxes();
    msgContainer.classList.add('hide');
}

const showWinner = (winner) => {
    msg.innerText = `Winner is ${winner}`;
}

const checkWinner = () => {
    for(let pattern of winPattern){
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log(`winner is ${pos1}`);
                msgContainer.classList.remove('hide');
                disabledBoxes();
                showWinner(pos1);
            }
        }
    }
}

newGame.addEventListener('click', function(){
    NewGame();
})

reset.addEventListener('click', function(){
    input0 = true;
    enableBoxes();
})