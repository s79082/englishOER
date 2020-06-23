function make(){

}

function buildQuiz() {
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
        {
            question: "Which of the following sentences describes a Canvas?",
            answers: {
                a: "Is an Image which is stored on a Web-Server",
                b: "Describes the location of your Internet Device",
                c: "Is an Image which are rendered in in your Browser"
            },
            correctAnswer: "c"
        },
        {
            question: "Is a Cookie a File on your Computer?",
            answers: {
                a: "True",
                b: "False"
            },
            correctAnswer: "a"
        },
        {
            question: "Java-Script is only used for fingerprinting?",
            answers: {
                a: "True",
                b: "False"
            },
            correctAnswer: "b"
        },
        {

            question: "A good Password only contains upper-case letters?",
            answers: {
                a: "True",
                b: "False"
            },
<<<<<<< HEAD
            correctAnswer: "c"

            
        }
=======
            correctAnswer: "b"
        },
        {
            question: "The IP-Protocoll is used for encrypting Files?",
            answers: {
                a: "True",
                b: "False"
            },
            correctAnswer: "b"
        },
       {
           question: "Canvas are always visible on a Website?",
           answers: {
               a: "True",
               b: "False"
           },
           correctAnswer: "b"
       },
       {
           question: "Browser extensions can help to minimaze your digital footprint?",
           answers: {
               a: "True",
               b: "False"
           },
           correctAnswer: "a"
       } 
>>>>>>> 76f7bf04d90103846c0b44a7bf7df538b8b1a165
    ];
    // variable to store the HTML output
    const output = [];

    // for each question
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {

            // variable to store the list of possible answers
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {

                // ...add an HTML radio button
                answers.push(
                    `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
            );

        },

    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
}

function showResults(){
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
        
        {
            question: "Which of the following sentences describes a Canvas?",
            answers: {
                a: "Is an Image which is stored on a Web-Server",
                b: "Describes the location of your Internet Device",
                c: "Is an Image which are rendered in in your Browser"
            },
            correctAnswer: "c"
        },
        {
            question: "Is a Cookie a File on your Computer?",
            answers: {
                a: "True",
                b: "False"
            },
            correctAnswer: "a"
        },
        {
            question: "Java-Script is only used for fingerprinting?",
            answers: {
                a: "True",
                b: "False"
            },
            correctAnswer: "b"
        },
      
        {

            question: "A good Password only contains upper-case letters?",
            answers: {
                a: "True",
                b: "False"
            },
            correctAnswer: "b"
        },
        {
            question: "The IP-Protocoll is used for encrypting Files?",
            answers: {
                a: "True",
                b: "False"
            },
            correctAnswer: "b"
        },
        {
            question: "Canvas are always visible on a Website?",
            answers: {
                a: "True",
                b: "False"
            },
            correctAnswer: "b"
        }
        ,
       {
           question: "Browser extensions can help to minimaze your digital footprint?",
           answers: {
               a: "True",
               b: "False"
           },
           correctAnswer: "a"
       }
    ];
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');
  
    // keep track of user's answers
    let numCorrect = 0;
  //test
    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {
  
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;
  
        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });
  
    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }
  