'use strict';

{
  // id
  const btn = document.getElementById('btn');

  // 定数
  
  let kekka = ["大吉","中吉","小吉","凶"]

  btn.addEventListener('click', () => {
    let random = Math.floor( Math.random() * 101)
    if (random <= 10){
      btn.textContent = kekka[0];
    }
    else if (random <= 50) {
      btn.textContent = kekka[1];
    }
    else if (random <= 80) {
      btn.textContent = kekka[2];
    } 
    else {
      btn.textContent = kekka[3];
    }
   

  })
}