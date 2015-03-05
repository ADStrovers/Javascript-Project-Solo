// ---------
// variables
// ---------

var correct_answer_number = 0;
var score = 0;
var count = 0;

var q1 = {question_text: "Which of the following is not an olympic sport?", 
  correct_answer: "Lacrosse", 
  incorrect_answers: ["Field Hockey", "Golf", "BMX"]};

var q2 = {question_text: "Which of the following is not a discontinued olympic sport?", 
    correct_answer: "Handball", 
    incorrect_answers: ["Croquet", "Baseball", "Tug of War"]};

var q3 = {question_text: "In what year did the summer and winter olympics last occur in the same year?", 
    correct_answer: "1992", 
    incorrect_answers: ["1990", "1994", "1996"]};

var question_array = [q1, q2, q3];

// --------
// funtions
// --------

function printAnswers(value) {
  return value
}

function randomSort() {
  return (Math.round(Math.random())-0.5); 
}

function loopAnswers(correct_answer, incorrect_answers) {
  console.log(correct_answer);
  var array = incorrect_answers;
  var return_array = []
  array.push(correct_answer);
  array.sort(randomSort);
  for (var i in array) {
    if (array[i] === correct_answer) {
      correct_answer_number = parseInt(i) + 1;
    }
  }
  for (var i in array) {
    return_array.push("\n" + (parseInt(i) + 1) + ". " + array[i])
  }
  return return_array
}

// ----
// game
// ----

while (question_array[count]) {
  var question_answer = parseInt(prompt(question_array[count].question_text + 
    loopAnswers(question_array[count].correct_answer, 
    question_array[count].incorrect_answers)));
    
  if (question_answer === correct_answer_number) {
    alert("You are correct!");
    score++;
  } else {
    alert("Sorry.  Not quite correct.");
    console.log(question_answer);
    console.log(correct_answer_number);
  }
  
  ++count;
}

alert("You got " + score + " out of " + question_array.length + " questions correct!");