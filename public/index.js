
const sun = document.querySelector(".sun");
const body = document.querySelector("body");
const time = new Date().getHours();
const weatherCard = document.querySelector(".weather-card");
const button = document.querySelector(".btn");


if(time >= 18){
  setTimeout(function () {
        body.classList.add("dark");
        weatherCard.style.color = "#ffffff";
        button.classList.remove("btn-primary");
        button.classList.add("btn-light");

    }, 500);
}
