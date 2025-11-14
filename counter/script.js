let counter = document.querySelector('#counter');
let incrementBtn = document.querySelector('#increment-btn');
let decrementBtn = document.querySelector('#decrement-btn');
let count = 0;

incrementBtn.addEventListener('click', () => {
    count++;
    counter.innerHTML = count;
});

decrementBtn.addEventListener('click', () => {
    count--;
    counter.innerHTML = count;
});