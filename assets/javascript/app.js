$(document).ready(function() {
		
//this hides all the classes below until 'start' button is pushed
	$(".timeLeft").hide();
	$("#panel").hide();
	$(".done").hide();
	$("#endGame").hide();
//this will shows the classes below until 'start' button is pushed
		$('.start').on ('click', function() {
		$(".timeLeft").show();
		$(".done").show();
		$("#panel").show();
		$(".start").hide();
		console.log("this function is working")
	});
	
	$('.done').on('click', function(){
		$("#panel").hide();
		$(".timeLeft").hide();
		$("#endGame").show();
		$(".done").hide();
	});
	//starts and stops timer
	var theCount= 60;
	$('.start').on('click', function startTimer() {
		var gameTime=setInterval(decrement, 1000);
		function decrement(){	
  			theCount--;
  			$('.timeLeft').html("Time remaining: " + theCount + " seconds");
  			if (theCount < 0){
  				$(".timeLeft").hide();
  				$("#panel").hide();
  				$("#endGame").show();
  				$('.done').hide();
  			};
  		};
	  	$('.done').on('click', function(){
	  		clearInterval(gameTime);
	  	//come back and make this timer stop when time runs out 
	  	//not just when you click the 'done' button
	  	});
  	});	
  	// var correctAnswers= ["Raleigh", "Honolulu", "Tallahassee", 
  	// 	"Austin", "Washington D.C.", "Richmond", "Harrisburg", 
  	// 	"Sacramento", "Boston", "Denver"];
	

  	//this is checking each answer the user selected and sending it back
  // 	$('.done').click(function((input:radio).click(function(){
  // 		var correctAnswers= ["Raleigh", "Honolulu", "Tallahassee", 
  // 		"Austin", "Washington D.C.", "Richmond", "Harrisburg", 
  // 		"Sacramento", "Boston", "Denver"];
		// var incorrectAnswers=0;
  		
  	//});

  	// $.each($(input[name='answer']:"checked"), function() {

  	// })


});


	// var questions = [
	// { 	question: "1. What is the capital of North Carolina?",
	// 	answers: ["Albany","Paris","Raleigh","None"],
	// 	correct: "Raleigh",
	// }
	// { 	question: "2. What is the capital of North Carolina?",
	// 	answers: ["Albany","Paris","Raleigh","None"],
	// 	correct: questions.answers[2],
	// }
	// { 	question: "3. What is the capital of North Carolina?",
	// 	answers: ["Albany","Paris","Raleigh","None"],
	// 	correct: questions.answers[2],
	// }




	// ]
