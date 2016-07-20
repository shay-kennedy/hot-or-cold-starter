
$(document).ready(function(){
	var compNum = Math.floor((Math.random() * 100) + 1);
	var userNum;
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	$(".new").click(function() {
		// $(".game")[0].reset();
		compNum = Math.floor((Math.random() * 100) + 1);
		alert(compNum);
		});

  	$("form").submit(function(e) {
  		e.preventDefault();
  		getUserGuess();
  	}); //listens for button click and calls function below

  	function getUserGuess () {
  		var userNum = $("#userGuess").val(); //stores user input/guess into variable
  	
  		//alert(userNum);
  		console.log(compNum)
  		var feedbackNum = Math.abs(compNum - userNum);
  		console.log(feedbackNum);

  		//alert(feedbackNum);
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
  			$('h2').text("You got it!");
  		}

}
 
  // 	function userGuess() {
		// var input = document.getElementById("userGuess").value;
		// alert(input);
		// }
 //  	var userInput = (prompt('Please enter a number!'));
	// while (userInput % 1 != 0) {
	// 	userInput = (prompt('Please do not enter a decimal point'));

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