var playSoundBtn = document.getElementsByClassName("playSound");

var playSound = function() {
    var attribute = this.getAttribute("data-sound");
    var sounds = document.getElementsByTagName('audio');
    for(i=0; i<sounds.length; i++){
        sounds[i].pause();
        sounds[i].currentTime = 0;
    }
    document.getElementById(attribute).play();
};

for (var i = 0; i < playSoundBtn.length; i++) {
    playSoundBtn[i].addEventListener('click', playSound, false);
}

