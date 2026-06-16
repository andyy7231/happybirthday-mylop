/**
 * ✨ EDIT THIS FILE to customize the birthday greeting! ✨
 *
 * This is the ONLY file you need to modify.
 * No need to touch HTML, CSS, or any other JavaScript files.
 *
 * AVAILABLE SECTION TYPES:
 *   "greeting"      → Opening greeting with recipient's name
 *   "announcement"  → Birthday announcement text
 *   "chatbox"       → Chat message with typing animation
 *   "ideas"         → Sequential text reveals, one by one
 *   "quote"         → Styled quote card with optional author
 *   "countdown"     → Animated 3-2-1 countdown
 *   "stars"         → Twinkling stars background
 *   "fireworks"     → Colorful firework sparks burst
 *   "balloons"      → Floating balloon animation
 *   "profile"       → Profile photo with birthday wish
 *   "confetti"      → Confetti burst animation
 *   "closing"       → Closing message with replay button
 *   "timeline"      → [NEW] Scrollable memories timeline
 *   "wishes_future" → [NEW] Parallax wishes text
 *   "climax"        → [NEW] Starry confession screen
 */

const CONFIG = {
  // ── Recipient Info ────────────────────────────────────────────
  name: "allifa",
  photo: "./img/allifa.jpeg",       // Place your photo in the img/ folder
  music: "./music/half_a_heart.mp3",      // Place your music in the music/ folder

  // ── Theme Colors ──────────────────────────────────────────────
  // A toggle button lets the viewer switch between dark & light mode.
  colors: {
    primary: "#f472b6",           // Main accent color (rose pink)
    accent: "#60a5fa",            // Secondary accent color (sky blue)
    dark: {
      background: "radial-gradient(circle at center, #1d0718 0%, #040106 100%)",      // Premium Dark Pink to Black
      text: "#f1f5f9",            // Slate 100
    },
    light: {
      background: "radial-gradient(circle at center, #fff1f6 0%, #fafaf9 100%)",      // Light Pink to Stone
      text: "#1e293b",            // Slate 800
    },
  },

  // ── Default Color Mode ────────────────────────────────────────
  // Options: "dark" or "light"
  defaultMode: "dark",

  // ── Sections ──────────────────────────────────────────────────
  // Add, remove, duplicate, or reorder as you wish!
  sections: [
    {
      type: "greeting",
      title: "Hey, Beautiful ♡",
      subtitle: "There are billions of people in this world,<br>yet somehow my heart chose you.<br>And honestly, I would choose you again and again.",
    },
    {
      type: "countdown",
      from: 3,                    // Countdown from this number
      goText: "🎂✨",              // Text shown after countdown ends
      texts: {
        3: "For all the memories we have created.",
        2: "For all the laughter you brought into my life.",
        1: "For the most beautiful girl born on this day."
      }
    },
    {
      type: "announcement",
      texts: [
        "Today isn't just another day.",
        "It's the day the world was blessed with someone truly extraordinary.",
        "Happy Birthday, My Love ♡"
      ]
    },
    {
      type: "chatbox",
      message: "If someone asked me what my favorite blessing is...\n\nI wouldn't mention money.\nI wouldn't mention success.\n\nI would simply mention you.\n\nThank you for existing.\nThank you for bringing warmth into my life.\n\nAnd thank you for becoming one of the most beautiful chapters in my story.\n\nHappy Birthday, Sayang ♡",
      buttonText: "Send",
    },
    {
      type: "ideas",
      lines: [
        "I wanted to buy you flowers.",
        "But flowers eventually wither.",
        "I wanted to buy you gifts.",
        "But gifts can fade with time.",
        "Then I realized...",
        "What I truly wanted...",
        "Was to create something that could hold my feelings forever.",
        "So I made this.",
        "Just for you."
      ],
      bigLetters: "FOREVER",
    },
    {
      type: "quote",
      text: "In another life,\nin another universe,\nin every version of my existence...\n\nI think I would still fall in love with you.",
      author: "Yours, Always.",
    },
    {
      type: "balloons",
      count: 25,
    },
    {
      type: "profile",
      wishTitle: "To The Girl Who Makes My World Brighter",
      wishText: "I pray that happiness finds you wherever you go.\n\nMay your dreams come true.\nMay your smile never fade.\nMay your heart always be filled with peace.\n\nAnd whenever life becomes difficult,\nI hope you remember that you will never have to face it alone.\n\nBecause I will always be here,\ncheering for you,\nsupporting you,\nand loving you.\n\nToday.\nTomorrow.\nAnd every day after that.",
    },
    {
      type: "timeline",
      title: "Our Story",
      milestones: [
        {
          title: "The day we met",
          desc: "A simple hello that changed everything.",
          img: "./img/story1.jpg"
        },
        {
          title: "The day we became close",
          desc: "Talking for hours, sharing secrets, and realizing how special you are.",
          img: "./img/story2.jpg"
        },
        {
          title: "The first time we laughed together",
          desc: "Your laugh became my favorite sound in the world.",
          img: "./img/story3.jpg"
        },
        {
          title: "The moment I realized...",
          desc: "That I was falling head over heels in love with you.",
          img: "./img/story4.jpg"
        },
        {
          title: "Today",
          desc: "Celebrating you, the best thing that ever happened to me.",
          img: "./img/story5.jpg"
        },
        {
          title: "And many beautiful tomorrows",
          desc: "Looking forward to walking side by side with you, forever.",
          img: "./img/story6.jpg"
        }
      ]
    },
    {
      type: "wishes_future",
      lines: [
        "I hope one day...",
        "We'll celebrate your birthday together.",
        "Not through a screen.",
        "Not through distance.",
        "But side by side.",
        "Blowing candles.",
        "Laughing together.",
        "Creating memories.",
        "And growing old together."
      ]
    },
    {
      type: "song_reflection",
    },
    {
      type: "climax",
      lines: [
        "Out of everyone I could have met...",
        "I'm grateful that life brought me to you.",
        "Thank you for being part of my happiness.",
        "Thank you for being you.",
        "And if I could make one wish today...",
        "I wish that this won't be the last birthday I celebrate with you.",
        "Happy Birthday, My Love.",
        "I love you.",
        "More than words could ever explain.",
        "♡"
      ]
    },
    {
      type: "fireworks",
      count: 24,
    },
    {
      type: "confetti",
      count: 9,
    },
    {
      type: "closing",
      text: "Made with love,<br>by someone who is endlessly grateful to have you.<br><br>♡",
      replayText: "Click here to watch again.",
    },
  ],
};
