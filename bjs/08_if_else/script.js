let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю за 7 попыток`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round( Math.random() * 3);
                switch (phraseRandom) {
                    case 1:
                        answerPhrase = `Я думаю, что это ${answerNumber }?`;  
                        break;
                    case 2:
                        answerPhrase = `Я уже близко. Это ${answerNumber }?`;
                        break;
                    case 3:  
                        answerPhrase = `Мне кажется, что ваше число ${answerNumber }?`;
                        break;  
                    default: 
                        answerPhrase = `Вы загадали число ${answerNumber }?`;
                 }  
            answerField.innerText = answerPhrase;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round( Math.random() * 3);
                switch (phraseRandom) {
                    case 1:
                        answerPhrase = `Я думаю, что это ${answerNumber }?`;  
                        break;
                    case 2:
                        answerPhrase = `Я уже близко. Это ${answerNumber }?`;
                        break;
                    case 3:  
                        answerPhrase = `Мне кажется, что ваше число ${answerNumber }?`;
                        break;  
                    default: 
                        answerPhrase = `Вы загадали число ${answerNumber }?`;
                 }  
            answerField.innerText = answerPhrase;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom = Math.round( Math.random() * 3);
        switch (phraseRandom) {
            case 1:
                answerPhrase = `Я всегда угадываю\n\u{1F60E}`;    
                break;
            case 2:
                answerPhrase = `Я так и знал!`; 
                break;
            case 3:  
                answerPhrase = `Да я просто волшебник!`;
                break;  
            default: 
                answerPhrase = `Могу, умею, практикую. Еще раз?`;
        }  
        answerField.innerText = answerPhrase; 
        gameRun = false;
    }
})

document.getElementById('btnRetry').addEventListener('click', function () {
    orderNumber = 0;
    minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его снова угадаю`); 
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    answerField.innerText = `Наверное, это число ${answerNumber }?`;
    gameRun = true;
 })