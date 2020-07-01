const hex = [ 0, 1, 2, 3, 4 ,5 ,6 ,7 ,8 , 9 , 'A', 'B','c' ,'E', 'F'];

var btn = document.querySelector('button');

var color = document.querySelector('h1 span');

btn.addEventListener('click', () =>{
    var hexcolor = '#';
    for (let i = 0; i<6; i++){
        hexcolor += hex[Math.floor(Math.random() * hex.length)]
    }
    console.log(hexcolor)
    document.querySelector('body').style.backgroundColor = hexcolor
    color.textContent = hexcolor
})