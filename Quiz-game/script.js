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
let score = 0;
const questionEl = document.getElementById("question")
const atext = document.getElementById("atext");
const btext = document.getElementById("btext");
const ctext = document.getElementById("ctext");
const dtext = document.getElementById("dtext");
const submitBut = document.getElementById("submitButton")

loadQuiz()

function loadQuiz(){
    const currentQuestionData = quizData[currentQuestion]
    questionEl.textContent = currentQuestionData.question;
    atext.textContent = currentQuestionData.a;
    btext.textContent = currentQuestionData.b;
    ctext.textContent = currentQuestionData.c;
    dtext.textContent = currentQuestionData.d;
}



function select() {
    const answerEls = document.querySelectorAll(".answer")
    let answer = undefined 

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id
    }

    return answer    
})

}

submitBut.addEventListener("click", function(){


    const answer = select();

    if(answer){
        currentQuestion++
        if (currentQuestion < quizData.length){
            loadQuiz()
        } else {
            alert("Your Done !!!!!")
        }
    }
}); 