const colors = ['red', 'blue', 'silver', 'orange', 'yellow', 'pink'];

var color = document.querySelector('h1 span');

var btn = document.querySelector('button');

btn.addEventListener('click', () => {
    var randomcolor = Math.floor(Math.random() * colors.length);
    document.querySelector('body').style.backgroundColor = colors[randomcolor];
    color.textContent = colors[randomcolor];
})