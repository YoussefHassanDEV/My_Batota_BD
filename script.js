// ========== 1. VISUAL EFFECTS ==========
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    for (let i = 0; i < 30; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.top = Math.random() * 100 + '%';
        p.style.animationDelay = Math.random() * 15 + 's';
        p.style.animationDuration = (Math.random() * 10 + 10) + 's';
        container.appendChild(p);
    }
}

function createFloatingHearts() {
    const container = document.getElementById('floatingHearts');
    if (!container) return;
    setInterval(() => {
        const h = document.createElement('div');
        h.className = 'floating-heart';
        h.innerHTML = ['❤️', '💕', '💖', '💗', '💍', '🌹'][Math.floor(Math.random() * 6)];
        h.style.left = Math.random() * 100 + '%';
        h.style.fontSize = (Math.random() * 2 + 1) + 'em';
        h.style.animationDuration = (Math.random() * 3 + 5) + 's';
        container.appendChild(h);
        setTimeout(() => h.remove(), 8000);
    }, 2000);
}

// ========== 2. CONFIGURATION ==========
const birthdayDate = new Date('2026-01-10T00:00:00').getTime();
const weddingDate = new Date('2026-04-10T00:00:00').getTime();
const relationshipStart = new Date('2025-11-30T00:00:00').getTime();
const GALLERY_PASSWORD = "btates"; // Change this to your desired password
// 1000+ Love Messages Library (160 messages rotating every 9 minutes = 24 hours coverage)
const loveLibrary = {
    messages: [
        "Good morning my sunshine! ☀️ Waking up is easier knowing you exist in this world.",
        "Hope your coffee is as magical as you are today, my love.",
        "Rise and shine, my future wife! 💍 The world is brighter with you in it.",
        "Sending you a big virtual morning hug from across the miles! 🤗",
        "First thought in my head when I wake up: You. Always you.",
        "Have a beautiful morning, Batota! You deserve all the happiness today brings.",
        "You shine brighter than the sun itself. Never forget how special you are.",
        "Start the day knowing you are deeply loved and cherished beyond measure.",
        "Good morning beautiful! Can't wait to hear your voice later today.",
        "Loving you more with every sunrise. You're my daily motivation.",
        "Your smile is the reason I wake up happy every single morning.",
        "Morning! Wish I was there to make you breakfast and kiss you awake.",
        "Every sunrise reminds me that we're one day closer to being together forever.",
        "Sending positive energy and endless love your way this morning!",
        "Good morning princess! 👑 Today is your day to shine bright.",
        "Reminder: You are beautiful, smart, kind, and absolutely amazing.",
        "Perfect start to my day: Thinking of you and smiling like an idiot.",
        "Can't wait to wake up together someday. Until then, dream of me.",
        "Morning motivation right here: YOU. You inspire me to be better.",
        "It's 12 PM! Time to eat lunch! 🥪 Don't skip meals, my love!",
        "Bon appétit my love! Hope you're enjoying something delicious right now.",
        "Half the day is gone and I'm still missing you like crazy.",
        "Thinking of you during lunch time. Wish we could share a meal together.",
        "Hope your day is going smoothly so far. You've got this!",
        "Sending you midday energy to power through the rest of your day!",
        "Noon reminder: You're beautiful and I love you more than words.",
        "Wish I was eating lunch with you right now. Soon, my love, soon.",
        "Take a deep breath, smile, and remember: I love you endlessly.",
        "You mean the absolute world to me. Never doubt that for a second.",
        "Don't skip meals! Your health matters to me more than anything.",
        "Loving you in the middle of the day, loving you all day long.",
        "You're the fuel that keeps me going, even from thousands of miles away.",
        "Virtual lunch date? 🥗 Pretending we're eating together right now!",
        "Hope you're smiling right now because thinking of you makes ME smile.",
        "The day feels so much brighter knowing you're out there being amazing.",
        "Noon kisses being sent your way! 💋 Catch them!",
        "Can't wait to hear your voice later and hear all about your day.",
        "You're my favorite thought at noon, at midnight, and every moment between.",
        "Stay hydrated! Drink water! Take care of yourself for me! 💧",
        "2 PM! Keep pushing! 💪 You're doing amazing things today!",
        "Afternoon slump? Here's a virtual kiss to energize you! 😘",
        "Thinking of you working hard. You're the hardest worker I know.",
        "Can't even focus on my own work because I'm too busy dreaming of you.",
        "Hope work is treating you well today. You deserve respect and kindness.",
        "You're the most dedicated, hardest-working person I know. So proud of you.",
        "Random 2 PM love text: I LOVE YOU SO MUCH IT HURTS!",
        "Is it time to see you yet? Counting down the hours until we talk.",
        "Sending you strength and patience to get through the rest of the day.",
        "Every time I think of you, my heart beats a little bit faster.",
        "I want to marry you. Like, really really want to marry you. April can't come soon enough!",
        "You're my inspiration to work harder and dream bigger every single day.",
        "Missing your laugh right now. It's my favorite sound in the world.",
        "Counting the minutes until I can talk to you again. Time moves so slow!",
        "You're my afternoon delight, my evening star, my everything.",
        "Keep shining bright my love! The world needs your light.",
        "So incredibly proud of everything you do and everything you are.",
        "Every hour apart feels like a day, but it's worth it for our forever.",
        "You're on my mind 24/7, but especially right now at 2 PM.",
        "Sending positive vibes and good energy your way! You've got this!",
        "4 PM! The day is almost done! 🕓 You're almost through it!",
        "Golden hour = The time of day when your glow is most visible to me.",
        "Tea time? Coffee time? Whatever-you-want time? Relax for a moment.",
        "Almost evening! Hang in there my love. You're so close to finishing strong.",
        "Thinking about our future afternoons together, walking hand in hand.",
        "Late-afternoon sunshine has nothing on your radiance and beauty.",
        "Missing your voice so much right now. Your voice is my happy place.",
        "Hope you're finding moments to smile today. You deserve endless joy.",
        "Counting down the hours until we can talk and I can hear about your day.",
        "You're on my mind always, but especially as the day winds down.",
        "Just a little bit longer until we can connect. Can't wait!",
        "You did great today! Even if it was hard, you pushed through.",
        "Imagining our future: Walking hand in hand every single afternoon.",
        "You're the best part of every single day, without question.",
        "Sending you a late afternoon hug wrapped in all my love.",
        "My heart belongs to you completely and forever. Never forget that.",
        "I love you beyond words, beyond time, beyond distance, beyond everything.",
        "You are my happy place, my safe space, my favorite place to be.",
        "Soon we can tell each other about our days in person. Can't wait!",
        "You are absolutely amazing and I'm lucky to call you mine.",
        "Good evening love! 🌆 Hope you had a wonderful, productive day!",
        "Time to relax and unwind. You've earned it after a long day.",
        "Wish I could take you out to dinner tonight. 🍽️ One day soon!",
        "Evening is here and I'm missing you more than ever before.",
        "Tell me all about your day! I want to hear every single detail.",
        "Evenings feel so much better when I know I'll get to talk to you.",
        "Sending you evening cuddles from across all these miles between us.",
        "Relax, breathe, unwind. You deserve peace and rest, my love.",
        "I love you to the moon and back, then around the universe again.",
        "Every sunset reminds me of your beauty - breathtaking and unforgettable.",
        "You bring peace to my evening just by existing in this world.",
        "Good evening beautiful! 🌹 You looked beautiful today (you always do).",
        "I hope you feel loved tonight, because you are SO loved.",
        "Thinking about how beautiful you looked today (even though I didn't see you).",
        "Imagining our future evenings: Cooking dinner together, laughing, loving.",
        "You're my favorite notification, my favorite call, my favorite everything.",
        "Reminder: You are my soulmate and I'm yours. We're meant to be.",
        "Connecting with you at day's end is the highlight of every single day.",
        "You are the owner of my heart, the keeper of my soul, my everything.",
        "10 PM! Bedtime prep time! 🌙 Start winding down, beautiful.",
        "Brush those teeth! 🪥 Take care of yourself for me!",
        "The stars are out and every single one reminds me of you.",
        "Ending my day by thinking of you, just like I started it.",
        "I hope you feel loved as you prepare for bed tonight.",
        "Wish I could tuck you in and kiss your forehead goodnight.",
        "You're the last thing on my mind before I sleep. Always.",
        "Getting sleepy but didn't want to sleep without saying I love you.",
        "I love you endlessly and completely. Sweet dreams my beautiful Batota.",
        "You're safe in my heart, always protected, always cherished, always loved.",
        "Sleep tight, my future wife. Dream of our beautiful future together.",
        "Let's meet in our dreams tonight and dance under the stars. 💫",
        "You're my last conscious thought before sleep and my first thought waking.",
        "Rest well beautiful. Tomorrow is another day closer to forever.",
        "Wish I could cuddle you to sleep right now. Miss you so much.",
        "Dream of us together, happy and in love forever! 💤",
        "Sleep well my sweet Batota. You're safe in my heart always.",
        "Sending you the warmest goodnight kiss imaginable! 😘",
        "Wake up tomorrow and text me first thing! Can't wait to hear from you.",
        "Sweet dreams my love. You deserve the most peaceful, beautiful sleep.",
        "Midnight! Make a wish on the stars! ✨ (I'm wishing for you).",
        "It's a new day and that means another day of loving you completely.",
        "Midnight thoughts: Marry me. Be mine forever. Let's do this.",
        "Why are you still awake? (If it's because you're thinking of me, I understand.)",
        "You're my dream come true, even at this late hour.",
        "The whole world is sleeping but our love is wide awake.",
        "Sending you a midnight kiss through the universe. Did you feel it?",
        "Missing you so much right now it physically hurts my heart.",
        "Sweet dreams my angel. Rest your beautiful head and sleep peacefully.",
        "Forever and always. That's how long I'll love you. No question.",
        "You're the star of my life, lighting up even the darkest nights.",
        "I love you every second of every minute of every hour of every day.",
        "The moon can't compete with your beauty. You outshine everything.",
        "I'm so lucky to have found you. You're my greatest blessing.",
        "Even at midnight, all I can think about is how much I love you.",
        "Thinking about our wedding day and getting emotional with happiness.",
        "You're my everything - my past, my present, my future, my always.",
        "I love you more than all the stars in the entire night sky.",
        "Sweet dreams, my love. You are so incredibly precious to me.",
        "You're safe with me, always. My love protects you even in dreams.",
        "2 AM and I have late night thoughts about our beautiful future. 💤",
        "Go to sleep, my love! You need your rest for tomorrow.",
        "Dreaming of our wedding day, our honeymoon, our whole life together.",
        "Hugging my pillow and pretending it's you. Can't wait for the real thing.",
        "The quiet of night brings me peace, and thoughts of you bring me joy.",
        "Sleep tight, my love. Rest well and wake up feeling refreshed.",
        "I'll protect you in your dreams. You're always safe with me.",
        "Can't wait to wake up tomorrow and start a new day loving you.",
        "You're the star of all my dreams, the center of my universe.",
        "Sleep well, beautiful. Tomorrow is another day of our love story.",
        "Even while sleeping, my heart continues loving you endlessly.",
        "You're my best dream, my sweetest fantasy, my perfect reality.",
        "Rest your beautiful head and let sleep take you to peaceful places.",
        "Sending love through the quiet night, wrapping you in warmth.",
        "You're my angel, my everything. Sleep peacefully knowing you're loved.",
        "Dream of happiness, of us, of our perfect future together.",
        "Missing you even in the middle of the night. You're always on my mind.",
        "I'll see you in my dreams. Meet me there? Under the stars?",
        "My heart beats for you, even while I sleep. You're my life.",
        "Goodnight, my love. Until morning, when I can think of you again."
    ],
    getCurrentMessage() {
        const now = new Date();
        const totalMinutes = now.getHours() * 60 + now.getMinutes();
        // Cycle through all 160 messages throughout the day
        // 1440 minutes / 160 messages = 9 minutes per message
        const index = Math.floor(totalMinutes / 9) % this.messages.length;
        return this.messages[index];
    },
    getGreeting() {
        const h = new Date().getHours();
        if (h >= 6 && h < 12) return 'Good Morning ☀️';
        if (h >= 12 && h < 14) return 'It\'s Lunch Time! 🥪';
        if (h >= 14 && h < 16) return 'Afternoon Vibes 💪';
        if (h >= 16 && h < 18) return 'Late Afternoon 🕓';
        if (h >= 18 && h < 22) return 'Good Evening 🌆';
        if (h >= 22) return 'Late Evening 🌙';
        if (h >= 0 && h < 2) return 'Midnight Magic ✨';
        if (h >= 2 && h < 6) return 'Late Night Thoughts 💤';
        return 'Hello Beautiful ❤️';
    }
};

