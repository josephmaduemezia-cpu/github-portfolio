const words = [
    "Python Developer",
    "Computer Science Student",
    "Problem Solver",
    "Game Developer"
];

let count = 0;
let index = 0;
let currentWord = "";
let currentLetter = "";

function type() {

    if (count === words.length) {
        count = 0;
    }

    currentWord = words[count];
    currentLetter = currentWord.slice(0, ++index);

    document.getElementById("typing").textContent = currentLetter;

    if (currentLetter.length === currentWord.length) {
        count++;
        index = 0;
        setTimeout(type, 1200);
    }
    else {
        setTimeout(type, 100);
    }
}

type();

const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
        toggleBtn.textContent = "☀️";
    }
    else {
        toggleBtn.textContent = "🌙";
    }

});

tsParticles.load("tsparticles", {
    particles: {
        number: {
            value: 80
        },
        color: {
            value: "#22c55e"
        },
        links: {
            enable: true,
            color: "#22c55e",
            opacity: 0.2
        },
        move: {
            enable: true,
            speed: 1
        },
        size: {
            value: 3
        }
    },
    background: {
        color: {
            value: "transparent"
        }
    }
});