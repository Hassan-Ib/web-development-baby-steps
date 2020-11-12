// var ham, header, headerNavigationLinks, NavigationArray;

(function(){

    var DomObjects = {
        ham: document.querySelector('.ham'),

        header : document.querySelector('.header'),

        headerNavigationLinks : document.querySelectorAll('.navigation__link'),
        
        fixedbtn: document.querySelector('.fixedscroll'),
        
        date: document.querySelector('#date')

        
        
    }
    // DOMContentLoaded and load
    
    
    
    window.addEventListener('DOMContentLoaded',function(){
        let now = new Date().getFullYear();
        DomObjects.date.textContent = now
        
    })

// hambuger
    DomObjects.ham.addEventListener('click', function(){
        testToggle()
    })


    // closing nav bar when a nav link is clicked // or page scrolled

    NavigationArray = Array.prototype.slice.call(DomObjects.headerNavigationLinks);
    NavigationArray.forEach(element => {
        element.addEventListener('click', ()=> removeToggle());
    });




    const navigatonCallback = (entries)=>{
        let [entry] = entries;
        
        if (!entry.isIntersecting){ 
            DomObjects.header.classList.add("sticky");
        }
        else {
            DomObjects.header.classList.remove("sticky");
        }
    }
    const observer = new IntersectionObserver(navigatonCallback, {
        root: null,
        threshold : 0,
        rootMargin : `-${DomObjects.header.getBoundingClientRect().height}px` // if its in intersection with 0% - 100% of it do
    })
    observer.observe(header)


    // let matchMedia = window.matchMedia("(min-width: 600px)");

    // matchMedia.addEventListener('change', mediaCallback)

    window.addEventListener("resize", function mediaCallback(e) {
        
        removeToggle()
    });

    function testToggle(){
        
        if (DomObjects.header.classList.contains("toggle")) {
          DomObjects.header.classList.remove("toggle");
        }
        else
        DomObjects.header.classList.add("toggle");
    }
    function removeToggle(){
        DomObjects.header.classList.contains('toggle') && 
        DomObjects.header.classList.remove("toggle");
    }
    // function mediaCallback(e){
    //     console.log(window.scroll)
    //     e.matches && DomObjects.header.classList.remove("toggle");
    // }
        


})();

