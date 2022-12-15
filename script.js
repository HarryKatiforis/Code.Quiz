const Myquestions = [
    {
        question: 'What is an example of a boolean expression',
        answers: [
            { text: 'true', correct: true},
            { text: '1', correct: false},
            { text: 'one', correct: false},
            { text: 'NaN', correct: false}
        ],
        correct: 'true'
    },
    {
        question: 'what is an example of a string',
        answers: [
            { text: 'blue', correct: true},
            { text: 'green', correct: false},
            { text: 'orange', correct: false},
            { text: 'red', correct: false}
        ],
        correct: 'one'
    },
    {
        question: 'what is an example of a number',
        answers: [
            { text: 'blue', correct: true},
            { text: 'green', correct: false},
            { text: 'orange', correct: false},
            { text: 'red', correct: false}
        ],
        correct: '1'
    },
    {
        question: 'what is short for not a number',
        answers: [
            { text: 'blue', correct: true},
            { text: 'green', correct: false},
            { text: 'orange', correct: false},
            { text: 'red', correct: false}
        ],
        correct: 'NaN'
    }




]



let questionIndex = 0

let answerIndex = 0

var timeLeft = 15;

const timeEl = document.getElementById('timer')

function setTime() {
  var timerInterval = setInterval(function() {
    timeLeft--;
    timeEl.textContent = timeLeft + " seconds";

    if(timeLeft === 0) {
     
      clearInterval(timerInterval);
      
      timeEl.textContent = 'game over. Refresh page'
      
    }

  }, 1000);
}

var score = 0;
const scoreEl = document.getElementById('score')
if (this.innerText == Myquestions[questionIndex].correct) {
    score+=1
    
}

const startButton = document.getElementById('start_button')
const questionContainer = document.getElementById('question_box')
const answerButtonEl = document.querySelectorAll('.Answer')
const questionEl = document.getElementById('question')

startButton.addEventListener('click', startGame)

for (let i = 0; i < answerButtonEl.length; i++) {
    answerButtonEl[i].addEventListener('click', nextQuestion)
}
for (let i = 0; i < answerButtonEl.length; i++) {
    answerButtonEl[i].addEventListener('click', nextAnswer)
}

function showQuestion(Myquestions){
questionContainer.innerText = Myquestions[questionIndex, answerIndex].question
answerButtonEl[0].innerText = Myquestions[questionIndex, answerIndex].answers[0].text
answerButtonEl[1].innerText = Myquestions[questionIndex, answerIndex].answers[1].text
answerButtonEl[2].innerText = Myquestions[questionIndex, answerIndex].answers[2].text
answerButtonEl[3].innerText = Myquestions[questionIndex, answerIndex].answers[3].text
}

function nextQuestion() {
questionIndex++ 
questionContainer.innerText = Myquestions[questionIndex].question
console.log(this.innerText)
console.log(Myquestions[questionIndex].an)
if (this.innerText !== Myquestions[questionIndex].correct) {
    timeLeft--;
    
}
}



function startGame() {
    startButton.style = 'display: none;'
 showQuestion(Myquestions)
 setTime()

}

function nextAnswer() {
answerIndex++
answerButtonEl.innerText = Myquestions[answerIndex].answers
console.log(answerIndex.innerText);
}