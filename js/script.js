'use strict';

const btns = document.getElementsByTagName('button');
// console.log(btns); //<button>2</button>


const hearts = document.querySelectorAll('.heart');
console.log(hearts); // NodeList(3) [div.heart, div.heart, div.heart] массив элементов -обращаться через метод  Foreach
// У HTMLCollection нет методов


hearts.forEach(item => { 
  item.style.backgroundColor = 'blue'; // item Для всех
  hearts[0].style.backgroundColor = 'yellow'; // hearts - выборочно
  
 });

