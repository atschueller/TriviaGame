//Variables Needed//
var startButton = $('#startButton');
var correctScore = 0;
var wrongScore = 0;
var timerRunning = false;
var time = 60;
var intervalID;

//Have JS/Jquery start after document is loaded//
$(document).ready(function () {
    function resetGame() {
        $('#startButton').show();
        $('.gameBody').hide();
        $('.answerLog').hide();
        correctScore = 0;
        wrongScore = 0;
    };
    resetGame();

    $('#startButton').on('click', function () {
        $('#startButton').hide();
        $('.gameBody').show();
        timerGoing();
    });

    //Create timer functions//
    function timerGoing() {
        intervalId = setInterval(decreasingTimer, 1000);
    };

    function decreasingTimer() {
        time--;
        $("#timer").html("<div>" + time + "</div>");

        if (time === 0) {
            clearInterval(intervalId);
            alert('Time is Up!!');
            resetGame();
        };
    };
    decreasingTimer();

    timerGoing();

    function submitAnswers() {
        var questions = 5;
        var q1 = $('input[name=q1]:checked').val();
        var q2 = $('input[name=q2]:checked').val();
        var q3 = $('input[name=q3]:checked').val();
        var q4 = $('input[name=q4]:checked').val();
        var q5 = $('input[name=q5]:checked').val();
        var answers = ['c', 'b', 'a', 'a', 'c'];

        for (i = 1; i <= questions.length; i++) {
            if (eval('q' + 1) == answers[0 + 1]) {
                correctScore++;
                $('#correctAnswers').html('Correct Answers:' + correctScore.toString());
            } else {
                wrongScore++;
                $('#wrongAnswers').html('Wrong Answers:' + wrongScore.toString());
            };
        };
    };
    submitAnswers();

    $("#doneButton").on('click', function () {
        $('.gameBody').hide();
        $('.answerLog').show();
    });

    $('#reStart').on('click', function () {
        resetGame();
    })












})// final end


