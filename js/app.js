
$(document).ready(function(){
	
	var guesses = 0;
	var myGuess;
	var randomNum;
	var difference;
	resetGame();
	
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
	
	$('.new').click(function(){
		resetGame();
	})
	
	function resetGame(){
	    alert('We just picked a number between 1 and 100. Try and guess it.');
		randomNum = Math.floor((Math.random() * 100) + 1);
		guesses = 0;
		myGuess;
		difference = 0;
		$('h2').css("background", "#cc324b");
		document.getElementById('feedback').innerHTML = 'Make your Guess!';
		void(document.getElementById('count').innerHTML = guesses);
		$('ul#guessList').empty();
	}
	
    $('#guessButton').click(function(event){
	
		var txtbox = document.getElementById('userGuess');
		var myGuess = txtbox.value;
		event.preventDefault();
				
		if (myGuess == 'NaN' || myGuess %1 != 0 || myGuess == '')
		{
			alert('Make you sure you enter a number between from 1 to 100!');
		}
		else
		{
			guesses++;
			void(document.getElementById('count').innerHTML = guesses);
			compareNums(randomNum, myGuess);
			document.getElementById('userGuess').value = '';
			
		}
	})
	
	
	function compareNums(random, guess){
		difference = Math.abs(random - guess);
		var message;
		var list = '<li><span> ' + ' ' + guess + '</span></li>';
		
		if (guess > random){
			message = 'Too high';
			$(list).clone().appendTo('ul#guessList');
		}
		else if (guess < random){
			message = 'Too low';
			$(list).clone().appendTo('ul#guessList');
		}
		
		if (difference >= 50)
		{
			document.getElementById('feedback').innerHTML = 'Ice cold -' + message;
			$('h2').css("background", "#8099E6"); 
		}
		else if (difference < 50 && difference >= 30)
		{
			document.getElementById('feedback').innerHTML = 'Cold -' + message;
			$('h2').css("background", "#6685C2");
		}
		else if (difference < 30 && difference >= 20)
		{
			document.getElementById('feedback').innerHTML = 'Warm -' + message;
			$('h2').css("background", "#8F2400");
		}
		else if (difference < 20 && difference >= 10)
		{
			document.getElementById('feedback').innerHTML = 'Hot -' + message;
			$('h2').css("background", "#FF6600");
		}
		else if (difference < 10 && difference >= 1)
		{
			document.getElementById('feedback').innerHTML = 'Very hot -' + message;
			$('h2').css("background", "#FF0000");
		}
		else if (difference == 0)
		{
			document.getElementById('userGuess').value = '';
			alert('You got it!');
			resetGame();
		};
	}

});


