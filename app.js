window.addEventListener("keydown", function (e) {
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    const key = document.querySelector(`.key[data-key="${e.key}"]`);
    console.log(e.key);
    if (!audio) return;
    audio.play();
});