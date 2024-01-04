let form = document.querySelector("form");
let formBtn = document.querySelector("#search-btn");
let hiddenPara = document.querySelector(".hidden");
const apiKey = "ab4d3e64b2b5b6de20c7e3a5f9e0df64";
const url = "https://api.openweathermap.org/data/2.5";

form.addEventListener("submit",formSubmit);
function formSubmit(e){
    e.preventDefault();
    let input = form.search.value;
    if(input){
        
        hiddenPara.style.display = "none";
        callAPI(input);
        console.log(input);
        form.search.value = "";
    }
    else{
        hiddenPara.innerText = "search field is empty, please type something!";
        hiddenPara.style.display = "block";
    }

}

