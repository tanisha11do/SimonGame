var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var level = 0;

var started = false;

$(document).on("keypress", function(){
    if(!started){
        $("h1").text("Level "+ level);
        nextSequence();
        started = true;
    }
});

$(".btn").on("click",function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    // console.log(userClickedPattern);
    // var audio = new Audio("sounds/"+ userChosenColour + ".mp3");
    // audio.play();
    playSound(userChosenColour);
    animatePress(userChosenColour);
});

function nextSequence() {

    level++;
    $("h1").text("Level "+ level);

    var randomNumber = Math.floor(Math.random()*4);

    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
    // var audio = new Audio("sounds/"+ randomChosenColour + ".mp3");
    // audio.play();
    
    
};

function playSound(name) {
    var audio = new Audio("sounds/"+ name + ".mp3");
    audio.play();
};

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");

    setTimeout(function(){
        $("#" + currentColour).removeClass("pressed");
    }, 100);
};

