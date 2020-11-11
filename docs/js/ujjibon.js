var audio = document.getElementById("audio");
var tracks = {
    list: ["https://github.com/mahmudstat/music/raw/main/songs/group/ujjibon/protyashar_alo/01%20theme_and%20ei%20mati%20ful.mp3", "https://github.com/mahmudstat/music/raw/main/songs/group/ujjibon/protyashar_alo/02 noyonaviram.mp3", "https://github.com/mahmudstat/music/raw/main/songs/group/ujjibon/protyashar_alo/03 dur arober.mp3",
https://github.com/mahmudstat/music/raw/main/songs/group/ujjibon/protyashar_alo/04 ei se sonar desh.mp3", "https://github.com/mahmudstat/music/raw/main/songs/group/ujjibon/protyashar_alo/05 holud paki.mp3", "https://github.com/mahmudstat/music/raw/main/songs/group/ujjibon/protyashar_alo/06 kothay zeno.mp3",
https://github.com/mahmudstat/music/raw/main/songs/group/ujjibon/protyashar_alo/07 sara din tomari.mp3", "https://github.com/mahmudstat/music/raw/main/songs/group/ujjibon/protyashar_alo/08 jibon zuddhe.mp3", "https://github.com/mahmudstat/music/raw/main/songs/group/ujjibon/protyashar_alo/09 ke diyeche.mp3",
https://github.com/mahmudstat/music/raw/main/songs/group/ujjibon/protyashar_alo/10 sokol kichur.mp3", "https://github.com/mahmudstat/music/raw/main/songs/group/ujjibon/protyashar_alo/11 hajar dukho.mp3", "https://github.com/mahmudstat/music/raw/main/songs/group/ujjibon/protyashar_alo/12 ze desh amar.mp3",
https://github.com/mahmudstat/music/raw/main/songs/group/ujjibon/protyashar_alo/13 eto shok keno.mp3", "https://github.com/mahmudstat/music/raw/main/songs/group/ujjibon/protyashar_alo/14 digonto nil chuyen.mp3"], 


//Put any tracks you want in this array
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