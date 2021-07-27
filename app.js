window.addEventListener("keydown", function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keycode}"]`);
    if(!audio) return;
    audio.play();
});