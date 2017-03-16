var state = {
	questions: [
		{
			title:'What pokemon is red?',
			answers:['charmander','squirtle','pikachu','ditto'],
			correct: 0
		},{
			title:'What pokemon is yellow?',
			answers:['charmander','squirtle','pikachu','ditto'],
			correct: 2
		},{
			title:'What pokemon is purple?',
			answers:['charmander','squirtle','pikachu','ditto'],
			correct: 3
		},{
			title:'What pokemon is blue?',
			answers:['charmander','squirtle','pikachu','ditto'],
			correct: 1
		}
	],
	correct: 0,
	current: 0
};


$(document).ready(function(){

	displayQuestion();

	$('ul.answers').on('click','li',function(){
		$('.selected').removeClass('selected');
		$(this).addClass('selected');
	});

	$('.submit-answer').click(function(){
		var guess = $('li.selected').attr('id');
		checkAnswer(guess);
	});

	$('.restart-quiz').click(restartQuiz);

});

function displayQuestion(){
	if(state.current == state.questions.length){
		displayResults();
	} else {
		var question = state.questions[state.current];
		$('h2').text(question.title);
		$('ul.answers').html('');
		for (var i = 0; i < question.answers.length; i++) {
			$('ul.answers').append('<li id="'+i+'">'+question.answers[i]+'</li>');
		}
	}
}

function checkAnswer(guess){
	var question = state.questions[state.current];
	if(guess == question.correct){
		state.correct++;
	}
	state.current++;
	displayQuestion();
}

function displayResults(){
	$('h2').text('Quiz Complete, Final Score '+state.correct+' out of '+state.questions.length);
	$('ul.answers').html('');
	$('.submit-answer').addClass('hidden');
	$('.restart-quiz').removeClass('hidden');
}

function restartQuiz(){
	$('.submit-answer').removeClass('hidden');
	$('.restart-quiz').addClass('hidden');
	state.correct = 0;
	state.current = 0;
	displayQuestion();
}