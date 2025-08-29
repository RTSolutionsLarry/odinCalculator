const inputs = Array.from(document.getElementsByClassName('input'));
const buttons = [];
const inputsToOperateOn = [];

const createInputObjects = (inputs) => {
    console.log(inputs);
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
        buttonPress(input.textContent)
    }
}

const buttonPress = (textContent) => {
    console.log(`In buttonPress function: ${textContent}`);
}

const operate = (listOfButtonsPressed) => {
    console.log('Inside operate function');
}

const clear = () => {
    console.log('Inside clear function');
}

createInputObjects(inputs)
console.table(buttons);
console.log(makeButtonsClickable(inputs));
