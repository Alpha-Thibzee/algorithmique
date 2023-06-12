//! Exercice 1
let tab = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let tabView = document.querySelector("#tab")

function calcMoyenne(tab) {
    let somme = 0;
    for (let i = 0; i < tab.length; i++) {
        somme += tab[i];
    }

    if (tab.length === 0) {
        return 0;
    }
    return somme / tab.length;
}

tabView.innerHTML = calcMoyenne(tab);

//! Exercice 2

let price = document.querySelector("#price");
let quantity = document.querySelector("#quantity");
let button = document.querySelector("#btn");
let result = document.querySelector("#result");

function calcTotal(price, quantity) {
    result.innerText = (price * quantity) * 1.2 + "€";
}

button.addEventListener("click", ()=> calcTotal(price.value, quantity.value));

//! Exercice 3

let temperature = document.querySelector("#temperature");
let button2 = document.querySelector("#btn2");
let resultWater = document.querySelector("#resultWater");

function calcWater(temperature) {
    if (temperature >= 100) {
        resultWater.innerText = "A " + temperature + "°C l'eau est gazeuse";
    } else if (temperature <= 0) {
        resultWater.innerText = "A " + temperature + "°C l'eau est solide";
    } else {
        resultWater.innerText = "A " + temperature + "°C l'eau est liquide";
    }
}

button2.addEventListener("click", ()=> calcWater(temperature.value));

//! Exercice 4

let price2 = document.querySelector("#price2");
let percentage = document.querySelector("#percentage");
let button3 = document.querySelector("#btn3");
let result2 = document.querySelector("#resultPercentage");
let result3 = 0;

function calcPercentage(price2, percentage) {
    result3 = percentage / 100 * price2;
    result2.innerText = parseInt(price2) + result3 + "€"
}
button3.addEventListener("click", ()=> calcPercentage(price2.value, percentage.value));

//! Exercice 5

let tabBase = document.querySelector("#tabBase");
let tabBefore = [1,1,2,3,5,8,13,5,34,55,8];
let button4 = document.querySelector("#btn4");
let tabAfter = [];
let tabResult = document.querySelector("#tabResult");

tabBase.innerHTML = tabBefore;

function suppressDoublons(tabBefore) {

    for (let i = 0; i < tabBefore.length; i++) {
        if (tabAfter.indexOf(tabBefore[i]) === -1) {
            tabAfter.push(tabBefore[i]);
        }
    }
    tabResult.innerHTML = tabAfter;
}

button4.addEventListener("click", ()=> suppressDoublons(tabBefore));

//! Exercice 6

let multiplication = document.querySelector("#multiplication");
let button5 = document.querySelector("#btn5");
let resultMultiplication = document.querySelector("#resultMultiplication");

function calcMultiplication() {
    resultMultiplication.innerHTML = "";
    for (let i = 1; i <= 10; i++) {
       resultMultiplication.innerHTML += "<br>" + i + " x "+multiplication.value+" = " + i * multiplication.value;
    }
}

button5.addEventListener("click", ()=> calcMultiplication());

//! Exercice 7
// create a function who show only the first 15 letter

let phrase = document.querySelector("#word");
let resultPhrase = document.querySelector("#resultPhrase");
let btn7 = document.querySelector("#btn7");

function show15Letter(phrase) {
    if (phrase.length > 15) {
        resultPhrase.innerHTML = phrase.substring(0, 15) + "...";
    } else {
        resultPhrase.innerHTML = phrase;
    }
}

btn7.addEventListener("click", ()=> show15Letter(phrase.value));

//! Exercice 8

let password = document.querySelector("#password");
let button8 = document.querySelector("#btn8");
let isValid = document.querySelector("#isValid");
let regex = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$';

function checkPassword(password) {
  regex = new RegExp(regex);
    if (regex.test(password)) {
        isValid.innerHTML = "Mot de passe valide";
    } else {
        isValid.innerHTML = "Mot de passe invalide";
    }
}

button8.addEventListener("click", ()=> checkPassword(password.value));

//! Exercice 9

let word = document.querySelector("#word2");
let button9 = document.querySelector("#btn9");
let result9 = document.querySelector("#result9");

function addFe(word) {
    let newWord = "";
    for (let i = 0; i < word.length; i++) {
        if (word[i] === "a" || word[i] === "e" || word[i] === "i" || word[i] === "o" || word[i] === "u" || word[i] === "y") {
            newWord += word[i] + "fe" + word[i];
        } else {
            newWord += word[i];
        }
    }
    result9.innerHTML = newWord;
}

button9.addEventListener("click", ()=> addFe(word.value));

//! Exercice 10

let word3 = document.querySelector("#word3");
let button10 = document.querySelector("#btn10");
let result10 = document.querySelector("#result10");

function reverseWord(word3){
    let newWord = "";
    for (let i = word3.length - 1; i >= 0; i--) {
        newWord += word3[i];
    }
    result10.innerHTML = newWord;
}

button10.addEventListener("click", ()=> reverseWord(word3.value));

//! Exercice 11

let word4 = document.querySelector("#word4");
let button11 = document.querySelector("#btn11");
let result11 = document.querySelector("#result11");

function checkPangram(word4){
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let newWord = word4.toLowerCase();
    for (let i = 0; i < alphabet.length; i++) {
        if (newWord.indexOf(alphabet[i]) === -1) {
            result11.innerHTML = "Ce n'est pas un pangramme";
            return;
        }
    }
    result11.innerHTML = "C'est un pangramme";
}

button11.addEventListener("click", ()=> checkPangram(word4.value));

//! Exercice 12


let word5 = document.querySelector("#word5");
let button12 = document.querySelector("#btn12");
let result12 = document.querySelector("#result12");

