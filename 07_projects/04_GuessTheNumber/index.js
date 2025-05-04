const guessField = document.querySelector('#guessField')
const submit = document.querySelector('#subt')
const prevGuesses = document.querySelector('.guesses')
const remGuesses = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const resultDiv = document.querySelector('.resultParas')

const p = document.createElement('p')

let startGame = true;
// let prevGuessesArray = []
let numOfGuesses = 1

let randomNum = parseInt(Math.random()*100)+1
console.log(randomNum);
console.log(typeof randomNum);


if(startGame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault()
        const guess = parseInt(guessField.value);
        console.log(guess);
        validateInputNumber(guess)
    })
}
function validateInputNumber(guess){
    if(isNaN(guess)){
        alert('Enter a valid number')
    }
    else if(guess>100 || guess<1){
        alert('Enter number between 1 and 100')
    }
    else{
        // prevGuessesArray.push(guess)
        if(numOfGuesses === 10){
            displayGuess(guess)
            displayGuessMsg(`Game over. Random number was ${randomNum}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess===randomNum){
        displayGuessMsg(`You guessed it right`)
        endGame()
    }
    else if(guess<randomNum){
        displayGuessMsg(`Number is too low`)
    }
    else{
        displayGuessMsg(`Number is too high`)
    }
}

function displayGuess(guess){
    guessField.value=""
    prevGuesses.innerHTML+=`${guess},`
    remGuesses.innerHTML = `${10-numOfGuesses}`
    console.log(numOfGuesses);
    numOfGuesses++
}

function displayGuessMsg(msg){
    lowOrHi.innerHTML = `<h1>${msg}</h1>`

}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',(e)=>{
        randomNum = parseInt(Math.random()*100)+1
        // prevGuessesArray = []
        numOfGuesses = 1
        prevGuesses.innerHTML = ''
        remGuesses.innerHTML = `10`
        guessField.removeAttribute('disabled')
        resultDiv.removeChild(p)
        startGame = true

    })
}
function endGame(){
    guessField.value = ""
    guessField.setAttribute('disabled','') //key-value pair
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new game</h2>`
    resultDiv.appendChild(p)
    startGame = false
    newGame()
}

