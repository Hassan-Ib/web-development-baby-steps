// var ham, header, headerNavigationLinks, NavigationArray;


var DomObjects = {
    ham: document.querySelector('.ham'),

    header:document.querySelector('.header'),

    headerNavigationLinks:document.querySelectorAll('.navigation__link'),


}


// hambuger
DomObjects.ham.addEventListener('click', function(){
    if(DomObjects.header.classList.contains('toggle')){
        DomObjects.header.classList.remove('toggle');
    }else{
        DomObjects.header.classList.add('toggle')
    }
    // document.querySelector('.header').classList.toggle('.toggle')
})

// closing nav bar when a nav link is clicked
NavigationArray = Array.prototype.slice.call(DomObjects.headerNavigationLinks);
NavigationArray.forEach(element => {
    element.addEventListener('click', ()=> DomObjects.header.classList.remove('toggle'))
});



//remove toggle from header completely when screen size is beyond 768

if (window.screen.width >= 768 && DomObjects.header.classList.contains('toggle')){
    console.log(window.screen.width);
    DomObjects.header.classList.remove('toggle');
};

