const inputs = Array.from(document.getElementsByClassName('input'));

const createInputObjects = (inputs) => {
    console.log(inputs);
    const buttons = []
    for (input of inputs) {
        const inputClasses = input.className.split(' ');
        const type = inputClasses[2];
        const button = {
            'textContent': input.textContent,
            'type': type
        }
        buttons.push(button);
    }
    return buttons;
}

console.table(createInputObjects(inputs));
