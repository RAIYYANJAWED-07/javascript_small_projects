let colorBox = document.querySelector("#color-box");
let Btn = document.querySelector("#change-color-btn");

Btn.addEventListener("click", function() {
    let c1 = Math.floor(Math.random() * 256);
    let c2 = Math.floor(Math.random() * 256);
    let c3 = Math.floor(Math.random() * 256);
    
    let bgColor = `rgb(${c1}, ${c2}, ${c3})`;
    colorBox.style.backgroundColor = bgColor;
});