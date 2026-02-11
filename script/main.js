  // Optimized particle creation
  function createParticles() {
    const emojis = ['❤️', '💘', '💞', '💫', '🌟', '🥰'];
    const container = document.body;
    let lastTime = 0;

    function animate(timestamp) {
        if (!lastTime || timestamp - lastTime >= 500) { // Reduced frequency
            const particle = document.createElement('div');
            particle.className = 'love-particle';
            particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDuration = Math.random() * 3 + 3 + 's';
            container.appendChild(particle);
            setTimeout(() => particle.remove(), 6000);
            lastTime = timestamp;
        }
        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
}

// Optimized message animation
let currentMessage = 0;
const messages = document.querySelectorAll('.message');
const finalQuestion = document.querySelector('.final-question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

// Cycling texts for the "Still thinking" button
const noBtnMessages = [
  "Are you sure? 🤨",
  "Like... really sure? 👀",
  "Think again 😏",
  "This is a trap, you know 🪤",
  "Last chance to pick me 🥺",
];
let noBtnClickCount = 0;

function showNextMessage() {
    requestAnimationFrame(() => {
        if (currentMessage > 0) {
            messages[currentMessage - 1].classList.add('exit');
        }
        
        if (currentMessage < messages.length) {
            messages[currentMessage].classList.add('active');
            currentMessage++;
            setTimeout(showNextMessage, 3000);
        } else {
            finalQuestion.style.display = 'block';
            finalQuestion.style.opacity = '1';
        }
    });
}

// Button interactions
yesBtn.addEventListener('click', function() {
    const celebration = document.querySelector('.celebration');
    celebration.style.display = 'block';

    // Optimized heart burst
    requestAnimationFrame(() => {
        for (let i = 0; i < 50; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart-burst';
            heart.textContent = '❤️';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 0.5 + 's';
            celebration.appendChild(heart);
        }
    });

    finalQuestion.innerHTML = 
        "<h2>🎉 You're officially stuck with me 💝</h2>" +
        "<p>Thank you for saying yes. No take-backs, okay?</p>" +
        "<div style='margin-top: 2rem; font-size: 3rem'>💞✨</div>";
});

noBtn.addEventListener('mouseover', function() {
    requestAnimationFrame(() => {
        this.style.transform = 
            `translate(${Math.random() * 200 - 100}px, 
            ${Math.random() * 200 - 100}px)
            rotate(${Math.random() * 360}deg)`;
        this.style.transition = 'all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)';
    });
});

noBtn.addEventListener('click', function() {
    // Make the Yes button grow slightly
    yesBtn.style.transition = 'transform 0.3s ease';
    yesBtn.style.transform = 'scale(1.08)';

    // Change the No button text playfully, cycling through options
    const nextMessage = noBtnMessages[noBtnClickCount % noBtnMessages.length];
    this.textContent = nextMessage;
    noBtnClickCount++;

    // Gently reset the Yes button size after a short delay
    setTimeout(() => {
        yesBtn.style.transform = '';
    }, 600);
});

// Initialize
createParticles();
setTimeout(showNextMessage, 1000);