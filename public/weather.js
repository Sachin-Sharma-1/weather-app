
const sun = document.querySelector(".sun");
const body = document.querySelector("body");
const time = new Date().getHours();
const button = document.querySelector(".btn");
const text = document.querySelector(".temp-card");

if(time >= 18){
  setTimeout(function () {
        body.classList.add("dark");
        button.classList.remove("btn-primary");
        button.classList.add("btn-light");
        text.style.color = "#ffffff";
    }, 500);
  ;
}
