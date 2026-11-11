
const opening = document.getElementById("opening");
const journey = document.getElementById("journey");
const letter = document.getElementById("letter");

const bgMusic = document.getElementById("bgMusic");
const startButton = document.getElementById("startButton");
const letterButton = document.getElementById("letterButton");
const musicButton = document.getElementById("musicButton");

function showPage(page) {
    document.querySelectorAll(".page").forEach((item) => {
        item.classList.remove("active");
    });

    page.classList.add("active");
}

startButton.addEventListener("click", async () => {
    showPage(journey);
    bgMusic.volume = 0.35;

    try {
        await bgMusic.play();
        musicButton.textContent = "♫ Music: ON";
    } catch (error) {
        musicButton.textContent = "♫ Music: OFF";
        console.log(error);
    }
});

letterButton.addEventListener("click", () => {
    showPage(letter);
});

musicButton.addEventListener("click", async () => {
    if (bgMusic.paused) {
        try {
            await bgMusic.play();
            musicButton.textContent = "♫ Music: ON";
        } catch (error) {
            musicButton.textContent = "♫ Music: OFF";
        }
    } else {
        bgMusic.pause();
        musicButton.textContent = "♫ Music: OFF";
    }
});
