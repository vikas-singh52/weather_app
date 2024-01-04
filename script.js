
let searchContainer = document.querySelector(".weather-container");
let arr = [];



async function callAPI(cityName){
    const jsonData = await fetch(
        `${url}/weather?q=${cityName}&appid=${apiKey}&units=metric`
    );
    const data = await jsonData.json();

    if(!arr.includes(cityName)){
        arr.push(cityName);
        hiddenPara.style.display = "none";
        createCard(data);
    }
    else{
        
        hiddenPara.innerText = "City already exist! Try different name";
        hiddenPara.style.display = "block";
    }
} 
    


function createCard(data){

    console.log(data);

    let card = document.createElement("div");
    card.classList.add("card");

    let imgDiv = document.createElement("div");
    imgDiv.setAttribute("id","imgDiv");
    let temp = document.createElement("p");
    temp.setAttribute("id","temp");
    let degree =  `${data.main.temp}`;
    temp.innerText = degree + '\u00B0';
    imgDiv.appendChild(temp);

    let image = document.createElement("img");
    if(data.weather[0].main.match("Clouds")){
        image.setAttribute("src","images/Moon cloud mid rain.svg");
    }
    else if(data.weather[0].main.match("Mist")){
        image.setAttribute("src","images/Tornado.svg");
    }
    else if(data.weather[0].main.match("Clear")){
        image.setAttribute("src","images/Moon cloud fast wind.svg");
    }
    else if(data.weather[0].main.match("Fog")){
        image.setAttribute("src","images/Moon cloud fast wind.svg");
    }
    else if(data.weather[0].main.match("Rain")){
        image.setAttribute("src","images/Sun cloud angled rain.svg");
    }
    
    image.setAttribute("alt","picture");
    image.setAttribute("width","160px");
    image.setAttribute("height","160px");
    
    imgDiv.appendChild(image);
    card.appendChild(imgDiv);

    let cardDiv = document.createElement("div");
    cardDiv.setAttribute("id","card-div");
    let values = document.createElement("div");
    let speed = document.createElement("p");
    speed.setAttribute("id","fade");
    speed.innerText =  `H:${data.main.humidity}\u00B0  W:${data.wind.speed}\u00B0`;
    let city =  document.createElement("p");
    city.setAttribute("id","city-style")
    city.innerText = `${data.name}, ${data.sys.country}`;
    values.appendChild(speed);
    values.appendChild(city);
    cardDiv.appendChild(values);
    
    let weather =  document.createElement("p");
    weather.setAttribute("id","weather");
    weather.innerText =  `${data.weather[0].main}`;
    cardDiv.appendChild(weather);
    card.appendChild(cardDiv);

    searchContainer.appendChild(card);
}

