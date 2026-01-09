// ============================================================
// BIRTHDAY GAME - REFACTORED & ORGANIZED
// A romantic birthday adventure game
// ============================================================
//
// TABLE OF CONTENTS:
// 1. Global Configuration - Date settings, game constants
// 2. Visual Effects - Particles, floating hearts
// 3. Master Update Functions - Countdown timers, distance display
// 4. Music Player - Song management and controls
// 5. Modals & Easter Eggs - Photo galleries, challenges
// 6. Game Engine - Main game loop, rendering, physics
//    - Runner Mode (Level 1): Kiev to Cairo journey
//    - Pyramid Mode (Level 2): Quests and challenges
//    - Rescue System: Cutscene when player loses hearts
// 7. Rendering Helpers - Gradient creators, drawing utilities
// 8. Event Listeners - Input handling
// 9. Initialization - Page load setup
//
// ============================================================

// ========== 1. GLOBAL CONFIGURATION ==========

// Date Configuration
const DATES = {
    birthday: new Date('2026-01-10T00:00:00').getTime(),
    wedding: new Date('2026-04-10T00:00:00').getTime(),
    relationshipStart: new Date('2025-11-30T00:00:00').getTime()
};

// Game Constants
const GAME_CONFIG = {
    canvasWidth: 800,
    canvasHeight: 400,
    gravity: 0.6,
    jumpPower: -12,
    playerSpeed: 5,
    obstacleSpeed: 4,
    totalDistance: 2387, // km from Cairo to Kyiv
    particleCount: 30,
    heartSpawnInterval: 2000,
    heartLifetime: 8000
};

// Security
const GALLERY_PASSWORD = "btates";

// Visual Effect Emojis
const HEART_EMOJIS = ['❤️', '💕', '💖', '💗', '💍', '🌹'];

// ========== 2. VISUAL EFFECTS ==========

/**
 * Creates animated background particles
 */
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    
    for (let i = 0; i < GAME_CONFIG.particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        container.appendChild(particle);
    }
}

/**
 * Creates floating heart animations
 */
function createFloatingHearts() {
    const container = document.getElementById('floatingHearts');
    if (!container) return;
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = HEART_EMOJIS[Math.floor(Math.random() * HEART_EMOJIS.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 2 + 1) + 'em';
        heart.style.animationDuration = (Math.random() * 3 + 5) + 's';
        container.appendChild(heart);
        setTimeout(() => heart.remove(), GAME_CONFIG.heartLifetime);
    }, GAME_CONFIG.heartSpawnInterval);
}

// ========== 3. CONFIGURATION (LEGACY SUPPORT) ==========
const birthdayDate = DATES.birthday;
const weddingDate = DATES.wedding;
const relationshipStart = DATES.relationshipStart;
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
const songs = ['Songs/WineMeDineMe.mp3', 'Songs/ForgetYou.mp3', 'Songs/MyuuElfenLiedLiliumPianoVersion.mp3', 'Songs/SuriyeMarşSuriyeMilliMarş.mp3', 'Songs/AFIAOIL.mp3'];
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
// Handle audio load/play errors gracefully
audio.addEventListener('error', () => {
    const nowPlaying = document.getElementById('nowPlaying');
    if (nowPlaying) {
        nowPlaying.innerText = 'Unable to play: ' + (songTitles[currentSong] || 'Unknown track');
    }
});
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

/**
 * Opens photo modal with clicked image
 * @param {HTMLElement} el - The clicked photo element
 */
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

/**
 * Closes the photo modal
 */
