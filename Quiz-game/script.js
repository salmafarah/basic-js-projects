const quizData = [
    {
        question: "What is Samia's nickname?",
        a: "Sam",
        b: "sam-dam",
        c: "sam-cat",
        d:"samsam",
        correct: "d"
    }, {
        question: "What part of her body does Sumaya like? ",
        a: "face",
        b: "leg",
        c: "hair",
        d:"eyes",
        correct: "b"
    },{
        question: "What does Sumaya want? ",
        a: "food",
        b: "new clothes",
        c: "skirts",
        d:"shoes",
        correct: "d"
    },{
        question: "What does Samia want from Walmart",
        a: "make photos",
        b: "clothes",
        c: "hair products",
        d:"to steal",
        correct: "a"
    },{
        question: " What Salma's faviourte show ",
        a: "Brooklyn 99",
        b: "IT Crowd",
        c: "steven universe",
        d:"Adventure Time",
        correct: "b"
    },
  
]

let currentQuestion = 0;
const questionEl = document.getElementById("question")
const atext = document.getElementById("atext");
const btext = document.getElementById("b");
const ctext = document.getElementById("c");
const dtext = document.getElementById("d");

loadQuiz()

function loadQuiz(){
    const currentQuestionData = quizData[currentQuestion]
    questionEl.textContent = currentQuestionData.question;
    atext.textContent = currentQuestionData.a;
    btext.textContent = currentQuestionData.b;
    ctext.textContent = currentQuestionData.c;
    dtext.textContent = currentQuestionData.d;

    currentQuestion++


}