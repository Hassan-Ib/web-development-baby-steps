

const questions = document.querySelectorAll('.question-answer');

questions.forEach(function(question){
    const btn = question.querySelector('.btn');
    console.log(question);
    btn.addEventListener('click', function(){
        questions.forEach(function(item){
            if (item !== question){
                item.classList.remove('show-text');
            }
        });

        question.classList.toggle('show-text')
        
    })
})