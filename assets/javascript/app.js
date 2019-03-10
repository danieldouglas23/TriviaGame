var correct = 0;
var incorrect = 0;
var answersArray = ["d", "c", "a", "b", "d", "c", "b"]
var unanswered = answersArray.length;

//timer
var counter = 61;
var interval = setInterval(function () {
    counter--;
    // Display 'counter' wherever you want to display it.
    $("#timer").text(counter);
    if (counter === 0) {
        //display "out of time" message
        clearInterval(interval);
        alert("Game Over! You ran out of time.")
        $("#question-container").empty();   
        $("#correct-answers").append(correct);
        $("#incorrect-answers").append(incorrect);
        $("#unanswered").append(unanswered);
        $("#loser").html("<img src='loser.png' width='300px' height='300px'>");
    }
}, 1000);

//.splice .slice .shift .unshift
var guessesArray = [];


$("input:radio[name=q1]").click(function () {
    var value1 = $(this).val();
    guessesArray.push(value1);
    unanswered--;
    if (value1 === answersArray[0]) {
        correct++;
    } else {
        incorrect++;
    }

});

$("input:radio[name=q2]").click(function () {
    var value2 = $(this).val();
    guessesArray.push(value2);
    unanswered--;
    if (value2 === answersArray[1]) {
        correct++;
    } else {
        incorrect++;
    }

});

$("input:radio[name=q3]").click(function () {
    var value3 = $(this).val();
    guessesArray.push(value3);
    unanswered--;
    if (value3 === answersArray[2]) {
        correct++;
    } else {
        incorrect++;
    }

});

$("input:radio[name=q4]").click(function () {
    var value4 = $(this).val();
    guessesArray.push(value4);
    unanswered--;
    if (value4 === answersArray[3]) {
        correct++;
    } else {
        incorrect++;
    }

});

$("input:radio[name=q5]").click(function () {
    var value5 = $(this).val();
    guessesArray.push(value5);
    unanswered--;
    if (value5 === answersArray[4]) {
        correct++;
    } else {
        incorrect++;
    }

});

$("input:radio[name=q6]").click(function () {
    var value6 = $(this).val();
    guessesArray.push(value6);
    unanswered--;
    if (value6 === answersArray[5]) {
        correct++;
    } else {
        incorrect++;
    }

});

$("input:radio[name=q7]").click(function () {
    var value7 = $(this).val();
    guessesArray.push(value7);
    unanswered--;
    if (value7 === answersArray[6]) {
        correct++;
    } else {
        incorrect++;
    }

    
});

$("#submit-button").on("click", function (event) {
    event.preventDefault();
    clearInterval(interval);
    $("#correct-answers").append(correct);
    $("#incorrect-answers").append(incorrect);
    $("#unanswered").append(unanswered);
});

    // console.log(guessesArray);
    // console.log(answersArray);

    // for (var i = 0; i < answersArray.length; i++) {
    //     for (var j = 0; j < guessesArray.length; j++) {

    //         if (guessesArray[j] === answersArray[i]) {
    //             correct++;
    //         } else {
    //             incorrect++;
    //         }
    //     }

    // }



