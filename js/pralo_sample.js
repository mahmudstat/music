var audio = document.getElementById("audio");
var tracks = {
    list: ["https://github.com/mahmudstat/music/raw/main/songs/group/ujjibon/protyashar_alo/01%20theme_and%20ei%20mati%20ful.mp3", "https://github.com/mahmudstat/music/raw/main/songs/group/ujjibon/protyashar_alo/02 noyonaviram.mp3", "https://github.com/mahmudstat/music/raw/main/songs/group/ujjibon/protyashar_alo/03 dur arober.mp3"], //Put any tracks you want in this array
    index: 0,
    next: function() {
        if (this.index == this.list.length - 1) this.index = 0;
        else {
            this.index += 1;
        }
    },
    play: function() {
        return this.list[this.index];
    }
}

audio.onended = function() {
    tracks.next();
    audio.src = tracks.play();
    audio.load();
    audio.play();
}

function klikaj() {
    tracks.next();
    audio.src = tracks.play();
    audio.load();
    audio.play();
}

audio.src = tracks.play();