// ========== 3. MASTER UPDATE FUNCTION ==========
function updatePageContent() {
    const now = new Date().getTime();

    // A. Relationship Counter
    const rDiff = now - relationshipStart;
    if (rDiff > 0 && document.getElementById('rdays')) {
        document.getElementById('rdays').innerText = Math.floor(rDiff / (1000 * 60 * 60 * 24));
        document.getElementById('rhours').innerText = Math.floor((rDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        document.getElementById('rminutes').innerText = Math.floor((rDiff % (1000 * 60 * 60)) / (1000 * 60));
        document.getElementById('rseconds').innerText = Math.floor((rDiff % (1000 * 60)) / 1000);
    }

    // B. Love Messages (ALWAYS RUNS)
    const msgEl = document.getElementById('hourlyLoveMessage');
    const greetEl = document.getElementById('timeGreeting');
    const indexEl = document.getElementById('msgIndex');

    if (msgEl && greetEl) {
        const message = loveLibrary.getCurrentMessage();
        const greeting = loveLibrary.getGreeting();
        const index = Math.floor((new Date().getHours() * 60 + new Date().getMinutes()) / 9) % loveLibrary.messages.length;

        greetEl.innerText = greeting;
        msgEl.innerText = message;
        if (indexEl) indexEl.innerText = index + 1;
    }

    // C. Birthday Logic
    const isBirthday = now >= birthdayDate;
    const preView = document.getElementById('preBirthdayView');
    const postView = document.getElementById('birthdayView');

    if (isBirthday) {
        if (preView) preView.style.display = 'none';
        if (postView) postView.style.display = 'block';

        // Wedding Countdown
        const wDiff = weddingDate - now;
        if (wDiff > 0 && document.getElementById('wdays')) {
            document.getElementById('wdays').innerText = Math.floor(wDiff / (1000 * 60 * 60 * 24));
            document.getElementById('whours').innerText = Math.floor((wDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            document.getElementById('wminutes').innerText = Math.floor((wDiff % (1000 * 60 * 60)) / (1000 * 60));
            document.getElementById('wseconds').innerText = Math.floor((wDiff % (1000 * 60)) / 1000);
        }
    } else {
        if (preView) preView.style.display = 'block';
        if (postView) postView.style.display = 'none';

        // Birthday Countdown
        const bDiff = birthdayDate - now;
        if (bDiff > 0 && document.getElementById('days')) {
            document.getElementById('days').innerText = Math.floor(bDiff / (1000 * 60 * 60 * 24));
            document.getElementById('hours').innerText = Math.floor((bDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            document.getElementById('minutes').innerText = Math.floor((bDiff % (1000 * 60 * 60)) / (1000 * 60));
            document.getElementById('seconds').innerText = Math.floor((bDiff % (1000 * 60)) / 1000);
        }
    }

    // D. Distance Calculator
    updateDistanceDisplay();
}

// Start main timer
setInterval(updatePageContent, 1000);
function updateDistanceDisplay() {
    const distEl = document.getElementById('distanceDisplay');
    if (!distEl) return;

    // Cairo to Kyiv distance
    const distanceKm = 2387; // kilometers
    const distanceMiles = 1483; // miles

    const messages = [
        `${distanceKm.toLocaleString()} km separating us 🌍`,
        `${distanceMiles.toLocaleString()} miles of love 💕`,
        `But 0 distance in my heart ❤️`
    ];

    const index = Math.floor(Date.now() / 4000) % messages.length;
    distEl.textContent = messages[index];
}
// ========== 4. MUSIC PLAYER ==========
const songs = ['Songs/WineMeDineMe..mp3', 'Songs/ForgetYou.mp3', 'Songs/MyuuElfenLiedLiliumPianoVersion.mp3', 'Songs/SuriyeMarşSuriyeMilliMarş.mp3', 'Songs/AFIAOIL.mp3'];
const songTitles = ["Wine Me Dine Me", "Forget You", "Elfen Lied (Piano)", "Suriye Milli Marş", "AFIAOIL"];
let currentSong = 0, isShuffle = false, audio = new Audio();
audio.volume = 0.5;

function playSong(i) {
    currentSong = i;
    audio.src = songs[i];
    audio.play();
    updatePlayUI(true);
}

function playPause() {
    if (audio.paused) {
        if (!audio.src) playSong(0);
        else audio.play();
        updatePlayUI(true);
    } else {
        audio.pause();
        updatePlayUI(false);
    }
}

function nextSong() {
    currentSong = isShuffle ? Math.floor(Math.random() * songs.length) : (currentSong + 1) % songs.length;
    playSong(currentSong);
}

function previousSong() {
    currentSong = (currentSong - 1 + songs.length) % songs.length;
    playSong(currentSong);
}

function toggleShuffle() {
    isShuffle = !isShuffle;
    const btn = document.getElementById('shuffleBtn');
    if (btn) btn.style.background = isShuffle ? 'linear-gradient(135deg, #667eea, #764ba2)' : 'linear-gradient(135deg, #ffd700, #ffed4e)';
}

function changeVolume(v) {
    audio.volume = v / 100;
    const volEl = document.getElementById('volumePercent');
    if (volEl) volEl.innerText = v + '%';
}

function seekSong(e) {
    if (audio.duration) {
        audio.currentTime = (e.offsetX / e.currentTarget.offsetWidth) * audio.duration;
    }
}

function updatePlayUI(isPlaying) {
    const playBtn = document.getElementById('playBtn');
    const nowPlaying = document.getElementById('nowPlaying');
    if (playBtn) playBtn.innerText = isPlaying ? '⏸️ Pause' : '▶️ Play';
    if (nowPlaying) nowPlaying.innerText = 'Now Playing: ' + songTitles[currentSong];

    document.querySelectorAll('.song-item').forEach((el, i) => {
        el.classList.toggle('active', i === currentSong);
    });
}

audio.addEventListener('timeupdate', () => {
    const progressEl = document.getElementById('progress');
    if (progressEl && audio.duration) {
        progressEl.style.width = (audio.currentTime / audio.duration) * 100 + '%';
    }
});

audio.addEventListener('ended', nextSong);
function unlockGallery() {
    const input = document.getElementById('gallery-password');
    const password = input.value.toLowerCase().trim();

    if (password === GALLERY_PASSWORD) {
        document.getElementById('gallery-locked').style.display = 'none';
        document.getElementById('gallery-unlocked').style.display = 'block';
        input.value = '';

        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.className = 'floating-heart';
                heart.innerHTML = '💖';
                heart.style.left = Math.random() * 100 + '%';
                heart.style.fontSize = (Math.random() * 2 + 1) + 'em';
                document.getElementById('floatingHearts').appendChild(heart);
                setTimeout(() => heart.remove(), 8000);
            }, i * 100);
        }
    } else {
        const errorEl = document.getElementById('gallery-error');
        errorEl.style.display = 'block';
        input.value = '';
        setTimeout(() => errorEl.style.display = 'none', 2500);
    }
}

function unlockBabyGallery() {
    const input = document.getElementById('baby-gallery-password');
    const password = input.value.toLowerCase().trim();

    if (password === GALLERY_PASSWORD) {
        document.getElementById('baby-gallery-locked').style.display = 'none';
        document.getElementById('baby-gallery-unlocked').style.display = 'block';
        input.value = '';

        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.className = 'floating-heart';
                heart.innerHTML = '👶';
                heart.style.left = Math.random() * 100 + '%';
                heart.style.fontSize = (Math.random() * 2 + 1) + 'em';
                document.getElementById('floatingHearts').appendChild(heart);
                setTimeout(() => heart.remove(), 8000);
            }, i * 100);
        }
    } else {
        const errorEl = document.getElementById('baby-gallery-error');
        errorEl.style.display = 'block';
        input.value = '';
        setTimeout(() => errorEl.style.display = 'none', 2500);
    }
}
// ========== 5. MODALS & EASTER EGGS ==========
function openModal(el) {
    const modal = document.getElementById('photoModal');
    const modalImg = document.getElementById('modalImg');
    const img = el.querySelector('img');
    if (modal && modalImg && img) {
        modal.classList.add('active');
        modal.style.display = 'flex';
        modalImg.src = img.src;
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modal = document.getElementById('photoModal');
    if (modal) {
        modal.classList.remove('active');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function openEasterEgg() {
    const modal = document.getElementById('easterEggModal');
    if (modal) {
        modal.classList.add('active');
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeEasterEgg() {
    const modal = document.getElementById('easterEggModal');
    if (modal) {
        modal.classList.remove('active');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Reset all sections
    document.getElementById('initialEasterEgg').style.display = 'block';
    document.getElementById('secretCodeChallenge').style.display = 'none';
    document.getElementById('memoryGameSection').style.display = 'none';
    document.getElementById('loveQuizSection').style.display = 'none';
    document.getElementById('secretRevealed').style.display = 'none';
    document.getElementById('secretCodeInput').value = '';
    document.getElementById('codeError').style.display = 'none';
}

function startChallenge() {
    document.getElementById('initialEasterEgg').style.display = 'none';
    document.getElementById('secretCodeChallenge').style.display = 'block';
}

function checkSecretCode() {
    const input = document.getElementById('secretCodeInput').value;
    if (input === '0410') {
        document.getElementById('secretCodeChallenge').style.display = 'none';
        document.getElementById('memoryGameSection').style.display = 'block';
        initMemoryGame();
    } else {
        document.getElementById('codeError').style.display = 'block';
        document.getElementById('secretCodeInput').value = '';
        setTimeout(() => {
            document.getElementById('codeError').style.display = 'none';
        }, 2000);
    }
}

// Memory Game
let flippedCards = [];
let matchedPairs = 0;
let currentLevel = 1;



function drawPyramidInterior() {
    // Gradient background - ancient stone
    const bgGrad = ctx.createLinearGradient(0, 0, 0, 400);
    bgGrad.addColorStop(0, "#2c1810");
    bgGrad.addColorStop(0.5, "#8b6f47");
    bgGrad.addColorStop(1, "#d4af37");
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);

    // Torch lighting effect (glowing circles)
    const torches = [
        { x: 100, y: 100 },
        { x: 400, y: 80 },
        { x: 700, y: 100 }
    ];
    
    torches.forEach(torch => {
        const glow = ctx.createRadialGradient(torch.x, torch.y, 0, torch.x, torch.y, 80);
        glow.addColorStop(0, "rgba(255, 200, 100, 0.4)");
        glow.addColorStop(0.5, "rgba(255, 150, 50, 0.2)");
        glow.addColorStop(1, "rgba(255, 100, 0, 0)");
        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
        
        // Torch flame
        ctx.fillStyle = "#ff6600";
        ctx.beginPath();
        ctx.arc(torch.x, torch.y, 8 + Math.sin(gameFrame * 0.2) * 2, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = "#ffcc00";
        ctx.beginPath();
        ctx.arc(torch.x, torch.y, 5 + Math.sin(gameFrame * 0.2) * 1, 0, Math.PI * 2);
        ctx.fill();
    });

    // Ancient pillars with hieroglyphics
    ctx.fillStyle = "#7a5c3d";
    for (let i = 0; i < 5; i++) {
        const x = 50 + i * 180;
        // Pillar body
        ctx.fillRect(x, 0, 40, gameCanvas.height);
        
        // Pillar capital (top decoration)
        ctx.fillStyle = "#a67c52";
        ctx.fillRect(x - 10, 0, 60, 30);
        
        // Hieroglyphics on pillars
        ctx.fillStyle = "#4a3728";
        ctx.font = "20px Arial";
        const symbols = ["𓀀", "𓁿", "☥", "𓂀"];
        for (let j = 0; j < 4; j++) {
            ctx.fillText(symbols[j % symbols.length], x + 10, 80 + j * 60);
        }
        
        ctx.fillStyle = "#7a5c3d";
    }

    // Floor - decorated tiles
    ctx.fillStyle = "#6b5b3d";
    ctx.fillRect(0, 320, gameCanvas.width, 80);
    
    // Floor pattern
    ctx.strokeStyle = "#4a3728";
    ctx.lineWidth = 2;
    for (let i = 0; i < 16; i++) {
        ctx.strokeRect(i * 50, 320, 50, 80);
    }

    // Draw Quests with glow and pedestal
    quests.forEach(q => {
        if (!q.done) {
            // Pedestal
            ctx.fillStyle = "#8b7355";
            ctx.fillRect(q.x - 20, 270, 40, 50);
            ctx.fillStyle = "#a67c52";
            ctx.fillRect(q.x - 25, 265, 50, 10);
            ctx.fillRect(q.x - 25, 315, 50, 10);
            
            // Glowing quest marker
            const questGlow = ctx.createRadialGradient(q.x, 250, 0, q.x, 250, 30);
            questGlow.addColorStop(0, "rgba(255, 215, 0, 0.8)");
            questGlow.addColorStop(0.5, "rgba(255, 215, 0, 0.4)");
            questGlow.addColorStop(1, "rgba(255, 215, 0, 0)");
            ctx.fillStyle = questGlow;
            ctx.fillRect(q.x - 40, 220, 80, 80);
            
            // Quest item
            ctx.fillStyle = "#FFD700";
            ctx.font = "40px Arial";
            const pulse = Math.sin(gameFrame * 0.1) * 3;
            ctx.save();
            ctx.translate(q.x, 250 + pulse);
            ctx.rotate(Math.sin(gameFrame * 0.05) * 0.2);
            
            // Quest icons
            let icon = "✨";
            if (q.text === "Clean") icon = "🧹";
            if (q.text === "Coffee") icon = "☕";
            if (q.text === "Camel") icon = "🐪";
            
            ctx.fillText(icon, -15, 0);
            ctx.restore();
            
            // Quest label
            ctx.fillStyle = "#FFD700";
            ctx.font = "bold 18px Arial";
            ctx.textAlign = "center";
            ctx.fillText(q.text, q.x, 210);
            ctx.textAlign = "left";
        } else {
            // Completed quest - show checkmark
            ctx.fillStyle = "#4CAF50";
            ctx.font = "50px Arial";
            ctx.fillText("✓", q.x - 15, 280);
        }
    });

    // Draw romantic bed after all quests are complete
    if (romanticBed.active) {
        let shake = 0;
        if (romanticBed.reached && romanticBed.shakeTimer > 0) {
            shake = Math.sin(gameFrame * 0.5) * romanticBed.shakeIntensity;
        }

        // Bed frame
        ctx.fillStyle = "#8B4513";
        ctx.fillRect(romanticBed.x - 60 + shake, romanticBed.y + 40, 120, 15);

        // Bed posts
        ctx.fillRect(romanticBed.x - 60 + shake, romanticBed.y, 10, 55);
        ctx.fillRect(romanticBed.x + 50 + shake, romanticBed.y, 10, 55);

        // Mattress/blanket
        const bedGrad = ctx.createLinearGradient(0, romanticBed.y + 20, 0, romanticBed.y + 40);
        bedGrad.addColorStop(0, "#FF69B4");
        bedGrad.addColorStop(1, "#FF1493");
        ctx.fillStyle = bedGrad;
        ctx.fillRect(romanticBed.x - 55 + shake, romanticBed.y + 25, 110, 15);

        // Pillows
        ctx.fillStyle = "#FFE4E1";
        ctx.beginPath();
        ctx.ellipse(romanticBed.x - 30 + shake, romanticBed.y + 22, 15, 8, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(romanticBed.x + 30 + shake, romanticBed.y + 22, 15, 8, 0, 0, Math.PI * 2);
        ctx.fill();

        // Curtains
        if (!romanticBed.reached || romanticBed.shakeTimer > 0) {
            // Curtain rod
            ctx.fillStyle = "#8B4513";
            ctx.fillRect(romanticBed.x - 65, romanticBed.y - 30, 130, 5);

            // Curtain fabric (left and right)
            const curtainGrad = ctx.createLinearGradient(0, romanticBed.y - 30, 0, romanticBed.y + 60);
            curtainGrad.addColorStop(0, "#E6E6FA");
            curtainGrad.addColorStop(1, "#D8BFD8");

            // Left curtain
            ctx.fillStyle = curtainGrad;
            ctx.beginPath();
            ctx.moveTo(romanticBed.x - 65, romanticBed.y - 25);
            ctx.quadraticCurveTo(romanticBed.x - 70, romanticBed.y + 20, romanticBed.x - 75, romanticBed.y + 60);
            ctx.lineTo(romanticBed.x - 50, romanticBed.y + 60);
            ctx.quadraticCurveTo(romanticBed.x - 45, romanticBed.y + 20, romanticBed.x - 40, romanticBed.y - 25);
            ctx.closePath();
            ctx.fill();

            // Right curtain
            ctx.beginPath();
            ctx.moveTo(romanticBed.x + 65, romanticBed.y - 25);
            ctx.quadraticCurveTo(romanticBed.x + 70, romanticBed.y + 20, romanticBed.x + 75, romanticBed.y + 60);
            ctx.lineTo(romanticBed.x + 50, romanticBed.y + 60);
            ctx.quadraticCurveTo(romanticBed.x + 45, romanticBed.y + 20, romanticBed.x + 40, romanticBed.y - 25);
            ctx.closePath();
            ctx.fill();

            // Curtain details
            ctx.strokeStyle = "#C8A2C8";
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(romanticBed.x - 65, romanticBed.y - 20);
            ctx.quadraticCurveTo(romanticBed.x - 55, romanticBed.y + 10, romanticBed.x - 65, romanticBed.y + 40);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(romanticBed.x + 65, romanticBed.y - 20);
            ctx.quadraticCurveTo(romanticBed.x + 55, romanticBed.y + 10, romanticBed.x + 65, romanticBed.y + 40);
            ctx.stroke();
        }

        // Floating hearts when shaking
        if (romanticBed.reached && romanticBed.shakeTimer > 0) {
            if (gameFrame % 10 === 0) {
                particlesArr.push({
                    x: romanticBed.x + (Math.random() - 0.5) * 40,
                    y: romanticBed.y + 20,
                    vx: (Math.random() - 0.5) * 2,
                    vy: -2 - Math.random() * 2,
                    life: 60,
                    color: '#FF1493',
                    isHeart: true
                });
            }
        }

        // Label when not reached
        if (!romanticBed.reached) {
            ctx.fillStyle = "#FFD700";
            ctx.font = "bold 18px Arial";
            ctx.textAlign = "center";
            ctx.fillText("💕 Bed 💕", romanticBed.x, romanticBed.y - 40);
            ctx.textAlign = "left";
        }
    }
}

const pyramidPlayer = {
    x: 100, y: 260, width: 40, height: 60,
    vx: 0, vy: 0, speed: 4, jumpPower: 12, onGround: false
};
const keys = {};

document.addEventListener("keydown", e => keys[e.code] = true);
document.addEventListener("keyup", e => keys[e.code] = false);
function updatePyramidPlayer() {
    pyramidPlayer.vx = 0;
    if (keys["ArrowLeft"]) pyramidPlayer.vx = -pyramidPlayer.speed;
    if (keys["ArrowRight"]) pyramidPlayer.vx = pyramidPlayer.speed;

    // Gravity
    pyramidPlayer.vy += 0.6;
    pyramidPlayer.x += pyramidPlayer.vx;
    pyramidPlayer.y += pyramidPlayer.vy;

    // Floor Collision
    if (pyramidPlayer.y + pyramidPlayer.height >= 320) {
        pyramidPlayer.y = 320 - pyramidPlayer.height;
        pyramidPlayer.vy = 0;
        pyramidPlayer.onGround = true;
    }

    // Screen Bounds
    if (pyramidPlayer.x < 0) pyramidPlayer.x = 0;
    if (pyramidPlayer.x > 750) pyramidPlayer.x = 750;
}
function drawPyramidPlayer() {
    const x = pyramidPlayer.x;
    const y = pyramidPlayer.y;
    const bounce = pyramidPlayer.onGround ? Math.sin(gameFrame * 0.15) * 1 : 0;

    // Shadow
    ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
    ctx.beginPath();
    ctx.ellipse(x + 20, y + 60, 18, 6, 0, 0, Math.PI * 2);
    ctx.fill();

    // Legs with movement
    const legSwing = pyramidPlayer.onGround ? Math.sin(gameFrame * 0.2) * 5 : 0;
    
    // Left leg
    ctx.fillStyle = "#FFE0BD";
    ctx.beginPath();
    ctx.ellipse(x + 12, y + 48 + bounce, 6, 12, legSwing * 0.1, 0, Math.PI * 2);
    ctx.fill();
    
    // Right leg
    ctx.beginPath();
    ctx.ellipse(x + 28, y + 48 + bounce, 6, 12, -legSwing * 0.1, 0, Math.PI * 2);
    ctx.fill();

    // Dress/Body with gradient
    const dressGrad = ctx.createLinearGradient(x, y + 20, x, y + 50);
    dressGrad.addColorStop(0, "#FF69B4");
    dressGrad.addColorStop(1, "#FF1493");
    ctx.fillStyle = dressGrad;
    
    ctx.beginPath();
    ctx.moveTo(x + 20, y + 25 + bounce);
    ctx.quadraticCurveTo(x + 5, y + 35 + bounce, x + 5, y + 50 + bounce);
    ctx.lineTo(x + 35, y + 50 + bounce);
    ctx.quadraticCurveTo(x + 35, y + 35 + bounce, x + 20, y + 25 + bounce);
    ctx.fill();

    // Belt/Waist accent
    ctx.fillStyle = "#FFD700";
    ctx.fillRect(x + 8, y + 35 + bounce, 24, 3);

    // Torso/Upper body
    ctx.fillStyle = "#FFE0BD";
    ctx.fillRect(x + 12, y + 18 + bounce, 16, 15);
    
    // Arms with movement
    const armSwing = pyramidPlayer.onGround ? Math.sin(gameFrame * 0.2) * 3 : 0;
    
    // Left arm
    ctx.fillStyle = "#FFE0BD";
    ctx.save();
    ctx.translate(x + 10, y + 22 + bounce);
    ctx.rotate(-armSwing * 0.05);
    ctx.fillRect(-3, 0, 6, 12);
    ctx.restore();
    
    // Right arm
    ctx.save();
    ctx.translate(x + 30, y + 22 + bounce);
    ctx.rotate(armSwing * 0.05);
    ctx.fillRect(-3, 0, 6, 12);
    ctx.restore();

    // Neck
    ctx.fillStyle = "#FFE0BD";
    ctx.fillRect(x + 16, y + 12 + bounce, 8, 6);

    // Head (circular with better shading)
    const headGrad = ctx.createRadialGradient(x + 18, y + 8 + bounce, 2, x + 20, y + 10 + bounce, 14);
    headGrad.addColorStop(0, "#FFEBD6");
    headGrad.addColorStop(1, "#FFE0BD");
    ctx.fillStyle = headGrad;
    ctx.beginPath();
    ctx.arc(x + 20, y + 10 + bounce, 14, 0, Math.PI * 2);
    ctx.fill();

    // Hair - long flowing
    ctx.fillStyle = "#5D4037";
    ctx.beginPath();
    ctx.arc(x + 20, y + 8 + bounce, 16, Math.PI, 0);
    ctx.fill();
    
    // Hair strands
    ctx.beginPath();
    ctx.moveTo(x + 6, y + 10 + bounce);
    ctx.quadraticCurveTo(x + 3, y + 25 + bounce, x + 8, y + 35 + bounce);
    ctx.quadraticCurveTo(x + 5, y + 30 + bounce, x + 7, y + 15 + bounce);
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(x + 34, y + 10 + bounce);
    ctx.quadraticCurveTo(x + 37, y + 25 + bounce, x + 32, y + 35 + bounce);
    ctx.quadraticCurveTo(x + 35, y + 30 + bounce, x + 33, y + 15 + bounce);
    ctx.fill();

    // Eyes with shine
    ctx.fillStyle = "#000";
    const blinkFrame = gameFrame % 180;
    if (blinkFrame < 8) {
        // Blinking
        ctx.fillRect(x + 13, y + 10 + bounce, 5, 2);
        ctx.fillRect(x + 23, y + 10 + bounce, 5, 2);
    } else {
        // Open eyes
        ctx.beginPath();
        ctx.arc(x + 15, y + 10 + bounce, 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x + 25, y + 10 + bounce, 2.5, 0, Math.PI * 2);
        ctx.fill();
        
        // Eye shine
        ctx.fillStyle = "#FFF";
        ctx.beginPath();
        ctx.arc(x + 16, y + 9 + bounce, 1, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x + 26, y + 9 + bounce, 1, 0, Math.PI * 2);
        ctx.fill();
    }

    // Eyelashes
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x + 17, y + 8 + bounce);
    ctx.lineTo(x + 18, y + 6 + bounce);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x + 27, y + 8 + bounce);
    ctx.lineTo(x + 28, y + 6 + bounce);
    ctx.stroke();

    // Smile
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x + 20, y + 12 + bounce, 6, 0.2, Math.PI - 0.2);
    ctx.stroke();

    // Rosy cheeks
    ctx.fillStyle = "rgba(255, 182, 193, 0.5)";
    ctx.beginPath();
    ctx.ellipse(x + 10, y + 13 + bounce, 3, 2, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(x + 30, y + 13 + bounce, 3, 2, 0, 0, Math.PI * 2);
    ctx.fill();

    // Crown/Tiara
    ctx.fillStyle = "#FFD700";
    ctx.beginPath();
    ctx.moveTo(x + 8, y + 2 + bounce);
    ctx.lineTo(x + 12, y - 4 + bounce);
    ctx.lineTo(x + 16, y + 2 + bounce);
    ctx.lineTo(x + 20, y - 6 + bounce);
    ctx.lineTo(x + 24, y + 2 + bounce);
    ctx.lineTo(x + 28, y - 4 + bounce);
    ctx.lineTo(x + 32, y + 2 + bounce);
    ctx.lineTo(x + 30, y + 4 + bounce);
    ctx.lineTo(x + 10, y + 4 + bounce);
    ctx.closePath();
    ctx.fill();
    
    // Crown jewels
    ctx.fillStyle = "#FF1493";
    ctx.beginPath();
    ctx.arc(x + 20, y - 5 + bounce, 2, 0, Math.PI * 2);
    ctx.fill();
}

const quests = [
    { text: "Clean", done: false, x: 200 },
    { text: "Coffee", done: false, x: 400 },
    { text: "Camel", done: false, x: 600 }
];

// Romantic bed for final scene
let romanticBed = {
    x: 700,
    y: 280,
    active: false,
    reached: false,
    shakeTimer: 0,
    shakeIntensity: 0
};
function checkQuests() {
    quests.forEach(q => {
        if (!q.done && Math.abs(pyramidPlayer.x - q.x) < 40) {
            q.done = true;
            showPyramidDialogue("✅ " + q.text + " Done!");
        }
    });

    // Activate bed after all quests complete
    if (quests.every(q => q.done) && !romanticBed.active) {
        romanticBed.active = true;
        showPyramidDialogue("💕 All tasks done! Now go to the bed! 💕");
    }

    // Check if player reached the bed
    if (romanticBed.active && !romanticBed.reached && Math.abs(pyramidPlayer.x - romanticBed.x) < 60) {
        romanticBed.reached = true;
        romanticBed.shakeTimer = 180; // 3 seconds of shaking at 60fps
        romanticBed.shakeIntensity = 4;
        showPyramidDialogue("💕💕💕");
    }

    // Update bed shake timer
    if (romanticBed.shakeTimer > 0) {
        romanticBed.shakeTimer--;

        // End scene after shaking finishes
        if (romanticBed.shakeTimer === 0) {
            setTimeout(() => {
                isPyramidMode = false;
                if (animFrame) cancelAnimationFrame(animFrame);
                showVictoryMessage();
            }, 1000);
        }
    }
}

function showVictoryMessage() {
    gameRun = false;
    const overlay = document.getElementById('game-overlay');
    const title = document.getElementById('overlay-title');
    const msg = document.getElementById('overlay-msg');
    if (overlay) overlay.style.display = 'flex';
    if (title) title.innerText = "🎉 HAPPY BIRTHDAY! 💍";
    if (msg) msg.innerHTML = "We completed all quests together! ❤️<br>Now we can rest in our pyramid forever! 🏛️💕<br><br>Every adventure led me to you 💖";
}

function showPyramidDialogue(text) {
    // Use the existing dialogue box
    const box = document.getElementById("dialogue-box");
    document.getElementById("dialogue-text").innerText = text;
    box.style.display = "block";

    // Auto hide after 2 seconds so game doesn't stop too long
    setTimeout(() => {
        box.style.display = "none";
    }, 2000);
}

function checkLevelComplete() {
    if (quests.every(q => q.done)) {
        showDialogue("💖 Let's sleep together in our pyramid 💖");
        setTimeout(() => {
            showVictory();
        }, 3000);
    }
}
function startLevelTwo() {
    // Reset player position for level 2
    pyramidPlayer.x = 50;
    pyramidPlayer.y = 260;

    function loop() {
        if (!isPyramidMode) return;

        ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);

        drawPyramidInterior();
        updatePyramidPlayer();
        drawPyramidPlayer();
        checkQuests();

        animFrame = requestAnimationFrame(loop);
    }
    loop();
}

function initMemoryGame() {
    const gameEl = document.getElementById('memoryGame');
    if (!gameEl) return;

    gameEl.innerHTML = '';
    flippedCards = [];
    matchedPairs = 0;

    const emojis = ['❤️', '💕', '💖', '💗'];
    const cards = [...emojis, ...emojis].sort(() => Math.random() - 0.5);

    cards.forEach((emoji, idx) => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        card.innerText = '?';
        card.dataset.emoji = emoji;
        card.dataset.index = idx;
        card.onclick = () => flipCard(card);
        gameEl.appendChild(card);
    });

    document.getElementById('matchCount').innerText = '0';
}

function flipCard(card) {
    if (flippedCards.length >= 2 || card.classList.contains('flipped') || card.classList.contains('matched')) {
        return;
    }

    card.classList.add('flipped');
    card.innerText = card.dataset.emoji;
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        setTimeout(checkMatch, 600);
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;

    if (card1.dataset.emoji === card2.dataset.emoji) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        matchedPairs++;
        document.getElementById('matchCount').innerText = matchedPairs;

        if (matchedPairs === 4) {
            setTimeout(() => {
                document.getElementById('memoryGameSection').style.display = 'none';
                document.getElementById('loveQuizSection').style.display = 'block';
                initQuiz();
            }, 1000);
        }
    } else {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
        card1.innerText = '?';
        card2.innerText = '?';
    }

    flippedCards = [];
}

// Love Quiz
function initQuiz() {
    const questions = [
        { q: "When is our wedding day?", options: ["January 10, 2026", "April 10, 2026", "December 25, 2025"], correct: 1 },
        { q: "What's most important in our relationship?", options: ["Love and Trust", "Money", "Physical Appearance"], correct: 0 }
    ];

    let currentQ = 0;
    const container = document.getElementById('quizContainer');

    function showQuestion() {
        if (currentQ >= questions.length) {
            document.getElementById('loveQuizSection').style.display = 'none';
            document.getElementById('secretRevealed').style.display = 'block';
            return;
        }

        const q = questions[currentQ];
        container.innerHTML = `
            <h3 style="font-size: 1.3em; margin: 20px 0;">${q.q}</h3>
            ${q.options.map((opt, i) => `
                <div class="quiz-option" onclick="selectAnswer(${i}, ${q.correct})">${opt}</div>
            `).join('')}
        `;

        document.getElementById('quizProgress').style.width = ((currentQ / questions.length) * 100) + '%';
    }

    window.selectAnswer = function (selected, correct) {
        if (selected === correct) {
            currentQ++;
            setTimeout(showQuestion, 500);
        } else {
            alert('Try again! Think about what matters most to us! ❤️');
        }
    };

    showQuestion();
}

// ========== MOBILE-OPTIMIZED GAME ENGINE ==========

const gameCanvas = document.getElementById('game-canvas');
const ctx = gameCanvas ? gameCanvas.getContext('2d') : null;
let gameFrame = 0, gameRun = false, animFrame;
let score = 0, distance = 2387, level = 1;
let player = { x: 100, y: 300, w: 40, h: 60, vy: 0, g: 0.5, jp: -10, gr: true, hearts: 3, inv: 0 };
let obstacles = [], clouds = [], particlesArr = [], mountains = [];
let isCutscene = false, youssef = { x: 800, y: 300, w: 40, h: 60 }, cutsceneTimer = 0;
let isPyramidMode = false;
let dialogueShown1 = false, dialogueShown2 = false, dialogueShown3 = false, dialogueShown4 = false, dialogueShown5 = false;
// Mobile detection and canvas scaling
let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
let canvasScale = 1;

const dialogues = [
    { dist: 2387, text: "Starting from snowy Kyiv! Running to my love in Egypt! 🏃‍♀️💨❄️" },
    { dist: 1900, text: "Leaving Ukraine... every step brings me closer to you! 💪❤️" },
    { dist: 1200, text: "Flying through the sky, my heart soars to you! ✈️💕" },
    { dist: 700, text: "The pyramids are calling! Almost to Egypt! 🏜️" },
    { dist: 300, text: "I can feel the warmth of Egypt... and your love! 🌟" },
    { dist: 50, text: "I'M ALMOST THERE! Cairo awaits! 💍🇪🇬" }
];

function setupCanvas() {
    if (!gameCanvas) return;

    const container = document.getElementById('game-container');
    gameCanvas.width = 800;
    gameCanvas.height = 400;


}

function openFlashGame() {
    document.getElementById('flash-game-modal').style.display = 'flex';
    setupCanvas();
    initGame();
}

function closeFlashGame() {
    document.getElementById('flash-game-modal').style.display = 'none';
    gameRun = false;
    if (animFrame) cancelAnimationFrame(animFrame);
}

function initGame() {
    player.y = 300; player.vy = 0; player.hearts = 4; player.inv = 0; player.x = 100;
    score = 0; distance = 2387; level = 1;
    obstacles = []; clouds = []; particlesArr = []; mountains = [];
    isCutscene = false; youssef.x = 800; cutsceneTimer = 0;
    dialogueShown1 = false; dialogueShown2 = false; dialogueShown3 = false; dialogueShown4 = false; dialogueShown5 = false;

    for (let i = 0; i < 5; i++) clouds.push({ x: Math.random() * 800, y: Math.random() * 150 + 20, speed: Math.random() * 0.5 + 0.1 });
    for (let i = 0; i < 4; i++) mountains.push({ x: i * 250, h: 100 + Math.random() * 150 });

    gameRun = true;
    showDialogue(dialogues[0].text);
    gameLoop();
}

function gameLoop() {
    if (!gameRun || !ctx) return;
    ctx.clearRect(0, 0, 800, 400);

    // Determine current zone based on distance
    // Ukraine: 2387-1887 km (first 500km)
    // Travel: 1887-500 km (middle 1387km)
    // Egypt: 500-0 km (last 500km)
    let currentZone = distance > 1887 ? 'ukraine' : distance > 500 ? 'travel' : 'egypt';

    // Sky gradient based on zone
    let skyGrad = ctx.createLinearGradient(0, 0, 0, 400);
    if (currentZone === 'ukraine') {
        // Snowy winter sky
        skyGrad.addColorStop(0, '#B0C4DE');
        skyGrad.addColorStop(1, '#E6F0FA');
    } else if (currentZone === 'travel') {
        // High altitude sky
        skyGrad.addColorStop(0, '#4A90E2');
        skyGrad.addColorStop(1, '#87CEEB');
    } else {
        // Egyptian desert sky
        skyGrad.addColorStop(0, '#FFDAB9');
        skyGrad.addColorStop(1, '#FFE4B5');
    }
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, 800, 400);

    // Sun/Moon based on zone
    ctx.beginPath();
    ctx.arc(700, 50, 30, 0, Math.PI * 2);
    if (currentZone === 'ukraine') {
        ctx.fillStyle = '#F0F0F0'; // Pale winter sun
    } else if (currentZone === 'travel') {
        ctx.fillStyle = '#FFD700'; // Bright sun in sky
    } else {
        ctx.fillStyle = '#FFA500'; // Hot Egyptian sun
    }
    ctx.fill();
    ctx.strokeStyle = currentZone === 'ukraine' ? '#DDD' : '#FFA500';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Background elements based on zone
    if (currentZone === 'ukraine') {
        // Northern Lights effect (Easter egg!)
        if (gameFrame % 3 === 0) {
            const northernLights = ctx.createLinearGradient(0, 0, 800, 100);
            northernLights.addColorStop(0, 'rgba(0, 255, 100, 0.1)');
            northernLights.addColorStop(0.5, 'rgba(0, 100, 255, 0.15)');
            northernLights.addColorStop(1, 'rgba(100, 0, 255, 0.1)');
            ctx.fillStyle = northernLights;
            ctx.fillRect(0, 0, 800, 120);
        }

        // Winter trees (pine trees)
        mountains.forEach(p => {
            if (!isCutscene) p.x -= 0.4;
            if (p.x < -300) p.x = 900;

            // Draw winter pine tree
            // Tree trunk
            ctx.fillStyle = '#654321';
            ctx.fillRect(p.x + 140, 340 - p.h * 0.4, 20, p.h * 0.4);

            // Snow-covered pine layers
            ctx.fillStyle = '#2F5233';
            for (let i = 0; i < 4; i++) {
                ctx.beginPath();
                let yPos = 340 - p.h * 0.4 - i * 25;
                ctx.moveTo(p.x + 100 - i * 5, yPos);
                ctx.lineTo(p.x + 150, yPos - 40);
                ctx.lineTo(p.x + 200 + i * 5, yPos);
                ctx.closePath();
                ctx.fill();

                // Snow on branches
                ctx.fillStyle = '#FFFFFF';
                ctx.beginPath();
                ctx.moveTo(p.x + 100 - i * 5, yPos);
                ctx.lineTo(p.x + 150, yPos - 40);
                ctx.lineTo(p.x + 200 + i * 5, yPos);
                ctx.lineTo(p.x + 200 + i * 5, yPos + 5);
                ctx.lineTo(p.x + 100 - i * 5, yPos + 5);
                ctx.closePath();
                ctx.fill();
                ctx.fillStyle = '#2F5233';
            }
        });

        // Snowflakes falling (Easter egg!)
        if (gameFrame % 20 === 0) {
            particlesArr.push({
                x: Math.random() * 800,
                y: -10,
                vx: (Math.random() - 0.5) * 0.5,
                vy: 1 + Math.random(),
                life: 200,
                color: '#FFFFFF',
                isSnow: true
            });
        }

    } else if (currentZone === 'travel') {
        // Planes flying by
        if (gameFrame % 180 === 0) {
            obstacles.push({
                x: 850,
                y: 80 + Math.random() * 100,
                type: 'plane',
                w: 60,
                h: 30,
                active: true
            });
        }

        // Cloud layer (more clouds in sky)
        ctx.fillStyle = 'rgba(255,255,255,0.9)';
        clouds.forEach(c => {
            if (!isCutscene) c.x -= c.speed * 1.5;
            if (c.x < -100) c.x = 900;
            ctx.beginPath();
            ctx.arc(c.x, c.y, 25, 0, Math.PI * 2);
            ctx.arc(c.x + 25, c.y - 12, 30, 0, Math.PI * 2);
            ctx.arc(c.x + 50, c.y, 25, 0, Math.PI * 2);
            ctx.fill();
        });

    } else {
        // Egypt - Special sunrise effect when entering zone (Easter egg!)
        if (distance < 550 && distance > 450) {
            const sunrise = ctx.createRadialGradient(700, 50, 30, 700, 50, 150);
            sunrise.addColorStop(0, 'rgba(255, 200, 0, 0.3)');
            sunrise.addColorStop(0.5, 'rgba(255, 150, 0, 0.2)');
            sunrise.addColorStop(1, 'rgba(255, 100, 0, 0)');
            ctx.fillStyle = sunrise;
            ctx.fillRect(0, 0, 800, 200);
        }

        // Egypt - Pyramids
        mountains.forEach(p => {
            if (!isCutscene) p.x -= 0.4;
            if (p.x < -300) p.x = 900;

            // Main pyramid
            ctx.fillStyle = '#C2B280';
            ctx.beginPath();
            ctx.moveTo(p.x, 340);
            ctx.lineTo(p.x + 150, 340 - p.h);
            ctx.lineTo(p.x + 300, 340);
            ctx.closePath();
            ctx.fill();

            // Shadow side
            ctx.fillStyle = '#A68B5B';
            ctx.beginPath();
            ctx.moveTo(p.x + 150, 340 - p.h);
            ctx.lineTo(p.x + 300, 340);
            ctx.lineTo(p.x + 190, 340);
            ctx.closePath();
            ctx.fill();

            // Pyramid details (stone blocks)
            ctx.strokeStyle = '#8B7355';
            ctx.lineWidth = 1;
            for (let i = 0; i < 8; i++) {
                let y = 340 - i * 15;
                ctx.beginPath();
                ctx.moveTo(p.x + 25 + i * 12, y);
                ctx.lineTo(p.x + 275 - i * 12, y);
                ctx.stroke();
            }
        });

        // Desert heat shimmer effect
        if (gameFrame % 5 === 0) {
            ctx.fillStyle = 'rgba(255, 200, 100, 0.05)';
            ctx.fillRect(0, 300, 800, 40);
        }

        // Regular clouds for Egypt
        ctx.fillStyle = 'rgba(255,255,255,0.7)';
        clouds.forEach(c => {
            if (!isCutscene) c.x -= c.speed;
            if (c.x < -100) c.x = 900;
            ctx.beginPath();
            ctx.arc(c.x, c.y, 20, 0, Math.PI * 2);
            ctx.arc(c.x + 20, c.y - 10, 25, 0, Math.PI * 2);
            ctx.arc(c.x + 40, c.y, 20, 0, Math.PI * 2);
            ctx.fill();
        });
    }

    if (isCutscene) updateCutscene(); else update();
    draw();

    // Romantic glow during cutscene
    if (isCutscene) {
        ctx.fillStyle = 'rgba(255,105,180,0.08)';
        ctx.fillRect(0, 0, 800, 400);
    }

    // Mobile tap hint (shows for first 5 seconds on mobile)
    if (isMobile && gameFrame < 300 && !isCutscene) {
        const alpha = gameFrame < 200 ? 0.8 : 0.8 - (gameFrame - 200) / 100;
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.font = "bold 24px Arial";
        ctx.textAlign = "center";
        ctx.fillText("👆 TAP TO JUMP! 👆", 400, 200);
        ctx.textAlign = "left";
    }

    animFrame = requestAnimationFrame(gameLoop);
}

function update() {
    gameFrame++;
    player.vy += player.g;
    player.y += player.vy;
    if (player.y > 300) { player.y = 300; player.vy = 0; player.gr = true; }

    // Slower distance decrease for longer journey (2387km)
    distance -= 0.35;

    // Trigger dialogues at specific distances
    if (distance < 1900 && distance > 1895 && !dialogueShown1) { showDialogue(dialogues[1].text); dialogueShown1 = true; }
    if (distance < 1200 && distance > 1195 && !dialogueShown2) { showDialogue(dialogues[2].text); dialogueShown2 = true; }
    if (distance < 700 && distance > 695 && !dialogueShown3) { showDialogue(dialogues[3].text); dialogueShown3 = true; }
    if (distance < 300 && distance > 295 && !dialogueShown4) { showDialogue(dialogues[4].text); dialogueShown4 = true; }
    if (distance < 50 && distance > 45 && !dialogueShown5) { showDialogue(dialogues[5].text); dialogueShown5 = true; }

    if (distance <= 0) { startEndingCutscene(); return; }

    // Spawn obstacles based on zone (less frequent on mobile)
    const spawnRate = isMobile ? 150 : 120;
    let currentZone = distance > 1887 ? 'ukraine' : distance > 500 ? 'travel' : 'egypt';

    if (gameFrame % spawnRate === 0 && distance > 50) {
        let type, obsY;

        if (currentZone === 'ukraine') {
            // Ukraine obstacles: snowballs, winter birds, hearts with Ukrainian colors
            type = Math.random() > 0.5 ? (Math.random() > 0.5 ? 'snowball' : 'bird') : 'ukraineheart';
            obsY = type === 'bird' ? 220 : 325;
            if (type === 'ukraineheart') obsY = Math.random() * 50 + 230;
        } else if (currentZone === 'travel') {
            // Travel obstacles: clouds, balloons, flying hearts
            type = Math.random() > 0.6 ? 'cloud' : 'flyingheart';
            obsY = Math.random() * 100 + 150; // Higher in the sky
        } else {
            // Egypt obstacles: cacti, camels (Easter egg!), hearts
            type = Math.random() > 0.4 ? (Math.random() > 0.7 ? 'cactus' : 'camel') : 'egyptheart';
            obsY = type === 'camel' ? 295 : 325;  // Lowered camel to ground level - jumpable!
            if (type === 'egyptheart') obsY = Math.random() * 50 + 230;
        }

        obstacles.push({ x: 850, y: obsY, type: type, w: 30, h: 30, active: true });
    }

    // Add special Easter egg: Random love messages in the sky!
    if (gameFrame % 500 === 0) {
        const loveMessages = ["💕", "🇺🇦❤️🇪🇬", "Love knows no distance!", "2387km of love", "💍"];
        obstacles.push({
            x: 850,
            y: 100,
            type: 'message',
            w: 100,
            h: 30,
            active: true,
            message: loveMessages[Math.floor(Math.random() * loveMessages.length)]
        });
    }

    for (let i = obstacles.length - 1; i >= 0; i--) {
        let obs = obstacles[i];
        obs.x -= 3;

        if (obs.active && player.x < obs.x + obs.w - 5 && player.x + player.w > obs.x + 5 &&
            player.y < obs.y + obs.h - 5 && player.y + player.h > obs.y + 5) {

            // Collectible hearts (all types)
            if (obs.type === 'heart' || obs.type === 'ukraineheart' || obs.type === 'flyingheart' || obs.type === 'egyptheart') {
                score += 100;
                if (player.hearts < 4) player.hearts++;
                createGameParticles(obs.x, obs.y, 10, '#ff6b9d');
                obs.active = false;
            }
            // Messages are just visual - no collision
            else if (obs.type === 'message') {
                // Do nothing, just let it pass by
            }
            // Planes in travel zone - no collision (decorative)
            else if (obs.type === 'plane') {
                // Planes fly high, decorative only
            }
            // All other obstacles damage the player
            else if (player.inv <= 0) {
                player.hearts--;
                player.inv = 60;
                createGameParticles(player.x, player.y, 10, '#ff0000');
                if (player.hearts <= 0) endGame(false);
            }
        }
        if (obs.x < -50 || !obs.active) obstacles.splice(i, 1);
    }

    if (player.inv > 0) player.inv--;
    updateGameUI();
}

function startEndingCutscene() {
    isCutscene = true;
    obstacles = [];
    youssef.x = 700;
    player.y = 300;
    cutsceneTimer = 0;
}




function updateCutscene() {
    cutsceneTimer++;

    // Walk slowly toward Youssef
    if (player.x < youssef.x - 45) {
        player.x += 1.2;
        player.y = 300 + Math.sin(cutsceneTimer * 0.15) * 3;

        // Floating hearts while walking
        if (cutsceneTimer % 15 === 0) {
            createGameParticles(
                player.x + 20,
                player.y - 10,
                2,
                '#ff6b9d'
            );
        }
    } else {
        player.y = 300;

        // Romantic heart rain when close
        if (cutsceneTimer % 10 === 0) {
            createGameParticles(
                player.x + 25,
                player.y - 15,
                4,
                '#ff1493'
            );
        }

        // After romantic pause, transition to pyramid
        if (cutsceneTimer > 240) {
            transitionToPyramid();
        }
    }

    // Soft fade overlay
    ctx.fillStyle = `rgba(255,182,193, ${Math.min(cutsceneTimer / 500, 0.25)})`;
    ctx.fillRect(0, 0, 800, 400);
}

function transitionToPyramid() {
    isCutscene = false;
    gameRun = false;
    isPyramidMode = true;

    // Reset quests for new attempt
    quests.forEach(q => q.done = false);

    // Reset romantic bed
    romanticBed.active = false;
    romanticBed.reached = false;
    romanticBed.shakeTimer = 0;
    romanticBed.shakeIntensity = 0;

    // Show instruction dialogue
    showPyramidDialogue("🏛️ We entered the Pyramid! Complete 3 quests together! Use Arrow Keys/Tap to move!");

    // Reset player position for pyramid
    pyramidPlayer.x = 100;
    pyramidPlayer.y = 260;

    startLevelTwo();
}



function draw() {
    // Ground - changes based on zone
    let currentZone = distance > 1887 ? 'ukraine' : distance > 500 ? 'travel' : 'egypt';

    if (currentZone === 'ukraine') {
        // Snowy ground
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 340, 800, 60);
        // Ice/snow texture
        ctx.fillStyle = '#E6F0FA';
        for (let i = 0; i < 800; i += 40) {
            ctx.fillRect(i, 340, 30, 60);
        }
    } else if (currentZone === 'travel') {
        // Sky - no ground visible during flight
        ctx.fillStyle = 'rgba(135, 206, 250, 0.3)';
        ctx.fillRect(0, 340, 800, 60);
    } else {
        // Sandy desert ground
        ctx.fillStyle = '#EDC9AF';
        ctx.fillRect(0, 340, 800, 60);
        ctx.fillStyle = '#DEB887';
        ctx.fillRect(0, 370, 800, 30);
        // Sand dunes pattern
        for (let i = 0; i < 5; i++) {
            ctx.fillStyle = '#C19A6B';
            ctx.beginPath();
            ctx.arc(i * 200 - gameFrame % 200, 340, 30, 0, Math.PI, true);
            ctx.fill();
        }
    }

    // Love trail behind player (Easter egg!)
    if (gameFrame % 5 === 0 && !isCutscene) {
        particlesArr.push({
            x: player.x + 20,
            y: player.y + 30,
            vx: -1.5 + Math.random() * 0.5,
            vy: Math.random() * 2 - 1,
            life: 30,
            color: '#FF69B4',
            isHeart: true
        });
    }

    // Sparkle trail when jumping
    if (!player.gr) {
        if (gameFrame % 3 === 0) {
            particlesArr.push({
                x: player.x + 20 + Math.random() * 10 - 5,
                y: player.y + 40 + Math.random() * 10,
                vx: Math.random() * 2 - 1,
                vy: Math.random() * 2 + 1,
                life: 20,
                color: '#FFD700',
                isSparkle: true
            });
        }
    }

    // Player (with invincibility flash)
    if (player.inv === 0 || player.inv % 4 === 0) drawChibiPlayer(player.x, player.y);

    if (isCutscene) {
        drawYoussef(youssef.x, youssef.y);
        if (player.x >= youssef.x - 45) {
            ctx.fillStyle = '#ff0000';
            ctx.font = "40px Arial";
            ctx.fillText("❤️", player.x + 20, player.y - 20);
        }
    }

    // Obstacles
    obstacles.forEach(obs => {
        if (!obs.active) return;

        // Old obstacles
        if (obs.type === 'rock') drawRock(obs.x, obs.y);
        else if (obs.type === 'bird') drawBird(obs.x, obs.y);
        else if (obs.type === 'plane') drawPlane(obs.x, obs.y);
        else if (obs.type === 'heart') {
            ctx.fillStyle = '#ff0000';
            let pulse = Math.sin(gameFrame * 0.1) * 2;
            ctx.font = (24 + pulse) + "px Arial";
            ctx.fillText("❤️", obs.x, obs.y + 20);
        }

        // Ukraine zone obstacles
        else if (obs.type === 'snowball') {
            ctx.fillStyle = '#FFFFFF';
            ctx.strokeStyle = '#E0E0E0';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(obs.x + 15, obs.y + 15, 15, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
        }
        else if (obs.type === 'ukraineheart') {
            // Ukrainian flag colors heart (Easter egg!)
            let pulse = Math.sin(gameFrame * 0.1) * 2;
            ctx.font = (24 + pulse) + "px Arial";
            ctx.fillText("💙", obs.x, obs.y + 10);
            ctx.fillText("💛", obs.x, obs.y + 30);
        }

        // Travel zone obstacles
        else if (obs.type === 'cloud') {
            ctx.fillStyle = 'rgba(255,255,255,0.8)';
            ctx.beginPath();
            ctx.arc(obs.x, obs.y, 15, 0, Math.PI * 2);
            ctx.arc(obs.x + 15, obs.y - 8, 18, 0, Math.PI * 2);
            ctx.arc(obs.x + 30, obs.y, 15, 0, Math.PI * 2);
            ctx.fill();
        }
        else if (obs.type === 'flyingheart') {
            ctx.fillStyle = '#FF1493';
            let pulse = Math.sin(gameFrame * 0.1) * 2;
            let float = Math.sin(gameFrame * 0.05) * 5;
            ctx.font = (24 + pulse) + "px Arial";
            ctx.fillText("💕", obs.x, obs.y + float + 20);
        }

        // Egypt zone obstacles
        else if (obs.type === 'cactus') {
            // Cactus
            ctx.fillStyle = '#2E7D32';
            ctx.fillRect(obs.x + 10, obs.y, 10, 35);
            // Arms
            ctx.fillRect(obs.x, obs.y + 10, 10, 10);
            ctx.fillRect(obs.x + 20, obs.y + 10, 10, 10);
            // Needles
            ctx.strokeStyle = '#1B5E20';
            ctx.lineWidth = 1;
            for (let i = 0; i < 6; i++) {
                ctx.beginPath();
                ctx.moveTo(obs.x + 12, obs.y + i * 6);
                ctx.lineTo(obs.x + 8, obs.y + i * 6);
                ctx.stroke();
            }
        }
        else if (obs.type === 'camel') {
            // Cute camel (Easter egg!)
            ctx.fillStyle = '#DEB887';
            // Body
            ctx.fillRect(obs.x + 10, obs.y + 20, 25, 15);
            // Humps
            ctx.beginPath();
            ctx.arc(obs.x + 18, obs.y + 15, 8, 0, Math.PI * 2);
            ctx.fill();
            // Head
            ctx.fillRect(obs.x + 30, obs.y + 25, 12, 8);
            // Legs
            ctx.fillRect(obs.x + 12, obs.y + 35, 4, 10);
            ctx.fillRect(obs.x + 28, obs.y + 35, 4, 10);
            // Eye
            ctx.fillStyle = '#000';
            ctx.fillRect(obs.x + 38, obs.y + 27, 2, 2);
        }
        else if (obs.type === 'egyptheart') {
            // Egyptian themed heart with hieroglyphics
            ctx.fillStyle = '#FFD700';
            let pulse = Math.sin(gameFrame * 0.1) * 2;
            ctx.font = (24 + pulse) + "px Arial";
            ctx.fillText("💛", obs.x, obs.y + 20);
        }

        // Special Easter egg messages
        else if (obs.type === 'message') {
            ctx.fillStyle = 'rgba(255, 105, 180, 0.9)';
            ctx.font = "bold 20px Arial";
            ctx.strokeStyle = '#FFF';
            ctx.lineWidth = 3;
            ctx.strokeText(obs.message, obs.x, obs.y + 20);
            ctx.fillText(obs.message, obs.x, obs.y + 20);
        }
    });

    // Particles - Enhanced rendering
    for (let i = particlesArr.length - 1; i >= 0; i--) {
        let p = particlesArr[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life--;

        let alpha = p.life / (p.isHeart ? 30 : p.isSparkle ? 20 : p.isSnow ? 200 : 50);

        if (p.isHeart) {
            // Render mini hearts
            ctx.save();
            ctx.globalAlpha = alpha;
            ctx.font = '12px Arial';
            ctx.fillText('💕', p.x - 6, p.y + 6);
            ctx.restore();
        } else if (p.isSparkle) {
            // Render sparkles with glow
            ctx.save();
            ctx.globalAlpha = alpha;
            ctx.fillStyle = p.color;
            ctx.shadowBlur = 5;
            ctx.shadowColor = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
            ctx.fill();
            // Star points
            for (let j = 0; j < 4; j++) {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                let angle = (j / 4) * Math.PI * 2;
                ctx.lineTo(p.x + Math.cos(angle) * 4, p.y + Math.sin(angle) * 4);
                ctx.stroke();
            }
            ctx.restore();
        } else if (p.isSnow) {
            // Render snowflakes
            ctx.save();
            ctx.globalAlpha = alpha;
            ctx.fillStyle = '#FFF';
            ctx.beginPath();
            ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        } else {
            // Regular particles
            ctx.save();
            ctx.globalAlpha = alpha;
            ctx.fillStyle = p.color;
            ctx.shadowBlur = 3;
            ctx.shadowColor = p.color;
            ctx.fillRect(p.x, p.y, 3, 3);
            ctx.restore();
        }

        if (p.life <= 0) particlesArr.splice(i, 1);
    }
}

function drawChibiPlayer(x, y) {
    let bounce = player.gr ? Math.sin(gameFrame * 0.2) * 2 : 0;
    let armSwing = player.gr ? Math.sin(gameFrame * 0.2) * 0.15 : 0;

    // Shadow
    ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
    ctx.beginPath();
    ctx.ellipse(x + 20, y + 58 + bounce, 15, 5, 0, 0, Math.PI * 2);
    ctx.fill();

    // Legs with gradient
    ctx.save();
    const legGrad = ctx.createLinearGradient(x, y + 45, x, y + 60);
    legGrad.addColorStop(0, '#FFE0BD');
    legGrad.addColorStop(1, '#FFCBA4');
    ctx.fillStyle = legGrad;

    // Left leg
    ctx.fillRect(x + 12, y + 45 + bounce, 7, 13);
    // Right leg
    ctx.fillRect(x + 23, y + 45 + bounce, 7, 13);

    // Shoes
    ctx.fillStyle = '#FF1493';
    ctx.beginPath();
    ctx.ellipse(x + 15, y + 57 + bounce, 5, 3, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(x + 26, y + 57 + bounce, 5, 3, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // Dress with gradient and details
    const dressGrad = ctx.createLinearGradient(x, y + 20, x, y + 50);
    dressGrad.addColorStop(0, '#FF69B4');
    dressGrad.addColorStop(0.5, '#FF1493');
    dressGrad.addColorStop(1, '#C71585');
    ctx.fillStyle = dressGrad;
    ctx.beginPath();
    ctx.moveTo(x + 20, y + 25 + bounce);
    ctx.quadraticCurveTo(x + 3, y + 35 + bounce, x + 3, y + 50 + bounce);
    ctx.lineTo(x + 37, y + 50 + bounce);
    ctx.quadraticCurveTo(x + 37, y + 35 + bounce, x + 20, y + 25 + bounce);
    ctx.fill();

    // Dress decoration
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(x + 20, y + 35 + bounce, 8, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.arc(x + 20, y + 35 + bounce, 2, 0, Math.PI * 2);
    ctx.fill();

    // Torso
    ctx.fillStyle = '#FFE0BD';
    ctx.fillRect(x + 13, y + 20 + bounce, 14, 12);

    // Arms with animation
    ctx.fillStyle = '#FFE0BD';
    // Left arm
    ctx.save();
    ctx.translate(x + 12, y + 24 + bounce);
    ctx.rotate(-0.3 + armSwing);
    ctx.fillRect(-3, 0, 5, 12);
    ctx.restore();

    // Right arm
    ctx.save();
    ctx.translate(x + 28, y + 24 + bounce);
    ctx.rotate(0.3 - armSwing);
    ctx.fillRect(-2, 0, 5, 12);
    ctx.restore();

    // Neck
    ctx.fillStyle = '#FFE0BD';
    ctx.fillRect(x + 17, y + 14 + bounce, 6, 6);

    // Head with gradient
    const headGrad = ctx.createRadialGradient(x + 18, y + 10 + bounce, 2, x + 20, y + 12 + bounce, 14);
    headGrad.addColorStop(0, '#FFEBD6');
    headGrad.addColorStop(1, '#FFE0BD');
    ctx.fillStyle = headGrad;
    ctx.beginPath();
    ctx.arc(x + 20, y + 12 + bounce, 13, 0, Math.PI * 2);
    ctx.fill();

    // Hair - long flowing
    const hairGrad = ctx.createLinearGradient(x, y, x, y + 30);
    hairGrad.addColorStop(0, '#8B4513');
    hairGrad.addColorStop(1, '#5D4037');
    ctx.fillStyle = hairGrad;

    // Main hair
    ctx.beginPath();
    ctx.arc(x + 20, y + 10 + bounce, 15, Math.PI, 0);
    ctx.fill();

    // Hair strands flowing
    ctx.beginPath();
    ctx.moveTo(x + 6, y + 12 + bounce);
    ctx.quadraticCurveTo(x + 2, y + 28 + bounce, x + 8, y + 38 + bounce);
    ctx.quadraticCurveTo(x + 4, y + 32 + bounce, x + 7, y + 16 + bounce);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(x + 34, y + 12 + bounce);
    ctx.quadraticCurveTo(x + 38, y + 28 + bounce, x + 32, y + 38 + bounce);
    ctx.quadraticCurveTo(x + 36, y + 32 + bounce, x + 33, y + 16 + bounce);
    ctx.fill();

    // Eyes with sparkle
    ctx.fillStyle = '#000';
    let blinkFrame = gameFrame % 180;
    if (blinkFrame < 8) {
        // Blinking
        ctx.fillRect(x + 13, y + 12 + bounce, 5, 2);
        ctx.fillRect(x + 23, y + 12 + bounce, 5, 2);
    } else {
        // Open eyes
        ctx.beginPath();
        ctx.arc(x + 15, y + 12 + bounce, 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x + 25, y + 12 + bounce, 2.5, 0, Math.PI * 2);
        ctx.fill();

        // Eye shine/sparkle
        ctx.fillStyle = '#FFF';
        ctx.beginPath();
        ctx.arc(x + 16, y + 11 + bounce, 1.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x + 26, y + 11 + bounce, 1.5, 0, Math.PI * 2);
        ctx.fill();
    }

    // Eyelashes
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 1.5;
    for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(x + 16 + i, y + 10 + bounce);
        ctx.lineTo(x + 16 + i, y + 8 + bounce);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x + 24 + i, y + 10 + bounce);
        ctx.lineTo(x + 24 + i, y + 8 + bounce);
        ctx.stroke();
    }

    // Smile
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x + 20, y + 14 + bounce, 6, 0.2, Math.PI - 0.2);
    ctx.stroke();

    // Rosy cheeks
    ctx.fillStyle = 'rgba(255, 182, 193, 0.6)';
    ctx.beginPath();
    ctx.ellipse(x + 10, y + 15 + bounce, 3, 2, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(x + 30, y + 15 + bounce, 3, 2, 0, 0, Math.PI * 2);
    ctx.fill();

    // Crown/Tiara with sparkles
    ctx.fillStyle = '#FFD700';
    ctx.strokeStyle = '#FFA500';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x + 8, y + 4 + bounce);
    ctx.lineTo(x + 12, y - 2 + bounce);
    ctx.lineTo(x + 16, y + 4 + bounce);
    ctx.lineTo(x + 20, y - 4 + bounce);
    ctx.lineTo(x + 24, y + 4 + bounce);
    ctx.lineTo(x + 28, y - 2 + bounce);
    ctx.lineTo(x + 32, y + 4 + bounce);
    ctx.lineTo(x + 30, y + 6 + bounce);
    ctx.lineTo(x + 10, y + 6 + bounce);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Crown jewels
    ctx.fillStyle = '#FF1493';
    ctx.beginPath();
    ctx.arc(x + 20, y - 3 + bounce, 2.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.arc(x + 20, y - 3 + bounce, 1, 0, Math.PI * 2);
    ctx.fill();
}

function drawYoussef(x, y) {
    let heartbeat = Math.sin(gameFrame * 0.1) * 1.5;

    // Shadow
    ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
    ctx.beginPath();
    ctx.ellipse(x + 20, y + 58, 15, 5, 0, 0, Math.PI * 2);
    ctx.fill();

    // Legs with gradient
    const legGrad = ctx.createLinearGradient(x, y + 45, x, y + 60);
    legGrad.addColorStop(0, '#2F4F4F');
    legGrad.addColorStop(1, '#1C1C1C');
    ctx.fillStyle = legGrad;

    // Left leg
    ctx.fillRect(x + 12, y + 45, 7, 13);
    // Right leg
    ctx.fillRect(x + 22, y + 45, 7, 13);

    // Shoes
    ctx.fillStyle = '#000';
    ctx.fillRect(x + 11, y + 56, 9, 4);
    ctx.fillRect(x + 21, y + 56, 9, 4);

    // Torso - Egyptian themed shirt
    const shirtGrad = ctx.createLinearGradient(x, y + 25, x, y + 45);
    shirtGrad.addColorStop(0, '#FFD700');
    shirtGrad.addColorStop(1, '#FFA500');
    ctx.fillStyle = shirtGrad;
    ctx.fillRect(x + 10, y + 25, 20, 20);

    // Shirt pattern (Egyptian hieroglyphics style)
    ctx.fillStyle = '#8B4513';
    ctx.font = '8px Arial';
    ctx.fillText('☥', x + 18, y + 35);

    // Arms
    const armGrad = ctx.createLinearGradient(x, y + 25, x, y + 40);
    armGrad.addColorStop(0, '#FFCBA4');
    armGrad.addColorStop(1, '#FFE0BD');
    ctx.fillStyle = armGrad;

    // Left arm
    ctx.fillRect(x + 6, y + 28, 5, 14);
    // Right arm
    ctx.fillRect(x + 29, y + 28, 5, 14);

    // Hands
    ctx.fillStyle = '#FFE0BD';
    ctx.beginPath();
    ctx.arc(x + 8, y + 41, 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x + 31, y + 41, 3, 0, Math.PI * 2);
    ctx.fill();

    // Neck
    ctx.fillStyle = '#FFE0BD';
    ctx.fillRect(x + 17, y + 22, 6, 4);

    // Head with gradient
    const headGrad = ctx.createRadialGradient(x + 18, y + 12, 2, x + 20, y + 14, 14);
    headGrad.addColorStop(0, '#FFEBD6');
    headGrad.addColorStop(1, '#FFD7B5');
    ctx.fillStyle = headGrad;
    ctx.beginPath();
    ctx.arc(x + 20, y + 14, 13, 0, Math.PI * 2);
    ctx.fill();

    // Hair - styled with gradient
    const hairGrad = ctx.createLinearGradient(x, y, x, y + 20);
    hairGrad.addColorStop(0, '#1C1C1C');
    hairGrad.addColorStop(1, '#000');
    ctx.fillStyle = hairGrad;

    // Main hair
    ctx.beginPath();
    ctx.arc(x + 20, y + 11, 15, Math.PI, 0);
    ctx.fill();

    // Hair side details
    ctx.beginPath();
    ctx.moveTo(x + 6, y + 14);
    ctx.quadraticCurveTo(x + 4, y + 18, x + 7, y + 20);
    ctx.quadraticCurveTo(x + 5, y + 17, x + 7, y + 15);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(x + 34, y + 14);
    ctx.quadraticCurveTo(x + 36, y + 18, x + 33, y + 20);
    ctx.quadraticCurveTo(x + 35, y + 17, x + 33, y + 15);
    ctx.fill();

    // Eyes
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(x + 15, y + 14, 2.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x + 25, y + 14, 2.5, 0, Math.PI * 2);
    ctx.fill();

    // Eye shine
    ctx.fillStyle = '#FFF';
    ctx.beginPath();
    ctx.arc(x + 16, y + 13, 1, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x + 26, y + 13, 1, 0, Math.PI * 2);
    ctx.fill();

    // Eyebrows
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(x + 12, y + 10);
    ctx.quadraticCurveTo(x + 15, y + 9, x + 18, y + 10);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x + 22, y + 10);
    ctx.quadraticCurveTo(x + 25, y + 9, x + 28, y + 10);
    ctx.stroke();

    // Smile
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x + 20, y + 17, 5, 0.2, Math.PI - 0.2);
    ctx.stroke();

    // Rosy cheeks
    ctx.fillStyle = 'rgba(255, 182, 193, 0.4)';
    ctx.beginPath();
    ctx.ellipse(x + 11, y + 16, 2, 1.5, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(x + 29, y + 16, 2, 1.5, 0, 0, Math.PI * 2);
    ctx.fill();

    // Heart floating above head during cutscene
    if (isCutscene && cutsceneTimer > 60) {
        ctx.save();
        ctx.translate(x + 20, y - 10 + heartbeat);
        ctx.scale(1 + heartbeat * 0.05, 1 + heartbeat * 0.05);
        ctx.font = '20px Arial';
        ctx.fillText('💕', -10, 0);
        ctx.restore();
    }
}

function drawRock(x, y) {
    ctx.fillStyle = '#808080';
    ctx.strokeStyle = '#666';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x, y + 30);
    ctx.lineTo(x + 5, y + 10);
    ctx.lineTo(x + 15, y);
    ctx.lineTo(x + 25, y + 10);
    ctx.lineTo(x + 30, y + 30);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

function drawBird(x, y) {
    // Body
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(x + 15, y + 15, 10, 0, Math.PI * 2);
    ctx.fill();

    // Beak
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.moveTo(x + 5, y + 15);
    ctx.lineTo(x - 2, y + 18);
    ctx.lineTo(x + 5, y + 21);
    ctx.fill();

    // Wings
    ctx.fillStyle = '#ccc';
    let wingY = Math.sin(gameFrame * 0.5) * 8;
    ctx.beginPath();
    ctx.ellipse(x + 15, y + 15 + wingY, 8, 4, 0, 0, Math.PI * 2);
    ctx.fill();
}

function drawPlane(x, y) {
    // Plane body (fuselage)
    ctx.fillStyle = '#E0E0E0';
    ctx.fillRect(x + 10, y + 12, 40, 8);

    // Nose cone
    ctx.fillStyle = '#FF6B9D';
    ctx.beginPath();
    ctx.moveTo(x + 50, y + 16);
    ctx.lineTo(x + 60, y + 16);
    ctx.lineTo(x + 55, y + 12);
    ctx.lineTo(x + 55, y + 20);
    ctx.closePath();
    ctx.fill();

    // Wings
    ctx.fillStyle = '#4A90E2';
    // Top wing
    ctx.beginPath();
    ctx.moveTo(x + 20, y + 12);
    ctx.lineTo(x + 15, y - 5);
    ctx.lineTo(x + 35, y - 5);
    ctx.lineTo(x + 40, y + 12);
    ctx.closePath();
    ctx.fill();

    // Bottom wing
    ctx.beginPath();
    ctx.moveTo(x + 20, y + 20);
    ctx.lineTo(x + 15, y + 35);
    ctx.lineTo(x + 35, y + 35);
    ctx.lineTo(x + 40, y + 20);
    ctx.closePath();
    ctx.fill();

    // Tail
    ctx.fillStyle = '#FF6B9D';
    ctx.beginPath();
    ctx.moveTo(x + 10, y + 12);
    ctx.lineTo(x + 5, y + 5);
    ctx.lineTo(x + 15, y + 12);
    ctx.closePath();
    ctx.fill();

    // Windows
    ctx.fillStyle = '#87CEEB';
    for (let i = 0; i < 4; i++) {
        ctx.fillRect(x + 20 + i * 8, y + 14, 4, 4);
    }

    // Love heart trail (Easter egg!)
    if (gameFrame % 30 === 0) {
        ctx.fillStyle = '#FF1493';
        ctx.font = "16px Arial";
        ctx.fillText("💕", x - 10, y + 16);
    }
}

function createGameParticles(x, y, count, color) {
    for (let i = 0; i < count; i++) {
        particlesArr.push({
            x: x, y: y,
            vx: (Math.random() - 0.5) * 5,
            vy: (Math.random() - 0.5) * 5,
            life: 30,
            color: color
        });
    }
}

function updateGameUI() {
    const heartsEl = document.getElementById('ui-hearts');
    const scoreEl = document.getElementById('ui-score');
    const distEl = document.getElementById('ui-distance');
    if (heartsEl) heartsEl.innerText = "❤️".repeat(player.hearts);
    if (scoreEl) scoreEl.innerText = score;
    if (distEl) distEl.innerText = Math.floor(Math.max(0, distance));
}

function showDialogue(text) {
    gameRun = false;
    document.getElementById('dialogue-text').innerText = text;
    document.getElementById('dialogue-box').style.display = 'block';
}

function handleGameInput(e) {
    if (e) e.preventDefault();

    const dialogBox = document.getElementById('dialogue-box');

    // 1. If Dialogue is Open
    if (dialogBox && dialogBox.style.display === 'block') {
        dialogBox.style.display = 'none';

        // If we're transitioning to pyramid mode, start it
        if (isPyramidMode) {
            // Pyramid game loop will start automatically
            return;
        }

        // Otherwise, resume normal runner game
        gameRun = true;
        gameLoop();
    }
    // 2. If Playing Runner Game (Jump)
    else if (gameRun && player.gr && !isCutscene && !isPyramidMode) {
        player.vy = player.jp;
        player.gr = false;
        createGameParticles(player.x + 20, player.y + 60, 5, '#fff');
    }
    // 3. If Playing Pyramid Game (Jump with tap/click)
    else if (isPyramidMode && pyramidPlayer.onGround) {
        pyramidPlayer.vy = -pyramidPlayer.jumpPower;
        pyramidPlayer.onGround = false;
    }
}

function endGame(win) {
    gameRun = false;
    const overlay = document.getElementById('game-overlay');
    const title = document.getElementById('overlay-title');
    const msg = document.getElementById('overlay-msg');
    if (overlay) overlay.style.display = 'flex';
    if (title) title.innerText = win ? "HAPPY BIRTHDAY! 🎉" : "GAME OVER 💔";
    if (msg) msg.innerText = win ? "Every step led me to you ❤️💍\nForever starts now." : "Don't give up! Try again my love! 💪";
}

// ========== EVENT LISTENERS ==========

// Keyboard controls
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && document.getElementById('flash-game-modal').style.display === 'flex') {
        handleGameInput(e);
    }
});

