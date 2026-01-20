function goYes() {
    window.location.href = "yes.html";
}
// Unmute music on first click anywhere
document.addEventListener("click", () => {
    const music = document.getElementById("bgMusic");
    if (music.muted) {
        music.muted = false;
        music.play();
    }
});

function moveNo() {
    const btn = document.getElementById("noBtn");
    const x = Math.random() * window.innerWidth * 0.6;
    const y = Math.random() * window.innerHeight * 0.6;

    btn.style.position = "absolute";
    btn.style.left = x + "px";
    btn.style.top = y + "px";
}

