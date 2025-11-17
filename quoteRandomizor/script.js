let btn = document.querySelector('#btn-generator');
let main = document.querySelector('main');

let quotes = ["Focus. Work. Win.",
  "Rise. Grind. Repeat.",
  "Dream big, start small.",
  "Prove them all wrong.",
  "Energy speaks before words.",
  "Choose peace over chaos.",
  "Stay hungry, stay relentless.",
  "Love louder than fear.",
  "Less ego, more soul.",
  "You feel like home."];

  btn.addEventListener('click', function(){
    let h1 = document.createElement('h1');
    
    let a = Math.floor(Math.random()*quotes.length);
    let x = Math.random()*95;
    let y = Math.random()*95;
    let r = Math.random()*360;
    let scl = Math.random()*3;
    
    h1.innerHTML = quotes[a];
    main.appendChild(h1);

    h1.style.position = 'absolute';
    h1.style.left = x+'%';
    h1.style.top = y+'%';
    h1.style.transform = 'rotate('+r+'deg)';
    h1.style.scale = scl;
  })