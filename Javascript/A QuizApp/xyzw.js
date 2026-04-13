const questions=[                                                                      //array
    {                                                                                  // this array holds 1 string and 1 array
        question:"Which is the best batsman in the world?",                            //String
        answers:[                                                                      //nested-array
            {text:"Virat Kohli",correct:true},
            {text:"Sachin Tendulkar",correct:false},                                    //Objects
            {text:"Ab DeVillliers",correct:false},                                      //Objects
            {text:"Rohit Sharma",correct:false},
        ]
    },
    {
        question:"Which is the Largest Country in the world?",                            
        answers:[                                                                      
            {text:"Russia",correct:true},
            {text:"India",correct:false},
            {text:"Usa",correct:false},
            {text:"China",correct:false},
        ]
    },
    {
        
        question:"Which is the antiderivative of Cot x ?",                 
        answers:[                                                                      
            {text:"Cosec x.Cot x",correct:false},
            {text:"ln(sin x)+C",correct:true},
            {text:"-cosec2x",correct:false},
            {text:"tan x",correct:false},
        ]
    },
    {
        question:"Which is the most venomous snake in the world?",                            
        answers:[                                                                      
            {text:"King Cobra",correct:false},
            {text:"Inland Taipan",correct:false},
            {text:"Belcher`s Sea Snake",correct:true},
            {text:"Ratlle snake",correct:false},
        ]
    },
];
const questionElement=document.getElementById("question");
const answerBtn=document.getElementById("answers");
const nextBtn=document.getElementById("next");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextBtn.innerHTML="next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex + 1;
    questionElement.innerHTML=questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answers=>{
        const button=document.createElement("button");
        button.innerHTML=answers.text;
        button.classList.add("btn");
        answerBtn.appendChild(button);
        
        if(answers.correct){
          button.dataset.correct=answers.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}
function resetState(){
    nextBtn.style.display="none";
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score=score+1;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerBtn.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    })
    nextBtn.style.display="block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextBtn.innerHTML="Play Again"; 
    nextBtn.style.display="block";
}
nextBtn.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});
startQuiz();
