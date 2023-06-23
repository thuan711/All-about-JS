window.addEventListener("load", function(){
    const song = document.querySelector("#song");
    const playButton = document.querySelector(".player-play");
    const prevButton = document.querySelector(".player-prev");
    const nextButton = document.querySelector(".player-next");
    const duration = document.querySelector(".player-duration");
    const remaining = document.querySelector(".player-remaining");
    const bar = document.querySelector("#progress-bar");
    const playerImage = document.querySelector(".player-image");
    let playing = true;
    const list = ["holo.mp3", "summer.mp3"];
    playButton.addEventListener("click", handlemusic);
    function handlemusic() {
        if(playing ){
            song.play();
            playerImage.classList.add("is-playing");
            playButton.classList.add("fa-pause");
            playing = false;
        }
    }
    
});