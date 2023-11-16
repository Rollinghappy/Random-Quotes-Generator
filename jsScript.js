const apiLink="https://api.quotable.io/random";

newQuoteBtn=document.querySelector("#new-quote");
quoteText=document.querySelector("#text");
quoteAuthor=document.querySelector("#author");
tweetbtn=document.querySelector("#tweet-quote");
overlay=document.querySelector(".overlay");
body=document.querySelector("body");

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const random_quote = () =>{
    fetch(apiLink).then(res => res.json()).then(response => {
        console.log(response)
        quoteText.style.opacity=0;
        quoteAuthor.style.opacity=0;
        overlay.style.backgroundColor="rgba(0, 0, 0, 1)";
        randomimg='url("./bgimages/'+ getRandomInt(1,42)+'.jpg")';
        console.log(randomimg);
        setTimeout(() => {
            body.style.backgroundImage=randomimg;
            quoteText.innerText=response.content;
            quoteAuthor.innerText=response.author;
            quoteText.style.opacity=1; 
            quoteAuthor.style.opacity=1;
            overlay.style.backgroundColor="rgba(0, 0, 0, 0)";
        },1500);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    random_quote();
});

newQuoteBtn.addEventListener("click",random_quote);
tweetbtn.addEventListener("click",() => {
    console.log("tweet clicked");
    window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="'+quoteText.innerText+'" -'+quoteAuthor.innerText, '_blank');
});
