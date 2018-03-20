//Variables Needed//
var startButton = $('#startButton');
var questions = [];
var correctAnswer = 0;
var wrongAnswer = 0;
var timerRunning = false;
var gameBody = $('.gameBody');
var answerLog = $('.answerLog');
var timer = $('#timer');
var intervalId;
var myQuestions = [ {
    question: 'What is the last name of the brothers in Supernatural?',
    answers: {
    a: 'Winchester',
    b: 'Robinson',
    c: 'Powers',
    d: 'Hunter',
},
correct1: a,
},
{
    question: 'What was the name of Dexters wife in Dexter on Showtime?',
    answers: {
    after: 'Vanessa',
    b: 'Courtney',
    c: 'Rita',
    d: 'Lily',
},
correct: c,
},
{
    question: 'What is the name of the town in the Simpsons?',
    answers: {
    a: 'Ashburn',
    b: 'Wakefield',
    c: 'Rockville',
    d: 'Springfield',
},
correct: d,
},
{
    question: 'What is the name of the Governors daughter in The Walking Dead?',
    answers: {
    a: 'Laura',
    b: 'Penny',
    c: 'Hillary',
    c: 'Maggie',
},
correct: b,
},
]
//Have JS/Jquery start after document is loaded//
$(document).ready(function () {

    //Hide Main Game Area
    $('.gameBody').hide();
    $('.answerLog').hide();
    //Reset Function//
    function reset() {
        timer = 90;
        $('#timer').text(timer);
    }
    //Create timer functions//
    function timerGoing() {
        timer = 90;
        $('#timer').text(timer);
        if (!timerRunning) {
            intervalId = setInterval(timer.count, 1000);
            timerRunning = true;
            timer--;
        };

    };
    //Create a on click function to show the Main Game area when Start is clicked and starts the timer//
    $('#startButton').on('click', function () {
        $('#startButton').hide();
        $('.gameBody').show();
        timerGoing();
    });

})
//Create a condtion that recognizes when the user answers a question correctly 
//Add it to the Correct Answer counter

//Create a condition that recognizes an incorrect answer
//Add it to the Wrong Answer counter

