let weather=
{
    apiKey:"6c8bfefbafd294182409bb19c21ab133",
    fetchWeather:function(city)
    {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+this.apiKey
        )
        .then((response)=>response.json())
        .then((data)=>this.displayWeather(data))
    },
    displayWeather:function(data)
    {
        const {name}=data
        const {icon,description}=data.weather[0]
        const {temp,temp_min,temp_max}=data.main
        console.log(name,icon,description,temp,temp_min,temp_max)
        const City=document.getElementById("cityname")
        City.innerText="Weather in "+name;
        document.getElementById("icon").src="https://openweathermap.org/img/wn/"+icon+"@2x.png"
        document.getElementById("description").innerText=description
        document.getElementById("temp").innerText=temp+"°C"
        document.getElementById("mintemp").innerText="Min: "+temp_min+"°C"
        document.getElementById("maxtemp").innerText="Max: "+temp_max+"°C"
        document.body.style.backgroundImage="url('https://source.unsplash.com/1600x900/?"+name+"')"
    },
    search:function()
    {
        this.fetchWeather(document.getElementById("city").value)
    }
};
const Btn=document.getElementById("btnsearch")
Btn.addEventListener("click",function()
{
    weather.search();
});
const Btn2=document.getElementById("city")
Btn2.addEventListener("keydown",function(event)
{
    if(event.key=="Enter")
    {
        weather.search();
    }
});
    
    