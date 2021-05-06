// first, define variables. I need...I don't know which variables I need...
let startBtnEl = document.querySelector("#startBtn");
let timeLeftEl = document.querySelector("#timeLeft");
let titleEl = document.getElementById("title");
let introEl = document.getElementById("intro");
let qContainer = document.getElementById("question-container");
let qRender = document.getElementById("question-render");
let btnA = document.getElementById("optionA");
let btnB = document.getElementById("optionB");
let btnC = document.getElementById("optionC");
let btnD = document.getElementById("optionD");

//variables for quiz state
let myQuestionIndex = 0;
let timerId; 
let time = myQuestions.length * 10;

let myQuestions = [
    {
        question: "In JavaScript, how do you label an array?",
          answers: [
             "{}",
             "[]",
             "<>",
             "/**/"
          ],
            correctAnswer: "[]"
    },
    {
        question: "How many data types are there in JavaScript?",
        answers: {
            "2",
            b: "8",
            c: "5",
            d: "10",
        },
            correctAnswer: "C"
    },
    {
        question: "What is the script for assigning a variable?",
        answer: {
             "var",
            b: "const",
            c:  "let",
            d: "all of the above"
        },
            correctAnswer: "D"
    },
    {
        question: "What is the script for printing something to the console?",
        answer: {
             "console.log()",
            b: "function()",
            c: "for(let i = 0; i< variable; i++)",
            d: "none of the above"
        },
            correctAnswer: "A"
    },
    {
        question: "How do you call a function?",
        answer: {
             "write the word function",
            b: "there's no way to call a function",
            c: "write the name of the function followed by parentheses",
            d: "write the variable name followed by parentheses"
        },
            correctAnswer: "C"
    }
];
//when start button is clicked, a timer should start and the first question should appear
    //event listener
    //timer intervals
        //create a function to start time
        startBtn.addEventListener("click", startQuiz);

    function startQuiz() {
        timeLeftEl = setInterval(countDown, 1000);

    }

   
    

//create a function to display a question
    //question 1: In JavaScript, how do you label an array?
        //answers: a. {} b. [] c. <> d. /* */
    //question 2: How many data types are there in JavaScript? 
        //answers: a. 2 b. 8 c. 5 d. 10
    //question 3: What is the script for assigning a variable?
        //answers: a. var b. const c. let d. all of the above
    //question 4: What is the script for printing something to the console? 
        //answers: a. console.log b. function() c. for(let i = 0; i< variable; i++) d. none of the above
    //question 5: How do you call a function? 
        //answers: a. write the word "function" b. there's no way to call a function c. write the name of the function followed by parentheses d. write the variable name followed by parentheses

        function quizQuestions(){
            for (let i = 0; i< myQuestions.length; i++);





            // let question1 = document.createElement('p');
            // let answer1 = document.createElement('ol')
            // question1.textContent = "In JavaScript, how do you label an array?";
            // document.body.appendChild(question1);
            // answer1.textContent = "a. {} b. [] c. <> d. /**/";
            // document.body.appendChild(answer1);
        }
 
        //create if statement to display message when correct/incorrect answer is pressed

function countDown() {
    time--;
    timeLeftEl.textContent = time;
    if (time <= 0) {
        endQuiz();
    }

}
//when questions are answered game is over
//when game is over, allow player to submit initials and save score
    //local storage

    function endQuiz() {

    }

