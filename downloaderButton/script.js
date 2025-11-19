let btn = document.querySelector("button")
let h4 = document.querySelector("h4")
let laoder = document.querySelector("#loader-inner")

let grow = 0
btn.addEventListener('click', function () {
    btn.style.pointerEvents = 'none'
    let random = 50 + Math.floor(Math.random()*50)

    console.log('Your file will be downloaded in',random/10,'seconds');

    let int = setInterval(function(){
        grow++
        btn.innerHTML = "downloading..."
        h4.innerHTML = grow + "%"
        laoder.style.width = grow +"%"
    },random)

    setTimeout(function(){
        clearInterval(int)
        btn.innerHTML = "downloaded"
    },random*100)
});        