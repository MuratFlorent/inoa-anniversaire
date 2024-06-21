const name = "Inoa";
const adjectives = ["Inspirante", "Noble", "Optimiste", "Adorable"];
const nameContainer = document.getElementById('name');
const adjectivesContainer = document.getElementById('adjectives');

function displayLetters() {
    for (let i = 0; i < name.length; i++) {
        setTimeout(() => {
            const letter = document.createElement('div');
            letter.textContent = name[i];
            letter.classList.add('letter');
            nameContainer.appendChild(letter);
            gsap.fromTo(letter, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 0.6 });
        }, i * 500);
    }
}

function displayAdjectives() {
    let index = 0;
    setInterval(() => {
        gsap.to(adjectivesContainer, { opacity: 0, duration: 1 });
        setTimeout(() => {
            adjectivesContainer.textContent = adjectives[index];
            gsap.to(adjectivesContainer, { opacity: 1, duration: 1 });
            index = (index + 1) % adjectives.length;
        }, 1000);
    }, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
    displayLetters();
    setTimeout(displayAdjectives, name.length * 500 + 1000);
});
