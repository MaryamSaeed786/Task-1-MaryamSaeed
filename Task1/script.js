/* =========================================
   QUIZ DATA
========================================= */

const quizData = {


    web: [

        {
            question: "Which language is used to structure a webpage?",
            answers: ["HTML", "CSS", "JavaScript", "Python"],
            correct: "HTML"
        },

        {
            question: "Which language is used to style a webpage?",
            answers: ["HTML", "CSS", "Java", "C++"],
            correct: "CSS"
        },

        {
            question: "Which HTML tag is used to create a hyperlink?",
            answers: ["<link>", "<a>", "<href>", "<url>"],
            correct: "<a>"
        },

        {
            question: "Which HTML tag is used to create a paragraph?",
            answers: ["<p>", "<para>", "<text>", "<paragraph>"],
            correct: "<p>"
        },

        {
            question: "Which CSS property changes the text color?",
            answers: ["font-color", "text-color", "color", "font-style"],
            correct: "color"
        },

        {
            question: "Which CSS property is used to change the background color?",
            answers: ["background-color", "bg-color", "color", "background-style"],
            correct: "background-color"
        },

        {
            question: "Which HTML tag is used to display an image?",
            answers: ["<image>", "<img>", "<picture>", "<src>"],
            correct: "<img>"
        },

        {
            question: "Which CSS layout system is useful for one-dimensional layouts?",
            answers: ["Flexbox", "SQL", "HTML", "Canvas"],
            correct: "Flexbox"
        },

        {
            question: "Which HTML attribute provides alternative text for an image?",
            answers: ["title", "alt", "src", "text"],
            correct: "alt"
        },

        {
            question: "Which CSS property controls the size of text?",
            answers: ["text-size", "font-size", "size", "font"],
            correct: "font-size"
        }

    ],



    javascript: [

        {
            question: "Which keyword is used to declare a variable in JavaScript?",
            answers: ["var", "define", "variable", "int"],
            correct: "var"
        },

        {
            question: "Which symbol is used for single-line comments?",
            answers: ["//", "/*", "#", "--"],
            correct: "//"
        },

        {
            question: "Which method is used to select an element by its ID?",
            answers: [
                "getElementById()",
                "getElement()",
                "selectId()",
                "findId()"
            ],
            correct: "getElementById()"
        },

        {
            question: "Which keyword creates a constant variable?",
            answers: ["constant", "const", "fixed", "static"],
            correct: "const"
        },

        {
            question: "Which method adds an event handler?",
            answers: [
                "addEventListener()",
                "addEvent()",
                "eventAdd()",
                "listen()"
            ],
            correct: "addEventListener()"
        },

        {
            question: "Which symbol is used for strict equality?",
            answers: ["==", "=", "===", "!="],
            correct: "==="
        },

        {
            question: "Which data type represents true or false?",
            answers: ["String", "Boolean", "Number", "Object"],
            correct: "Boolean"
        },

        {
            question: "Which method adds an item to the end of an array?",
            answers: ["push()", "add()", "append()", "insert()"],
            correct: "push()"
        },

        {
            question: "Which function converts a string to an integer?",
            answers: ["parseInt()", "toInteger()", "integer()", "parseNumber()"],
            correct: "parseInt()"
        },

        {
            question: "Which keyword is used to create a function?",
            answers: ["function", "create", "func", "method"],
            correct: "function"
        }

    ],



    general: [

        {
            question: "What is the capital city of France?",
            answers: ["London", "Paris", "Rome", "Madrid"],
            correct: "Paris"
        },

        {
            question: "How many continents are there?",
            answers: ["5", "6", "7", "8"],
            correct: "7"
        },

        {
            question: "Which planet is known as the Red Planet?",
            answers: ["Earth", "Mars", "Jupiter", "Venus"],
            correct: "Mars"
        },

        {
            question: "What is the largest ocean on Earth?",
            answers: [
                "Atlantic Ocean",
                "Indian Ocean",
                "Pacific Ocean",
                "Arctic Ocean"
            ],
            correct: "Pacific Ocean"
        },

        {
            question: "How many days are there in a leap year?",
            answers: ["364", "365", "366", "367"],
            correct: "366"
        },

        {
            question: "Which is the largest planet in our solar system?",
            answers: ["Earth", "Mars", "Jupiter", "Saturn"],
            correct: "Jupiter"
        },

        {
            question: "What is the chemical symbol for water?",
            answers: ["CO2", "H2O", "O2", "NaCl"],
            correct: "H2O"
        },

        {
            question: "Which animal is known as the King of the Jungle?",
            answers: ["Tiger", "Elephant", "Lion", "Bear"],
            correct: "Lion"
        },

        {
            question: "How many sides does a triangle have?",
            answers: ["2", "3", "4", "5"],
            correct: "3"
        },

        {
            question: "Which gas do humans need to breathe?",
            answers: ["Carbon dioxide", "Oxygen", "Hydrogen", "Nitrogen"],
            correct: "Oxygen"
        }

    ]

};