function closeModal() {
    const modal = document.getElementById('photoModal');
    if (modal) {
        modal.classList.remove('active');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

/**
 * Opens the easter egg challenge modal
 */
function openEasterEgg() {
    const modal = document.getElementById('easterEggModal');
    if (modal) {
        modal.classList.add('active');
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

/**
 * Closes easter egg modal and resets all sections
 */
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
    // Enhanced gradient background - ancient stone with depth
    const bgGrad = ctx.createLinearGradient(0, 0, 0, 400);
    bgGrad.addColorStop(0, "#1a0f08");
    bgGrad.addColorStop(0.15, "#3d2817");
    bgGrad.addColorStop(0.35, "#8b6f47");
    bgGrad.addColorStop(0.65, "#a88860");
    bgGrad.addColorStop(0.85, "#c9a961");
    bgGrad.addColorStop(1, "#d4af37");
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);

    // Stone texture overlay
    ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
    for (let i = 0; i < gameCanvas.width; i += 80) {
        for (let j = 0; j < gameCanvas.height; j += 80) {
            ctx.fillRect(i + Math.random() * 5, j + Math.random() * 5, 40, 40);
        }
    }

    // Torch lighting effect with enhanced glow layers
    const torches = [
        { x: 100, y: 100 },
        { x: 400, y: 80 },
        { x: 700, y: 100 }
    ];
    
    torches.forEach(torch => {
        // First large glow layer
        const glow1 = ctx.createRadialGradient(torch.x, torch.y, 0, torch.x, torch.y, 120);
        glow1.addColorStop(0, "rgba(255, 200, 100, 0.25)");
        glow1.addColorStop(0.4, "rgba(255, 150, 50, 0.1)");
        glow1.addColorStop(1, "rgba(255, 100, 0, 0)");
        ctx.fillStyle = glow1;
        ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
        
        // Second medium glow layer
        const glow2 = ctx.createRadialGradient(torch.x, torch.y, 0, torch.x, torch.y, 80);
        glow2.addColorStop(0, "rgba(255, 220, 120, 0.35)");
        glow2.addColorStop(0.5, "rgba(255, 150, 50, 0.15)");
        glow2.addColorStop(1, "rgba(255, 100, 0, 0)");
        ctx.fillStyle = glow2;
        ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
        
        // Torch bracket
        ctx.strokeStyle = "#654321";
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(torch.x - 15, torch.y - 20);
        ctx.quadraticCurveTo(torch.x - 12, torch.y - 8, torch.x - 5, torch.y);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(torch.x + 15, torch.y - 20);
        ctx.quadraticCurveTo(torch.x + 12, torch.y - 8, torch.x + 5, torch.y);
        ctx.stroke();
        
        // Torch flame with better animation
        const flameWave = Math.sin(gameFrame * 0.15) * 3;
        const flameWave2 = Math.sin(gameFrame * 0.25 + torch.x) * 2;
        
        // Outer flame (orange)
        ctx.fillStyle = "rgba(255, 80, 0, 0.9)";
        ctx.beginPath();
        ctx.arc(torch.x + flameWave2 * 0.3, torch.y - 3 + flameWave * 0.5, 10 + flameWave * 1.5, 0, Math.PI * 2);
        ctx.fill();
        
        // Middle flame (orange-yellow)
        ctx.fillStyle = "rgba(255, 140, 0, 0.95)";
        ctx.beginPath();
        ctx.arc(torch.x + flameWave2 * 0.2, torch.y - 1 + flameWave * 0.3, 8 + flameWave, 0, Math.PI * 2);
        ctx.fill();
        
        // Inner flame (yellow)
        ctx.fillStyle = "rgba(255, 200, 80, 1)";
        ctx.beginPath();
        ctx.arc(torch.x, torch.y + flameWave * 0.2, 5 + flameWave * 0.5, 0, Math.PI * 2);
        ctx.fill();
        
        // Flame tip (bright yellow)
        ctx.fillStyle = "rgba(255, 255, 150, 0.8)";
        ctx.beginPath();
        ctx.arc(torch.x, torch.y - 8 + flameWave * 0.3, 3, 0, Math.PI * 2);
        ctx.fill();
    });

    // Ancient pillars with enhanced 3D effect
    for (let i = 0; i < 5; i++) {
        const x = 50 + i * 180;
        
        // Pillar shadow
        ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
        ctx.fillRect(x + 5, 5, 40, gameCanvas.height - 5);
        
        // Pillar body with gradient
        const pillarGrad = ctx.createLinearGradient(x, 0, x + 40, 0);
        pillarGrad.addColorStop(0, "#5a4527");
        pillarGrad.addColorStop(0.5, "#7a5c3d");
        pillarGrad.addColorStop(1, "#6a4c2d");
        ctx.fillStyle = pillarGrad;
        ctx.fillRect(x, 0, 40, gameCanvas.height);
        
        // Pillar carved vertical lines
        ctx.strokeStyle = "rgba(0, 0, 0, 0.4)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(x + 10, 0);
        ctx.lineTo(x + 10, gameCanvas.height);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x + 30, 0);
        ctx.lineTo(x + 30, gameCanvas.height);
        ctx.stroke();
        
        // Pillar capital (top decoration) with gradient
        const capitalGrad = ctx.createLinearGradient(x - 10, 0, x + 50, 0);
        capitalGrad.addColorStop(0, "#8a6c42");
        capitalGrad.addColorStop(0.5, "#a67c52");
        capitalGrad.addColorStop(1, "#9a6c42");
        ctx.fillStyle = capitalGrad;
        ctx.fillRect(x - 10, 0, 60, 30);
        
        // Capital shadow detail
        ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
        ctx.fillRect(x - 10, 25, 60, 5);
        
        // Hieroglyphics on pillars with animation
        ctx.fillStyle = "#4a3728";
        ctx.font = "20px Arial";
        const symbols = ["𓀀", "𓁿", "☥", "𓂀"];
        const pulse = Math.sin(gameFrame * 0.08 + i) * 0.8;
        
        for (let j = 0; j < 4; j++) {
            ctx.save();
            ctx.globalAlpha = 0.8 + pulse * 0.2;
            ctx.scale(1 + pulse * 0.05, 1 + pulse * 0.05);
            ctx.fillText(symbols[j % symbols.length], x + 10, 80 + j * 60);
            ctx.restore();
        }
    }

    // Enhanced floor tiles with 3D perspective and alternating shading
    // Base floor
    ctx.fillStyle = "#5a4c3d";
    ctx.fillRect(0, 320, gameCanvas.width, 80);
    
    // Floor tiles with 3D effect
    for (let i = 0; i < 16; i++) {
        const isOdd = i % 2 === 0;
        const tileColor = isOdd ? "#6b5b4d" : "#5a4c3d";
        ctx.fillStyle = tileColor;
        ctx.fillRect(i * 50, 320, 50, 80);
        
        // Tile perspective shadow
        ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
        ctx.fillRect(i * 50, 395, 50, 5);
        
        // Decorative inlay pattern
        ctx.strokeStyle = "rgba(212, 175, 55, 0.6)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(i * 50 + 10, 330);
        ctx.lineTo(i * 50 + 40, 330);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(i * 50 + 10, 390);
        ctx.lineTo(i * 50 + 40, 390);
        ctx.stroke();
        
        // Small decorative diamond inlay
        ctx.fillStyle = "rgba(212, 175, 55, 0.5)";
        const centerX = i * 50 + 25;
        const centerY = 360;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY - 5);
        ctx.lineTo(centerX + 5, centerY);
        ctx.lineTo(centerX, centerY + 5);
        ctx.lineTo(centerX - 5, centerY);
        ctx.closePath();
        ctx.fill();
    }
    
    // Floor grid outline
    ctx.strokeStyle = "#3a2818";
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

        // Curtains (open during sleep scene to show characters)
        if (!romanticBed.reached || (romanticBed.shakeTimer > 0 && !romanticBed.sleepSceneActive)) {
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

        // Sleep scene characters on bed
        if (romanticBed.sleepSceneActive) {
            // Glow/halo effect around sleeping characters
            const haloGlow1 = ctx.createRadialGradient(romanticBed.x - 20, romanticBed.y + 8, 0, romanticBed.x - 20, romanticBed.y + 8, 30);
            haloGlow1.addColorStop(0, "rgba(255, 200, 150, 0.4)");
            haloGlow1.addColorStop(0.5, "rgba(255, 150, 100, 0.2)");
            haloGlow1.addColorStop(1, "rgba(255, 100, 50, 0)");
            ctx.fillStyle = haloGlow1;
            ctx.fillRect(romanticBed.x - 50, romanticBed.y - 20, 60, 60);
            
            const haloGlow2 = ctx.createRadialGradient(romanticBed.x + 20, romanticBed.y + 8, 0, romanticBed.x + 20, romanticBed.y + 8, 30);
            haloGlow2.addColorStop(0, "rgba(255, 200, 150, 0.4)");
            haloGlow2.addColorStop(0.5, "rgba(255, 150, 100, 0.2)");
            haloGlow2.addColorStop(1, "rgba(255, 100, 50, 0)");
            ctx.fillStyle = haloGlow2;
            ctx.fillRect(romanticBed.x - 10, romanticBed.y - 20, 60, 60);

            const headOffsetY = 8;
            
            // Youssef (left) - enhanced with better details
            ctx.fillStyle = '#FFD7B5';
            ctx.beginPath();
            ctx.arc(romanticBed.x - 20, romanticBed.y + headOffsetY, 10, 0, Math.PI * 2);
            ctx.fill();
            
            // Hair on head
            ctx.fillStyle = '#5D4037';
            ctx.beginPath();
            ctx.arc(romanticBed.x - 20, romanticBed.y + headOffsetY - 2, 12, 0, Math.PI);
            ctx.fill();
            
            // Peaceful closed eyes - gentle curved lines
            ctx.strokeStyle = '#000';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(romanticBed.x - 25, romanticBed.y + headOffsetY - 1);
            ctx.quadraticCurveTo(romanticBed.x - 20, romanticBed.y + headOffsetY + 1, romanticBed.x - 15, romanticBed.y + headOffsetY - 1);
            ctx.stroke();
            
            // Gentle smile
            ctx.beginPath();
            ctx.arc(romanticBed.x - 20, romanticBed.y + headOffsetY + 2, 4, 0, Math.PI);
            ctx.stroke();
            
            // Rosy cheeks
            ctx.fillStyle = 'rgba(255, 100, 150, 0.5)';
            ctx.beginPath();
            ctx.ellipse(romanticBed.x - 27, romanticBed.y + headOffsetY, 3, 2, 0, 0, Math.PI * 2);
            ctx.fill();

            // Vladislava (right) - enhanced with better details
            ctx.fillStyle = '#FFE0BD';
            ctx.beginPath();
            ctx.arc(romanticBed.x + 20, romanticBed.y + headOffsetY, 10, 0, Math.PI * 2);
            ctx.fill();
            
            // Hair on head
            ctx.fillStyle = '#8B6F47';
            ctx.beginPath();
            ctx.arc(romanticBed.x + 20, romanticBed.y + headOffsetY - 2, 12, 0, Math.PI);
            ctx.fill();
            
            // Peaceful closed eyes - gentle curved lines
            ctx.strokeStyle = '#000';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(romanticBed.x + 15, romanticBed.y + headOffsetY - 1);
            ctx.quadraticCurveTo(romanticBed.x + 20, romanticBed.y + headOffsetY + 1, romanticBed.x + 25, romanticBed.y + headOffsetY - 1);
            ctx.stroke();
            
            // Gentle smile
            ctx.beginPath();
            ctx.arc(romanticBed.x + 20, romanticBed.y + headOffsetY + 2, 4, 0, Math.PI);
            ctx.stroke();
            
            // Rosy cheeks
            ctx.fillStyle = 'rgba(255, 100, 150, 0.5)';
            ctx.beginPath();
            ctx.ellipse(romanticBed.x + 27, romanticBed.y + headOffsetY, 3, 2, 0, 0, Math.PI * 2);
            ctx.fill();

            // Enhanced pillows with better detail
            const pillow1Grad = ctx.createLinearGradient(romanticBed.x - 30, romanticBed.y + 18, romanticBed.x - 30, romanticBed.y + 28);
            pillow1Grad.addColorStop(0, "#FFE4E1");
            pillow1Grad.addColorStop(1, "#FFD6D0");
            ctx.fillStyle = pillow1Grad;
            ctx.beginPath();
            ctx.ellipse(romanticBed.x - 30, romanticBed.y + 22, 16, 9, -0.3, 0, Math.PI * 2);
            ctx.fill();
            
            // Pillow wrinkles
            ctx.strokeStyle = "rgba(0, 0, 0, 0.1)";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.quadraticCurveTo(romanticBed.x - 40, romanticBed.y + 20, romanticBed.x - 25, romanticBed.y + 28);
            ctx.stroke();

            const pillow2Grad = ctx.createLinearGradient(romanticBed.x + 30, romanticBed.y + 18, romanticBed.x + 30, romanticBed.y + 28);
            pillow2Grad.addColorStop(0, "#FFE4E1");
            pillow2Grad.addColorStop(1, "#FFD6D0");
            ctx.fillStyle = pillow2Grad;
            ctx.beginPath();
            ctx.ellipse(romanticBed.x + 30, romanticBed.y + 22, 16, 9, 0.3, 0, Math.PI * 2);
            ctx.fill();
            
            // Pillow wrinkles
            ctx.strokeStyle = "rgba(0, 0, 0, 0.1)";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.quadraticCurveTo(romanticBed.x + 40, romanticBed.y + 20, romanticBed.x + 25, romanticBed.y + 28);
            ctx.stroke();

            // Enhanced blanket with gradient and wrinkles
            const blanketGrad = ctx.createLinearGradient(romanticBed.x - 55, romanticBed.y + 25, romanticBed.x + 55, romanticBed.y + 30);
            blanketGrad.addColorStop(0, '#FF69B4');
            blanketGrad.addColorStop(0.5, '#FF1493');
            blanketGrad.addColorStop(1, '#FF69B4');
            ctx.fillStyle = blanketGrad;
            ctx.fillRect(romanticBed.x - 55, romanticBed.y + 28, 110, 12);
            
            // Blanket wrinkles/folds for realism
            ctx.strokeStyle = "rgba(255, 20, 147, 0.6)";
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.quadraticCurveTo(romanticBed.x - 40, romanticBed.y + 25, romanticBed.x - 20, romanticBed.y + 32);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.quadraticCurveTo(romanticBed.x + 0, romanticBed.y + 26, romanticBed.x + 20, romanticBed.y + 32);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.quadraticCurveTo(romanticBed.x + 40, romanticBed.y + 25, romanticBed.x + 55, romanticBed.y + 32);
            ctx.stroke();
            
            // Blanket shadow for depth
            ctx.fillStyle = "rgba(255, 20, 147, 0.2)";
            ctx.fillRect(romanticBed.x - 55, romanticBed.y + 38, 110, 2);

            // Enhanced Zzz floating animations with different sizes and styles
            const zzzFrameStart = (gameFrame % 90);
            
            // First Z - small, starting from left
            if (zzzFrameStart < 60) {
                const z1Progress = zzzFrameStart / 60;
                const z1X = romanticBed.x - 40 + z1Progress * 30;
                const z1Y = romanticBed.y - 10 - z1Progress * 25;
                ctx.fillStyle = `rgba(255, 255, 255, ${0.9 - z1Progress * 0.7})`;
                ctx.font = `${12 + z1Progress * 3}px Arial`;
                ctx.fillText('Z', z1X, z1Y);
            }
            
            // Second Z - medium, from middle
            if (zzzFrameStart > 15 && zzzFrameStart < 75) {
                const z2Progress = (zzzFrameStart - 15) / 60;
                const z2X = romanticBed.x + z2Progress * 25;
                const z2Y = romanticBed.y - 20 - z2Progress * 30;
                ctx.fillStyle = `rgba(255, 255, 255, ${0.8 - z2Progress * 0.6})`;
                ctx.font = `${14 + z2Progress * 4}px Arial`;
                ctx.fillText('Z', z2X, z2Y);
            }
            
            // Third Z - large, from right
            if (zzzFrameStart > 30) {
                const z3Progress = (zzzFrameStart - 30) / 60;
                const z3X = romanticBed.x + 45 + z3Progress * 20;
                const z3Y = romanticBed.y - 5 - z3Progress * 28;
                ctx.fillStyle = `rgba(255, 255, 255, ${0.7 - z3Progress * 0.5})`;
                ctx.font = `${16 + z3Progress * 5}px Arial`;
                ctx.fillText('Z', z3X, z3Y);
            }
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
    if (isSleeping || rescueCutsceneActive) {
        // Freeze player during sleep scene or rescue cutscene
        pyramidPlayer.vx = 0;
        pyramidPlayer.vy = 0;
        return;
    }
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
    
    // Update checkpoint as player progresses (save closest checkpoint passed)
    pyramidCheckpoints.forEach(cp => {
        if (pyramidPlayer.x > cp.x && pyramidPlayer.x < cp.x + 50) {
            lastCheckpoint = cp;
        }
    });
}

// ========== PYRAMID MODE: EXTRAS & COLLECTIBLES ==========

// Pyramid Mode Constants
const PYRAMID_CONFIG = {
    ankhTarget: 3,
    scarabSpeed: 1.2,
    trapDamage: 1,
    questCount: 3
};

// Collectibles
let ankhs = [];
let ankhCollected = 0;

// Hazards
let pyramidTraps = []; // Spikes on floor
let scarabs = []; // Small enemies patrolling horizontally

/**
 * Initializes all pyramid extras: ankhs, traps, scarabs, and checkpoints
 */
function initPyramidExtras() {
    ankhCollected = 0;
    
    // Place ankhs (collectibles)
    ankhs = [
        { x: 140, y: 235, r: 8, taken: false },
        { x: 420, y: 220, r: 8, taken: false },
        { x: 650, y: 245, r: 8, taken: false }
    ];
    
    // Place spike traps
    pyramidTraps = [
        { x: 300, y: 315, w: 40, h: 8 },
        { x: 520, y: 315, w: 40, h: 8 }
    ];
    
    // Place scarab enemies
    scarabs = [
        { x: 240, y: 300, w: 26, h: 14, dir: 1, speed: 1.2, left: 200, right: 300 },
        { x: 560, y: 300, w: 26, h: 14, dir: -1, speed: 1.0, left: 540, right: 620 }
    ];
    
    // Set checkpoint locations for respawning
    pyramidCheckpoints = [
        { x: 100, y: 260 },
        { x: 300, y: 260 },
        { x: 500, y: 260 },
        { x: 700, y: 260 }
    ];
    lastCheckpoint = pyramidCheckpoints[0];
}

function updatePyramidExtras() {
    if (isSleeping || rescueCutsceneActive) return;

    // Scarab patrol movement
    scarabs.forEach(s => {
        s.x += s.dir * s.speed;
        if (s.x < s.left) { s.x = s.left; s.dir = 1; }
        if (s.x > s.right) { s.x = s.right; s.dir = -1; }
    });

    // Collect ankhs
    ankhs.forEach(a => {
        if (!a.taken && Math.abs((pyramidPlayer.x + 20) - a.x) < 16 && Math.abs((pyramidPlayer.y + 35) - a.y) < 18) {
            a.taken = true;
            ankhCollected++;
            particlesArr.push({ x: a.x, y: a.y, vx: 0, vy: -2, life: 40, color: '#FFD700' });
            showPyramidDialogue('☥ Ankh ' + ankhCollected + '/' + PYRAMID_CONFIG.ankhTarget + ' collected!');
        }
    });

    // Trap collisions (spikes)
    pyramidTraps.forEach(t => {
        if (rectsOverlap(pyramidPlayer.x, pyramidPlayer.y, pyramidPlayer.width, pyramidPlayer.height, t.x, t.y, t.w, t.h)) {
            damagePyramidPlayer();
        }
    });

    // Scarab collisions
    scarabs.forEach(s => {
        if (rectsOverlap(pyramidPlayer.x, pyramidPlayer.y, pyramidPlayer.width, pyramidPlayer.height, s.x, s.y, s.w, s.h)) {
            damagePyramidPlayer();
        }
    });

    // If all ankhs are collected, give a tiny score bonus and a sparkle near the bed
    if (ankhCollected === PYRAMID_CONFIG.ankhTarget && !romanticBed.ankhReady) {
        romanticBed.ankhReady = true;
        score += 300;
        showPyramidDialogue('✨ The ankhs glow… the bed feels blessed!');
    }
}

function damagePyramidPlayer() {
    if (player.inv > 0 || isSleeping) return;
    player.hearts--;
    player.inv = 60;
    createGameParticles(pyramidPlayer.x + 20, pyramidPlayer.y + 30, 10, '#ff0000');
    if (player.hearts <= 0) {
        // Start rescue cutscene instead of immediate game over
        startRescueCutscene();
    }
}

function drawPyramidExtras() {
    // Ankhs
    ankhs.forEach(a => {
        if (a.taken) return;
        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fill();
        // small cross detail
        ctx.fillRect(a.x - 1, a.y - a.r - 3, 2, 6);
        ctx.fillRect(a.x - 4, a.y - 1, 8, 2);
    });

    // Spikes (traps)
    pyramidTraps.forEach(t => {
        ctx.fillStyle = '#8B5E3B';
        for (let i = 0; i < t.w; i += 8) {
            ctx.beginPath();
            ctx.moveTo(t.x + i, t.y + t.h);
            ctx.lineTo(t.x + i + 4, t.y);
            ctx.lineTo(t.x + i + 8, t.y + t.h);
            ctx.closePath();
            ctx.fill();
        }
    });

    // Scarabs
    scarabs.forEach(s => {
        // body
        ctx.fillStyle = '#5D4037';
        ctx.beginPath();
        ctx.ellipse(s.x + s.w / 2, s.y + s.h / 2, s.w / 2, s.h / 2, 0, 0, Math.PI * 2);
        ctx.fill();
        // legs
        ctx.strokeStyle = '#3E2723';
        ctx.lineWidth = 2;
        for (let i = 0; i < 3; i++) {
            ctx.beginPath();
            ctx.moveTo(s.x + 4, s.y + 3 + i * 4);
            ctx.lineTo(s.x - 2, s.y + 2 + i * 4);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(s.x + s.w - 4, s.y + 3 + i * 4);
            ctx.lineTo(s.x + s.w + 2, s.y + 2 + i * 4);
            ctx.stroke();
        }
        // eyes
        ctx.fillStyle = '#FFC107';
        ctx.fillRect(s.x + 6, s.y + 4, 3, 3);
        ctx.fillRect(s.x + s.w - 9, s.y + 4, 3, 3);
    });

    // If ankhs ready, add glow to the bed area
    if (romanticBed.ankhReady) {
        const glow = ctx.createRadialGradient(romanticBed.x, romanticBed.y + 30, 10, romanticBed.x, romanticBed.y + 30, 80);
        glow.addColorStop(0, 'rgba(255, 215, 0, 0.35)');
        glow.addColorStop(1, 'rgba(255, 215, 0, 0)');
        ctx.fillStyle = glow;
        ctx.fillRect(romanticBed.x - 100, romanticBed.y - 10, 200, 90);
    }
}

function rectsOverlap(x1, y1, w1, h1, x2, y2, w2, h2) {
    return x1 < x2 + w2 && x1 + w1 > x2 && y1 < y2 + h2 && y1 + h1 > y2;
}

// ========== RESCUE CUTSCENE ==========
function startRescueCutscene() {
    rescueCutsceneActive = true;
    rescueCutsceneTimer = 300; // ~5 seconds at 60fps
    showPyramidDialogue("Oh no! But I won't let you fall! 💕");
}

function startRescueCutsceneRunner() {
    rescueCutsceneActive = true;
    rescueCutsceneTimer = 300;
    gameRun = false; // Pause the runner game
    showDialogue("Oh no! But I won't let you fall! 💕");
}

function updateRescueCutscene() {
    if (!rescueCutsceneActive) return;
    
    rescueCutsceneTimer--;
    if (rescueCutsceneTimer <= 0) {
        // Cutscene finished - revive at checkpoint
        rescueCutsceneActive = false;
        
        // If in pyramid mode, revive at pyramid checkpoint
        if (isPyramidMode) {
            pyramidPlayer.x = lastCheckpoint.x;
            pyramidPlayer.y = lastCheckpoint.y;
            pyramidPlayer.onGround = true;
            pyramidPlayer.vy = 0;
            player.hearts = 3;
            player.inv = 120;
            showPyramidDialogue("I got you! Stay strong! 💪❤️");
        } 
        // If in runner mode, revive and resume
        else {
            player.hearts = 3;
            player.inv = 120;
            player.y = 300;
            gameRun = true; // Resume runner game
            showDialogue("I got you! Keep running, my love! 💪❤️");
        }
    }
}

function drawRescueCutscene() {
    if (!rescueCutsceneActive) return;
    
    // Progress: 0 = far away, 300 = arrived
    const progress = 1 - (rescueCutsceneTimer / 300);
    
    // Background glow that intensifies
    const bgGlow = ctx.createLinearGradient(0, 0, 800, 400);
    bgGlow.addColorStop(0, 'rgba(255, 200, 150, ' + (progress * 0.15) + ')');
    bgGlow.addColorStop(1, 'rgba(255, 150, 100, ' + (progress * 0.15) + ')');
    ctx.fillStyle = bgGlow;
    ctx.fillRect(0, 0, 800, 400);
    
    // Light rays from above
    ctx.strokeStyle = 'rgba(255, 255, 200, ' + (0.3 * progress) + ')';
    ctx.lineWidth = 3;
    for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo(150 + i * 150, 0);
        ctx.lineTo(200 + i * 150, 400);
        ctx.stroke();
    }
    
    // Youssef approaches from right on horseback
    const horsexPos = 850 - (progress * 900);
    const horseY = 250 + Math.sin(gameFrame * 0.1) * 3;
    
    // HORSE - Complete and detailed
    // Horse body with gradient
    const horseGrad = ctx.createLinearGradient(horsexPos, horseY - 20, horsexPos, horseY + 50);
    horseGrad.addColorStop(0, '#6B4423');
    horseGrad.addColorStop(0.5, '#8B5A3C');
    horseGrad.addColorStop(1, '#5D3A1A');
    ctx.fillStyle = horseGrad;
    ctx.beginPath();
    ctx.ellipse(horsexPos + 35, horseY + 15, 45, 30, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Horse belly shading
    ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
    ctx.beginPath();
    ctx.ellipse(horsexPos + 35, horseY + 25, 35, 15, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Horse tail
    ctx.strokeStyle = '#3D2817';
    ctx.lineWidth = 8;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(horsexPos + 5, horseY + 10);
    ctx.quadraticCurveTo(horsexPos - 15, horseY + 20, horsexPos - 10, horseY + 40);
    ctx.stroke();
    
    // Horse neck - FILLED properly
    ctx.fillStyle = '#7A5230';
    ctx.beginPath();
    ctx.moveTo(horsexPos + 60, horseY);
    ctx.quadraticCurveTo(horsexPos + 70, horseY - 20, horsexPos + 75, horseY - 40);
    ctx.quadraticCurveTo(horsexPos + 80, horseY - 20, horsexPos + 85, horseY - 35);
    ctx.quadraticCurveTo(horsexPos + 75, horseY - 15, horsexPos + 68, horseY);
    ctx.closePath();
    ctx.fill();
    
    // Horse head with better shape
    const headGrad = ctx.createRadialGradient(horsexPos + 88, horseY - 42, 5, horsexPos + 90, horseY - 40, 18);
    headGrad.addColorStop(0, '#8B5A3C');
    headGrad.addColorStop(1, '#6B4423');
    ctx.fillStyle = headGrad;
    ctx.beginPath();
    ctx.ellipse(horsexPos + 88, horseY - 42, 16, 12, -0.2, 0, Math.PI * 2);
    ctx.fill();
    
    // Horse snout
    ctx.fillStyle = '#A0694F';
    ctx.beginPath();
    ctx.ellipse(horsexPos + 100, horseY - 40, 10, 8, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Nostril
    ctx.fillStyle = '#3D2817';
    ctx.beginPath();
    ctx.arc(horsexPos + 105, horseY - 38, 2, 0, Math.PI * 2);
    ctx.fill();
    
    // Horse eye
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(horsexPos + 88, horseY - 46, 3, 0, Math.PI * 2);
    ctx.fill();
    // Eye shine
    ctx.fillStyle = '#FFF';
    ctx.beginPath();
    ctx.arc(horsexPos + 89, horseY - 47, 1, 0, Math.PI * 2);
    ctx.fill();
    
    // Horse ears
    ctx.fillStyle = '#6B4423';
    ctx.beginPath();
    ctx.moveTo(horsexPos + 78, horseY - 52);
    ctx.lineTo(horsexPos + 74, horseY - 62);
    ctx.lineTo(horsexPos + 82, horseY - 50);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(horsexPos + 92, horseY - 52);
    ctx.lineTo(horsexPos + 96, horseY - 62);
    ctx.lineTo(horsexPos + 88, horseY - 50);
    ctx.closePath();
    ctx.fill();
    
    // Horse mane flowing with better detail
    ctx.fillStyle = '#3D2817';
    for (let i = 0; i < 6; i++) {
        ctx.beginPath();
        ctx.ellipse(horsexPos + 75 - i * 4, horseY - 48 + i * 5, 4, 6, i * 0.2, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // Horse legs with joints
    ctx.fillStyle = '#7A5230';
    // Front left leg
    ctx.fillRect(horsexPos + 15, horseY + 40, 10, 28);
    ctx.fillRect(horsexPos + 15, horseY + 65, 12, 10);
    // Front right leg
    ctx.fillRect(horsexPos + 35, horseY + 43, 10, 28);
    ctx.fillRect(horsexPos + 35, horseY + 68, 12, 10);
    // Back left leg
    ctx.fillRect(horsexPos + 55, horseY + 40, 10, 28);
    ctx.fillRect(horsexPos + 55, horseY + 65, 12, 10);
    // Back right leg
    ctx.fillRect(horsexPos + 75, horseY + 43, 10, 28);
    ctx.fillRect(horsexPos + 75, horseY + 68, 12, 10);
    
    // Hooves
    ctx.fillStyle = '#2C1810';
    ctx.fillRect(horsexPos + 15, horseY + 75, 12, 5);
    ctx.fillRect(horsexPos + 35, horseY + 78, 12, 5);
    ctx.fillRect(horsexPos + 55, horseY + 75, 12, 5);
    ctx.fillRect(horsexPos + 75, horseY + 78, 12, 5);
    
    // Saddle
    ctx.fillStyle = '#8B4513';
    ctx.beginPath();
    ctx.ellipse(horsexPos + 45, horseY + 5, 25, 12, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#A0522D';
    ctx.fillRect(horsexPos + 25, horseY + 5, 40, 8);
    
    // YOUSSEF - Complete and detailed
    const youssefX = horsexPos + 42;
    const youssefY = horseY - 35;
    
    // Legs on saddle
    ctx.fillStyle = '#4A4A4A';
    ctx.fillRect(youssefX - 18, youssefY + 20, 8, 22);
    ctx.fillRect(youssefX + 10, youssefY + 20, 8, 22);
    // Boots
    ctx.fillStyle = '#2C1810';
    ctx.fillRect(youssefX - 18, youssefY + 40, 10, 8);
    ctx.fillRect(youssefX + 10, youssefY + 40, 10, 8);
    
    // Body/Torso
    const torsoGrad = ctx.createLinearGradient(youssefX, youssefY, youssefX, youssefY + 25);
    torsoGrad.addColorStop(0, '#FFD700');
    torsoGrad.addColorStop(1, '#FFA500');
    ctx.fillStyle = torsoGrad;
    ctx.fillRect(youssefX - 10, youssefY, 20, 25);
    
    // Egyptian pattern on shirt
    ctx.fillStyle = '#8B4513';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('☥', youssefX - 3, youssefY + 15);
    
    // Cape flowing dramatically
    ctx.fillStyle = 'rgba(200, 0, 0, 0.7)';
    ctx.beginPath();
    ctx.moveTo(youssefX + 10, youssefY + 5);
    ctx.quadraticCurveTo(youssefX + 35, youssefY + 15, youssefX + 30, youssefY + 40);
    ctx.quadraticCurveTo(youssefX + 20, youssefY + 35, youssefX + 10, youssefY + 20);
    ctx.closePath();
    ctx.fill();
    
    // Arms
    const armAngle = Math.sin(gameFrame * 0.15) * 0.2;
    // Left arm
    ctx.fillStyle = '#FFCBA4';
    ctx.save();
    ctx.translate(youssefX - 10, youssefY + 5);
    ctx.rotate(-0.6 + armAngle);
    ctx.fillRect(-4, 0, 8, 20);
    // Hand
    ctx.beginPath();
    ctx.arc(0, 20, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
    
    // Right arm reaching
    ctx.save();
    ctx.translate(youssefX + 10, youssefY + 5);
    ctx.rotate(0.9 - armAngle);
    ctx.fillRect(-4, 0, 8, 22);
    // Hand
    ctx.beginPath();
    ctx.arc(0, 22, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
    
    // Neck
    ctx.fillStyle = '#FFCBA4';
    ctx.fillRect(youssefX - 5, youssefY - 8, 10, 8);
    
    // Head with gradient
    const youssefHeadGrad = ctx.createRadialGradient(youssefX - 2, youssefY - 20, 3, youssefX, youssefY - 18, 15);
    youssefHeadGrad.addColorStop(0, '#FFEBD6');
    youssefHeadGrad.addColorStop(1, '#FFCBA4');
    ctx.fillStyle = youssefHeadGrad;
    ctx.beginPath();
    ctx.arc(youssefX, youssefY - 18, 14, 0, Math.PI * 2);
    ctx.fill();
    
    // Hair
    ctx.fillStyle = '#1C1C1C';
    ctx.beginPath();
    ctx.ellipse(youssefX, youssefY - 22, 15, 12, 0, Math.PI, 0, false);
    ctx.fill();
    
    // Eyebrows
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(youssefX - 8, youssefY - 22);
    ctx.quadraticCurveTo(youssefX - 5, youssefY - 24, youssefX - 2, youssefY - 22);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(youssefX + 2, youssefY - 22);
    ctx.quadraticCurveTo(youssefX + 5, youssefY - 24, youssefX + 8, youssefY - 22);
    ctx.stroke();
    
    // Eyes
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(youssefX - 5, youssefY - 18, 2.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(youssefX + 5, youssefY - 18, 2.5, 0, Math.PI * 2);
    ctx.fill();
    // Eye shine
    ctx.fillStyle = '#FFF';
    ctx.beginPath();
    ctx.arc(youssefX - 4, youssefY - 19, 1, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(youssefX + 6, youssefY - 19, 1, 0, Math.PI * 2);
    ctx.fill();
    
    // Nose
    ctx.strokeStyle = '#FFCBA4';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(youssefX, youssefY - 15);
    ctx.lineTo(youssefX + 2, youssefY - 12);
    ctx.stroke();
    
    // Smile
    ctx.strokeStyle = '#8B4513';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(youssefX, youssefY - 10, 6, 0.2, Math.PI - 0.2);
    ctx.stroke();
    
    // VLADISLAVA - Complete character
    if (progress < 0.8) {
        const vladX = 100;
        const vladY = 240 + Math.sin(gameFrame * 0.2) * 5;
        
        // Body
        const vladBodyGrad = ctx.createLinearGradient(vladX, vladY, vladX, vladY + 30);
        vladBodyGrad.addColorStop(0, '#FF69B4');
        vladBodyGrad.addColorStop(1, '#FF1493');
        ctx.fillStyle = vladBodyGrad;
        ctx.save();
        ctx.translate(vladX + 20, vladY);
        ctx.rotate(progress * 0.2);
        // Dress
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.quadraticCurveTo(-12, 15, -12, 30);
        ctx.lineTo(12, 30);
        ctx.quadraticCurveTo(12, 15, 0, 0);
        ctx.fill();
        
        // Arms reaching
        ctx.fillStyle = '#FFE0BD';
        ctx.fillRect(-15, 5, 6, 18);
        ctx.fillRect(9, 5, 6, 18);
        ctx.restore();
        
        // Head
        ctx.fillStyle = '#FFE0BD';
        ctx.beginPath();
        ctx.arc(vladX + 20, vladY - 15, 13, 0, Math.PI * 2);
        ctx.fill();
        
        // Hair flowing
        ctx.fillStyle = '#8B4513';
        ctx.beginPath();
        ctx.ellipse(vladX + 20, vladY - 18, 15, 13, 0, Math.PI, 0, false);
        ctx.fill();
        // Hair strands flying
        ctx.beginPath();
        ctx.moveTo(vladX + 8, vladY - 10);
        ctx.quadraticCurveTo(vladX, vladY + 5, vladX + 5, vladY + 20);
        ctx.lineWidth = 4;
        ctx.strokeStyle = '#8B4513';
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(vladX + 32, vladY - 10);
        ctx.quadraticCurveTo(vladX + 40, vladY + 5, vladX + 35, vladY + 20);
        ctx.stroke();
        
        // Eyes wide
        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.arc(vladX + 15, vladY - 15, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(vladX + 25, vladY - 15, 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Mouth (worried)
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(vladX + 20, vladY - 6, 5, 0.2, Math.PI - 0.2, true);
        ctx.stroke();
        
        // Reaching gesture line
        ctx.strokeStyle = '#FFE0BD';
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.moveTo(vladX + 30, vladY + 10);
        ctx.quadraticCurveTo((vladX + youssefX) / 2, vladY - 20, youssefX - 20, youssefY + 15);
        ctx.stroke();
    }
    
    // Kiss moment at 80% progress
    if (progress > 0.75) {
        const kissIntensity = Math.max(0, Math.min(1, (progress - 0.75) / 0.15));
        
        const vladRescueX = youssefX + 12;
        const vladRescueY = youssefY - 10;
        
        // Vlad body on horse
        ctx.fillStyle = '#FF69B4';
        ctx.fillRect(vladRescueX - 8, vladRescueY + 5, 16, 22);
        
        // Vlad head
        ctx.fillStyle = '#FFE0BD';
        ctx.beginPath();
        ctx.arc(vladRescueX, vladRescueY, 13, 0, Math.PI * 2);
        ctx.fill();
        
        // Hair
        ctx.fillStyle = '#8B4513';
        ctx.beginPath();
        ctx.ellipse(vladRescueX, vladRescueY - 3, 14, 12, 0, Math.PI, 0, false);
        ctx.fill();
        
        // Eyes closed (kissing)
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(vladRescueX - 8, vladRescueY - 2);
        ctx.lineTo(vladRescueX - 4, vladRescueY - 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(vladRescueX + 4, vladRescueY - 2);
        ctx.lineTo(vladRescueX + 8, vladRescueY - 2);
        ctx.stroke();
        
        // Kiss hearts bursting
        if (kissIntensity > 0.3) {
            ctx.fillStyle = '#FF1493';
            ctx.font = '24px Arial';
            for (let i = 0; i < 8; i++) {
                const angle = (i / 8) * Math.PI * 2;
                const dist = 35 + kissIntensity * 25;
                const hx = youssefX + 5 + Math.cos(angle) * dist;
                const hy = youssefY - 15 + Math.sin(angle) * dist;
                ctx.globalAlpha = 1 - (gameFrame % 40) / 40;
                ctx.fillText('💕', hx - 8, hy);
            }
            ctx.globalAlpha = 1;
        }
    }
    
    // Dramatic glow
    const glowStrength = Math.sin(gameFrame * 0.1) * 0.3 + 0.5;
    const glow = ctx.createRadialGradient(400, 200, 50, 400, 200, 350);
    glow.addColorStop(0, 'rgba(255, 215, 0, ' + (glowStrength * 0.4) + ')');
    glow.addColorStop(1, 'rgba(255, 100, 150, 0)');
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, 800, 400);
    
    // White flash at kiss moment
    if (progress > 0.88) {
        const flashAlpha = Math.sin((progress - 0.88) / 0.12 * Math.PI) * 0.6;
        ctx.fillStyle = 'rgba(255, 255, 255, ' + flashAlpha + ')';
        ctx.fillRect(0, 0, 800, 400);
    }
}

// ========== JOURNEY CUTSCENES ==========

/**
 * Starts the journey cutscene sequence after sleep
 */
function startJourneyCutscenes() {
    journeyCutsceneActive = true;
    journeyCutsceneIndex = 0;
    journeyCutsceneTimer = JOURNEY_SCENES[0].duration;
    showPyramidDialogue("🌅 Good morning, my love!");
}

/**
 * Updates the journey cutscene
 */
function updateJourneyCutscene() {
    if (!journeyCutsceneActive) return;
    
    journeyCutsceneTimer--;
    
    if (journeyCutsceneTimer <= 0) {
        journeyCutsceneIndex++;
        
        if (journeyCutsceneIndex >= JOURNEY_SCENES.length) {
            // All cutscenes done - show victory
            journeyCutsceneActive = false;
            isPyramidMode = false;
            gameRun = false;
            showVictoryMessage();
            return;
        }
        
        // Move to next scene
        journeyCutsceneTimer = JOURNEY_SCENES[journeyCutsceneIndex].duration;
    }
}

/**
 * Draws the current journey cutscene
 */
function drawJourneyCutscene() {
    if (!journeyCutsceneActive || !ctx) return;
    
    const progress = 1 - (journeyCutsceneTimer / JOURNEY_SCENES[journeyCutsceneIndex].duration);
    const sceneName = JOURNEY_SCENES[journeyCutsceneIndex].name;
    
    // Clear canvas with gradient
    const bgGrad = ctx.createLinearGradient(0, 0, 800, 400);
    bgGrad.addColorStop(0, '#87CEEB');
    bgGrad.addColorStop(1, '#E0F6FF');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 800, 400);
    
    if (sceneName === 'wakeup') {
        drawWakeupScene(progress);
    } else if (sceneName === 'horse') {
        drawHorseRideScene(progress);
    } else if (sceneName === 'wedding') {
        drawWeddingScene(progress);
    }
}

/**
 * Waking up together in the pyramid - ENHANCED
 */
function drawWakeupScene(progress) {
    // Beautiful bedroom with warm lighting
    const bgGrad = ctx.createLinearGradient(0, 0, 0, 400);
    bgGrad.addColorStop(0, '#F5E6D3');
    bgGrad.addColorStop(0.5, '#E8D4C4');
    bgGrad.addColorStop(1, '#8B7355');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 800, 400);
    
    // Walls
    ctx.fillStyle = '#D4B5A0';
    ctx.fillRect(0, 0, 800, 250);
    ctx.fillRect(0, 250, 800, 150);
    
    // Windows with sunrise gradient
    const sunriseGrad = ctx.createLinearGradient(0, 0, 0, 200);
    sunriseGrad.addColorStop(0, '#FF6B35');
    sunriseGrad.addColorStop(0.3, '#FFD700');
    sunriseGrad.addColorStop(1, '#87CEEB');
    ctx.fillStyle = sunriseGrad;
    ctx.fillRect(50, 30, 150, 120);
    ctx.fillRect(600, 30, 150, 120);
    
    // Window frames
    ctx.strokeStyle = '#654321';
    ctx.lineWidth = 4;
    ctx.strokeRect(50, 30, 150, 120);
    ctx.strokeRect(600, 30, 150, 120);
    ctx.moveTo(125, 30);
    ctx.lineTo(125, 150);
    ctx.stroke();
    ctx.moveTo(50, 90);
    ctx.lineTo(200, 90);
    ctx.stroke();
    
    // Golden light rays streaming in
    ctx.strokeStyle = 'rgba(255, 215, 0, ' + (0.2 + progress * 0.5) + ')';
    ctx.lineWidth = 12;
    for (let i = 0; i < 6; i++) {
        ctx.beginPath();
        ctx.moveTo(75 + i * 120, 30);
        ctx.lineTo(100 + i * 120, 400);
        ctx.stroke();
    }
    
    // Beautiful ornate bed frame
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(180, 240, 440, 140);
    
    // Bed frame details
    ctx.strokeStyle = '#D4A574';
    ctx.lineWidth = 3;
    ctx.strokeRect(180, 240, 440, 140);
    
    // Headboard
    ctx.fillStyle = '#654321';
    ctx.fillRect(170, 200, 460, 40);
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 2;
    for (let i = 0; i < 10; i++) {
        ctx.beginPath();
        ctx.arc(190 + i * 42, 220, 8, 0, Math.PI * 2);
        ctx.stroke();
    }
    
    // Luxurious pillows with gradient
    const pillow1Grad = ctx.createLinearGradient(250, 240, 250, 310);
    pillow1Grad.addColorStop(0, '#FFFACD');
    pillow1Grad.addColorStop(1, '#F0E68C');
    ctx.fillStyle = pillow1Grad;
    ctx.beginPath();
    ctx.ellipse(280, 270, 50, 35, -0.2, 0, Math.PI * 2);
    ctx.fill();
    
    const pillow2Grad = ctx.createLinearGradient(550, 240, 550, 310);
    pillow2Grad.addColorStop(0, '#FFFACD');
    pillow2Grad.addColorStop(1, '#F0E68C');
    ctx.fillStyle = pillow2Grad;
    ctx.beginPath();
    ctx.ellipse(520, 270, 50, 35, 0.2, 0, Math.PI * 2);
    ctx.fill();
    
    // Premium silky blanket
    const blanketGrad = ctx.createLinearGradient(200, 300, 600, 370);
    blanketGrad.addColorStop(0, '#FF69B4');
    blanketGrad.addColorStop(0.5, '#FFB6D9');
    blanketGrad.addColorStop(1, '#FF1493');
    ctx.fillStyle = blanketGrad;
    ctx.beginPath();
    ctx.moveTo(200, 300);
    ctx.quadraticCurveTo(300, 280, 400, 300);
    ctx.quadraticCurveTo(500, 280, 600, 300);
    ctx.lineTo(600, 370);
    ctx.lineTo(200, 370);
    ctx.closePath();
    ctx.fill();
    
    // Blanket shadows/wrinkles
    ctx.strokeStyle = 'rgba(255, 20, 147, 0.5)';
    ctx.lineWidth = 3;
    for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo(250 + i * 90, 300);
        ctx.quadraticCurveTo(280 + i * 90, 330, 310 + i * 90, 360);
        ctx.stroke();
    }
    
    // Youssef - Egyptian features (left side)
    const youssefX = 300;
    const youssefY = 270 + Math.sin(progress * Math.PI) * 15;
    
    // Body with gradient
    const youssefBodyGrad = ctx.createLinearGradient(youssefX - 20, youssefY, youssefX + 20, youssefY + 35);
    youssefBodyGrad.addColorStop(0, '#FFDBAC');
    youssefBodyGrad.addColorStop(1, '#FFCBA4');
    ctx.fillStyle = youssefBodyGrad;
    ctx.fillRect(youssefX - 18, youssefY + 5, 36, 35);
    
    // Head with proper shading
    const headGrad = ctx.createRadialGradient(youssefX - 3, youssefY - 3, 2, youssefX, youssefY, 18);
    headGrad.addColorStop(0, '#FFEBD6');
    headGrad.addColorStop(1, '#FFCBA4');
    ctx.fillStyle = headGrad;
    ctx.beginPath();
    ctx.arc(youssefX, youssefY - 12, 18, 0, Math.PI * 2);
    ctx.fill();
    
    // Hair - dark and detailed
    ctx.fillStyle = '#3E2723';
    ctx.beginPath();
    ctx.arc(youssefX, youssefY - 20, 20, 0, Math.PI);
    ctx.fill();
    
    // Facial hair (beard stubble)
    ctx.fillStyle = 'rgba(62, 39, 35, 0.3)';
    ctx.beginPath();
    ctx.ellipse(youssefX, youssefY - 4, 14, 8, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Eyes - waking up and looking at her
    const eyeOpen = Math.min(progress * 3, 1);
    ctx.fillStyle = '#8B6F47';
    ctx.beginPath();
    ctx.ellipse(youssefX - 7, youssefY - 14, 4, 3.5 * eyeOpen, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(youssefX + 7, youssefY - 14, 4, 3.5 * eyeOpen, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Eye pupils pointing right (looking at her)
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(youssefX - 6, youssefY - 14, 1.5 * eyeOpen, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(youssefX + 8, youssefY - 14, 1.5 * eyeOpen, 0, Math.PI * 2);
    ctx.fill();
    
    // Eye shine
    ctx.fillStyle = '#FFF';
    ctx.beginPath();
    ctx.arc(youssefX - 5.5, youssefY - 15, 1, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(youssefX + 8.5, youssefY - 15, 1, 0, Math.PI * 2);
    ctx.fill();
    
    // Nose
    ctx.strokeStyle = '#FFCBA4';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(youssefX, youssefY - 10);
    ctx.lineTo(youssefX, youssefY - 3);
    ctx.stroke();
    
    // Warm loving smile
    ctx.strokeStyle = '#8B6F47';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.arc(youssefX, youssefY - 1, 6, 0, Math.PI);
    ctx.stroke();
    
    // Rosy cheeks
    ctx.fillStyle = 'rgba(255, 100, 120, 0.4)';
    ctx.beginPath();
    ctx.ellipse(youssefX - 12, youssefY - 10, 4, 3, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(youssefX + 12, youssefY - 10, 4, 3, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Vladislava - beautiful and serene (right side)
    const vladX = 500;
    const vladY = 270 + Math.sin((progress + 0.1) * Math.PI) * 15;
    
    // Beautiful silk nightgown
    const nightgownGrad = ctx.createLinearGradient(vladX - 25, vladY, vladX + 25, vladY + 50);
    nightgownGrad.addColorStop(0, '#FFE4E1');
    nightgownGrad.addColorStop(0.5, '#FFD1DC');
    nightgownGrad.addColorStop(1, '#FFC0CB');
    ctx.fillStyle = nightgownGrad;
    ctx.beginPath();
    ctx.moveTo(vladX - 20, vladY + 3);
    ctx.quadraticCurveTo(vladX - 28, vladY + 30, vladX - 20, vladY + 50);
    ctx.lineTo(vladX + 20, vladY + 50);
    ctx.quadraticCurveTo(vladX + 28, vladY + 30, vladX + 20, vladY + 3);
    ctx.closePath();
    ctx.fill();
    
    // Nightgown silk sheen
    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.beginPath();
    ctx.moveTo(vladX - 15, vladY + 5);
    ctx.quadraticCurveTo(vladX - 18, vladY + 25, vladX - 10, vladY + 45);
    ctx.lineWidth = 4;
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.stroke();
    
    // Exposed neck and shoulders area
    const shoulderGrad = ctx.createLinearGradient(vladX - 20, vladY, vladX + 20, vladY + 5);
    shoulderGrad.addColorStop(0, '#FFE4D6');
    shoulderGrad.addColorStop(1, '#FFCAB9');
    ctx.fillStyle = shoulderGrad;
    ctx.beginPath();
    ctx.moveTo(vladX - 20, vladY + 3);
    ctx.quadraticCurveTo(vladX - 22, vladY - 2, vladX, vladY - 5);
    ctx.quadraticCurveTo(vladX + 22, vladY - 2, vladX + 20, vladY + 3);
    ctx.closePath();
    ctx.fill();
    
    // Body underneath (visible upper chest)
    const vladBodyGrad = ctx.createLinearGradient(vladX - 18, vladY - 2, vladX + 18, vladY + 10);
    vladBodyGrad.addColorStop(0, '#FFE4D6');
    vladBodyGrad.addColorStop(1, '#FFCAB9');
    ctx.fillStyle = vladBodyGrad;
    ctx.beginPath();
    ctx.ellipse(vladX, vladY + 5, 18, 8, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Head with beautiful shading
    const vladHeadGrad = ctx.createRadialGradient(vladX - 4, vladY - 4, 2, vladX, vladY, 18);
    vladHeadGrad.addColorStop(0, '#FFEBD6');
    vladHeadGrad.addColorStop(1, '#FFCAB9');
    ctx.fillStyle = vladHeadGrad;
    ctx.beginPath();
    ctx.arc(vladX, vladY - 12, 18, 0, Math.PI * 2);
    ctx.fill();
    
    // Long flowing hair
    ctx.fillStyle = '#D4A574';
    ctx.beginPath();
    ctx.arc(vladX, vladY - 20, 21, 0, Math.PI);
    ctx.fill();
    
    // Hair strand flowing left
    ctx.beginPath();
    ctx.moveTo(vladX - 20, vladY - 12);
    ctx.quadraticCurveTo(vladX - 50, vladY + 20, vladX - 40, vladY + 50);
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#D4A574';
    ctx.stroke();
    
    // Hair strand flowing right
    ctx.beginPath();
    ctx.moveTo(vladX + 20, vladY - 12);
    ctx.quadraticCurveTo(vladX + 50, vladY + 20, vladX + 40, vladY + 50);
    ctx.stroke();
    
    // Eyes - beautiful and peaceful
    const vladEyeOpen = Math.min(progress * 2.5, 1);
    ctx.fillStyle = '#4A90E2';
    ctx.beginPath();
    ctx.ellipse(vladX - 7, vladY - 14, 5, 4 * vladEyeOpen, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(vladX + 7, vladY - 14, 5, 4 * vladEyeOpen, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Eye pupils pointing left (looking at him)
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(vladX - 8, vladY - 14, 2 * vladEyeOpen, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(vladX + 6, vladY - 14, 2 * vladEyeOpen, 0, Math.PI * 2);
    ctx.fill();
    
    // Eye shine - sparkles
    ctx.fillStyle = '#FFF';
    ctx.beginPath();
    ctx.arc(vladX - 7, vladY - 15, 1.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(vladX + 7, vladY - 15, 1.2, 0, Math.PI * 2);
    ctx.fill();
    
    // Delicate nose
    ctx.strokeStyle = '#FFCAB9';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(vladX, vladY - 10);
    ctx.lineTo(vladX, vladY - 3);
    ctx.stroke();
    
    // Gentle loving smile
    ctx.strokeStyle = '#D4A574';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.arc(vladX, vladY - 1, 6, 0, Math.PI);
    ctx.stroke();
    
    // Rosy cheeks
    ctx.fillStyle = 'rgba(255, 120, 140, 0.5)';
    ctx.beginPath();
    ctx.ellipse(vladX - 12, vladY - 10, 5, 4, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(vladX + 12, vladY - 10, 5, 4, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Crown/tiara on her pillow
    if (progress > 0.4) {
        ctx.fillStyle = '#FFD700';
        ctx.shadowColor = 'rgba(255, 215, 0, 0.5)';
        ctx.shadowBlur = 10;
        for (let i = 0; i < 7; i++) {
            ctx.beginPath();
            ctx.arc(vladX - 14 + i * 5, vladY - 25, 2.5, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
    }
    
    // Floating romantic hearts
    if (progress > 0.2) {
        ctx.font = 'bold 50px Arial';
        ctx.globalAlpha = Math.sin((progress - 0.2) / 0.8 * Math.PI) * 0.8;
        
        // Heart 1
        const h1X = 320 + Math.sin(progress * Math.PI * 2) * 40;
        const h1Y = 150 + progress * 100;
        ctx.fillText('💕', h1X - 20, h1Y);
        
        // Heart 2
        const h2X = 480 - Math.cos(progress * Math.PI * 2) * 40;
        const h2Y = 140 + progress * 120;
        ctx.fillText('❤️', h2X - 20, h2Y);
        
        ctx.globalAlpha = 1;
    }
    
    // Beautiful text
    ctx.fillStyle = '#8B4513';
    ctx.font = 'italic bold 28px Arial';
    ctx.textAlign = 'center';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
    ctx.shadowBlur = 4;
    ctx.fillText("We're finally together... 💑", 400, 100);
    ctx.shadowColor = 'transparent';
    ctx.textAlign = 'left';
}

/**
 * Horse ride to the pyramids - ENHANCED
 */
function drawHorseRideScene(progress) {
    // Stunning desert landscape with multiple gradients
    const skyGrad = ctx.createLinearGradient(0, 0, 0, 250);
    skyGrad.addColorStop(0, '#FF9A56');
    skyGrad.addColorStop(0.3, '#FFB74D');
    skyGrad.addColorStop(0.7, '#87CEEB');
    skyGrad.addColorStop(1, '#E0F6FF');
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, 800, 250);
    
    // Ground with golden sand
    const groundGrad = ctx.createLinearGradient(0, 250, 0, 400);
    groundGrad.addColorStop(0, '#F4D03F');
    groundGrad.addColorStop(0.5, '#E8B923');
    groundGrad.addColorStop(1, '#D4A017');
    ctx.fillStyle = groundGrad;
    ctx.fillRect(0, 250, 800, 150);
    
    // Sand dunes with shadows
    ctx.fillStyle = '#D4A017';
    ctx.beginPath();
    ctx.moveTo(0, 300);
    ctx.bezierCurveTo(100, 280, 200, 260, 300, 290);
    ctx.bezierCurveTo(400, 320, 500, 260, 650, 280);
    ctx.bezierCurveTo(700, 290, 750, 300, 800, 310);
    ctx.lineTo(800, 400);
    ctx.lineTo(0, 400);
    ctx.closePath();
    ctx.fill();
    
    // Dune shadows for depth
    ctx.fillStyle = 'rgba(160, 120, 40, 0.4)';
    ctx.beginPath();
    ctx.moveTo(0, 280);
    ctx.quadraticCurveTo(150, 270, 300, 290);
    ctx.quadraticCurveTo(400, 310, 500, 290);
    ctx.lineTo(500, 340);
    ctx.quadraticCurveTo(400, 320, 300, 310);
    ctx.quadraticCurveTo(150, 290, 0, 300);
    ctx.closePath();
    ctx.fill();
    
    // Brilliant sun with glow
    const sunGrad = ctx.createRadialGradient(720, 70, 0, 720, 70, 70);
    sunGrad.addColorStop(0, '#FFE066');
    sunGrad.addColorStop(0.5, '#FFA500');
    sunGrad.addColorStop(1, 'rgba(255, 165, 0, 0)');
    ctx.fillStyle = sunGrad;
    ctx.fillRect(650, 0, 140, 140);
    
    // Sun circle
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.arc(720, 70, 40, 0, Math.PI * 2);
    ctx.fill();
    
    // Distant pyramids becoming visible
    const pyramidAlpha = Math.min(progress * 1.5, 1);
    ctx.fillStyle = 'rgba(218, 165, 32, ' + (0.3 + pyramidAlpha * 0.5) + ')';
    
    // Pyramid 1 (far left)
    ctx.beginPath();
    ctx.moveTo(600, 330);
    ctx.lineTo(640, 220);
    ctx.lineTo(680, 330);
    ctx.closePath();
    ctx.fill();
    
    // Pyramid 2 (center background)
    ctx.beginPath();
    ctx.moveTo(680, 320);
    ctx.lineTo(750, 160);
    ctx.lineTo(820, 320);
    ctx.closePath();
    ctx.fill();
    
    // Horse with refined details
    const horseX = 100 + progress * 550;
    const horseY = 240;
    
    // Horse body with gradient
    const bodyGrad = ctx.createLinearGradient(horseX, horseY, horseX, horseY + 60);
    bodyGrad.addColorStop(0, '#8B6F47');
    bodyGrad.addColorStop(0.5, '#A0826D');
    bodyGrad.addColorStop(1, '#6B5344');
    ctx.fillStyle = bodyGrad;
    ctx.beginPath();
    ctx.ellipse(horseX + 25, horseY + 25, 45, 30, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Horse belly shading
    ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.beginPath();
    ctx.ellipse(horseX + 25, horseY + 35, 35, 18, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Horse neck with proper shading
    ctx.fillStyle = '#A0826D';
    ctx.beginPath();
    ctx.moveTo(horseX + 60, horseY + 15);
    ctx.quadraticCurveTo(horseX + 75, horseY - 20, horseX + 85, horseY - 45);
    ctx.quadraticCurveTo(horseX + 88, horseY - 20, horseX + 95, horseY + 5);
    ctx.quadraticCurveTo(horseX + 75, horseY + 10, horseX + 60, horseY + 20);
    ctx.closePath();
    ctx.fill();
    
    // Neck shading
    ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
    ctx.beginPath();
    ctx.moveTo(horseX + 75, horseY - 20);
    ctx.quadraticCurveTo(horseX + 82, horseY, horseX + 85, horseY + 15);
    ctx.lineTo(horseX + 78, horseY + 10);
    ctx.quadraticCurveTo(horseX + 72, horseY - 10, horseX + 75, horseY - 20);
    ctx.closePath();
    ctx.fill();
    
    // Horse head with detail
    const headGrad = ctx.createRadialGradient(horseX + 85, horseY - 45, 5, horseX + 88, horseY - 42, 25);
    headGrad.addColorStop(0, '#B8956A');
    headGrad.addColorStop(1, '#8B6F47');
    ctx.fillStyle = headGrad;
    ctx.beginPath();
    ctx.ellipse(horseX + 85, horseY - 45, 18, 22, 0.1, 0, Math.PI * 2);
    ctx.fill();
    
    // Snout
    ctx.fillStyle = '#9D7E5D';
    ctx.beginPath();
    ctx.ellipse(horseX + 100, horseY - 42, 10, 8, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Nostrils
    ctx.fillStyle = '#5D3A1A';
    ctx.beginPath();
    ctx.arc(horseX + 97, horseY - 44, 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(horseX + 97, horseY - 40, 2, 0, Math.PI * 2);
    ctx.fill();
    
    // Eye with shine
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(horseX + 80, horseY - 50, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#FFF';
    ctx.beginPath();
    ctx.arc(horseX + 81, horseY - 51, 1.5, 0, Math.PI * 2);
    ctx.fill();
    
    // Ears with detail
    ctx.fillStyle = '#8B6F47';
    ctx.beginPath();
    ctx.ellipse(horseX + 75, horseY - 63, 8, 16, -0.3, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(horseX + 95, horseY - 63, 8, 16, 0.3, 0, Math.PI * 2);
    ctx.fill();
    
    // Ear inner
    ctx.fillStyle = '#FFE4D6';
    ctx.beginPath();
    ctx.ellipse(horseX + 75, horseY - 63, 4, 10, -0.3, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(horseX + 95, horseY - 63, 4, 10, 0.3, 0, Math.PI * 2);
    ctx.fill();
    
    // Flowing mane
    ctx.strokeStyle = '#6B5344';
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo(horseX + 70 + i * 5, horseY - 50);
        ctx.bezierCurveTo(
            horseX + 68 + i * 5, horseY - 75 + Math.sin(progress * Math.PI + i) * 10,
            horseX + 65 + i * 5, horseY - 90,
            horseX + 62 + i * 5, horseY - 100 + Math.sin(progress * Math.PI * 2 + i) * 8
        );
        ctx.stroke();
    }
    
    // Horse legs with animation
    ctx.fillStyle = '#7A5230';
    const legWave = Math.sin(progress * Math.PI * 6) * 12;
    
    // Front left leg
    ctx.fillRect(horseX + 10, horseY + 50, 10, 35);
    // Front right leg
    ctx.fillRect(horseX + 25, horseY + 50 + legWave, 10, 35);
    // Back left leg
    ctx.fillRect(horseX + 40, horseY + 50, 10, 35);
    // Back right leg
    ctx.fillRect(horseX + 55, horseY + 50 + legWave, 10, 35);
    
    // Hooves
    ctx.fillStyle = '#2C1810';
    ctx.fillRect(horseX + 10, horseY + 85, 10, 5);
    ctx.fillRect(horseX + 25, horseY + 85 + legWave, 10, 5);
    ctx.fillRect(horseX + 40, horseY + 85, 10, 5);
    ctx.fillRect(horseX + 55, horseY + 85 + legWave, 10, 5);
    
    // Saddle with detail
    ctx.fillStyle = '#8B4513';
    ctx.beginPath();
    ctx.ellipse(horseX + 30, horseY + 20, 35, 25, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Saddle blanket
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.ellipse(horseX + 30, horseY + 25, 30, 20, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Riders perfectly positioned
    // Youssef (front) - guiding the horse
    const youssefX = horseX + 25;
    const youssefY = horseY - 15;
    
    // Body
    ctx.fillStyle = '#FFE0BD';
    ctx.fillRect(youssefX - 12, youssefY + 5, 24, 28);
    
    // Head
    const youssefHeadGrad = ctx.createRadialGradient(youssefX - 2, youssefY - 8, 2, youssefX, youssefY - 6, 14);
    youssefHeadGrad.addColorStop(0, '#FFEBD6');
    youssefHeadGrad.addColorStop(1, '#FFCBA4');
    ctx.fillStyle = youssefHeadGrad;
    ctx.beginPath();
    ctx.arc(youssefX, youssefY - 10, 14, 0, Math.PI * 2);
    ctx.fill();
    
    // Hair
    ctx.fillStyle = '#3E2723';
    ctx.beginPath();
    ctx.arc(youssefX, youssefY - 18, 15, 0, Math.PI);
    ctx.fill();
    
    // Eyes looking ahead
    ctx.fillStyle = '#8B6F47';
    ctx.beginPath();
    ctx.ellipse(youssefX - 5, youssefY - 12, 2.5, 3, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(youssefX + 5, youssefY - 12, 2.5, 3, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Arms holding reins
    ctx.fillStyle = '#FFE0BD';
    ctx.fillRect(youssefX - 14, youssefY + 8, 6, 16);
    ctx.fillRect(youssefX + 8, youssefY + 8, 6, 16);
    
    // Vladislava (back) - holding him
    const vladX = horseX + 10;
    const vladY = horseY - 20;
    
    // Red/Pink shirt with gradient
    const vladShirtGrad = ctx.createLinearGradient(vladX - 12, vladY + 5, vladX + 12, vladY + 20);
    vladShirtGrad.addColorStop(0, '#FF6B6B');
    vladShirtGrad.addColorStop(0.5, '#FF4757');
    vladShirtGrad.addColorStop(1, '#FF4757');
    ctx.fillStyle = vladShirtGrad;
    ctx.beginPath();
    ctx.moveTo(vladX - 12, vladY + 5);
    ctx.lineTo(vladX + 12, vladY + 5);
    ctx.lineTo(vladX + 12, vladY + 30);
    ctx.quadraticCurveTo(vladX, vladY + 32, vladX - 12, vladY + 30);
    ctx.closePath();
    ctx.fill();
    
    // Shirt shading
    ctx.fillStyle = 'rgba(200, 20, 50, 0.5)';
    ctx.beginPath();
    ctx.moveTo(vladX - 12, vladY + 5);
    ctx.lineTo(vladX - 10, vladY + 5);
    ctx.lineTo(vladX - 10, vladY + 30);
    ctx.quadraticCurveTo(vladX - 8, vladY + 32, vladX - 12, vladY + 30);
    ctx.closePath();
    ctx.fill();
    
    // Body (exposed neck/chest area above shirt)
    ctx.fillStyle = '#FFE0BD';
    ctx.fillRect(vladX - 12, vladY + 3, 24, 3);
    
    // Head
    const vladHeadGrad = ctx.createRadialGradient(vladX - 2, vladY - 8, 2, vladX, vladY - 6, 14);
    vladHeadGrad.addColorStop(0, '#FFEBD6');
    vladHeadGrad.addColorStop(1, '#FFCAB9');
    ctx.fillStyle = vladHeadGrad;
    ctx.beginPath();
    ctx.arc(vladX, vladY - 10, 14, 0, Math.PI * 2);
    ctx.fill();
    
    // Hair flowing in wind
    ctx.fillStyle = '#D4A574';
    ctx.beginPath();
    ctx.arc(vladX, vladY - 18, 15, 0, Math.PI);
    ctx.fill();
    
    // Hair flowing behind
    ctx.beginPath();
    ctx.moveTo(vladX - 14, vladY - 12);
    ctx.quadraticCurveTo(vladX - 60, vladY - 5, vladX - 50, vladY + 30);
    ctx.lineWidth = 6;
    ctx.strokeStyle = '#D4A574';
    ctx.stroke();
    
    // Eyes excited/happy
    ctx.fillStyle = '#4A90E2';
    ctx.beginPath();
    ctx.ellipse(vladX - 5, vladY - 12, 3, 3.5, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(vladX + 5, vladY - 12, 3, 3.5, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Big smile
    ctx.strokeStyle = '#D4A574';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(vladX, vladY - 4, 5, 0, Math.PI);
    ctx.stroke();
    
    // Arms around Youssef
    ctx.fillStyle = '#FFE0BD';
    ctx.fillRect(vladX - 14, vladY + 8, 6, 18);
    ctx.fillRect(vladX + 8, vladY + 8, 6, 18);
    
    // Dust cloud behind horse
    if (progress > 0.3) {
        ctx.fillStyle = 'rgba(210, 180, 140, ' + (progress * 0.4) + ')';
        ctx.beginPath();
        ctx.ellipse(horseX - 40, horseY + 50, 30 + progress * 40, 20, 0, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // Romantic text
    ctx.fillStyle = '#6B5344';
    ctx.font = 'italic bold 28px Arial';
    ctx.textAlign = 'center';
    ctx.shadowColor = 'rgba(255, 255, 255, 0.5)';
    ctx.shadowBlur = 5;
    ctx.fillText("🐎 Riding to forever... 🐎", 400, 100);
    ctx.shadowColor = 'transparent';
    ctx.textAlign = 'left';
}

/**
 * The wedding scene
 */
/**
 * Wedding ceremony - ENHANCED with professional venue graphics
 */
function drawWeddingScene(progress) {
    // Gorgeous garden/ceremony background with sunset
    const skyGrad = ctx.createLinearGradient(0, 0, 0, 150);
    skyGrad.addColorStop(0, '#FF8C42');
    skyGrad.addColorStop(0.3, '#FFB347');
    skyGrad.addColorStop(0.7, '#87CEEB');
    skyGrad.addColorStop(1, '#B0E0E6');
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, 800, 150);
    
    // Golden sun glow
    const sunGrad = ctx.createRadialGradient(750, 50, 0, 750, 50, 80);
    sunGrad.addColorStop(0, 'rgba(255, 200, 0, 0.4)');
    sunGrad.addColorStop(1, 'rgba(255, 200, 0, 0)');
    ctx.fillStyle = sunGrad;
    ctx.fillRect(670, -30, 160, 160);
    
    // Garden grass
    const grassGrad = ctx.createLinearGradient(0, 150, 0, 400);
    grassGrad.addColorStop(0, '#90EE90');
    grassGrad.addColorStop(0.5, '#7CB342');
    grassGrad.addColorStop(1, '#558B2F');
    ctx.fillStyle = grassGrad;
    ctx.fillRect(0, 150, 800, 250);
    
    // Decorative shrubbery background
    ctx.fillStyle = '#2D5016';
    ctx.beginPath();
    ctx.moveTo(0, 200);
    ctx.quadraticCurveTo(100, 150, 200, 180);
    ctx.quadraticCurveTo(300, 140, 400, 170);
    ctx.quadraticCurveTo(500, 140, 600, 180);
    ctx.quadraticCurveTo(700, 150, 800, 200);
    ctx.lineTo(800, 250);
    ctx.lineTo(0, 250);
    ctx.closePath();
    ctx.fill();
    
    // Beautiful arch structure - white marble columns
    ctx.fillStyle = '#F5F5F5';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
    ctx.shadowBlur = 8;
    ctx.fillRect(280, 80, 30, 280);
    ctx.fillRect(490, 80, 30, 280);
    ctx.shadowColor = 'transparent';
    
    // Column capitals (decorative tops)
    ctx.fillStyle = '#FFD700';
    ctx.fillRect(275, 75, 40, 12);
    ctx.fillRect(485, 75, 40, 12);
    
    // Column bases
    ctx.fillRect(275, 355, 40, 12);
    ctx.fillRect(485, 355, 40, 12);
    
    // Column fluting (vertical grooves)
    ctx.strokeStyle = '#E8E8E8';
    ctx.lineWidth = 2;
    for (let i = 0; i < 6; i++) {
        ctx.beginPath();
        ctx.moveTo(285 + i * 5, 90);
        ctx.lineTo(285 + i * 5, 355);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(495 + i * 5, 90);
        ctx.lineTo(495 + i * 5, 355);
        ctx.stroke();
    }
    
    // Magnificent arch curve (gold)
    const archGrad = ctx.createLinearGradient(310, 60, 310, 130);
    archGrad.addColorStop(0, '#FFE066');
    archGrad.addColorStop(0.5, '#FFD700');
    archGrad.addColorStop(1, '#FFA500');
    ctx.fillStyle = archGrad;
    ctx.beginPath();
    ctx.arc(400, 80, 120, Math.PI, 0);
    ctx.lineTo(400, 60);
    ctx.arc(400, 80, 100, 0, Math.PI);
    ctx.closePath();
    ctx.fill();
    
    // Arch shadow depth
    ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
    ctx.beginPath();
    ctx.arc(400, 85, 110, Math.PI, 0);
    ctx.lineTo(400, 75);
    ctx.arc(400, 85, 90, 0, Math.PI);
    ctx.closePath();
    ctx.fill();
    
    // Abundant lush flowers and greenery
    const flowerGroups = [
        {x: 300, y: 95, color: '#FF69B4'}, {x: 350, y: 70, color: '#FF1493'},
        {x: 400, y: 60, color: '#FF006E'}, {x: 450, y: 70, color: '#FF1493'},
        {x: 500, y: 95, color: '#FF69B4'},
        {x: 290, y: 340, color: '#FFD700'}, {x: 510, y: 340, color: '#FFD700'},
        {x: 270, y: 200, color: '#FF69B4'}, {x: 530, y: 200, color: '#FFB6C1'}
    ];
    
    flowerGroups.forEach(group => {
        // Flower petals (5 petals)
        for (let i = 0; i < 5; i++) {
            const angle = (i / 5) * Math.PI * 2;
            const petalX = group.x + Math.cos(angle) * 10;
            const petalY = group.y + Math.sin(angle) * 10;
            ctx.fillStyle = group.color;
            ctx.beginPath();
            ctx.ellipse(petalX, petalY, 5, 8, angle, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Flower center
        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.arc(group.x, group.y, 6, 0, Math.PI * 2);
        ctx.fill();
    });
    
    // Green foliage
    ctx.fillStyle = '#2D5016';
    ctx.beginPath();
    ctx.moveTo(240, 140);
    ctx.quadraticCurveTo(200, 180, 250, 250);
    ctx.quadraticCurveTo(290, 220, 270, 280);
    ctx.closePath();
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(560, 140);
    ctx.quadraticCurveTo(600, 180, 550, 250);
    ctx.quadraticCurveTo(510, 220, 530, 280);
    ctx.closePath();
    ctx.fill();
    
    // GROOM - Youssef in elegant formal suit (left side)
    const groomX = 320 + Math.max(0, progress - 0.3) * 25;
    const groomY = 250;
    
    // Suit jacket with premium gradient
    const suitGrad = ctx.createLinearGradient(groomX - 24, groomY, groomX + 24, groomY);
    suitGrad.addColorStop(0, '#0a0a0a');
    suitGrad.addColorStop(0.5, '#1a1a1a');
    suitGrad.addColorStop(1, '#0a0a0a');
    ctx.fillStyle = suitGrad;
    ctx.beginPath();
    ctx.moveTo(groomX - 24, groomY + 6);
    ctx.lineTo(groomX - 28, groomY + 48);
    ctx.lineTo(groomX - 10, groomY + 52);
    ctx.lineTo(groomX - 8, groomY + 10);
    ctx.arc(groomX, groomY + 8, 8, Math.PI, 0);
    ctx.lineTo(groomX + 8, groomY + 10);
    ctx.lineTo(groomX + 10, groomY + 52);
    ctx.lineTo(groomX + 28, groomY + 48);
    ctx.lineTo(groomX + 24, groomY + 6);
    ctx.closePath();
    ctx.fill();
    
    // Jacket button
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.arc(groomX, groomY + 22, 1.5, 0, Math.PI * 2);
    ctx.fill();
    
    // White dress shirt
    ctx.fillStyle = '#FFF';
    ctx.fillRect(groomX - 10, groomY + 8, 20, 20);
    
    // Black bow tie
    ctx.fillStyle = '#000';
    ctx.fillRect(groomX - 9, groomY + 6, 5, 5);
    ctx.fillRect(groomX + 4, groomY + 6, 5, 5);
    ctx.fillRect(groomX - 4, groomY + 6.5, 8, 4);
    
    // Groom's head - handsome Egyptian features
    const groomHeadGrad = ctx.createRadialGradient(groomX - 2, groomY - 8, 3, groomX, groomY - 5, 20);
    groomHeadGrad.addColorStop(0, '#FFEBD6');
    groomHeadGrad.addColorStop(1, '#FFCBA4');
    ctx.fillStyle = groomHeadGrad;
    ctx.beginPath();
    ctx.arc(groomX, groomY - 10, 18, 0, Math.PI * 2);
    ctx.fill();
    
    // Dark hair - styled crown (covering scalp)
    ctx.fillStyle = '#3E2723';
    ctx.beginPath();
    ctx.ellipse(groomX, groomY - 22, 19, 16, 0, Math.PI, 0, false);
    ctx.fill();
    // Hair fringe to avoid mask look
    ctx.beginPath();
    ctx.moveTo(groomX - 18, groomY - 10);
    ctx.quadraticCurveTo(groomX - 6, groomY - 16, groomX + 2, groomY - 12);
    ctx.quadraticCurveTo(groomX + 14, groomY - 10, groomX + 18, groomY - 4);
    ctx.quadraticCurveTo(groomX + 4, groomY - 8, groomX - 10, groomY - 6);
    ctx.closePath();
    ctx.fill();
    
    // Eyes looking at bride
    ctx.fillStyle = '#8B6F47';
    ctx.beginPath();
    ctx.ellipse(groomX - 6, groomY - 12, 4.5, 5.5, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(groomX + 6, groomY - 12, 4.5, 5.5, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Pupils
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(groomX - 5, groomY - 12, 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(groomX + 7, groomY - 12, 2, 0, Math.PI * 2);
    ctx.fill();
    
    // Eye shine
    ctx.fillStyle = '#FFF';
    ctx.beginPath();
    ctx.arc(groomX - 4, groomY - 13.5, 1.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(groomX + 8, groomY - 13.5, 1.5, 0, Math.PI * 2);
    ctx.fill();
    
    // Smile
    ctx.strokeStyle = '#D4A574';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.arc(groomX, groomY + 1, 7, 0, Math.PI);
    ctx.stroke();
    
    // Rosy cheeks
    ctx.fillStyle = 'rgba(255, 120, 100, 0.35)';
    ctx.beginPath();
    ctx.ellipse(groomX - 13, groomY - 8, 5, 4, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(groomX + 13, groomY - 8, 5, 4, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Arms and hands
    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(groomX - 26, groomY + 12, 8, 32);
    ctx.fillRect(groomX + 18, groomY + 12, 8, 32);

    ctx.fillStyle = '#FFCBA4';
    ctx.beginPath();
    ctx.arc(groomX - 22, groomY + 45, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(groomX + 22, groomY + 45, 6, 0, Math.PI * 2);
    ctx.fill();

    // Trousers and shoes to anchor him on ground
    ctx.fillStyle = '#111';
    ctx.fillRect(groomX - 18, groomY + 52, 12, 38);
    ctx.fillRect(groomX + 6, groomY + 52, 12, 38);
    // Shoe highlights
    ctx.fillStyle = '#222';
    ctx.fillRect(groomX - 18, groomY + 86, 12, 4);
    ctx.fillRect(groomX + 6, groomY + 86, 12, 4);
    
    // BRIDE - Vladislava in stunning white dress (right side)
    const brideX = 480 - Math.max(0, progress - 0.3) * 25;
    const brideY = 240;
    
    // Luxurious wedding dress with full skirt
    const dressGrad = ctx.createLinearGradient(brideX, brideY, brideX, brideY + 80);
    dressGrad.addColorStop(0, '#FFFFFF');
    dressGrad.addColorStop(0.2, '#FFFBF5');
    dressGrad.addColorStop(0.5, '#FFF8F0');
    dressGrad.addColorStop(1, '#FFE4E1');
    ctx.fillStyle = dressGrad;
    
    // Dress bodice
    ctx.beginPath();
    ctx.moveTo(brideX, brideY + 6);
    ctx.bezierCurveTo(brideX - 20, brideY + 10, brideX - 26, brideY + 30, brideX - 28, brideY + 65);
    ctx.lineTo(brideX + 28, brideY + 65);
    ctx.bezierCurveTo(brideX + 26, brideY + 30, brideX + 20, brideY + 10, brideX, brideY + 6);
    ctx.closePath();
    ctx.fill();
    
    // Dress train
    if (progress > 0.2) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.beginPath();
        ctx.moveTo(brideX - 28, brideY + 60);
        ctx.bezierCurveTo(brideX - 50, brideY + 80, brideX - 70 - (progress - 0.2) * 40, brideY + 100, brideX - 60 - (progress - 0.2) * 30, brideY + 140);
        ctx.bezierCurveTo(brideX - 40, brideY + 120, brideX - 30, brideY + 90, brideX - 28, brideY + 65);
        ctx.closePath();
        ctx.fill();
    }
    
    // Pearl details on dress
    ctx.fillStyle = '#FFFACD';
    for (let i = 0; i < 10; i++) {
        ctx.beginPath();
        ctx.arc(brideX - 20 + i * 5, brideY + 18, 1, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // Bride's head
    const brideHeadGrad = ctx.createRadialGradient(brideX - 3, brideY - 12, 3, brideX, brideY - 8, 19);
    brideHeadGrad.addColorStop(0, '#FFEBD6');
    brideHeadGrad.addColorStop(1, '#FFCAB9');
    ctx.fillStyle = brideHeadGrad;
    ctx.beginPath();
    ctx.arc(brideX, brideY - 10, 17, 0, Math.PI * 2);
    ctx.fill();
    
    // Flowing blonde hair
    ctx.fillStyle = '#D4A574';
    ctx.beginPath();
    ctx.arc(brideX, brideY - 23, 18, 0, Math.PI);
    ctx.fill();

    // Arms and hands holding bouquet
    ctx.fillStyle = '#FFE0BD';
    // Left arm
    ctx.save();
    ctx.translate(brideX - 16, brideY + 6);
    ctx.rotate(-0.2);
    ctx.fillRect(-4, 0, 8, 24);
    ctx.beginPath();
    ctx.arc(0, 24, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
    // Right arm toward bouquet
    ctx.save();
    ctx.translate(brideX + 12, brideY + 10);
    ctx.rotate(0.25);
    ctx.fillRect(-3, 0, 7, 20);
    ctx.beginPath();
    ctx.arc(1, 20, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
    
    // Hair curls on sides
    ctx.beginPath();
    ctx.moveTo(brideX - 16, brideY - 12);
    ctx.bezierCurveTo(brideX - 35, brideY, brideX - 40, brideY + 25, brideX - 28, brideY + 40);
    ctx.lineWidth = 6;
    ctx.strokeStyle = '#D4A574';
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(brideX + 16, brideY - 12);
    ctx.bezierCurveTo(brideX + 35, brideY, brideX + 40, brideY + 25, brideX + 28, brideY + 40);
    ctx.stroke();
    
    // Veil flowing
    ctx.fillStyle = 'rgba(255, 255, 255, 0.75)';
    ctx.beginPath();
    ctx.moveTo(brideX - 1, brideY - 24);
    ctx.bezierCurveTo(brideX - 50, brideY - 10, brideX - 55, brideY + 40, brideX - 40, brideY + 75);
    ctx.bezierCurveTo(brideX - 15, brideY + 55, brideX, brideY - 24, brideX + 1, brideY - 24);
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(brideX + 1, brideY - 24);
    ctx.bezierCurveTo(brideX + 50, brideY - 10, brideX + 55, brideY + 40, brideX + 40, brideY + 75);
    ctx.bezierCurveTo(brideX + 15, brideY + 55, brideX, brideY - 24, brideX - 1, brideY - 24);
    ctx.fill();
    
    // Radiant tiara
    ctx.fillStyle = 'rgba(255, 215, 0, 0.5)';
    ctx.beginPath();
    ctx.arc(brideX, brideY - 27, 22, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#FFD700';
    for (let i = 0; i < 9; i++) {
        const angle = (i / 9) * Math.PI;
        const tipX = brideX + Math.cos(angle - Math.PI * 0.5) * 14;
        const tipY = brideY - 27 + Math.sin(angle - Math.PI * 0.5) * 14;
        ctx.beginPath();
        ctx.arc(tipX, tipY, 3, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // Bright blue eyes full of joy
    ctx.fillStyle = '#4A90E2';
    ctx.beginPath();
    ctx.ellipse(brideX - 6, brideY - 13, 5, 6, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(brideX + 6, brideY - 13, 5, 6, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Pupils
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(brideX - 5, brideY - 13, 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(brideX + 7, brideY - 13, 2, 0, Math.PI * 2);
    ctx.fill();
    
    // Eye shine
    ctx.fillStyle = '#FFF';
    ctx.beginPath();
    ctx.arc(brideX - 4, brideY - 14.5, 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(brideX + 8, brideY - 14.5, 2, 0, Math.PI * 2);
    ctx.fill();
    
    // Radiant smile
    ctx.strokeStyle = '#D4A574';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.arc(brideX, brideY + 1, 7, 0, Math.PI);
    ctx.stroke();
    
    // Blushing cheeks
    ctx.fillStyle = 'rgba(255, 150, 160, 0.4)';
    ctx.beginPath();
    ctx.ellipse(brideX - 13, brideY - 7, 6, 5, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(brideX + 13, brideY - 7, 6, 5, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Beautiful bouquet
    ctx.fillStyle = '#FF1493';
    ctx.beginPath();
    ctx.ellipse(brideX + 24, brideY + 38, 15, 20, 0.25, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#FF69B4';
    ctx.beginPath();
    ctx.ellipse(brideX + 20, brideY + 32, 12, 18, 0.25, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#FFD700';
    for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.arc(brideX + 18 + i * 3, brideY + 28, 2, 0, Math.PI * 2);
        ctx.fill();
    }
    
    ctx.fillStyle = '#FFB6D9';
    for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.arc(brideX + 22 + i * 2, brideY + 40, 1.5, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // Falling confetti with animation
    if (progress > 0.3) {
        for (let i = 0; i < 30; i++) {
            const confettiX = 400 + Math.sin((progress + i * 0.05) * Math.PI * 3) * 300;
            const confettiY = (progress - 0.3) / 0.7 * 300 + 80;
            
            if (confettiY < 400) {
                ctx.fillStyle = i % 3 === 0 ? '#FFD700' : i % 3 === 1 ? '#FF69B4' : '#87CEEB';
                ctx.save();
                ctx.translate(confettiX, confettiY);
                ctx.rotate((progress + i) * Math.PI * 2);
                ctx.fillRect(-2, -2, 4, 4);
                ctx.restore();
            }
        }
    }
    
    // Falling hearts
    if (progress > 0.2) {
        ctx.font = '48px Arial';
        for (let i = 0; i < 6; i++) {
            const heartX = 200 + Math.sin(progress * Math.PI + i * 0.5) * 250;
            const heartY = 60 + progress * 300;
            const heartAlpha = Math.max(0, 1 - (progress - 0.2) / 0.5);
            ctx.globalAlpha = heartAlpha * 0.8;
            ctx.fillText('💕', heartX - 15, heartY);
        }
        ctx.globalAlpha = 1;
    }
    
    // Main text message
    ctx.fillStyle = '#8B4513';
    ctx.font = 'italic bold 32px Arial';
    ctx.textAlign = 'center';
    ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
    ctx.shadowBlur = 6;
    ctx.fillText("💍 Forever starts now! 💍", 400, 380);
    ctx.shadowColor = 'transparent';
    ctx.textAlign = 'left';
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

    // Shirt/Top covering torso properly
    const shirtGrad = ctx.createLinearGradient(x + 12, y + 18, x + 28, y + 32);
    shirtGrad.addColorStop(0, '#FF6B9D');
    shirtGrad.addColorStop(0.5, '#FF1493');
    shirtGrad.addColorStop(1, '#FF1493');
    ctx.fillStyle = shirtGrad;
    ctx.beginPath();
    ctx.moveTo(x + 12, y + 18 + bounce);
    ctx.lineTo(x + 28, y + 18 + bounce);
    ctx.lineTo(x + 28, y + 30 + bounce);
    ctx.quadraticCurveTo(x + 20, y + 32 + bounce, x + 12, y + 30 + bounce);
    ctx.closePath();
    ctx.fill();
    
    // Shirt shading
    ctx.fillStyle = 'rgba(199, 21, 133, 0.4)';
    ctx.beginPath();
    ctx.moveTo(x + 12, y + 18 + bounce);
    ctx.lineTo(x + 14, y + 18 + bounce);
    ctx.lineTo(x + 14, y + 30 + bounce);
    ctx.quadraticCurveTo(x + 13, y + 32 + bounce, x + 12, y + 30 + bounce);
    ctx.closePath();
    ctx.fill();

    // Torso/Upper body (just visible at neck/shoulders)
    ctx.fillStyle = "#FFE0BD";
    ctx.fillRect(x + 12, y + 16 + bounce, 16, 3);
    
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
    { text: "Clean", done: false, inProgress: false, x: 200 },
    { text: "Coffee", done: false, inProgress: false, x: 400 },
    { text: "Camel", done: false, inProgress: false, x: 600 }
];

// Romantic bed for final scene
let romanticBed = {
    x: 700,
    y: 280,
    active: false,
    reached: false,
    shakeTimer: 0,
    shakeIntensity: 0,
    sleepSceneActive: false,
    sleepTimer: 0
};
function checkQuests() {
    // Reset hint each frame; set only when actually near
    questHintVisible = false;

    // Keep current active quest alive even if player walks away so progress isn’t lost
    if (!activeQuest || !activeQuest.inProgress) {
        activeQuest = null;
        quests.forEach(q => {
            // Show interact hint when near quest pedestal
            if (!q.done && !q.inProgress && Math.abs(pyramidPlayer.x - q.x) < 45 && pyramidPlayer.onGround) {
                activeQuest = q;
                questHintVisible = true;
            }
        });
    }

    // Activate bed after all quests complete
    if (quests.every(q => q.done) && !romanticBed.active) {
        romanticBed.active = true;
        showPyramidDialogue("💕 All tasks done! Now go to the bed! 💕");
    }

    // Check if player reached the bed
    if (romanticBed.active && !romanticBed.reached && Math.abs(pyramidPlayer.x - romanticBed.x) < 60) {
        romanticBed.reached = true;
        romanticBed.shakeTimer = 120; // shorter shake before sleep
        romanticBed.shakeIntensity = 4;
        showPyramidDialogue("💕💕💕");
    }

    // Update bed shake timer
    if (romanticBed.shakeTimer > 0) {
        romanticBed.shakeTimer--;

        // After shaking finishes, start sleep scene
        if (romanticBed.shakeTimer === 0 && !romanticBed.sleepSceneActive) {
            romanticBed.sleepSceneActive = true;
            romanticBed.sleepTimer = 240; // ~4 seconds of sleeping
            isSleeping = true;
            showPyramidDialogue("😴 Shhh... Sleeping together at last.");
        }
    }

    // Drive sleep timer and then finish
    if (romanticBed.sleepSceneActive && romanticBed.sleepTimer > 0) {
        romanticBed.sleepTimer--;
        if (romanticBed.sleepTimer === 0) {
            isSleeping = false;
            // Start journey cutscenes
            startJourneyCutscenes();
        }
    }
}

// --- Enhanced Level 2 Quest System ---
let activeQuest = null;
let questHintVisible = false;
let dustSpots = [];
let coffeeHold = 0;
let camelPet = 0;

function startQuest(q) {
    q.inProgress = true;
    questHintVisible = false;
    activeQuest = q;

    if (q.text === 'Clean') {
        // Spawn dust spots to collect
        dustSpots = Array.from({ length: 5 }).map(() => ({
            x: 80 + Math.random() * 640,
            y: 250 + Math.random() * 40,
            r: 6,
            collected: false
        }));
        showPyramidDialogue('🧹 Help me clean! Collect 5 dust spots.');
    }
    if (q.text === 'Coffee') {
        coffeeHold = 0;
        showPyramidDialogue('☕ Hold E to brew the perfect coffee!');
    }
    if (q.text === 'Camel') {
        camelPet = 0;
        showPyramidDialogue('🐪 Pet the camel gently! Hold E for a moment.');
    }
}

function completeQuest(q, message) {
    q.done = true;
    q.inProgress = false;
    activeQuest = null;
    showPyramidDialogue(message || ('✅ ' + q.text + ' Done!'));
}

function handleQuestInteractions() {
    if (!activeQuest) return;
    const q = activeQuest;

    // CLEAN: collect dust spots on overlap
    if (q.text === 'Clean') {
        dustSpots.forEach(ds => {
            if (!ds.collected && Math.abs((pyramidPlayer.x + 20) - ds.x) < 18 && Math.abs((pyramidPlayer.y + 40) - ds.y) < 18) {
                ds.collected = true;
                particlesArr.push({ x: ds.x, y: ds.y, vx: Math.random() - 0.5, vy: -1 - Math.random(), life: 30, color: '#FFD700' });
            }
        });
        if (dustSpots.every(ds => ds.collected)) {
            completeQuest(q, '🧹 All clean! You’re amazing!');
        }
    }

    // COFFEE: hold E to fill progress
    if (q.text === 'Coffee') {
        if (keys['KeyE']) coffeeHold = Math.min(120, coffeeHold + 1); else coffeeHold = Math.max(0, coffeeHold - 2);
        if (coffeeHold >= 120) completeQuest(q, '☕ Perfect brew! Warm hearts, warm coffee!');
    }

    // CAMEL: automatic quest - just collect it by being nearby
    if (q.text === 'Camel') {
        // Simple automatic completion when player is nearby
        if (Math.abs((pyramidPlayer.x + 20) - 600) < 100) {
            completeQuest(q, '🐪 The camel is so friendly!');
        }
    }
}

function drawQuestUI() {
    if (!isPyramidMode || !ctx) return;

    // Interact hint
    if (questHintVisible && activeQuest && !activeQuest.inProgress) {
        ctx.fillStyle = 'rgba(0,0,0,0.6)';
        ctx.fillRect(activeQuest.x - 60, 170, 120, 30);
        ctx.fillStyle = '#FFD700';
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Press E to start ' + activeQuest.text, activeQuest.x, 190);
        ctx.textAlign = 'left';
    }

    // Clean quest dust spots
    if (activeQuest && activeQuest.text === 'Clean') {
        dustSpots.forEach(ds => {
            if (ds.collected) return;
            ctx.fillStyle = 'rgba(200,200,200,0.8)';
            ctx.beginPath();
            ctx.arc(ds.x, ds.y, ds.r, 0, Math.PI * 2);
            ctx.fill();
        });
    }

    // Coffee progress bar
    if (activeQuest && activeQuest.text === 'Coffee') {
        const w = 160, h = 16;
        ctx.fillStyle = 'rgba(0,0,0,0.5)';
        ctx.fillRect(activeQuest.x - w / 2, 180, w, h);
        ctx.fillStyle = '#8B4513';
        ctx.fillRect(activeQuest.x - w / 2 + 2, 182, (w - 4) * (coffeeHold / 120), h - 4);
        ctx.fillStyle = '#FFD700';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Hold E to brew', activeQuest.x, 176);
        ctx.textAlign = 'left';
    }

    // Camel meeting (no progress bar needed)
    if (activeQuest && activeQuest.text === 'Camel') {
        ctx.fillStyle = '#FFD700';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Get close to camel 🐪', activeQuest.x, 176);
        ctx.textAlign = 'left';
    }
}

function showVictoryMessage() {
    gameRun = false;
    const overlay = document.getElementById('game-overlay');
    const title = document.getElementById('overlay-title');
    const msg = document.getElementById('overlay-msg');
    if (overlay) overlay.style.display = 'flex';
    if (title) title.innerText = "🎉 HAPPY 25TH BIRTHDAY! 💍";
    if (msg) msg.innerHTML = "From Kyiv to Cairo, through pyramids and love... 🌍💕<br><br>Waking up together, riding horses, and saying 'I do'... 🐎💒<br><br>Forever starts now with you! 💖💍<br><br>I love you more than words can express! 🌹❤️";
}

// Backward-compatibility: some code references showVictory()
function showVictory() {
    showVictoryMessage();
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

    // Ensure sleep is off when starting level 2
    isSleeping = false;
    romanticBed.sleepSceneActive = false;
    romanticBed.sleepTimer = 0;

    // Initialize enhanced quest system state
    quests.forEach(q => { q.done = false; q.inProgress = false; });
    activeQuest = null;
    questHintVisible = false;
    dustSpots = [];
    coffeeHold = 0;
    camelPet = 0;

    // Initialize extra gameplay for level 2
    initPyramidExtras();

    function loop() {
        if (!isPyramidMode) return;

        ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);

        // If journey cutscene is active, show it
        if (journeyCutsceneActive) {
            updateJourneyCutscene();
            drawJourneyCutscene();
        }
        // If rescue cutscene is playing, handle it
        else if (rescueCutsceneActive) {
            updateRescueCutscene();
            drawRescueCutscene();
        } else {
            drawPyramidInterior();
            
            // Normal pyramid gameplay
            updatePyramidPlayer();
            checkQuests();
            handleQuestInteractions();

            // Extras: update and render ankhs, traps, scarabs
            updatePyramidExtras();
            drawPyramidExtras();

            // Draw player on top of extras unless sleeping
            if (!isSleeping) {
                drawPyramidPlayer();
            }

            // Quest UI overlays last
            drawQuestUI();

            // Handle invulnerability countdown in pyramid mode
            if (player.inv > 0) player.inv--;
        }

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

// Canvas Setup
const gameCanvas = document.getElementById('game-canvas');
const ctx = gameCanvas ? gameCanvas.getContext('2d') : null;

// Device Detection
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
let canvasScale = 1;

// Game State
let gameFrame = 0;
let gameRun = false;
let animFrame;
let isPyramidMode = false;
let isSleeping = false;

// Game Progress
let score = 0;
let distance = GAME_CONFIG.totalDistance;
let level = 1;

// Player State
let player = {
    x: 100,
    y: 300,
    w: 40,
    h: 60,
    vy: 0,
    g: 0.55,
    jp: -12,
    gr: true,
    hearts: 4,
    inv: 0
};

// Game Objects
let obstacles = [];
let clouds = [];
let particlesArr = [];
let mountains = [];

// Cutscene State
let isCutscene = false;
let cutsceneTimer = 0;
let youssef = { x: 800, y: 300, w: 40, h: 60 };
// Journey Cutscenes System
let journeyCutsceneActive = false;
let journeyCutsceneIndex = 0;
let journeyCutsceneTimer = 0;
const JOURNEY_SCENES = [
    { name: 'wakeup', duration: 240 },
    { name: 'horse', duration: 300 },
    { name: 'wedding', duration: 360 }
];

// Rescue System
let rescueCutsceneActive = false;
let rescueCutsceneTimer = 0;
let lastCheckpoint = { x: 100, y: 260 };
let pyramidCheckpoints = [];

// Dialogue Tracking
let dialogueShown1 = false;
let dialogueShown2 = false;
let dialogueShown3 = false;
let dialogueShown4 = false;
let dialogueShown5 = false;

// Journey Dialogues Configuration
const dialogues = [
    { dist: 2387, text: "Starting from snowy Kyiv! Running to my love in Egypt! 🏃‍♀️💨❄️" },
    { dist: 1900, text: "Leaving Ukraine... every step brings me closer to you! 💪❤️" },
    { dist: 1200, text: "Flying through the sky, my heart soars to you! ✈️💕" },
    { dist: 700, text: "The pyramids are calling! Almost to Egypt! 🏜️" },
    { dist: 300, text: "I can feel the warmth of Egypt... and your love! 🌟" },
    { dist: 50, text: "I'M ALMOST THERE! Cairo awaits! 💍🇪🇬" }
];

// ========== RENDERING HELPERS ==========

/**
 * Creates a radial gradient with consistent pattern
 * @param {number} x - Center X coordinate
 * @param {number} y - Center Y coordinate
 * @param {number} innerRadius - Inner radius
 * @param {number} outerRadius - Outer radius
 * @param {Array} colorStops - Array of {stop, color} objects
 * @returns {CanvasGradient} The gradient
 */
function createRadialGrad(x, y, innerRadius, outerRadius, colorStops) {
    const grad = ctx.createRadialGradient(x, y, innerRadius, x, y, outerRadius);
    colorStops.forEach(cs => grad.addColorStop(cs.stop, cs.color));
    return grad;
}

/**
 * Creates a linear gradient
 * @param {number} x1 - Start X
 * @param {number} y1 - Start Y
 * @param {number} x2 - End X
 * @param {number} y2 - End Y
 * @param {Array} colorStops - Array of {stop, color} objects
 * @returns {CanvasGradient} The gradient
 */
function createLinearGrad(x1, y1, x2, y2, colorStops) {
    const grad = ctx.createLinearGradient(x1, y1, x2, y2);
    colorStops.forEach(cs => grad.addColorStop(cs.stop, cs.color));
    return grad;
}

/**
 * Draws a glowing circle effect
 * @param {number} x - Center X
 * @param {number} y - Center Y
 * @param {number} radius - Glow radius
 * @param {string} color - RGB color string
 * @param {number} alpha - Alpha transparency
 */
function drawGlow(x, y, radius, color, alpha = 0.3) {
    const grad = createRadialGrad(x, y, 0, radius, [
        { stop: 0, color: color.replace(')', `, ${alpha})`) },
        { stop: 1, color: color.replace(')', ', 0)') }
    ]);
    ctx.fillStyle = grad;
    ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
}

/**
 * Sets up the canvas with proper dimensions
 */
function setupCanvas() {
    if (!gameCanvas) return;

    gameCanvas.width = GAME_CONFIG.canvasWidth;
    gameCanvas.height = GAME_CONFIG.canvasHeight;
}

/**
 * Opens the game modal and initializes the game
 */
function openFlashGame() {
    document.getElementById('flash-game-modal').style.display = 'flex';
    setupCanvas();
    initGame();
}

/**
 * Closes the game modal and stops the game loop
 */
function closeFlashGame() {
    document.getElementById('flash-game-modal').style.display = 'none';
    gameRun = false;
    if (animFrame) cancelAnimationFrame(animFrame);
}

/**
 * Initializes/resets the game to starting state
 */
function initGame() {
    // Reset player state
    player.y = 300;
    player.vy = 0;
    player.hearts = 4;
    player.inv = 0;
    player.x = 100;
    
    // Reset game progress
    score = 0;
    distance = GAME_CONFIG.totalDistance;
    level = 1;
    
    // Clear game objects
    obstacles = [];
    clouds = [];
    particlesArr = [];
    mountains = [];
    
    // Reset cutscene state
    isCutscene = false;
    youssef.x = 800;
    cutsceneTimer = 0;
    
    // Reset dialogue flags
    dialogueShown1 = false;
    dialogueShown2 = false;
    dialogueShown3 = false;
    dialogueShown4 = false;
    dialogueShown5 = false;

    // Initialize background elements
    for (let i = 0; i < 5; i++) {
        clouds.push({
            x: Math.random() * 800,
            y: Math.random() * 150 + 20,
            speed: Math.random() * 0.5 + 0.1
        });
    }
    
    for (let i = 0; i < 4; i++) {
        mountains.push({
            x: i * 250,
            h: 100 + Math.random() * 150
        });
    }

    // Start the game
    gameRun = true;
    showDialogue(dialogues[0].text);
    gameLoop();
}

function gameLoop() {
    if (!gameRun || !ctx) return;
    ctx.clearRect(0, 0, 800, 400);

    // If rescue cutscene is active, play it instead of normal game
    if (rescueCutsceneActive) {
        updateRescueCutscene();
        drawRescueCutscene();
    } else {
        // Normal runner game
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
    
    }  // Close the else block for rescue cutscene check

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
            // Travel obstacles: clouds (decorative), balloons, flying hearts
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
            // Clouds are decorative in travel zone
            else if (obs.type === 'cloud') {
                // No damage
            }
            // All other obstacles damage the player
            else if (player.inv <= 0) {
                player.hearts--;
                player.inv = 60;
                createGameParticles(player.x, player.y, 10, '#ff0000');
                if (player.hearts <= 0) {
                    // Trigger rescue cutscene instead of immediate game over
                    startRescueCutsceneRunner();
                }
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
    quests.forEach(q => { q.done = false; q.inProgress = false; });

    // Reset romantic bed and sleep state
    romanticBed.active = false;
    romanticBed.reached = false;
    romanticBed.shakeTimer = 0;
    romanticBed.shakeIntensity = 0;
    romanticBed.sleepSceneActive = false;
    romanticBed.sleepTimer = 0;
    romanticBed.ankhReady = false;
    isSleeping = false;

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

    // Shadow with depth
    const shadowGrad = ctx.createRadialGradient(x + 20, y + 58 + bounce, 0, x + 20, y + 58 + bounce, 20);
    shadowGrad.addColorStop(0, 'rgba(0, 0, 0, 0.3)');
    shadowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = shadowGrad;
    ctx.beginPath();
    ctx.ellipse(x + 20, y + 58 + bounce, 18, 6, 0, 0, Math.PI * 2);
    ctx.fill();

    // Legs with gradient and shading
    ctx.save();
    const legGrad = ctx.createLinearGradient(x, y + 45, x, y + 60);
    legGrad.addColorStop(0, '#FFE0BD');
    legGrad.addColorStop(0.5, '#FFCBA4');
    legGrad.addColorStop(1, '#FFB89E');
    ctx.fillStyle = legGrad;

    // Left leg
    ctx.fillRect(x + 12, y + 45 + bounce, 7, 13);
    // Right leg
    ctx.fillRect(x + 23, y + 45 + bounce, 7, 13);

    // Leg shading
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(x + 17, y + 45 + bounce, 5, 13);

    // Shoes with shine
    ctx.fillStyle = '#FF1493';
    ctx.beginPath();
    ctx.ellipse(x + 15, y + 57 + bounce, 5, 3, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(x + 26, y + 57 + bounce, 5, 3, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Shoe shine
    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.beginPath();
    ctx.arc(x + 14, y + 56 + bounce, 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x + 25, y + 56 + bounce, 2, 0, Math.PI * 2);
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
    
    // Dress shading on sides
    ctx.fillStyle = 'rgba(199, 21, 133, 0.4)';
    ctx.beginPath();
    ctx.moveTo(x + 20, y + 25 + bounce);
    ctx.quadraticCurveTo(x + 5, y + 35 + bounce, x + 5, y + 50 + bounce);
    ctx.lineTo(x + 8, y + 50 + bounce);
    ctx.quadraticCurveTo(x + 8, y + 38 + bounce, x + 20, y + 27 + bounce);
    ctx.fill();

    // Dress decoration - ornate pattern
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(x + 20, y + 35 + bounce, 8, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.arc(x + 20, y + 35 + bounce, 2, 0, Math.PI * 2);
    ctx.fill();
    
    // Dress hem pattern
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 1;
    for (let i = 0; i < 30; i++) {
        const angle = (i / 30) * Math.PI * 2;
        const rad = 17;
        const px = x + 20 + Math.cos(angle) * rad;
        const py = y + 50 + bounce + Math.sin(angle) * 3;
        if (i === 0) ctx.beginPath();
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
    }
    ctx.stroke();

    // Shirt/Top (pink magenta with gradient)
    const shirtGrad = ctx.createLinearGradient(x + 13, y + 20, x + 27, y + 32);
    shirtGrad.addColorStop(0, '#FF69B4');
    shirtGrad.addColorStop(0.5, '#FF1493');
    shirtGrad.addColorStop(1, '#FF1493');
    ctx.fillStyle = shirtGrad;
    // Shirt body with collar
    ctx.beginPath();
    ctx.moveTo(x + 13, y + 20 + bounce);
    ctx.lineTo(x + 27, y + 20 + bounce);
    ctx.lineTo(x + 27, y + 31 + bounce);
    ctx.quadraticCurveTo(x + 20, y + 33 + bounce, x + 13, y + 31 + bounce);
    ctx.closePath();
    ctx.fill();
    
    // Shirt shading/depth
    ctx.fillStyle = 'rgba(199, 21, 133, 0.5)';
    ctx.beginPath();
    ctx.moveTo(x + 13, y + 20 + bounce);
    ctx.quadraticCurveTo(x + 15, y + 26 + bounce, x + 13, y + 31 + bounce);
    ctx.lineTo(x + 15, y + 31 + bounce);
    ctx.quadraticCurveTo(x + 16, y + 26 + bounce, x + 15, y + 20 + bounce);
    ctx.closePath();
    ctx.fill();

    // Torso (exposed just above shirt)
    ctx.fillStyle = '#FFE0BD';
    ctx.fillRect(x + 13, y + 18 + bounce, 14, 4);

    // Arms with animation and shading
    ctx.fillStyle = '#FFE0BD';
    // Left arm
    ctx.save();
    ctx.translate(x + 12, y + 24 + bounce);
    ctx.rotate(-0.3 + armSwing);
    ctx.fillRect(-3, 0, 5, 12);
    // Arm shading
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(-1, 0, 2, 12);
    ctx.restore();

    // Right arm
    ctx.save();
    ctx.translate(x + 28, y + 24 + bounce);
    ctx.rotate(0.3 - armSwing);
    ctx.fillRect(-2, 0, 5, 12);
    // Arm shading
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, 2, 12);
    ctx.restore();
    
    // Hands with gradient
    const handGrad = ctx.createRadialGradient(x, y + 30, 0, x, y + 30, 5);
    handGrad.addColorStop(0, '#FFEBD6');
    handGrad.addColorStop(1, '#FFD7B5');
    ctx.fillStyle = handGrad;
    ctx.beginPath();
    ctx.arc(x + 7, y + 36 + bounce, 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x + 33, y + 36 + bounce, 3, 0, Math.PI * 2);
    ctx.fill();

    // Neck with shading
    const neckGrad = ctx.createLinearGradient(x + 17, y + 14, x + 23, y + 20);
    neckGrad.addColorStop(0, '#FFE0BD');
    neckGrad.addColorStop(1, '#FFCBA4');
    ctx.fillStyle = neckGrad;
    ctx.fillRect(x + 17, y + 14 + bounce, 6, 6);

    // Head with gradient
    const headGrad = ctx.createRadialGradient(x + 18, y + 8 + bounce, 2, x + 20, y + 12 + bounce, 15);
    headGrad.addColorStop(0, '#FFEBD6');
    headGrad.addColorStop(0.7, '#FFE0BD');
    headGrad.addColorStop(1, '#FFD7B5');
    ctx.fillStyle = headGrad;
    ctx.beginPath();
    ctx.arc(x + 20, y + 12 + bounce, 13, 0, Math.PI * 2);
    ctx.fill();
    
    // Head shading
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.beginPath();
    ctx.arc(x + 20, y + 12 + bounce, 13, Math.PI / 2, Math.PI * 1.5);
    ctx.fill();

    // Hair - long flowing with volume
    const hairGrad = ctx.createLinearGradient(x, y, x, y + 40);
    hairGrad.addColorStop(0, '#8B4513');
    hairGrad.addColorStop(0.5, '#6B3410');
    hairGrad.addColorStop(1, '#5D4037');
    ctx.fillStyle = hairGrad;

    // Main hair volume
    ctx.beginPath();
    ctx.arc(x + 20, y + 8 + bounce, 16, Math.PI, 0);
    ctx.fill();
    
    // Hair center highlight
    const hairHighlight = ctx.createLinearGradient(x + 12, y, x + 28, y + 20);
    hairHighlight.addColorStop(0, 'rgba(139, 69, 19, 0.6)');
    hairHighlight.addColorStop(1, 'rgba(139, 69, 19, 0)');
    ctx.fillStyle = hairHighlight;
    ctx.beginPath();
    ctx.arc(x + 20, y + 8 + bounce, 14, Math.PI + 0.5, Math.PI * 2 - 0.5);
    ctx.fill();

    // Hair strands flowing with waves
    ctx.fillStyle = '#5D4037';
    ctx.beginPath();
    ctx.moveTo(x + 6, y + 12 + bounce);
    ctx.quadraticCurveTo(x + 2, y + 20 + bounce, x + 3, y + 32 + bounce);
    ctx.quadraticCurveTo(x + 5, y + 40 + bounce, x + 10, y + 44 + bounce);
    ctx.quadraticCurveTo(x + 4, y + 32 + bounce, x + 7, y + 16 + bounce);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(x + 34, y + 12 + bounce);
    ctx.quadraticCurveTo(x + 38, y + 20 + bounce, x + 37, y + 32 + bounce);
    ctx.quadraticCurveTo(x + 35, y + 40 + bounce, x + 30, y + 44 + bounce);
    ctx.quadraticCurveTo(x + 36, y + 32 + bounce, x + 33, y + 16 + bounce);
    ctx.fill();

    // Eyes with sparkle and expression
    ctx.fillStyle = '#8B4513';
    let blinkFrame = gameFrame % 180;
    if (blinkFrame < 8) {
        // Blinking
        ctx.fillRect(x + 13, y + 12 + bounce, 5, 2);
        ctx.fillRect(x + 23, y + 12 + bounce, 5, 2);
    } else {
        // Open eyes with iris
        ctx.beginPath();
        ctx.arc(x + 15, y + 12 + bounce, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x + 25, y + 12 + bounce, 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Pupils
        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.arc(x + 15, y + 13 + bounce, 1.8, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x + 25, y + 13 + bounce, 1.8, 0, Math.PI * 2);
        ctx.fill();

        // Eye shine/sparkle with glow
        ctx.fillStyle = '#FFF';
        ctx.beginPath();
        ctx.arc(x + 16, y + 11 + bounce, 1.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x + 26, y + 11 + bounce, 1.5, 0, Math.PI * 2);
        ctx.fill();
        
        // Extra sparkle
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.beginPath();
        ctx.arc(x + 16.5, y + 10.5 + bounce, 0.7, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x + 26.5, y + 10.5 + bounce, 0.7, 0, Math.PI * 2);
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

    // Crown/Tiara with sparkles and gradient
    const crownGrad = ctx.createLinearGradient(x + 8, y - 4, x + 32, y + 6);
    crownGrad.addColorStop(0, '#FFD700');
    crownGrad.addColorStop(0.5, '#FFA500');
    crownGrad.addColorStop(1, '#FFD700');
    ctx.fillStyle = crownGrad;
    ctx.strokeStyle = '#FF8C00';
    ctx.lineWidth = 2;
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
    
    // Crown band detail
    ctx.strokeStyle = '#FF8C00';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x + 10, y + 6 + bounce);
    ctx.lineTo(x + 30, y + 6 + bounce);
    ctx.stroke();

    // Crown jewels with glow
    const jewelGrad = ctx.createRadialGradient(x + 20, y - 3 + bounce, 0, x + 20, y - 3 + bounce, 3);
    jewelGrad.addColorStop(0, '#FF1493');
    jewelGrad.addColorStop(0.7, '#FF69B4');
    jewelGrad.addColorStop(1, 'rgba(255, 20, 147, 0)');
    ctx.fillStyle = jewelGrad;
    ctx.beginPath();
    ctx.arc(x + 20, y - 3 + bounce, 3, 0, Math.PI * 2);
    ctx.fill();
    
    // Jewel center
    ctx.fillStyle = '#FF1493';
    ctx.beginPath();
    ctx.arc(x + 20, y - 3 + bounce, 1.8, 0, Math.PI * 2);
    ctx.fill();
    
    // Jewel shine
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.arc(x + 21, y - 4 + bounce, 0.8, 0, Math.PI * 2);
    ctx.fill();
    
    // Side jewels
    ctx.fillStyle = 'rgba(255, 215, 0, 0.8)';
    ctx.beginPath();
    ctx.arc(x + 12, y - 1 + bounce, 1.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x + 28, y - 1 + bounce, 1.2, 0, Math.PI * 2);
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
    else if (isPyramidMode) {
        // If near a quest and not started, start it on tap/click
        if (activeQuest && !activeQuest.inProgress) {
            startQuest(activeQuest);
        } else if (pyramidPlayer.onGround) {
            // Jump in pyramid mode
            pyramidPlayer.vy = -pyramidPlayer.jumpPower;
            pyramidPlayer.onGround = false;
        }
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