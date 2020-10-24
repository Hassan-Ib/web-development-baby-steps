// var ham, header, headerNavigationLinks, NavigationArray;


var DomObjects = {
    ham: document.querySelector('.ham'),

    header:document.querySelector('.header'),

    headerNavigationLinks:document.querySelectorAll('.navigation__link'),

    fixedbtn: document.querySelector('.fixedscroll'),

    date: document.querySelector('#date')



}
// DOMContentLoaded and load



window.addEventListener('DOMContentLoaded',function(){
    let now = new Date().getFullYear();
    // console.log(now)
    DomObjects.date.textContent = now
    
})
// console.log(window.scrollbars.visible )
// hambuger
DomObjects.ham.addEventListener('click', function(){
    if(DomObjects.header.classList.contains('toggle')){
        DomObjects.header.classList.remove('toggle');
    }else{
        DomObjects.header.classList.add('toggle')
    }
    // document.querySelector('.header').classList.toggle('.toggle')
})

DomObjects.fixedbtn.addEventListener('click', function(){
    window.scrollY = 0
    // scrollX: 0
    // scrollY: 1063
})

// closing nav bar when a nav link is clicked // or page scrolled

NavigationArray = Array.prototype.slice.call(DomObjects.headerNavigationLinks);
NavigationArray.forEach(element => {
    element.addEventListener('click', ()=> DomObjects.header.classList.remove('toggle'))
});



//remove toggle from header completely when screen size is beyond 768

if (window.screen.width >= 768 && DomObjects.header.classList.contains('toggle')){
    console.log(window.screen.width);
    DomObjects.header.classList.remove('toggle');
};

window.addEventListener('scroll', function(){
    if (window.scrollY > 0){
        
        DomObjects.header.classList.add('sticky')
        DomObjects.header.classList.remove('toggle')
        // console.log('me')
    
        
    }else {
        DomObjects.header.classList.remove('sticky')

    }

    if(window.scrollY > 550){
        DomObjects.fixedbtn.classList.add('active')
    }else{
        DomObjects.fixedbtn.classList.remove('active')
    }
    
})


var loop = function(value, testFn, updateFn, bodyFn){
    value = value
    while(testFn(value) === true){
        bodyFn(value);
        value = updateFn(value)
    }
}

// console.log(loop( 5 , function(n){ return n <=10},function(n){return n+=1}, function(n){console.log(n)}));
// console.log(loop( 5 , (n) => n <=10,(n) => n+=1, (n) => {console.log(n)}));



// console.log(everyy([2,3,4,5], (n)=> n < 6))
// console.log(everyy([2,3,4,5], (n)=> n > 2))
