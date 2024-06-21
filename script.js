const name = "Inoa";
const adjectives = ["Inspirante", "Noble", "Optimiste", "Adorable"];
const nameContainer = document.getElementById('name');

function displayLetters() {
    for (let i = 0; i < name.length; i++) {
        setTimeout(() => {
            const letterContainer = document.createElement('div');
            letterContainer.classList.add('letter');
            const letter = document.createElement('span');
            letter.textContent = name[i];
            letterContainer.appendChild(letter);

            const adjective = document.createElement('span');
            adjective.textContent = adjectives[i];
            adjective.classList.add('adjective');
            letterContainer.appendChild(adjective);

            nameContainer.appendChild(letterContainer);
            gsap.fromTo(letterContainer, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.6 });
        }, i * 1000); // 1000ms delay between each letter
    }
}

document.addEventListener('DOMContentLoaded', () => {
    displayLetters();
});
