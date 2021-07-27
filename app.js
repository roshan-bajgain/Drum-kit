window.addEventListener("keydown", function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keycode}"]`);
    const audio = document.querySelector(`.key[data-key="${e.keycode}"]`);
    if (!audio) return;
    audio.CurrentTime = 0;
    audio.play();
    console.log(key);
});