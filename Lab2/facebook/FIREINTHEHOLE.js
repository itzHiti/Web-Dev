function playSound() {
    const audio = new Audio('fith.ogg');
    audio.play();
    console.log('Playing sound');
}

var button = document.getElementById('playSoundButton');
if(button) {
    button.addEventListener('click', playSound);
}