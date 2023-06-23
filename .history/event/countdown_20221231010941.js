window.addEventListener("load", function(){
    const dayText = document.querySelector(".days");
    const hoursText = document.querySelector(".hours");
    const munitesText = document.querySelector(".munites");
    const secondsText = document.querySelector(".seconds");
    function countdown(date){
        const now = new Date();
        let days, hours, minutes, seconds;
        const startDate = now.getTime();
        const endDate = new Date(date).getTime();
        const timeRemaining = parseInt((endDate - startDate) / 1000);
        days = parseInt(timeRemaining / 86400);
        timeRemaining = timeRemaining % 86400;
        hours = parseInt(timeRemaining / 3600);
        dayText.textContent = days;
        hoursText.textContent = hours;
    }
    countdown("Mon Jan 2 2023 00:00:00 GMT+0700 (Indochina Time");
});