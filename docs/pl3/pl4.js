var audio = document.getElementById("audio");
var tracks = {
    list: ["https://github.com/mahmudstat/music/raw/main/sample/elo_ke_kabar.mp3", "https://github.com/mahmudstat/music/raw/main/sample/cokh_bujunle.mp3", "https://github.com/mahmudstat/music/raw/main/sample/cokh_bujunle.mp3"], //Put any tracks you want in this array
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

audio.src = tracks.play();


