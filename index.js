const soundCloud = document.querySelector('.sound-cloud');
const off = document.querySelector('#off');
const on = document.querySelector('#on');
const myAudio = document.querySelector('#myAudio');


const soundTrack = (soundState) => {
    if(soundState === 'off'){
        on.style.display = 'block';
        off.style.display = 'none';
        //soundCloud.style.color = "#08fdd8";
        myAudio.play();
        console.log("Off clicked")
    }
    else if(soundState === 'on'){
        on.style.display = 'none';
        off.style.display = 'block';
        //soundCloud.style.color = "#f50057";
        myAudio.pause();
        console.log("On clicked")
    }
};

off.addEventListener('click', () => soundTrack('off'));
on.addEventListener('click', () => soundTrack('on'));





const btnBars = document.getElementById('bars');
const btnTimes = document.querySelector('.times');
const SideNav = document.querySelector('.aside');

const myFunc = (navCondition) => {
    if(navCondition === 'open'){
        SideNav.classList.add('show-nav');
        btnTimes.style.display = "block";
        btnBars.style.display = "none";
    }
    else if(navCondition === 'close'){
            SideNav.classList.remove('show-nav');
            btnTimes.style.display = "none";
            btnBars.style.display = "block";
    }
};

btnBars.addEventListener("click", () => myFunc('open'));
btnTimes.addEventListener('click', () => myFunc('close'));