/* =========================================
   VARIABLES
========================================= */

let questions = [];

let currentQuestion = 0;

let score = 0;

let selectedCategory = "";

let timer;

let timeLeft = 30;



/* =========================================
   GET ELEMENTS
========================================= */

const homeSection =
    document.getElementById("home");

const categoryScreen =
    document.getElementById("category-screen");

const quizScreen =
    document.getElementById("quiz-screen");

const resultScreen =
    document.getElementById("result-screen");


const startButton =
    document.getElementById("start-btn");

const navStartButton =
    document.getElementById("nav-start-btn");

const categoryBack =
    document.getElementById("category-back");

const nextButton =
    document.getElementById("next-btn");

const restartButton =
    document.getElementById("restart-btn");

const homeButton =
    document.getElementById("home-btn");


const questionElement =
    document.getElementById("question");

const answerButtons =
    document.getElementById("answer-buttons");

const questionNumber =
    document.getElementById("question-number");

const timerElement =
    document.getElementById("timer");

const progressBar =
    document.getElementById("progress-bar");


const finalScore =
    document.getElementById("final-score");

const percentageElement =
    document.getElementById("percentage");

const resultMessage =
    document.getElementById("result-message");

const correctCount =
    document.getElementById("correct-count");

const wrongCount =
    document.getElementById("wrong-count");


const menuButton =
    document.getElementById("menu-btn");

const navLinks =
    document.getElementById("nav-links");


const contactForm =
    document.getElementById("contact-form");

const contactSuccess =
    document.getElementById("contact-success");



/* =========================================
   START BUTTON
========================================= */

startButton.addEventListener(
    "click",
    openCategories
);


navStartButton.addEventListener(
    "click",
    openCategories
);



function openCategories() {

    homeSection.classList.add("hidden");

    categoryScreen.classList.remove("hidden");

    categoryScreen.scrollIntoView({
        behavior: "smooth"
    });

}



/* =========================================
   CATEGORY BUTTONS
========================================= */

const categoryButtons =
    document.querySelectorAll(".category-card");


categoryButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            selectedCategory =
                button.dataset.category;

            startQuiz();

        }
    );

});



/* =========================================
   START QUIZ
========================================= */

function startQuiz() {

    questions =
        quizData[selectedCategory];

    currentQuestion = 0;

    score = 0;

    categoryScreen.classList.add(
        "hidden"
    );

    quizScreen.classList.remove(
        "hidden"
    );

    quizScreen.scrollIntoView({
        behavior: "smooth"
    });

    showQuestion();

}



/* =========================================
   SHOW QUESTION
========================================= */

function showQuestion() {

    clearInterval(timer);

    resetAnswers();


    const question =
        questions[currentQuestion];


    questionElement.textContent =
        question.question;


    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;


    const progress =
        ((currentQuestion + 1) /
        questions.length) * 100;


    progressBar.style.width =
        `${progress}%`;


    question.answers.forEach(answer => {

        const button =
            document.createElement("button");

        button.textContent =
            answer;

        button.classList.add(
            "answer-btn"
        );

        button.addEventListener(
            "click",
            () => {

                selectAnswer(
                    button,
                    answer
                );

            }
        );

        answerButtons.appendChild(
            button
        );

    });


    startTimer();

}



/* =========================================
   RESET ANSWERS
========================================= */

function resetAnswers() {

    answerButtons.innerHTML = "";

    nextButton.style.display =
        "none";

}



/* =========================================
   TIMER
========================================= */

