let main = document.body;
let keys = document.querySelectorAll("#white-key");

let audio1 = new Audio("./piano-mp3/Ab7.mp3");
let audio2 = new Audio("./piano-mp3/Ab6.mp3");
let audio3 = new Audio("./piano-mp3/Ab5.mp3");
let audio4 = new Audio("./piano-mp3/Ab4.mp3");
let audio5 = new Audio("./piano-mp3/Ab3.mp3");
let audio6 = new Audio("./piano-mp3/Ab2.mp3");
let audio7 = new Audio("./piano-mp3/Ab1.mp3");


main.addEventListener("keydown", (dets) => {
    if (dets.key == "l") {
        audio1.play();
    }
    if (dets.key == "k") {
        audio2.play();
    }
    if (dets.key == "j") {
        audio3.play();
    }
    if (dets.key == "f") {
        audio4.play();
    }
    if (dets.key == "s") {
        audio5.play();
    }
    if (dets.key == "d") {
        audio6.play();
    }
    if (dets.key == "a") {
        audio7.play();
    }
});

main.addEventListener("keydown", (dets) => {

    setTimeout(() => {
        keys.forEach((key) => {
            key.style.transform = "scale(1)";
            key.style.background = "linear-gradient(180deg,#ffffff,#e8e8e8)";
        });
    }, 100);

    keys.forEach((key, index) => {
        if (
            (dets.key == "a" && index == 0) ||
            (dets.key == "s" && index == 1) ||
            (dets.key == "d" && index == 2) ||
            (dets.key == "f" && index == 3) ||
            (dets.key == "j" && index == 4) ||
            (dets.key == "k" && index == 5) ||
            (dets.key == "l" && index == 6)
        ) {
            key.style.transform = "scale(0.98)";
            key.style.background = "linear-gradient(180deg,#7a7979,#e8e8e8)";
        }
    });
});



keys.forEach((key, index) => {
    key.addEventListener("click", () => {
        if (index == 0) {
            audio7.play();
        }
        if (index == 1) {
            audio6.play();
        }
        if (index == 2) {
            audio5.play();
        }
        if (index == 3) {
            audio4.play();
        }
        if (index == 4) {
            audio3.play();
        }
        if (index == 5) {
            audio2.play();
        }
        if (index == 6) {
            audio1.play();
        }
    });
});