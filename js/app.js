
$(document).ready(function(){
	var compNum = Math.floor((Math.random() * 100) + 1);   //Assigning global variables
	var userNum;
  var guessCount = 0;
	/*--- Display information modal box ---*/
	$(".what").click(function(){
  	$(".overlay").fadeIn(1000);

	});

	/*--- Hide information modal box ---*/
	$("a.close").click(function(){
		$(".overlay").fadeOut(1000);
	});

	$(".new").click(function() {
	  location.reload();
	  compNum = Math.floor((Math.random() * 100) + 1);
	});    // Reload new game when clicking +NewGame

	$("form").submit(function(e) {
		e.preventDefault();
		getUserGuess();  
    guessCount++;  
    $("#count").text(guessCount);  // Increases the guess counter
    $("#userGuess").val("");  // Resets guess input field to placeholder value

	}); //listens for button click and calls function below

	function getUserGuess () {
		var userNum = $("#userGuess").val(); //stores user input/guess into variable
    $("#guessList").append(userNum + " ");
		//console.log(compNum)
		var feedbackNum = Math.abs(compNum - userNum);
		//console.log(feedbackNum);
		if (feedbackNum >= 30)  {
			$('h2').text("Ice Cold");
		}
		else if (feedbackNum >= 20 && feedbackNum <= 29 ) {
			$('h2').text("Warm");
	}
		else if(feedbackNum >= 10 && feedbackNum <= 19){
			$('h2').text("Hot");
  		}
  	else if(feedbackNum >= 1 && feedbackNum <= 9) {
  		$('h2').text("Very Hot");
  		}
  	else {
  		$('h2').text("You got it!");  // Feedback if statement on whether user is hot or cold etc.
  		}
  }
});

// ****Click +new Game to start a new game
    // ****will need to build a function

// ++++++Computer will generate a random number
	// ++++++will need to bulid a function


// User enters their guess and clicks submit
	// Reuse the while block from FizzBuzz
	// Build an event listner
		// Use absolute function
		// Build function that does the following
			// Lets user know hot or cold
			// Updates counter
			// Adds guess to guessbox
		// If guess is correct, notify user
			// Use while loop


// Extra credit options - TBD
	// Hotter & Colder