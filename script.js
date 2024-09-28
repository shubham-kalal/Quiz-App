const questions = [
    {
        question: "What is the correct syntax for writing a basic JavaScript program?",
        answers: [
            { text: 'print("Hello, World!");', correct: false },
            { text: 'echo "Hello, World!";', correct: false },
            { text: 'console.log("Hello, World!");', correct: true },
            { text: 'System.out.println("Hello, World!");', correct: false }
        ]
    },
    {
        question: "Which keyword is used to declare a block-scoped variable in JavaScript?",
        answers: [
            { text: 'variable', correct: false },
            { text: 'block', correct: false },
            { text: 'let', correct: true },
            { text: 'var', correct: false }
        ]
    },
    {
        question: "Which of the following is NOT a correct statement about the history of JavaScript?",
        answers: [
            { text: 'JavaScript was initially developed as a scripting language for browsers.', correct: false },
            { text: 'Brendan Eich is the creator of JavaScript.', correct: true },
            { text: 'It was first called "LiveScript" but was renamed to "JavaScript" later.', correct: false },
            { text: 'JavaScript code is executed on the server-side.', correct: false }
        ]
    },
    {
        question: "How can you run JavaScript code?",
        answers: [
            { text: 'By using a Java compiler', correct: false },
            { text: 'By embedding it directly in HTML tags', correct: true },
            { text: 'By using a Python interpreter', correct: false },
            { text: 'By creating a standalone executable file', correct: false }
        ]
    },
    {
        question: "How do you handle a default case in a switch statement?",
        answers: [
            { text: 'Use the keyword default:', correct: true },
            { text: 'Use the keyword else:', correct: false },
            { text: 'Use the keyword case default:', correct: false },
            { text: 'Use the keyword default case:', correct: false }
        ]
    },
    {
        question: "Rewrite if (x > 10) { result = 'High'; } else { result = 'Low'; } using the ternary operator.",
        answers: [
            { text: 'result = (x < 10) ? "High" : "Low";', correct: false },
            { text: 'result = (x > 10) ? "High" : "Low";', correct: true },
            { text: 'result = (x > 10) : "High" ? "Low";', correct: false },
            { text: 'result = (x < 10) : "High" ? "Low";', correct: false }
        ]
    },
    {
        question: "What does the typeof operator return for an array?",
        answers: [
            { text: '"array"', correct: false },
            { text: '"object"', correct: true },
            { text: 'string', correct: false },
            { text: '"typeof"', correct: false }
        ]
    },
    {
        question: "What is the result of 10 + 5?",
        answers: [
            { text: '15', correct: true },
            { text: '105', correct: false },
            { text: '50', correct: false },
            { text: 'Error', correct: false }
        ]
    },
    {
        question: "What is the result of true && false?",
        answers: [
            { text: 'true', correct: false },
            { text: 'false', correct: true },
            { text: 'null', correct: false },
            { text: 'undefined', correct: false }
        ]
    },
    {
        question: "How many times will 'Case 2' be printed in the following code?\nlet number = 2;\n\nswitch (number) {\n    case 1: console.log('Case 1');\n    case 2: console.log('Case 2');\n    case 3: console.log('Case 3');\n}",
        answers: [
            { text: '0', correct: false },
            { text: '1', correct: false },
            { text: '2', correct: true },
            { text: '3', correct: false }
        ]
    },
    {
        question: "What type of dialog box is used to display a message to the user without requiring any user input?",
        answers: [
            { text: 'Confirmation', correct: false },
            { text: 'Prompt', correct: false },
            { text: 'Alert', correct: true },
            { text: 'window.confirm()', correct: false }
        ]
    },
    {
        question: "What is the output of !(5 > 3)?",
        answers: [
            { text: 'true', correct: false },
            { text: 'false', correct: true },
            { text: '2', correct: false },
            { text: '5', correct: false }
        ]
    },
    {
        question: "Which loop is used when you need to execute a block of code a specific number of times?",
        answers: [
            { text: 'For loop', correct: true },
            { text: 'While loop', correct: false },
            { text: 'Do...while loop', correct: false },
            { text: 'Nested loop', correct: false }
        ]
    },
    {
        question: "What will be the output of the following JavaScript code snippet?\nlet x = 10;\nfunction foo() {\n    console.log(x);\n}\nfunction bar() {\n    let x = 20;\n    foo();\n}\nbar();",
        answers: [
            { text: '10', correct: false },
            { text: '20', correct: false },
            { text: 'undefined', correct: false },
            { text: 'Error', correct: true }
        ]
    },
    {
        question: "What is the output of the following JavaScript code snippet?\nfor (let i = 0; i < 3; i++) {\n    for (let j = 0; j < 2; j++) {\n        console.log(i + ', ' + j);\n    }\n}",
        answers: [
            { text: '0, 0 0, 1 1, 0 1, 1 2, 0 2, 1', correct: false },
            { text: '0, 0 0, 1 0, 2 1, 0 1, 1 1, 2', correct: false },
            { text: '0, 0 1, 0 2, 0 0, 1 1, 1 2, 1', correct: true }
        ]
    },
    {
        question: "Given the following JavaScript code snippet, how many times will the inner loop execute?\nfor (let i = 0; i < 3; i++) {\n    for (let j = 0; j < 2; j++) {\n        console.log(i, j);\n    }\n}",
        answers: [
            { text: '2', correct: false },
            { text: '3', correct: false },
            { text: '4', correct: false },
            { text: '6', correct: true }
        ]
    },
    {
        question: "What will be the value of result after executing the following JavaScript code snippet?\nlet result;\nfor (let i = 0; i <= 10; i++) {\n    if (i % 2 === 0) {\n        continue;\n    }\n    result = i;\n}",
        answers: [
            { text: '0', correct: false },
            { text: '10', correct: false },
            { text: '5', correct: true },
            { text: '4', correct: false }
        ]
    },
    {
        question: "What is the output of the following JavaScript code snippet?\nlet x = 5;\nlet y = x > 3 ? 'A' : 'B';\nconsole.log(y);",
        answers: [
            { text: 'B', correct: false },
            { text: 'A', correct: true },
            { text: '5', correct: false },
            { text: 'Error', correct: false }
        ]
    },
    {
        question: "How can you break out of a loop in JavaScript?",
        answers: [
            { text: 'Using the end keyword', correct: false },
            { text: 'Using the break statement', correct: true },
            { text: 'Using the continue statement', correct: false },
            { text: 'Using the stop statement', correct: false }
        ]
    },
    {
        question: "What will the following JavaScript code snippet output?\nconsole.log(1 + '2');",
        answers: [
            { text: '3', correct: false },
            { text: '12', correct: true },
            { text: '"3"', correct: false },
            { text: 'Error', correct: false }
        ]
    },
    {
        question: "Which of the following is true about JavaScript functions?",
        answers: [
            { text: 'They must return a value', correct: false },
            { text: 'They can accept any number of parameters', correct: true },
            { text: 'They cannot be nested', correct: false },
            { text: 'They must have a name', correct: false }
        ]
    },
    {
        question: "What will the following code do?\ndocument.getElementById('myLink').addEventListener('click', function(event) {\n    event.preventDefault();\n});",
        answers: [
            { text: 'Prevent the link from being clicked', correct: false },
            { text: 'Prevent the default action of the link', correct: true },
            { text: 'Remove the link', correct: false },
            { text: 'Do nothing', correct: false }
        ]
    },
    {
        question: "Which event is fired when the user presses a key on the keyboard?",
        answers: [
            { text: 'onkeypress', correct: false },
            { text: 'onkeydown', correct: true },
            { text: 'onkeyup', correct: false },
            { text: 'onkey', correct: false }
        ]
    },
    {
        question: "How many times will the following loop execute?\nfor (let i = 0; i <= 5; i++) {\n    console.log(i);\n}",
        answers: [
            { text: '4', correct: false },
            { text: '6', correct: true },
            { text: '5', correct: false },
            { text: '0', correct: false }
        ]
    },
    {
        question: "What is the purpose of a function in JavaScript?",
        answers: [
            { text: 'To store values', correct: false },
            { text: 'To perform a specific task or calculation', correct: true },
            { text: 'To loop through arrays', correct: false },
            { text: 'To create objects', correct: false }
        ]
    },
    {
        question: "What is the purpose of the initialization expression in a for loop?",
        answers: [
            { text: 'To check the loop condition', correct: false },
            { text: 'To update the loop variable', correct: false },
            { text: 'To set the initial value of the loop variable', correct: true },
            { text: 'To exit the loop', correct: false }
        ]
    },
    {
        question: "What does the break statement do in a loop?",
        answers: [
            { text: 'Exits the loop immediately', correct: true },
            { text: 'Skips the current iteration', correct: false },
            { text: 'Pauses the loop', correct: false },
            { text: 'Restarts the loop', correct: false }
        ]
    },
    {
        question: "Which of the following is a function expression?",
        answers: [
            { text: 'function myFunction() {}', correct: false },
            { text: 'const myFunction = function() {}', correct: true },
            { text: 'def myFunction() {}', correct: false },
            { text: 'function = myFunction() {}', correct: false }
        ]
    },
    {
        question: "How can you run JavaScript code?",
        answers: [
            { text: 'By using a Java compiler', correct: false },
            { text: 'By embedding it directly in HTML tags', correct: true },
            { text: 'By using a Python interpreter', correct: false },
            { text: 'By creating a standalone executable file', correct: false }
        ]
    },
    {
        question: "Which of the following is NOT a correct statement about the history of JavaScript?",
        answers: [
            { text: 'JavaScript was initially developed as a scripting language for browsers.', correct: false },
            { text: 'Brendan Eich is the creator of JavaScript.', correct: true },
            { text: 'It was first called "LiveScript" but was renamed to "JavaScript" later.', correct: false },
            { text: 'JavaScript code is executed on the server-side.', correct: false }
        ]
    },
    {
        question: "Which keyword is used to declare a variable within a specific block of code, such as within an if statement or loop?",
        answers: [
            { text: 'block', correct: false },
            { text: 'var', correct: false },
            { text: 'let', correct: true },
            { text: 'const', correct: false }
        ]
    },
    {
        question: "Which scope makes a variable accessible throughout the entire JavaScript program?",
        answers: [
            { text: 'Local scope', correct: false },
            { text: 'Block scope', correct: false },
            { text: 'Function scope', correct: false },
            { text: 'Global scope', correct: true }
        ]
    },
    {
        question: "What is JavaScript?",
        answers: [
            { text: 'A style sheet language for HTML', correct: false },
            { text: 'A programming language for creating web pages', correct: true },
            { text: 'A database management system', correct: false },
            { text: 'A hardware component', correct: false }
        ]
    },
    {
        question: "What happens if you declare a variable with the same name in both the global and local scopes?",
        answers: [
            { text: 'The global variable will override the local variable', correct: false },
            { text: 'The local variable will override the global variable within its scope', correct: true },
            { text: 'Both variables can be used interchangeably', correct: false },
            { text: 'JavaScript will throw an error', correct: false }
        ]
    },
    {
        question: "Which HTML tag is used to link an external JavaScript file?",
        answers: [
            { text: 'js', correct: false },
            { text: 'link', correct: false },
            { text: 'script', correct: true },
            { text: 'external', correct: false }
        ]
    }
    
    
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
   

    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion()
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }

        button.addEventListener("click", selectAnswer);
    })

}

function resetState(){
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedbtn = e.target;
    const isCorrect = selectedbtn.dataset.correct === "true";
    if (isCorrect) {
        selectedbtn.classList.add("correct");
        score++;
    }else{
        selectedbtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach((button) => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextButton.style.display = "block";

}

function showScore(){
    resetState();
    questionElement.innerHTML = `your score ${score} out of ${questions.length}!`
    nextButton.innerHTML = "play again"
    nextButton.style.display = "block"
}


function handleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }else{
        showScore();
    }
}



nextButton.addEventListener("click" , ()=>{
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }else{
        startQuiz();
    }
})




startQuiz()