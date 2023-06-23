const cardsArray = [
    {
      name: "fire",
      img: "img/fire.png",
    },
    {
      name: "youtube",
      img: "img/youtube.png",
    },
    {
      name: "flash",
      img: "img/flash.png",
    },
    {
      name: "gift",
      img: "img/gift.png",
    },
    {
      name: "tron",
      img: "img/tron.png",
    },
    {
      name: "ufo",
      img: "img/ufo.png",
    },
    {
      name: "plant",
      img: "img/plant.png",
    },
    {
      name: "burger",
      img: "./img/burger.png",
    },
];
let previousCard;
let count = 0;
let firstguess = "";
let secondguess = "";
const delay = 1500;
const grid = document.querySelector(".grid");
grid.innerHTML = "";
const cardArrayMerge = cardsArray.concat(cardsArray).sort(() => 0.5 - Math.random());
cardArrayMerge.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-name", item.name);
    // front card
    const front = document.createElement("div");
    front.classList.add("front");
    // back card
    const back = document.createElement("div");
    back.classList.add("back");

    back.style.backgroundImage = `url(${item.img})`;
    card.appendChild(front);
    card.appendChild(back);
    grid.appendChild(card);
});

function matchingCard(){
    const selects = document.querySelectorAll(".selected");
    [...selects].forEach(item => item.classList.add("matched"));
}
function resetCard(){
    count = 0;
    firstguess = "";
    secondguess = "";
    previousCard = null;
    const selects = document.querySelectorAll(".selected");
    const matchedAll = document.querySelectorAll(".matched");
    const cardLength = document.querySelectorAll(".card").length;
    [...selects].forEach(item => item.classList.remove("selected"));
    // if(matchedAll.length = cardLength){
    //     matchedAll.forEach((el) => el.classList.remove("matched"));
    // }
};
grid.addEventListener("click", function(e){
    const clicked = e.target;
    if(clicked.nodeName === "SECTION" || previousCard === clicked 
    // || clicked.parentNode.classList.contains("selected") || clicked.parentNode.contains("matched")
    ){
        return;
    }
    if(count < 2){
        count++;
        if(count === 1){
            firstguess = clicked.parentNode.dataset.name;
            clicked.parentNode.classList.add("selected");
        } else {
            secondguess = clicked.parentNode.dataset.name;
            clicked.parentNode.classList.add("selected");
        }
        if(firstguess !== "" && secondguess !== ""){
            if(firstguess === secondguess){
                setTimeout(matchingCard,delay);
                setTimeout(resetCard,delay);
            } else{
                setTimeout(resetCard,delay);            
                }
        }
    }
   previousCard = clicked;
})