(function IIFE() {
  const list = [
  {
    id: 1,
    url:
    "../songs/group/bikolpo/sonar_nolok/01_Allah_namer.mp3",
    author: "সোনার নোলক",
    title: "One",
    cover:
    "../img/player/player.jpg"},

  {
    id: 2,
    url:
    "../songs/group/bikolpo/sonar_nolok/02_amar_mayer.mp3",
    author: "সোনার নোলক",
    title: "2",
    cover:
    "../img/player/music.jpg"},

  {
    id: 3,
    url:
    "../songs/group/bikolpo/sonar_nolok/03_tumi_ene_dile.mp3",
    author: "সোনার নোলক",
    title: "Three",
    cover:
    "../img/player/music.jpg"},

  {
    id: 4,
    url:
    "../songs/group/bikolpo/sonar_nolok/04_papi_ami.mp3",
    author: "সোনার নোলক",
    title: "Four",
    cover:
    "../img/player/music.jpg"},

  {
    id: 5,
    url:
    "../songs/group/bikolpo/sonar_nolok/05_guchiye_rakho.mp3",
    author: "সোনার নোলক",
    title: "Five",
    cover:
    "../img/player/music.jpg"},

  {
    id: 6,
    url:
    "../songs/group/bikolpo/sonar_nolok/06_provu_tumi.mp3",
    author: "সোনার নোলক",
    title: "Six",
    cover:
    "../img/player/music.jpg"},

  {
    id: 7,
    url:
    "../songs/group/bikolpo/sonar_nolok/07_ami_dhonyo.mp3",
    author: "সোনার নোলক",
    title: "Seven",
    cover:
    "../img/player/music.jpg"},

  {
    id: 8,
    url:
    "../songs/group/bikolpo/sonar_nolok/08_ei_dhoroni.mp3",
    author: "সোনার নোলক",
    title: "Eight",
    cover:
    "../img/player/music.jpg"},

  {
    id: 9,
    url:
    "../songs/group/bikolpo/sonar_nolok/09_vati_ganger.mp3",
    author: "সোনার নোলক",
    title: "Eight",
    cover:
    "../img/player/music.jpg"},

  {
    id: 10,
    url:
    "../songs/group/bikolpo/sonar_nolok/10_chole_gele.mp3",
    author: "সোনার নোলক",
    title: "Eight",
    cover:
    "../img/player/music.jpg"},

  {
    id: 11,
    url:
    "../songs/group/bikolpo/sonar_nolok/11_cholona_zaii.mp3",
    author: "সোনার নোলক",
    title: "Eight",
    cover:
    "../img/player/music.jpg"},

  {
    id: 12,
    url:
    "../songs/group/bikolpo/sonar_nolok/12_moneri_aynay.mp3",
    author: "সোনার নোলক",
    title: "Eight",
    cover:
    "../img/player/music.jpg"},

  {
    id: 13,
    url:
    "../songs/group/bikolpo/sonar_nolok/09_vati_ganger.mp3",
    author: "সোনার নোলক",
    title: "Nine",
    cover:
    "../img/player/music.jpg"}];

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