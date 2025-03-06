document.addEventListener("click", function () {
    var audio = document.getElementById("bg-music");
    if (audio && audio.muted) {
        audio.muted = false;
        audio.play();
    }
}, { once: true });

const slider = document.getElementById('speedSlider');
const speedValue = document.getElementById('speedValue');
const pyramid = document.querySelector('.pyramid');
const changeTile1Button = document.getElementById('changeTile1');
const changeTile2Button = document.getElementById('changeTile2');
const changeTile3Button = document.getElementById('changeTile3');
const fullscreenButton = document.getElementById('fullscreenButton');

if (slider && speedValue && pyramid) {
    slider.addEventListener('input', () => {
        const speed = parseFloat(slider.value);
        if (!isNaN(speed) && speed > 0) {
            speedValue.textContent = speed;
            pyramid.style.animationDuration = `${3 / speed}s`;
        }
    });
}

const changeTile = (button, tile) => {
    if (button) {
        button.addEventListener('click', () => {
            const front = document.querySelector('.front');
            if (front) {
                front.style.backgroundImage = `url('${tile}')`;
            }
        });
    }
};
document.getElementById("fullscreenBtn").addEventListener("click", function() { 
    if (!document.fullscreenElement) { 
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen(); 
    } 
});
changeTile(changeTile1Button, 'tile001.png');
changeTile(changeTile2Button, 'tile002.png');
changeTile(changeTile3Button, 'tile003.png');
