let song=document.getElementById("songs");
let ctrl=document.getElementById("ctrl");
let prog=document.getElementById("playrange");

song.onloadedmetadata=function(){
    prog.max=song.duration;
    prog.value=song.currentTime;
}

function playpause(){
    if(ctrl.classList.contains("fa-play")){
        song.play();
        ctrl.classList.remove("fa-play");
        ctrl.classList.add("fa-pause");
    }
    else{
        song.pause();
        ctrl.classList.remove("fa-pause");
        ctrl.classList.add("fa-play");
    }
}

if(song.play()){
    setInterval(()=>{
        prog.value=song.currentTime;
    },500)
}

prog.onchange=function(){
    song.play();
    song.currentTime=prog.value;
}