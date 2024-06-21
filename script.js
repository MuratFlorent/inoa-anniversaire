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
            nameContainer.style.opacity = 1;
        }, i * 500); // 500ms delay between each letter
    }
}

function displayAdjectives() {
    let index = 0;
    setInterval(() => {
        adjectivesContainer.style.opacity = 0;
        setTimeout(() => {
            adjectivesContainer.textContent = adjectives[index];
            adjectivesContainer.style.opacity = 1;
            index = (index + 1) % adjectives.length;
        }, 1000); // Change adjective every 2 seconds with 1 second transition
    }, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
    displayLetters();
    setTimeout(displayAdjectives, name.length * 500 + 1000); // Start adjectives after name is displayed
});
