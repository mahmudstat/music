(function IIFE() {
  const list = [
  {
    id: 1,
    url: 
    "../songs/group/ujjibon/protyashar_alo/01_theme_ei_mati_ful.mp3",
    author: "প্রত্যাশার আলো",
    title: "এই মাটি আর এই আকাশ",
    cover: "../img/player/player.jpg"},

  {
 id: 2,
    url: "../songs/group/ujjibon/protyashar_alo/02_noyonaviram.mp3",
    author: "প্রত্যাশার আলো",
    title: "নয়নাভিরাম",
    cover: "../img/player/player.jpg"},

  {
    id: 3,
    url: "../songs/group/ujjibon/protyashar_alo/03_dur_arober.mp3",
    author: "প্রত্যাশার আলো",
    title: "দূর আরবের মরুর বুকে",
    cover:
    "../img/player/player.jpg"},

  {
    id: 4,
    url:
    "../songs/group/ujjibon/protyashar_alo/04_ei_se_sonar_desh.mp3",
    author: "প্রত্যাশার আলো",
    title: "এই সে সোনার দেশ",
    cover: "../img/player/player.jpg"},

  {
    id: 5,
    url: "../songs/group/ujjibon/protyashar_alo/05_holud_paki.mp3",
    author: "প্রত্যাশার আলো",
    title: "হলুদ পাখি",
    cover:
    "../img/player/player.jpg"},

  {
    id: 6,
    url:
    "../songs/group/ujjibon/protyashar_alo/06_kothay_zeno.mp3",
    author: "প্রত্যাশার আলো",
    title: "কোথায় যেন হারিয়ে গেল",
    cover: "../img/player/player.jpg"},

  {
    id: 7,
    url:
    "../songs/group/ujjibon/protyashar_alo/07_sara_din_tomari.mp3",
    author: "প্রত্যাশার আলো",
    title: "সারা দিন তোমারি",
    cover: "../img/player/player.jpg"},

  {
    id: 8,
    url:
    "../songs/group/ujjibon/protyashar_alo/08_jibon_zuddhe.mp3",
    author: "প্রত্যাশার আলো",
    title: "জীবন যুদ্ধে বীর পুরুষের",
    cover: "../img/player/player.jpg"},

  {
    id: 9,
    url:
    "../songs/group/ujjibon/protyashar_alo/09_ke_diyeche.mp3",
    author: "প্রত্যাশার আলো",
    title: "কে দিয়েছে",
    cover: "../img/player/player.jpg"},

  {
    id: 10,
    url:
    "../songs/group/ujjibon/protyashar_alo/10_sokol_kichur.mp3",
    author: "প্রত্যাশার আলো",
    title: "সকল কিছুর স্রষ্টা",
    cover: "../img/player/player.jpg"},

  {
    id: 11,
    url:
    "../songs/group/ujjibon/protyashar_alo/11_hajar_dukho.mp3",
    author: "প্রত্যাশার আলো",
    title: "হাজার দুঃখ তাপে",
    cover: "../img/player/player.jpg"},
{
    id: 12,
    url:
    "../songs/group/ujjibon/protyashar_alo/12_ze_desh_amar.mp3",
    author: "প্রত্যাশার আলো",
    title: "যে দেশ আমার জন্মভূমি",
    cover: "../img/player/player.jpg"},

    id: 13,
    url:
    "../songs/group/ujjibon/protyashar_alo/13_eto_shok_keno.mp3",
    author: "প্রত্যাশার আলো",
    title: "এতো সুখ",
    cover: "../img/player/player.jpg"},

  {
    id: 14,
    url:"../songs/group/ujjibon/protyashar_alo/14_digonto_nil_chuyen.mp3",
    author: "প্রত্যাশার আলো",
    title: "দিগন্ত নীল ছুঁয়ে আমরা সবাই",
    cover: "../img/player/player.jpg"}];

 let currentId = 0;
  let isPlaying = false;
  let isLoop = true;
  let isShuffle = false;
  let currentAudio = "music1";
  let timer = null;
  let loopOne = false;

  const currentTimeIndicator = document.querySelector(".music-time__current");
  const leftTimeIndicator = document.querySelector(".music-time__last");
  const progressBar = document.getElementById("length");
  const playBtn = document.querySelector(".play");
  const cover = document.querySelector(".cover");
  const title = document.querySelector(".music-player__title");
  const author = document.querySelector(".music-player__author");

  const loopBtn = document.getElementById("loop");
  const shuffleBtn = document.getElementById("shuffle");
  const forwardBtn = document.getElementById("forward");
  const backwardBtn = document.getElementById("backward");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const progressDiv = document.getElementById("progress");

  function play(e) {
    if (!isPlaying) {
      // console.log('play');
      e.target.src =
      "../img/player/pause.svg";
      e.target.alt = "Pause";
      isPlaying = true;
      document.getElementById(currentAudio).play();
      showTime();
    } else {
      // console.log('pause');
      e.target.src =
      "../img/player/play.svg";
      e.target.alt = "Play";
      document.getElementById(currentAudio).pause();
      isPlaying = false;
      clearInterval(timer);
    }
  }

  function changeBar() {
    const audio = document.getElementById(currentAudio);
    const percentage = (audio.currentTime / audio.duration).toFixed(3);
    progressBar.style.transition = "";
    // console.log(audio.currentTime);

    //set current time
    const minute = Math.floor(audio.currentTime / 60);
    const second = Math.floor(audio.currentTime % 60);
    const leftTime = audio.duration - audio.currentTime;
    currentTimeIndicator.innerHTML =
    ("0" + minute).substr(-2) + ":" + ("0" + second).substr(-2);

    //set left time
    const leftMinute = Math.floor(leftTime / 60);
    const leftSecond = Math.floor(leftTime % 60);

    leftTimeIndicator.innerHTML =
    ("0" + leftMinute).substr(-2) + ":" + ("0" + leftSecond).substr(-2);

    //set time bar
    progressBar.style.width = percentage * 100 + "%";
  }

  function showTime() {
    timer = setInterval(() => changeBar(), 500);
  }

  function nextMusic(mode) {
    playBtn.src =
    "../img/player/play.svg";
    playBtn.alt = "Play";
    document.getElementById(currentAudio).pause();
    isPlaying = false;
    clearInterval(timer);

    if (mode === "next") {
      currentId = currentId + 1 > list.length - 1 ? 0 : currentId + 1;
      init();
    } else {
      currentId = currentId - 1 < 0 ? list.length - 1 : currentId - 1;
      init();
    }
  }

  function shuffle(e) {
    isShuffle = !isShuffle;
    if (isShuffle) {
      e.target.parentNode.classList.add("is-loop");
    } else {
      e.target.parentNode.classList.remove("is-loop");
    }
  }

  function backward() {
    const audio = document.getElementById(currentAudio);
    audio.currentTime -= 5;
    if (!isPlaying) {
      changeBar();
    }
  }

  function forward() {
    const audio = document.getElementById(currentAudio);
    audio.currentTime += 5;
    if (!isPlaying) {
      changeBar();
    }
  }

  function stopMusic() {
    playBtn.src =
    "../img/player/play.svg";
    playBtn.alt = "Play";
    isPlaying = false;
  }

  function goToNextMusic() {
    let newId = currentId;
    while (isShuffle && !loopOne && newId === currentId) {
      newId = Math.floor(Math.random() * Math.floor(list.length - 1));
    }

    if (!isShuffle && !loopOne) {
      currentId = currentId + 1 > list.length - 1 ? 0 : currentId + 1;
    }
    if (!isShuffle && loopOne) {
      currentId = currentId;
    }

    if (isShuffle) {
      currentId = newId;
    }
    init();
    document.getElementById(currentAudio).play();
  }

  function loop(e) {
    const audio = document.getElementById(currentAudio);

    if (!isLoop && !loopOne) {
      isLoop = true;
      loopOne = false;
      // console.log('is loop');
      e.target.parentNode.classList.add("is-loop");
      e.target.src =
      "../img/player/loop.svg";
      audio.loop = false;
      audio.onended = e => goToNextMusic();
      console.log(isLoop, loopOne);
    } else if (isLoop && !loopOne) {
      // console.log('is loop one');
      isLoop = true;
      loopOne = true;
      e.target.parentNode.classList.add("is-loop");
      e.target.src =
      "../img/player/loopone.svg";
      audio.loop = true;
      audio.onended = e => goToNextMusic();
      console.log(isLoop, loopOne);
    } else {
      // console.log('not loop');
      isLoop = false;
      loopOne = false;
      e.target.parentNode.classList.remove("is-loop");
      e.target.src =
      "../img/player/loop.svg";
      audio.loop = false;
      audio.onended = e => stopMusic();
      console.log(isLoop, loopOne);
    }
  }

  function progress(e) {
    const audio = document.getElementById(currentAudio);
    //get current position and minus progress bar's x position to get current position in progress bar
    const pos =
    (e.pageX - progressDiv.getClientRects()[0].x) /
    progressDiv.getClientRects()[0].width;
    audio.currentTime = pos * audio.duration;
    changeBar();
  }

  function init() {
    //reset music duration and setup audio
    const audio =
    document.getElementById(currentAudio) === null ?
    new Audio() :
    document.getElementById(currentAudio);
    audio.src = list[currentId].url;
    audio.id = currentAudio;
    document.getElementById(currentAudio) === null ?
    document.body.appendChild(audio) :
    "";

    progressBar.style.transition = "none";
    progressBar.style.width = "0%";
    document.getElementById(currentAudio).currentTime = 0;

    title.innerHTML = list[currentId].title;
    author.innerHTML = list[currentId].author;
    cover.src = list[currentId].cover;

    //set current time
    audio.addEventListener("loadedmetadata", function () {
      const leftMinute = Math.floor(audio.duration / 60);
      const leftSecond = Math.floor(audio.duration % 60);
      currentTimeIndicator.innerHTML = "00:00";
      leftTimeIndicator.innerHTML =
      ("0" + leftMinute).substr(-2) + ":" + ("0" + leftSecond).substr(-2);
      progressBar.style.transition = "";
    });

    //set loop
    document.getElementById(currentAudio).onended = e => goToNextMusic(e);
  }

  playBtn.addEventListener("click", play);
  loopBtn.addEventListener("click", loop);

  shuffleBtn.addEventListener("click", shuffle);
  forwardBtn.addEventListener("click", forward);
  backwardBtn.addEventListener("click", backward);

  prevBtn.addEventListener("click", e => nextMusic("prev"));
  nextBtn.addEventListener("click", e => nextMusic("next"));
  progressDiv.addEventListener("click", e => {
    progress(e);
  });

  init();
})();