console.log("This is Clock");

function updateClock(){
    let currentTime = new Date();

    let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    let day = weekday[currentTime.getDay()];
    document.getElementById("day").innerHTML = day;

    let Year = currentTime.getFullYear();
    let Month = currentTime.getMonth()+1;
    let date = currentTime.getDate();

    let todayDate = date+" - "+Month+" - "+Year;

    document.getElementById("today").innerHTML = todayDate;

    let currentHour = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSecond = currentTime.getSeconds();
    let currentMiliSecond = currentTime.getMilliseconds();

    currentMinutes = (currentMinutes < 10 ? "0" : "") +  currentMinutes;
    currentSecond = (currentSecond < 10 ? "0" : "") +  currentSecond;
    currentMiliSecond = (currentMiliSecond < 10 ? "0" : "") + currentMiliSecond;

    currentHour = (currentHour > 12 ? currentHour-12 : currentHour);
    currentHour = (currentHour == 0 ? 12 : currentHour);

    let timeOfDay = (currentHour>12) ? "AM" : "PM";

    let currentTimeStr = currentHour + " : " + currentMinutes + " : " + currentSecond + " : " + currentMiliSecond + " " + timeOfDay ;

    document.getElementById("clock").innerHTML = currentTimeStr;
}



