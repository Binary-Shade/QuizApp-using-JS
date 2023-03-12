/* coded by BinaryShade */

const quizData =[    /* sample questions*/
    {
    question : "what is python ?",
    a:"a snake",
    b:"a programming language",
    c:"a hollywood movie",
    d:"all the above",
    correct:"b",
    },
    {
    question : "expand sql ?",
    a:"sentium quentium language",
    b:"serum query language",
    c:"separate question landmark",
    d:"structured query language",
    correct:"d",
    },
    {
    question : "what is php ?",
    a:"server side scripting",
    b:"client side scripting",
    c:"styling elements language",
    d:"none the above",
    correct:"a",
    },
    {
    question : "expand css ?",
    a:"casette styling system",
    b:"cascading style sheet",
    c:"capsicum scripting sheet",
    d:"computer social system",
    correct:"b",
    },
    {
    question : "expand html ?",
    a:"hypertext makeup language",
    b:"hyperloop markup language",
    c:"hypertext markup language",
    d:"huntertherapy machine language",
    correct:"c",
    },
];

const quiz = document.getElementById('quiz') 

const answerEls = document.querySelectorAll('.answer') //accessing the answer 
const questionEls = document.getElementById('question') // accessing the question
const a_text = document.getElementById('a_text') 
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitButton = document.getElementById('submit') //to accesss submit btn

const quizLength = quizData.length
let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){   //function to load the quiz 
    deselectAns() // to deselect the answers after reload
    const currentQuizData = quizData[currentQuiz]
    questionEls.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAns(){  //to deselect the answers after reload
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getselected(){  
    let answer
    answerEls.forEach(answerEl =>{
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}

submitButton.addEventListener('click', ()=>{
    const answer = getselected()
    if(answer === quizData[currentQuiz].correct){  // '===' return a boolean if it is equal
        score++
    }
    currentQuiz++
    if(currentQuiz<quizLength){  // if currentQuiz less than QuizLength load next quiz
        loadQuiz()
    }else{
        quiz.innerHTML = `
        <h2>you answered ${score}/${quizLength} questions correctly</h2>
        <button onclick='location.reload()' id="jsbutton"> Reload</button>
        `
    }

})
