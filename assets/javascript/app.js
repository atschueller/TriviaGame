//Variables Needed//
var startButton = $('#startButton');
var correctScore = 0;
var wrongScore = 0;
var timerRunning = false;
var time = 45;
var intervalID;

//Have JS/Jquery start after document is loaded//
$(document).ready(function () {
    //onClick Functions//
    $('#startButton').on('click', function (beginGame) {
        $('#startButton').hide();
        $('.gameBody').show();
        timerGoing();
    });
    $('#doneButton').on('click', function (finished) {
        submitAnswers();
    });
    $('#reStart').on('click', function (reStart) {
        resetGame();
    });

    //Reset Game Function//
    function resetGame() {
        $('#startButton').show();
        $('.gameBody').hide();
        $('.answerLog').hide();
        correctScore = 0;
        wrongScore = 0;
        timerRunning = false;
        time = 45;
    };
    resetGame();

    //Timer Functions//
    function timerGoing() {
        intervalId = setInterval(decreasingTimer, 1000);
    };
    function stopTimer() {
        clearInterval(intervalId);

    };
    stopTimer();

    function decreasingTimer() {
        time--;
        $("#timer").html("<div>" + time + "</div>");

        if (time === 0) {
            stopTimer();
            alert('Time is Up!!');
            $('.gameBody').hide();
            $('.answerLog').show()
        } else {
            $('#doneButton').click(finished);
        }
    };
    decreasingTimer();

    timerGoing();

//User Answers logged and matched//
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
                console.log(correctScore);
                $('#correctAnswers').html('Correct Answers:' + correctScore.toString());
            } else {
                wrongScore++;
                console.log(wrongScore);
                $('#wrongAnswers').html('Wrong Answers:' + wrongScore.toString());
            };
        };
        stopTimer();
        $('.gameBody').hide();
        $('.answerLog').show();
    };
    submitAnswers();

    

})// final end


