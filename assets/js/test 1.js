var question = prompt('What is your name?');

var value = document.querySelector('.value');
value.innerHTML = question;


document.querySelector('.length').innerHTML = question.length;

document.querySelector('.datatype').innerHTML = question.dataType;