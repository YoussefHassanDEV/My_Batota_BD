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
    const dList = ["7,846 miles of love connecting us 💕", "12,623 kilometers but hearts are touching 💗", "0 miles apart in my heart ❤️"];
    const distEl = document.getElementById('distanceDisplay');
    if (distEl) distEl.textContent = dList[Math.floor(Date.now() / 4000) % 3];
}

// Start main timer
setInterval(updatePageContent, 1000);

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
let score = 0, distance = 1000, level = 1;
let player = { x: 100, y: 300, w: 40, h: 60, vy: 0, g: 0.5, jp: -10, gr: true, hearts: 3, inv: 0 };
let obstacles = [], clouds = [], particlesArr = [], mountains = [];
let isCutscene = false, youssef = { x: 800, y: 300, w: 40, h: 60 }, cutsceneTimer = 0;

// Mobile detection and canvas scaling
let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
let canvasScale = 1;

const dialogues = [
    { dist: 1000, text: "It's my birthday! Running to Youssef! 🏃‍♀️💨" },
    { dist: 700, text: "The distance is far, but love is stronger! 💪❤️" },
    { dist: 300, text: "It's getting dark... I see a light! 🌟" },
    { dist: 50, text: "I'M ALMOST THERE! 💍" }
];

function setupCanvas() {
    if (!gameCanvas) return;
    
    const container = document.getElementById('game-container');
    const rect = container.getBoundingClientRect();
    
    // Set canvas internal resolution
    gameCanvas.width = 800;
    gameCanvas.height = 400;
    
    // Scale for mobile
    if (isMobile) {
        canvasScale = rect.width / 800;
    }
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
    player.y = 300; player.vy = 0; player.hearts = 3; player.inv = 0; player.x = 100;
    score = 0; distance = 1000; level = 1;
    obstacles = []; clouds = []; particlesArr = []; mountains = [];
    isCutscene = false; youssef.x = 800; cutsceneTimer = 0;

    for (let i = 0; i < 5; i++) clouds.push({ x: Math.random() * 800, y: Math.random() * 150 + 20, speed: Math.random() * 0.5 + 0.1 });
    for (let i = 0; i < 4; i++) mountains.push({ x: i * 250, h: 100 + Math.random() * 150 });

    gameRun = true;
    showDialogue(dialogues[0].text);
    gameLoop();
}

function gameLoop() {
    if (!gameRun || !ctx) return;
    ctx.clearRect(0, 0, 800, 400);
    
    // Sky gradient based on level
    let skyGrad = ctx.createLinearGradient(0, 0, 0, 400);
    if (level === 1) {
        skyGrad.addColorStop(0, '#87CEEB');
        skyGrad.addColorStop(1, '#E0F6FF');
    } else if (level === 2) {
        skyGrad.addColorStop(0, '#FFDAB9');
        skyGrad.addColorStop(1, '#FFE4B5');
    } else {
        skyGrad.addColorStop(0, '#191970');
        skyGrad.addColorStop(1, '#4B0082');
    }
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, 800, 400);
    
    // Sun/Moon
    ctx.beginPath();
    ctx.arc(700, 50, 30, 0, Math.PI * 2);
    ctx.fillStyle = level === 3 ? '#FFFACD' : '#FFD700';
    ctx.fill();
    ctx.strokeStyle = level === 3 ? '#FFF' : '#FFA500';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Mountains
    mountains.forEach(m => {
        if (!isCutscene) m.x -= 0.5;
        if (m.x < -300) m.x = 800;
        ctx.fillStyle = level === 3 ? '#2F4F4F' : '#8B7355';
        ctx.beginPath();
        ctx.moveTo(m.x, 340);
        ctx.lineTo(m.x + 150, 340 - m.h);
        ctx.lineTo(m.x + 300, 340);
        ctx.fill();
    });

    // Clouds
    ctx.fillStyle = 'rgba(255,255,255,0.8)';
    clouds.forEach(c => {
        if (!isCutscene) c.x -= c.speed;
        if (c.x < -100) c.x = 900;
        ctx.beginPath();
        ctx.arc(c.x, c.y, 20, 0, Math.PI * 2);
        ctx.arc(c.x + 20, c.y - 10, 25, 0, Math.PI * 2);
        ctx.arc(c.x + 40, c.y, 20, 0, Math.PI * 2);
        ctx.fill();
    });

    if (isCutscene) updateCutscene(); else update();
    draw();
    animFrame = requestAnimationFrame(gameLoop);
}

