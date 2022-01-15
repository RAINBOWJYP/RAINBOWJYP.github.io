
var question = document.getElementsByClassName('que');


for(i=0; i<question.length; i++){
    console.log(question.length);
    question[i].addEventListener('click',function(){
        this.classList.toggle('ans-display');

        });
}

