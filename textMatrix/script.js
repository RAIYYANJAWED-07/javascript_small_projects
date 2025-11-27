let p = document.querySelector('p')
let text = p.innerText



let character  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

let itiration = 0

function textmatrix() {
    const str = text.split('').map((Char, index) => {
        if(index < itiration) {
            return Char
        }
        return character.split('')[Math.floor(Math.random()*character.length)]
    }).join('')

    p.innerText = str

    itiration += 0.25
}

setInterval(textmatrix, 30)