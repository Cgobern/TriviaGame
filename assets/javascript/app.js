$(document).ready(function() {
	setTimeout(windowAlert, 2000);
	function windowAlert() {
		console.log("this is working!");

	}
//this hide all the classes below until 'start' button is pushed
	$(".timeLeft").hide();
	$(".question").hide();
	$(".done").hide();
	$("#endGame").hide();
//this will show the classes below until 'start' button is pushed
	$('.start').on ('click', function() {
		$(".timeLeft").show();
		$(".done").show();
		$(".question").show();
		$(".start").hide();
		console.log("this function is working")
	});
	
	$('.done').on('click', function(){
		$(".question").hide();
		$(".timeLeft").hide();
		$("#endGame").show();
		$(".done").hide();
	});
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

