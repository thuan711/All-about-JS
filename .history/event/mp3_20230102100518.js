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
    const list = ["holo.mp3", "summer.mp3","spark.mp3"];
    let songIndex = 0;
    playButton.addEventListener("click", handlemusic);
    nextButton.addEventListener("click", function(){
        handleChangeMusic(1);
    });
    prevButton.addCEventListener("click", function(){
        handleChangeMusic(-1);
    });
    song.addEventListener("ended",function(){
        handleChangeMusic(1);
    });
    function handleChangeMusic(dir) {
        if (dir === 1) {
          songIndex++;
          if (songIndex > list.length - 1) {
            songIndex = 0;
          }
          song.setAttribute("src", `./dom/${list[songIndex]}`);
          playing = true;
          handlemusic();
        } else if (dir === -1) {
          songIndex--;
          if (songIndex < 0) {
            songIndex = list.length - 1;
          }
          song.setAttribute("src", `./dom/${list[songIndex]}`);
          playing = true;
          handlemusic();
        }
      }
    function handlemusic() {
        if(playing ){
            song.play();
            playerImage.classList.add("is-playing");
            playButton.classList.add("fa-pause");
            playing = false;
        } else {
            song.pause();
            playerImage.classList.remove("is-playing");
            playButton.classList.remove("fa-pause");
            playing = true;
        }
    }
    
});