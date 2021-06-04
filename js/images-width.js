let page = document.querySelector('.podrobno-img-1');
let page2 = document.querySelector('.podrobno-img-2');
let button = document.querySelector('.podrobno-img-btn');

// button.onclick = function() {
//   page.classList.toggle('images-1');
//   page.classList.toggle('images-2');
// };
button.addEventListener('click', foo) 
function foo() {
  if(page || page2) {
    page.classList.toggle('podrobno-img--non');
    page2.classList.toggle('podrobno-img--non');
  }
};
