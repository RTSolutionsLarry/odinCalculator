const inputs = Array.from(document.getElementsByClassName('input'));
const buttons = [];
const inputsToOperateOn = [];

const createInputObjects = (inputs) => {
    for (input of inputs) {
        const inputClasses = input.className.split(' ');
        const type = inputClasses[2];
        const button = {
            'textContent': input.textContent,
            'type': type
        }
        buttons.push(button);
    }
}

const buttonPress = (textContent) => {
    console.log(`In buttonPress function: ${textContent}`);
}

const operate = (listOfButtonsPressed) => {
    //console.log('Inside operate function');
}

const clear = () => {
    //console.log('Inside clear function');
}

const addButtonDetails = (button, x, y) => {
    switch (true) {
        case (x === 1) && (y ===1):
            button.classList.add('darkGray');
            button.classList.add('number');
            button.innerText = 7;
            break;
        case (x === 2) && (y ===1):
            button.classList.add('darkGray');
            button.classList.add('number');
            button.innerText = 8;
            break;
        case (x === 3) && (y ===1):
            button.classList.add('darkGray');
            button.classList.add('number');
            button.innerText = 9;
            break;
        case (x === 4) && (y ===1):
            button.classList.add('lightGray');
            button.classList.add('operator');
            button.innerText = '/';
            break;
        case (x === 1) && (y ===2):
            button.classList.add('darkGray');
            button.classList.add('number');
            button.innerText = 4;
            break;
        case (x === 2) && (y ===2):
            button.classList.add('darkGray');
            button.classList.add('number');
            button.innerText = 5;
            break;
        case (x === 3) && (y ===2):
            button.classList.add('darkGray');
            button.classList.add('number');
            button.innerText = 6;
            break;
        case (x === 4) && (y ===2):
            button.classList.add('lightGray');
            button.classList.add('operator');
            button.innerText = '*';
            break;
        case (x === 1) && (y ===3):
            button.classList.add('darkGray');
            button.classList.add('number');
            button.innerText = 1;
            break;
        case (x === 2) && (y ===3):
            button.classList.add('darkGray');
            button.classList.add('number');
            button.innerText = 2;
            break;
        case (x === 3) && (y ===3):
            button.classList.add('darkGray');
            button.classList.add('number');
            button.innerText = 3;
            break;
        case (x === 4) && (y ===3):
            button.classList.add('lightGray');
            button.classList.add('operator');
            button.innerText = '-';
            break;
        case (x === 1) && (y ===4):
            button.classList.add('darkGray');
            button.classList.add('number');
            button.innerText = 0;
            break;
        case (x === 2) && (y ===4):
            button.classList.add('gray');
            button.classList.add('clear');
            button.innerText = 'C';
            break;
        case (x === 3) && (y ===4):
            button.classList.add('green');
            button.classList.add('equals');
            button.innerText = '=';
            break;
        case (x === 4) && (y ===4):
            button.classList.add('lightGray');
            button.classList.add('operator');
            button.innerText = '+';
            break;                                           
    }
}

const buttonSetup = () => {
    const inputsContainer = document.querySelector('.inputsContainer');
    for (let y = 1; y < 5; y++) {
        const divRow = document.createElement('div');
        divRow.classList = 'inputRow';
        inputsContainer.appendChild(divRow);
        for (let x = 1; x < 5; x++) {
            const button = document.createElement('div');
            button.classList.add('input');
            addButtonDetails(button, x, y);
            divRow.appendChild(button); 
        }
    }
}

//createInputObjects(inputs)
buttonSetup();