function update() {
    gameFrame++;
    player.vy += player.g;
    player.y += player.vy;
    if (player.y > 300) { player.y = 300; player.vy = 0; player.gr = true; }
    
    distance -= 0.15;
    if (distance < 700 && level === 1) { level = 2; showDialogue(dialogues[1].text); }
    if (distance < 300 && level === 2) { level = 3; showDialogue(dialogues[2].text); }
    if (distance < 50 && level === 3) { level = 4; showDialogue(dialogues[3].text); }
    if (distance <= 0) { startEndingCutscene(); return; }

    // Spawn obstacles (less frequent on mobile)
    const spawnRate = isMobile ? 150 : 120;
    if (gameFrame % spawnRate === 0 && distance > 50) {
        let type = Math.random() > 0.4 ? (Math.random() > 0.5 ? 'rock' : 'bird') : 'heart';
        let obsY = type === 'bird' ? 220 : 325;
        if (type === 'heart') obsY = Math.random() * 50 + 230;
        obstacles.push({ x: 850, y: obsY, type: type, w: 30, h: 30, active: true });
    }

    for (let i = obstacles.length - 1; i >= 0; i--) {
        let obs = obstacles[i];
        obs.x -= 3;

        if (obs.active && player.x < obs.x + obs.w - 5 && player.x + player.w > obs.x + 5 &&
            player.y < obs.y + obs.h - 5 && player.y + player.h > obs.y + 5) {
            if (obs.type === 'heart') {
                score += 100;
                if (player.hearts < 3) player.hearts++;
                createGameParticles(obs.x, obs.y, 10, '#ff6b9d');
                obs.active = false;
            } else if (player.inv <= 0) {
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
}

function updateCutscene() {
    cutsceneTimer++;
    if (player.x < youssef.x - 40) {
        player.x += 2;
        player.y = 300 + Math.sin(cutsceneTimer * 0.5) * 2;
    } else {
        player.y = 300;
        if (cutsceneTimer % 20 === 0) createGameParticles(player.x + 30, player.y - 10, 2, '#ff6b9d');
        if (cutsceneTimer > 250) endGame(true);
    }
}

function draw() {
    // Ground
    ctx.fillStyle = '#7ec850';
    ctx.fillRect(0, 340, 800, 60);
    ctx.fillStyle = '#5d4037';
    ctx.fillRect(0, 370, 800, 30);

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
        if (obs.type === 'rock') drawRock(obs.x, obs.y);
        else if (obs.type === 'bird') drawBird(obs.x, obs.y);
        else if (obs.type === 'heart') {
            ctx.fillStyle = '#ff0000';
            let pulse = Math.sin(gameFrame * 0.1) * 2;
            ctx.font = (24 + pulse) + "px Arial";
            ctx.fillText("❤️", obs.x, obs.y + 20);
        }
    });

    // Particles
    for (let i = particlesArr.length - 1; i >= 0; i--) {
        let p = particlesArr[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life--;
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, 3, 3);
        if (p.life <= 0) particlesArr.splice(i, 1);
    }
}

function drawChibiPlayer(x, y) {
    let bounce = player.gr ? Math.sin(gameFrame * 0.2) * 2 : 0;
    
    // Body
    ctx.fillStyle = '#FF69B4';
    ctx.beginPath();
    ctx.moveTo(x + 20, y + 25 + bounce);
    ctx.lineTo(x + 5, y + 55 + bounce);
    ctx.lineTo(x + 35, y + 55 + bounce);
    ctx.fill();
    
    // Torso
    ctx.fillStyle = '#5D4037';
    ctx.fillRect(x + 5, y + 15 + bounce, 30, 25);
    
    // Head
    ctx.fillStyle = '#FFE0BD';
    ctx.beginPath();
    ctx.arc(x + 20, y + 15 + bounce, 14, 0, Math.PI * 2);
    ctx.fill();
    
    // Hair
    ctx.fillStyle = '#5D4037';
    ctx.beginPath();
    ctx.arc(x + 20, y + 13 + bounce, 16, Math.PI, 0);
    ctx.fill();
    
    // Eyes
    ctx.fillStyle = '#000';
    if (gameFrame % 150 < 5) {
        ctx.fillRect(x + 14, y + 14 + bounce, 4, 1);
        ctx.fillRect(x + 24, y + 14 + bounce, 4, 1);
    } else {
        ctx.beginPath();
        ctx.arc(x + 16, y + 14 + bounce, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x + 26, y + 14 + bounce, 2, 0, Math.PI * 2);
        ctx.fill();
    }
}

function drawYoussef(x, y) {
    // Head
    ctx.fillStyle = '#FFE0BD';
    ctx.beginPath();
    ctx.arc(x + 20, y + 15, 14, 0, Math.PI * 2);
    ctx.fill();
    
    // Hair
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(x + 20, y + 12, 15, Math.PI, 0);
    ctx.fill();
    
    // Eyes
    ctx.beginPath();
    ctx.arc(x + 16, y + 14, 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x + 26, y + 14, 2, 0, Math.PI * 2);
    ctx.fill();
    
    // Body
    ctx.fillStyle = '#4169E1';
    ctx.fillRect(x + 10, y + 25, 20, 20);
    
    // Legs
    ctx.fillStyle = '#333';
    ctx.fillRect(x + 10, y + 45, 9, 15);
    ctx.fillRect(x + 21, y + 45, 9, 15);
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
    if (dialogBox && dialogBox.style.display === 'block') {
        dialogBox.style.display = 'none';
        gameRun = true;
        gameLoop();
    } else if (gameRun && player.gr && !isCutscene) {
        player.vy = player.jp;
        player.gr = false;
        createGameParticles(player.x + 20, player.y + 60, 5, '#fff');
    }
}

function endGame(win) {
    gameRun = false;
    const overlay = document.getElementById('game-overlay');
    const title = document.getElementById('overlay-title');
    const msg = document.getElementById('overlay-msg');
    if (overlay) overlay.style.display = 'flex';
    if (title) title.innerText = win ? "HAPPY BIRTHDAY! 🎉" : "GAME OVER 💔";
    if (msg) msg.innerText = win ? "I LOVE YOU FOREVER! ❤️💍" : "Don't give up! Try again my love! 💪";
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