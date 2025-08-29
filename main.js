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

const makeButtonsClickable = (inputs) => {
    for (input of inputs) {
        input.addEventListener('click',buttonPress(input.textContent));

    }
}

const buttonPress = (textContent) => {
    //console.log(`In buttonPress function: ${textContent}`);
}

const operate = (listOfButtonsPressed) => {
    //console.log('Inside operate function');
}

const clear = () => {
    //console.log('Inside clear function');
}

const addButtonDetails = (button, x, y) => {
    console.log('start back here. Make a switch statement that looks at x and y and adds correct classes and onClick function to buttons')
}

const buttonSetup = () => {
    const inputsContainer = document.querySelector('.inputsContainer');
    for (let y = 0; y < 4; y++) {
        const divRow = document.createElement('div');
        divRow.classList = 'inputRow';
        inputsContainer.appendChild(divRow);
        for (let x = 0; x < 4; x++) {
            const button = document.createElement('button');
            addButtonDetails(button, x, y); 
        }
    }
}

createInputObjects(inputs)
console.log(inputs);
buttonSetup();