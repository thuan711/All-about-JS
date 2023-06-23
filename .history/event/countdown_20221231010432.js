window.addEventListener("load", function(){
    const dayText = document.querySelector(".days");
    const hoursText = document.querySelector(".hours");
    const munitesText = document.querySelector(".munites");
    const secondsText = document.querySelector(".seconds");
    function countdown(date){
        const now = Date();
        let days, hours, minutes, seconds;
        const startDate = now.getTime();
        const endDate = new Date(date).getTime();
        const timeRemaining = parseInt((endDate - startDate) / 1000);
    }

});