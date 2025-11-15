let arr = [
    {
        name: "CSK",
        primary: "yellow",
        secondary: "blue",
        fullName : "Chennai Super Kings",
        trophies: 5,
        captain : "R Gaikwad",
        logo : "https://i.pinimg.com/736x/1c/72/ba/1c72ba450110575fb8c700b9bd7f44b2.jpg"
    },
    {
        name: "MI",
        primary: "darkorange",
        secondary: "mediumblue",
        fullName : "Mumbai Indians",
        trophies: 5,
        captain : "Hardilk Pandya",
        logo : "https://i.pinimg.com/736x/5e/0d/ff/5e0dfff8e8666af7e227bbb6ccbf0756.jpg"
    },
    {
        name: "RCB",
        primary: "red",
        secondary: "palegoldenrod",
        fullName : "Royal Challengers Bangalore",
        trophies: 1,
        captain : "Rajat Patidar",
        logo : "https://www.jootoor.com/wp-content/uploads/2024/03/rcb-2024.jpg"
    },
    {
        name: "KKR",
        primary: "purple",
        secondary: "gold",
        fullName : "Kolkata Knight Riders",
        trophies: 3,
        captain : "Ajinkya Rahane",
        logo : "https://i.pinimg.com/736x/16/98/af/1698af86c972753db5f1be7cb9ea7b99.jpg"
    },
    {
        name : "SRH",
        primary : "orangered",
        secondary : "black",
        fullName : "Sunrisers Hyderabad",
        trophies : 1,
        captain : "Pat Cummins",
        logo : "https://i.pinimg.com/736x/dd/f4/8a/ddf48af7e7957a4e192a714d2a27131f.jpg"
    },
    {
        name : "DC",
        primary : "whitesmoke",
        secondary : "royalblue",
        fullName : "Delhi Capitals",
        trophies : 0,
        captain : "Axar Patel",
        logo : "https://i.pinimg.com/1200x/9a/2b/84/9a2b84a7f7bb32c454045715b1a3a2b7.jpg"
    },
    {
        name : "PBKS",
        primary : "red",
        secondary : "white",
        fullName : "Punjab Kings",
        trophies : 0,
        captain : "Shreyas Iyer",
        logo : "https://i.pinimg.com/1200x/6c/cc/83/6ccc837e73ac213972a3608eb20f124b.jpg"
    },
    {
        name : "GT",
        primary : "black",
        secondary : "khaki",
        fullName : "Gujarat Titans",
        trophies : 1,
        captain : "Shubman Gill",
        logo : "https://i.pinimg.com/1200x/1c/33/97/1c339749f5940d5ef992c68b5712b91d.jpg"
    },
    {
        name : "LSG",
        primary : "orange",
        secondary : "navy",
        fullName : "Lucknow Super Giants",
        trophies : 0,
        captain : "Rishabh Pant",
        logo : "https://i.pinimg.com/736x/42/82/fe/4282fec174f445b9655dd8d7347a72e5.jpg"
    },
    {
        name : "RR",
        primary : "magenta",
        secondary : "whitesmoke",
        fullName : "Rajasthan Royals",
        trophies : 1,
        captain : "sanju Samson",
        logo : "https://i.pinimg.com/1200x/c1/28/07/c12807aaf650f43a0aa9720dd64a14d5.jpg"
    },
]



let btn = document.querySelector("#btn");
let display = document.querySelector("#display");
let title = document.querySelector("#title");
let container = document.querySelector("#container");
let imgDiv = document.querySelector("#img-div");


btn.addEventListener("click", function(){
    let randomIndex = Math.floor (Math.random() * arr.length);
    let team = arr[randomIndex];
    display.innerText = `${team.fullName} \n Trophies: ${team.trophies} \n Captain: ${team.captain}`;
    title.innerHTML = `${team.name} are the Winners!`;
    title.style.color = team.primary;
    display.style.color = team.primary;
    container.style.backgroundColor = team.secondary;
    imgDiv.style.backgroundImage = `url(${team.logo})`;
});