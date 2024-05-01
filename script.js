
//initialize the variable
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myBar = document.getElementById('myBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('mastersongname');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {
        songname: "everything sucks - album song", filepath: "songs/1.mp3", coverpath: "covers/1.jpg"
    },
    { songname: "MOOD - lofi song", filepath: "songs/2.mp3", coverpath: "covers/2.jpg" },
    { songname: " Pahli dafa - Animal", filepath: "songs/3.mp3", coverpath: "covers/3.jpg" },
    { songname: "Shaam - Aisha", filepath: "songs/4.mp3", coverpath: "covers/4.jpg" },
    { songname: "Tareefan - Harnoor Panjabi", filepath: "songs/5.mp3", coverpath: "covers/5.jpg" },
    { songname: " Shape of you - ED Sheeran", filepath: "songs/6.mp3", coverpath: "covers/6.jpg" },
    { songname: "Moonlight - Harnoor ", filepath: "songs/7.mp3", coverpath: "covers/7.jpg" },
    { songname: "Paper rings - Taylor Swift ", filepath: "songs/8.mp3", coverpath: "covers/8.jpg" },
    { songname: "Gallan Goodiyaan  - Dil Dhadkne do ", filepath: "songs/9.mp3", coverpath: "covers/9.jpg" },
    { songname: "rocket science - voulboy", filepath: "songs/10.mp3", coverpath: "covers/10.jpg" },
    { songname: "Jiya dhadak - rahat fatah ali", filepath: "songs/11.mp3", coverpath: "covers/11.jpg" },

]
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
})
//audioElement.play();

//handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('ri-play-circle-line');
        masterPlay.classList.add('ri-pause-circle-fill');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('ri-pause-circle-fill');
        masterPlay.classList.add('ri-play-circle-line');
        gif.style.opacity = 0;
    }
})
//listen to event
audioElement.addEventListener('timeupdate', () => {
    //update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myBar.value = progress;
})
myBar.addEventListener('change', () => {
    audioElement.currentTime = myBar.value * audioElement.duration / 100;
})
const makeAllPlays = () => {

    arr = Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('ri-pause-circle-fill');
        element.classList.add('ri-play-circle-line');
        // ...........      ..//

    })

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();

        songIndex = parseInt(e.target.id);
        e.target.classList.remove('ri-play-circle-line');
        e.target.classList.add('ri-pause-circle-fill');

        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songname;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('ri-play-circle-line');
        masterPlay.classList.add('ri-pause-circle-fill');
        //    gif.style.opacity=0;

    })

})

document.getElementById('id2').addEventListener('click', () => {
    if (songIndex > 11) {
        songIndex = 0;
    } else {
        masterSongName.innerText = songs[songIndex].songname;
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('ri-play-circle-line');
    masterPlay.classList.add('ri-pause-circle-fill');
    gif.style.opacity = 1;
})

document.getElementById('id1').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    } else {
        songIndex -=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('ri-play-circle-line');
    masterPlay.classList.add('ri-pause-circle-fill');
    gif.style.opacity = 1;
})
