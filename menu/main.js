const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];


const allMenuItem = document.querySelector('.btn-all');

const breakFastItem = document.querySelector('.btn-breakfast');

const lunchItem = document.querySelector('.btn-lunch');

const shakesItem = document.querySelector('.btn-shakes');

const dinnerItem = document.querySelector('.btn-dinner');



const menuItems = document.querySelector('.menu__items');

 
// windows load
window.addEventListener('DOMContentLoaded', function(){
    menuItems.innerHTML = displayFunction('all');
});

//  breakfast button
breakFastItem.addEventListener('click', function(){
  menuItems.innerHTML = displayFunction('breakfast');

});
//  onclick of lunch button
lunchItem.addEventListener('click', function(){
  menuItems.innerHTML = displayFunction('lunch');

});

//  onclick of lunch button
allMenuItem.addEventListener('click', function(){
  menuItems.innerHTML = displayFunction('all');

});

// onclick of shakes button
shakesItem.addEventListener('click', function(){
  menuItems.innerHTML = displayFunction('shakes');

});


// onclick of dinner button
dinnerItem.addEventListener('click', function(){
  menuItems.innerHTML = displayFunction('dinner');

});


//  function for display
const displayFunction = function(value){

  // getting the category list
  let categoryList = [];

  if (value == 'all'){
    categoryList = menu
  }
  else{
    for (let i in menu){
      // condition for getting array 'if object category == value(string)'
      if (menu[i].category == value){

        // pushing to array if exist
        categoryList.push(menu[i])
      }
    }
  }
  // console.log(categoryList);

  let displayMenu = categoryList.map(function(item){

  return `
    <article class="item">

        <div class="item__image-container">
            <img class='item__image' src="${item.img}" alt="from local data">
        </div>
        
        <div class='item__NPD'>
            <header class="item__name-price">

                <h4 class="item__name">
                    ${item.title}
                </h4>

                <h4 class="item__price">
                    ${ '$' + item.price}
                </h4>

            </header>

            <p class="discreption">
                ${item.desc}
            </p>
            
        </div>
    </article>`
  });
  // console.log(displayMenu)
  return displayMenu;
}


