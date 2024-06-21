const name = "INOA";
const adjectivesSets = [
    ["Inspirante", "Noble", "Optimiste", "Adorable"],
    ["Intelligente", "Naturelle", "Observatrice", "Aimante"],
    ["Innovante", "Novatrice", "Originale", "Amusante"]
];
let currentSetIndex = 0;
const nameContainer = document.getElementById('name');

function displayLetters() {
    nameContainer.innerHTML = ''; // Clear the container before displaying new letters
    const currentAdjectives = adjectivesSets[currentSetIndex];
    for (let i = 0; i < name.length; i++) {
        setTimeout(() => {
            const letterContainer = document.createElement('div');
            letterContainer.classList.add('letter-container');
            
            const letter = document.createElement('span');
            letter.textContent = name[i];
            letter.classList.add('letter');
            letterContainer.appendChild(letter);

            const adjective = document.createElement('span');
            adjective.textContent = currentAdjectives[i];
            adjective.classList.add('adjective');
            letterContainer.appendChild(adjective);

            nameContainer.appendChild(letterContainer);
            gsap.fromTo(letterContainer, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.6 });
        }, i * 1000); // 1000ms delay between each letter
    }
}

function switchAdjectives() {
    currentSetIndex = (currentSetIndex + 1) % adjectivesSets.length;
    displayLetters();
}

document.addEventListener('DOMContentLoaded', () => {
    displayLetters();
    setInterval(switchAdjectives, 5000); // Switch adjectives every 5 seconds
});


$(function() {
    var body = $('#starshine'),
        template = $('.template.shine'),
        stars =  500,
        sparkle = 20;
    
      
    var size = 'small';
    var createStar = function() {
      template.clone().removeAttr('id').css({
        top: (Math.random() * 100) + '%',
        left: (Math.random() * 100) + '%',
        webkitAnimationDelay: (Math.random() * sparkle) + 's',
        mozAnimationDelay: (Math.random() * sparkle) + 's'
      }).addClass(size).appendTo(body);
    };
   
    for(var i = 0; i < stars; i++) {
      if(i % 2 === 0) {
        size = 'small';
      } else if(i % 3 === 0) {
        size = 'medium';
      } else {
        size = 'large';
      }
      
      createStar();
    }
  });

  