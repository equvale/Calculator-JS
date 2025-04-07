// script.js

let input = document.getElementById("input");

// Функция для добавления символов на экран
function appendToInput(value) {
    if (input.innerText.length < 15) { // Ограничим количество символов на экране
        input.innerText += value;
    } else {
        input.innerText = input.innerText.slice(1) + value; // Прокручивание текста
    }
    adjustInputSize(); // Подстроить размер текста
}

// Функция для очистки экрана
function clearInput() {
    input.innerText = '';
    adjustInputSize();
}

// Функция для вычислений
function calculate() {
    try {
        let result = eval(input.innerText);
        input.innerText = result;
    } catch (e) {
        input.innerText = 'Ошибка';
    }
    adjustInputSize(); // Подстроить размер текста
}

// Функция для подгонки размера текста
function adjustInputSize() {
    if (input.innerText.length > 10) {
        input.style.fontSize = '1.5rem'; // Уменьшаем размер шрифта, если много символов
    } else {
        input.style.fontSize = '2rem'; // Размер по умолчанию
    }
}

// Функция для переключения между темами
function toggleTheme() {
    let body = document.body;
    body.classList.toggle('light-theme');
    body.classList.toggle('dark-theme');
}

// Обработчик клавиш для ввода с клавиатуры
document.addEventListener("keydown", function(event) {
    const key = event.key;
    
    if (key >= '0' && key <= '9') { // Цифры
        appendToInput(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') { // Операторы
        appendToInput(key);
    } else if (key === 'Enter') { // Клавиша Enter для вычисления
        calculate();
    } else if (key === 'Backspace') { // Клавиша Backspace для удаления последнего символа
        input.innerText = input.innerText.slice(0, -1);
        adjustInputSize();
    } else if (key === '.') { // Точка
        appendToInput(key);
    } else if (key === 'c' || key === 'C') { // Клавиша C для очистки
        clearInput();
    }
});