// Touch controls for mobile
if (gameCanvas) {
    // Mouse controls
    gameCanvas.addEventListener('mousedown', handleGameInput);

    // Touch controls (better for mobile)
    gameCanvas.addEventListener('touchstart', (e) => {
        e.preventDefault();
        handleGameInput(e);
    }, { passive: false });

    // Prevent default touch behaviors
    gameCanvas.addEventListener('touchmove', (e) => {
        e.preventDefault();
    }, { passive: false });
}

// Restart button
const restartBtn = document.getElementById('restart-btn');
if (restartBtn) {
    restartBtn.addEventListener('click', () => {
        document.getElementById('game-overlay').style.display = 'none';
        initGame();
    });

    restartBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        document.getElementById('game-overlay').style.display = 'none';
        initGame();
    }, { passive: false });
}

// Handle window resize
window.addEventListener('resize', () => {
    if (gameRun) setupCanvas();
});

// Export functions for HTML onclick handlers
window.openFlashGame = openFlashGame;
window.closeFlashGame = closeFlashGame;
// ========== 7. INITIALIZATION ==========
window.addEventListener('load', function () {
    const gameModal = document.getElementById('flash-game-modal');
    if (gameModal) gameModal.style.display = 'none';
    createParticles();
    createFloatingHearts();
    updatePageContent();
});
// Password input enter key listeners
document.addEventListener('DOMContentLoaded', function () {
    const galleryInput = document.getElementById('gallery-password');
    const babyGalleryInput = document.getElementById('baby-gallery-password');

    if (galleryInput) {
        galleryInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') unlockGallery();
        });
    }

    if (babyGalleryInput) {
        babyGalleryInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') unlockBabyGallery();
        });
    }
});