function startTimer() {

    timeLeft = 30;

    timerElement.textContent =
        `⏱ ${timeLeft}`;


    timer = setInterval(() => {

        timeLeft--;

        timerElement.textContent =
            `⏱ ${timeLeft}`;


        if (timeLeft <= 0) {

            clearInterval(timer);

            timeUp();

        }

    }, 1000);

}



/* =========================================
   TIME UP
========================================= */

function timeUp() {

    const buttons =
        answerButtons.querySelectorAll(
            ".answer-btn"
        );


    buttons.forEach(button => {

        button.disabled = true;


        if (
            button.textContent ===
            questions[currentQuestion].correct
        ) {

            button.classList.add(
                "correct"
            );

        }

    });


    nextButton.style.display =
        "inline-block";

}



/* =========================================
   SELECT ANSWER
========================================= */

function selectAnswer(
    button,
    selectedAnswer
) {

    clearInterval(timer);


    const correctAnswer =
        questions[currentQuestion].correct;


    const buttons =
        answerButtons.querySelectorAll(
            ".answer-btn"
        );


    buttons.forEach(btn => {

        btn.disabled = true;

    });


    if (
        selectedAnswer ===
        correctAnswer
    ) {

        button.classList.add(
            "correct"
        );

        score++;

    } else {

        button.classList.add(
            "wrong"
        );


        buttons.forEach(btn => {

            if (
                btn.textContent ===
                correctAnswer
            ) {

                btn.classList.add(
                    "correct"
                );

            }

        });

    }


    nextButton.style.display =
        "inline-block";

}



/* =========================================
   NEXT QUESTION
========================================= */

nextButton.addEventListener(
    "click",
    () => {

        currentQuestion++;


        if (
            currentQuestion <
            questions.length
        ) {

            showQuestion();

        } else {

            showResult();

        }

    }
);



/* =========================================
   SHOW RESULT
========================================= */

function showResult() {

    clearInterval(timer);

    quizScreen.classList.add(
        "hidden"
    );

    resultScreen.classList.remove(
        "hidden"
    );


    const total =
        questions.length;


    const percentage =
        Math.round(
            (score / total) * 100
        );


    const wrong =
        total - score;


    finalScore.textContent =
        `${score} / ${total}`;


    percentageElement.textContent =
        `${percentage}%`;


    correctCount.textContent =
        score;


    wrongCount.textContent =
        wrong;


    if (percentage === 100) {

        resultMessage.textContent =
            "Perfect score! Excellent work! 🎉";

    }

    else if (percentage >= 80) {

        resultMessage.textContent =
            "Excellent! You really know your stuff!";

    }

    else if (percentage >= 60) {

        resultMessage.textContent =
            "Good job! Keep practicing!";

    }

    else {

        resultMessage.textContent =
            "Keep learning and try again!";

    }

}



/* =========================================
   RESTART
========================================= */

restartButton.addEventListener(
    "click",
    () => {

        resultScreen.classList.add(
            "hidden"
        );

        quizScreen.classList.remove(
            "hidden"
        );

        currentQuestion = 0;

        score = 0;

        showQuestion();

    }
);



/* =========================================
   HOME BUTTON
========================================= */

homeButton.addEventListener(
    "click",
    () => {

        clearInterval(timer);

        resultScreen.classList.add(
            "hidden"
        );

        homeSection.classList.remove(
            "hidden"
        );

        homeSection.scrollIntoView({
            behavior: "smooth"
        });

    }
);



/* =========================================
   CATEGORY BACK BUTTON
========================================= */

categoryBack.addEventListener(
    "click",
    () => {

        categoryScreen.classList.add(
            "hidden"
        );

        homeSection.classList.remove(
            "hidden"
        );

        homeSection.scrollIntoView({
            behavior: "smooth"
        });

    }
);



/* =========================================
   MOBILE MENU
========================================= */

menuButton.addEventListener(
    "click",
    () => {

        navLinks.classList.toggle(
            "show"
        );

    }
);



/* =========================================
   CLOSE MOBILE MENU
========================================= */

const navigationLinks =
    document.querySelectorAll(
        ".nav-link"
    );


navigationLinks.forEach(link => {

    link.addEventListener(
        "click",
        () => {

            navLinks.classList.remove(
                "show"
            );

        }
    );

});



/* =========================================
   CONTACT FORM
========================================= */

contactForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        contactSuccess.textContent =
            "Thank you! Your message has been received. ✓";


        contactForm.reset();

    }
);