function scrabble(word5){
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let newWord = word5.toLowerCase();
    let count = 0;
    for (let i = 0; i < newWord.length; i++) {
        if (alphabet.indexOf(newWord[i]) === -1) {
            result12.innerHTML = "Le mot ne contient pas de lettre";
            return;
        } else if (newWord[i] === "a" || newWord[i] === "e" || newWord[i] === "i" || newWord[i] === "o" || newWord[i] === "u" || newWord[i] === "l" || newWord[i] === "n" || newWord[i] === "r" || newWord[i] === "s" || newWord[i] === "t") {
            count += 1;
        } else if (newWord[i] === "d" || newWord[i] === "g") {
            count += 2;
        } else if (newWord[i] === "b" || newWord[i] === "c" || newWord[i] === "m" || newWord[i] === "p") {
            count += 3;
        } else if (newWord[i] === "f" || newWord[i] === "h" || newWord[i] === "v" || newWord[i] === "w" || newWord[i] === "y") {
            count += 4;
        } else if (newWord[i] === "k") {
            count += 5;
        } else if (newWord[i] === "j" || newWord[i] === "x") {
            count += 8;
        } else if (newWord[i] === "q" || newWord[i] === "z") {
            count += 10;
        }
    }
    result12.innerHTML = "Le mot " + word5 + " vaut " + count + " points";
}

button12.addEventListener("click", ()=> scrabble(word5.value));

//! Exercice 13

let number = document.querySelector("#number");
let button13 = document.querySelector("#btn13");
let result13 = document.querySelector("#result13");

function randomDecremente(number){

    let count = 0;
    while (number > 0) {
        let random = Math.floor(Math.random() * 50) + 1;
        number -= random;
        count++;
    }
    result13.innerHTML = "Le nombre de passages est de " + count;
}
button13.addEventListener("click", ()=> randomDecremente(number.value));

//! Exercice 14

let button14 = document.querySelector("#btn14");
let result14 = document.querySelector("#result14");

function pigGame(){
    result14.innerHTML = "";
    let pig = {
        pattes: 0,
        yeux: 0,
        queue: 0,
        oreilles: 0
    };
    let count = 0;
    while (pig.pattes < 4 || pig.yeux < 2 || pig.queue < 1 || pig.oreilles < 2) {
        let random = Math.floor(Math.random() * 6) + 1;
        count++;
        switch (random) {
            case 1:
                pig.pattes++;
                result14.innerHTML += "pattes ";
                break;
            case 2:
                pig.pattes++;
                result14.innerHTML += "pattes ";
                break;
            case 3:
                pig.pattes++;
                result14.innerHTML += "pattes ";
                break;
            case 4:
                pig.yeux++;
                result14.innerHTML += "yeux ";
                break;
            case 5:
                pig.queue++;
                result14.innerHTML += "queue ";
                break;
            case 6:
                pig.oreilles++;
                result14.innerHTML += "oreilles ";
                break;
        }
    }
    result14.innerHTML += "<br>Le nombre de passages est de " + count;
}


button14.addEventListener("click", ()=> pigGame());

//! Exercice 15


let button15 = document.querySelector("#btn15");
let result15 = document.querySelector("#result15");

function diceRoll() {
    result15.innerHTML = "";
    let count = 0;
    let dice = [];
    while (dice.length < 5) {
        let random = Math.floor(Math.random() * 6) + 1;
        dice.push(random);
        count++;
    }
    for (let i = 0; i < dice.length; i++) {
        result15.innerHTML += "(" + dice[i] + ") ";
    }

    if (isBrelan(dice)) {
        result15.innerHTML += "<br>Brelan";
    }
    if (isCarre(dice)) {
        result15.innerHTML += "<br>Carré";
    }
    if (isFull(dice)) {
        result15.innerHTML += "<br>Full";
    }
    if (isYams(dice)) {
        result15.innerHTML += "<br>Yams";
    }
    if (isPetiteSuite(dice)) {
        result15.innerHTML += "<br>Petite suite";
    }
    if (isGrandeSuite(dice)) {
        result15.innerHTML += "<br>Grande suite";
    }

}

function isBrelan(dice) {
  for (let i = 1; i <= 6; i++) {
    let count = dice.filter((num) => num === i).length;
    if (count >= 3) {
      return true;
    }
  }
  return false;
}

function isCarre(dice) {
  for (let i = 1; i <= 6; i++) {
    let count = dice.filter((num) => num === i).length;
    if (count >= 4) {
      return true;
    }
  }
  return false;
}

function isFull(dice) {
  let counts = {};
  for (let num of dice) {
    counts[num] = (counts[num] || 0) + 1;
  }
  return Object.values(counts).includes(3) && Object.values(counts).includes(2);
}

function isYams(dice) {
  for (let i = 1; i <= 6; i++) {
    let count = dice.filter((num) => num === i).length;
    if (count === 5) {
      return true;
    }
  }
  return false;
}

function isPetiteSuite(dice) {
  dice.sort();
  return (
    (dice[0] === 1 && dice[1] === 2 && dice[2] === 3 && dice[3] === 4) ||
    (dice[0] === 2 && dice[1] === 3 && dice[2] === 4 && dice[3] === 5) ||
    (dice[0] === 3 && dice[1] === 4 && dice[2] === 5 && dice[3] === 6)
  );
}

function isGrandeSuite(dice) {
  dice.sort();
  return dice[0] === dice[1] - 1 && dice[1] === dice[2] - 1 && dice[2] === dice[3] - 1 && dice[3] === dice[4] - 1;
}


button15.addEventListener("click", ()=> diceRoll());
