const question = [{'question': '~~~입니까?', 'answer':['~~입니다.', '아니오'], 'right':'~~입니다.'},{'question': '~~~입니까??', 'answer':['네', '아니오'], 'right':'네'},{'question': '~~~입니까??', 'answer':['네', '아니오'], 'right':'네'},{'question': '~~~입니까??', 'answer':['네', '아니오'], 'right':'네'}]

const quiz = document.querySelector('.Quiz')
const quizQuestion = document.querySelector('.Quiz-Question');
const quizAnswer = document.querySelector('.Quiz-answer');
const quizAnswerList = document.querySelectorAll('.Quiz-answer-box');

let quizNumber = 0;
let score = 0

quizQuestion.innerText=String(quizNumber+1)+'. '+question[quizNumber]['question'];

quizAnswerList[0].innerText=question[quizNumber]['answer'][0] 
quizAnswerList[1].innerText=question[quizNumber]['answer'][1] 

quizAnswer.addEventListener('click', (e) => {
  if (e.target.className == 'Quiz-answer-box') {
    if (e.target.textContent === question[quizNumber]['right']) {
      score++
    }
    quizNumber++
    console.log(score)
    if (question[quizNumber]){
      quizQuestion.innerText=String(quizNumber+1)+'. '+question[quizNumber]['question'];
  
      quizAnswerList[0].innerText=question[quizNumber]['answer'][0] 
      quizAnswerList[1].innerText=question[quizNumber]['answer'][1] 
    } else {
      quizQuestion.remove()
      quizAnswer.remove()
      quiz.innerText=String(score)+ '점 입니다!'
    }
  } 
})