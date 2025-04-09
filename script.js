


let input = document.getElementById("input");


function appendToInput(value) {
    if (input.innerText.length < 15) { 
        input.innerText += value;
    } else {
        input.innerText = input.innerText.slice(1) + value; 
    }
    adjustInputSize(); 
}


function clearInput() {
    input.innerText = '';
    adjustInputSize();
}

function calculate() {
    try {
        let result = eval(input.innerText);
        input.innerText = result;
    } catch (e) {
        input.innerText = 'Ошибка';
    }
    
}


function adjustInputSize() {
    if (input.innerText.length > 10) {
        input.style.fontSize = '1.5rem';
    } else {
        input.style.fontSize = '2rem';
    }
}


function toggleTheme() {
    let body = document.body;
    body.classList.toggle('light-theme');
    body.classList.toggle('dark-theme');
}


document.addEventListener("keydown", function(event) {
    const key = event.key;
    
    if (key >= '0' && key <= '9') { 
        appendToInput(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendToInput(key);
    } else if (key === 'Enter') { 
        calculate();
    } else if (key === 'Backspace') { 
        input.innerText = input.innerText.slice(0, -1);
        adjustInputSize();
    } else if (key === '.') { 
        appendToInput(key);
    } else if (key === 'c' || key === 'C') { 
        clearInput();
    }
});

