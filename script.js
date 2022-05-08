// 1+2 AJAX + POP UP

//// AJAX
var newQuoteBtn = document.querySelector(".new-quote-btn");
var mainQuoteText = document.getElementById("main-quote-text");
var mainQuoteAuthor = document.getElementById("main-quote-author");
var altQuoteText = document.getElementById("alt-quote-text");
var altQuoteAuthor = document.getElementById("alt-quote-author");
var mainWrapperRanQuote = document.querySelector(".main-wrapper-1");
var ranQuoteContainer = document.querySelector(".random-quote");

newQuoteBtn &&
  newQuoteBtn.addEventListener("click", () => {
    ranQuoteContainer.classList.toggle("fade-in-out");
    var page = Math.floor(Math.random() * 7268);
    fetch(`https://quote-garden.herokuapp.com/api/v3/quotes?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        var randomNumber = Math.floor(Math.random() * 10);
        var quote = data.data[randomNumber].quoteText;
        var author = data.data[randomNumber].quoteAuthor;
        mainQuoteText.innerHTML = quote;
        mainQuoteAuthor.innerHTML = author;

        ////Make text of the quote be on the Pop up
        altQuoteText.innerText = mainQuoteText.innerText;
        altQuoteAuthor.innerText = mainQuoteAuthor.innerText;
      });
  });

//// Pop up Function
var quotePopUp = document.querySelector(".quote-pop-up");
var fullscreenIcon = document.querySelector(".fullscreen-icon");
var closeIcon = document.querySelector(".close");

function fullscreenQuote() {
  quotePopUp.classList.toggle("active");
}

fullscreenIcon.addEventListener("click", fullscreenQuote);
closeIcon.addEventListener("click", fullscreenQuote);

//// Pop up add bg image
var imageIcon = document.querySelector(".pop-up-image");
var allImages = [
  "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80",
  "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1444724334165-e7050f2229a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1503435980610-a51f3ddfee50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1530666466587-533494b3fc95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1511207538754-e8555f2bc187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
  "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
];

////Pop up add bg-color back
var colorIcon = document.querySelector(".pop-up-color");

colorIcon.addEventListener("click", () => {
  quotePopUp.style.backgroundImage = "linear-gradient(180deg, var(--main-green) 0%, var(--main-medium-green) 100%)";
});

////Pop up change bg-image

var indexNumber = 1;

imageIcon.addEventListener("click", () => {
  quotePopUp.style.backgroundImage = `url(${allImages[indexNumber]})`;

  if (indexNumber === allImages.length - 1) {
    indexNumber = 0;
  } else {
    indexNumber++;
  }
});

//Random Quote Page Background Image Change when cycling new quotes.
let counter = 0;
newQuoteBtn &&
  newQuoteBtn.addEventListener("click", () => {
    mainWrapperRanQuote.classList.toggle(".bg-change");
    mainWrapperRanQuote.style.backgroundImage = `url(${allImages[counter]})`;
    if (counter === allImages.length - 1) {
      counter = 0;
    } else {
      counter++;
    }
  });

// 3 CAROUSEL

var leftBtn = document.querySelector(".button-left");
var rightBtn = document.querySelector(".button-right");
var favIndexNumber = 0;

function changeFavQuote() {
  console.log(favIndexNumber);
  var favQuoteText = document.querySelector(".fav-quote-text");
  var favQuoteAuthor = document.querySelector(".fav-quote-author");
  var favText = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
  ];
  var favAuthor = ["Nelson Mandela", "Eleanor Roosevelt", "Benjamin Franklin"];
  favQuoteText.innerText = favText[favIndexNumber];
  favQuoteAuthor.innerText = favAuthor[favIndexNumber];

  if (favIndexNumber === favText.length - 1) {
    favIndexNumber = 0;
  } else {
    favIndexNumber++;
  }
}
