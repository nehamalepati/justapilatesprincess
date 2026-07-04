/* ============================================================
   Exercise Library data — edit me!
   Each exercise:
     name        — what it's called
     nickname    — optional italic subtitle (sanskrit / desi / cute name)
     category    — one of: "Desi-lates", "Restorative", "Stretch & Recovery",
                   "Morning Mobility", "Slowburn", "Sunset Shakeout",
                   "Moonlight Stretch", "Prenatal", "Mommy & Me"
     level       — Beginner / Intermediate / Advanced / All levels
     focus       — short "what it works" line shown on the card
     level       — Beginner / All levels / Intermediate
     duration    — rough time or rep guidance
     steps       — array of instruction strings, in Neha's voice
     cue         — one signature coaching cue (shown highlighted)
     videoId     — YouTube video ID (the part after watch?v=).
                   Leave as "" until you film it — a pretty
                   "video coming soon" card shows instead.
   ============================================================ */

const EXERCISES = [
  {
    name: "Chai Cat-Cow",
    nickname: "your spine's morning chai",
    category: "Morning Mobility",
    focus: "Spinal mobility · warm-up",
    level: "Beginner",
    duration: "8–10 slow rounds",
    steps: [
      "Come to hands and knees — wrists under shoulders, knees under hips.",
      "Inhale: drop your belly, lift your chest and tailbone, gaze softly forward (cow).",
      "Exhale: press the floor away, round your spine to the ceiling, let your head hang heavy (cat).",
      "Move at the speed of your breath, not the speed of your playlist.",
      "On your last round, pause in neutral and notice how much smoother your spine feels."
    ],
    cue: "Imagine steam rising off morning chai — let the movement be that slow and warm.",
    videoId: ""
  },
  {
    name: "Namaste Roll-Down",
    nickname: "standing spine melt",
    category: "Morning Mobility",
    focus: "Spine articulation · hamstrings",
    level: "Beginner",
    duration: "4–6 rounds",
    steps: [
      "Stand tall, feet hip-width, palms together at your heart in namaste.",
      "Inhale to grow an inch taller through the crown of your head.",
      "Exhale: nod your chin and peel down one vertebra at a time, arms melting toward the floor.",
      "Hang heavy for a breath — bend your knees as much as you like.",
      "Inhale and restack from the tailbone up, returning palms to heart."
    ],
    cue: "Peel down like you're unrolling a silk saree — one fold at a time, never dumped all at once.",
    videoId: ""
  },
  {
    name: "Standing Leg Float",
    nickname: "balance, but make it slowburn",
    category: "Slowburn",
    focus: "Balance · glutes · deep core",
    level: "All levels",
    duration: "45 seconds per side",
    steps: [
      "Stand tall, feet hip-width, and take a breath to find your safe neutral — ribs over hips, weight even through both feet.",
      "Slowly pour your weight into your left foot and float your right knee up toward hip height.",
      "Stay for three slow breaths — arms out like wings, or palms together at your heart.",
      "Exhale: reach the floating leg long behind you and hover the toes, hinging slightly forward.",
      "Wobbles are welcome. Come back to center with control and switch sides."
    ],
    cue: "Wobbling isn't failing — it's your balance literally being written into your nervous system.",
    videoId: ""
  },
  {
    name: "Slow-Motion Side Kick Series",
    nickname: "the classic, at half speed",
    category: "Slowburn",
    focus: "Outer hips · obliques · control",
    level: "All levels",
    duration: "8 reps per move, per side",
    steps: [
      "Lie on your side, propped on your forearm or with your head resting on your arm — whole body in one long line.",
      "Float your top leg to hip height and pause. This is home base; find your safe neutral here.",
      "Sweep the leg forward for two slow counts, then back for two — without letting your ribs or hips rock.",
      "Add slow circles: four one way, four the other, like you're stirring chai with your toes.",
      "Breathe the whole time. If you're shaking by the last rep, that's the slowburn doing exactly its job. Switch sides."
    ],
    cue: "Move like you're underwater — slow is where the burn lives, and you never have to hold your breath to earn it.",
    videoId: ""
  },
  {
    name: "Lotus Hundred",
    nickname: "the classic, desi-fied",
    category: "Desi-lates",
    focus: "Deep core · breath endurance",
    level: "All levels",
    duration: "100 beats (10 breaths)",
    steps: [
      "Lie on your back, legs in tabletop (or crossed loosely at the ankles for lotus vibes).",
      "Curl your head and shoulders up, reaching your arms long by your hips.",
      "Pump your arms like you're keeping time to the dhol — inhale for 5 pumps, exhale for 5.",
      "Keep your lower back gently pressing into the mat the whole time.",
      "Beginners: keep your head down and knees bent. Same core, less neck."
    ],
    cue: "Your arms are the rhythm section — your core is the melody. Don't let the drums take over.",
    videoId: ""
  },
  {
    name: "Kathak Wrist Circles & Arm Waves",
    nickname: "grace is strength",
    category: "Desi-lates",
    focus: "Shoulders · wrists · posture",
    level: "Beginner",
    duration: "2–3 minutes",
    steps: [
      "Sit tall and cross-legged, shoulders stacked over hips.",
      "Extend your arms to the sides and draw slow, elegant wrist circles — 8 each way.",
      "Ripple a wave from one fingertip, through elbows and shoulders, to the other fingertip, like a kathak mudra.",
      "Keep your ribs stacked — the movement lives in the arms, the stillness lives in the core.",
      "Finish with palms together overhead, then float them down to your heart."
    ],
    cue: "Channel your inner classical dancer — every fingertip knows where it's going.",
    videoId: ""
  },
  {
    name: "Diya Side Bend",
    nickname: "seated mermaid, desi edition",
    category: "Desi-lates",
    focus: "Obliques · side body length",
    level: "All levels",
    duration: "5 per side",
    steps: [
      "Sit cross-legged with one hand resting on the mat beside you.",
      "Inhale: sweep the other arm up and over, arching like a flame bending in a breeze.",
      "Exhale: press gently through the grounded hand and lengthen — don't collapse into the bottom side.",
      "Inhale back to center, switch sides.",
      "Keep both sitting bones heavy on the mat the whole time."
    ],
    cue: "Be the diya flame — it bends, it glows, it never falls over.",
    videoId: ""
  },
  {
    name: "Shake-It-Out Standing Swings",
    nickname: "permission to flop",
    category: "Sunset Shakeout",
    focus: "Spine · shoulders · nervous system",
    level: "Beginner",
    duration: "2–3 minutes",
    steps: [
      "Stand feet wider than hips, knees soft, arms completely loose.",
      "Twist gently side to side and let your arms swing and flop against your body like empty sleeves.",
      "Let the twist travel up your spine — hips, ribs, then shoulders, head coming along last.",
      "After a minute, add a little bounce through the knees on every swing.",
      "To finish, slow the swings gradually until you're still — notice how much quieter your body feels."
    ],
    cue: "This is the human version of a dog shaking off water — undignified, and exactly the point.",
    videoId: ""
  },
  {
    name: "Downshift Flow",
    nickname: "restless energy's exit route",
    category: "Sunset Shakeout",
    focus: "Full body · breath · release",
    level: "All levels",
    duration: "4–5 rounds",
    steps: [
      "Start on hands and knees with three quick, flowing cat-cows — faster than your morning ones.",
      "Tuck your toes and press to down dog, pedaling your heels like you're walking off the day.",
      "Walk your hands back to your feet, hang heavy for one breath, then roll up to standing.",
      "Reach both arms high on an inhale; exhale and swan-dive back down.",
      "Each round, move a little slower — you're downshifting gears until your body idles calm."
    ],
    cue: "Start at the speed of your restlessness and finish at the speed of your breath.",
    videoId: ""
  },
  {
    name: "Aramandi Foundations",
    nickname: "the half-sit that starts it all",
    category: "Desi-lates",
    focus: "Legs · posture · turnout",
    level: "Beginner",
    duration: "3–4 minutes",
    steps: [
      "Stand with heels together, toes turned out — your first bharatanatyam position.",
      "Bend your knees over your toes and sink halfway down into aramandi, spine tall like a string is lifting your crown.",
      "Bring palms together at your heart in namaskar hasta.",
      "Pulse gently eight times, keeping your pelvis neutral — pilates brain, dancer's shape.",
      "Rise, shake out your legs, and repeat two more rounds."
    ],
    cue: "Aramandi is your new safe neutral — sit into it like a throne, not a squat.",
    videoId: ""
  },
  {
    name: "Adavu Tempo Series",
    nickname: "footwork meets core",
    category: "Desi-lates",
    focus: "Coordination · legs · deep core",
    level: "Intermediate",
    duration: "3 rounds of 8",
    steps: [
      "From aramandi, stamp the tatta adavu — flat-foot strikes on a steady beat, eight per side.",
      "Add alternating hasta arms, keeping your ribs stacked while your feet keep time.",
      "Between rounds, come down to the mat for a thirty-second hundred hold.",
      "Back up to aramandi and repeat at a slightly quicker tempo each round.",
      "Finish with one slow round at half speed — control is the flex."
    ],
    cue: "The beat keeps you honest — your core keeps you royal.",
    videoId: ""
  },
  {
    name: "Abhinaya Story Flow",
    nickname: "tell the story with your whole body",
    category: "Desi-lates",
    focus: "Full body · balance · artistry",
    level: "Advanced",
    duration: "one continuous 5-minute flow",
    steps: [
      "Open seated and cross-legged with slow neck and eye isolations — let your gaze lead, alarippu style.",
      "Roll back into a teaser and hold, arms in mudra instead of reaching long.",
      "Transition through side plank, top arm sweeping a hasta arc overhead.",
      "Rise to aramandi for four controlled jumps (or pulses on lower-energy days).",
      "Close with a slow bow to your own practice — the flow ends the way a piece ends on stage."
    ],
    cue: "By now the moves are yours — the flow is just you, telling a story your body already knows.",
    videoId: ""
  },
  {
    name: "Moonrise Figure-Four",
    nickname: "hips, but make it gentle",
    category: "Moonlight Stretch",
    focus: "Hips · glutes · lower back",
    level: "Beginner",
    duration: "90 seconds per side",
    steps: [
      "Lie on your back, knees bent, feet flat.",
      "Cross your right ankle over your left thigh, flexing the right foot.",
      "Thread your hands behind your left thigh and draw the legs gently toward you.",
      "Keep your head and shoulders heavy on the mat — this is a stretch, not a crunch.",
      "Breathe into the right hip for 90 seconds, then switch."
    ],
    cue: "Ninety seconds feels long because it's working. Stay for one more slow breath than you want to.",
    videoId: ""
  },
  {
    name: "Sleepy Spinal Twist",
    nickname: "the goodnight pose",
    category: "Moonlight Stretch",
    focus: "Spine · digestion · nervous system",
    level: "Beginner",
    duration: "2 minutes per side",
    steps: [
      "Lie on your back and hug both knees into your chest.",
      "Let both knees fall to the right, arms wide like a T, gaze drifting left.",
      "Let gravity do 100% of the work — your only job is breathing.",
      "Stack a pillow under your knees if they don't reach the floor. Comfort is the pose.",
      "After two minutes, drag your knees through center and melt to the other side."
    ],
    cue: "This is the last stretch before bed for a reason — do it on your mattress if you want. I won't tell.",
    videoId: ""
  },
  {
    name: "Golden Milk Neck Melt",
    nickname: "for scrolling necks everywhere",
    category: "Stretch & Recovery",
    focus: "Neck · upper traps",
    level: "Beginner",
    duration: "1 minute per side",
    steps: [
      "Sit tall, right hand resting lightly on top of your head (no pulling!).",
      "Drop your right ear toward your right shoulder and let the head get heavy.",
      "Reach your left fingertips toward the floor to deepen the stretch.",
      "Breathe into the left side of your neck for 5–8 slow breaths.",
      "Lift your head with your hand's help, then switch sides."
    ],
    cue: "The hand is a warm blanket, not a crowbar. Weight, not force.",
    videoId: ""
  },
  {
    name: "Pigeon with Pillows",
    nickname: "recovery day royalty",
    category: "Stretch & Recovery",
    focus: "Hip flexors · glutes",
    level: "All levels",
    duration: "2–3 minutes per side",
    steps: [
      "From hands and knees, bring your right knee toward your right wrist, shin angled comfortably.",
      "Slide your left leg long behind you, hips square.",
      "Stack pillows or a cushion under your right hip until you feel supported, not wobbly.",
      "Fold forward over the front leg onto stacked fists or a pillow.",
      "Stay and breathe. When you're done, switch sides — the second side always feels different."
    ],
    cue: "Props aren't cheating, they're royalty behavior. A supported hip releases; a straining hip guards.",
    videoId: ""
  },
  {
    name: "First-Trimester Pelvic Tilts",
    nickname: "tiny movement, big relief",
    category: "Prenatal",
    focus: "Lower back · pelvic awareness",
    level: "Beginner",
    duration: "10–12 slow reps",
    steps: [
      "Lie on your back (first trimester) or stand against a wall (second and third), knees soft.",
      "Inhale: let your pelvis rock gently forward, low back lifting slightly.",
      "Exhale: draw your lower belly in and tuck your tailbone, pressing the low back toward the mat or wall.",
      "Keep it small and smooth — this is a rocking chair, not a rollercoaster.",
      "Always check in with your provider before starting or continuing prenatal exercise."
    ],
    cue: "Your pelvis is a bowl of warm haldi doodh — tip it gently, spill nothing.",
    videoId: ""
  },
  {
    name: "Supported Goddess Squat",
    nickname: "birth-prep strength",
    category: "Prenatal",
    focus: "Legs · pelvic floor · hips",
    level: "All levels",
    duration: "5 breaths × 3 rounds",
    steps: [
      "Stand with feet wide, toes turned out, hands on a chair back or countertop for support.",
      "Inhale at the top; exhale as you bend your knees and sink until you feel steady work in your legs.",
      "Keep your chest proud and your weight in your heels.",
      "Breathe 5 slow breaths at your depth, then press up through your heels.",
      "Skip the depth and shorten the holds any day your body says so — pregnancy strength is adaptive strength."
    ],
    cue: "You are literally a goddess. Stand like it — wide, grounded, unbothered.",
    videoId: ""
  },
  {
    name: "Baby-Gazing Bridge",
    nickname: "core rebuild, snuggles included",
    category: "Mommy & Me",
    focus: "Glutes · pelvic floor · core",
    level: "Beginner",
    duration: "8–10 reps",
    steps: [
      "Lie on your back, knees bent, with baby sitting supported on your hips (or lying on your chest).",
      "Exhale: gently lift your pelvic floor and lower belly, then peel your hips up one vertebra at a time.",
      "Pause at the top — you get eye contact, baby gets a ride, everyone wins.",
      "Inhale at the top; exhale to roll down slowly, ribs first, tailbone last.",
      "Cleared for exercise postpartum? Great. Not yet? Bookmark this one — it'll wait for you."
    ],
    cue: "Exhale before you lift — your breath is the seatbelt, the movement is the car.",
    videoId: ""
  },
  {
    name: "Peek-a-Boo Push-Up",
    nickname: "the giggle generator",
    category: "Mommy & Me",
    focus: "Chest · arms · core",
    level: "All levels",
    duration: "6–8 reps × 2 rounds",
    steps: [
      "Lay baby on their back on the mat and take a kneeling push-up position above them.",
      "Inhale: bend your elbows and lower toward baby — say 'peek-a-boo!' at the bottom.",
      "Exhale: press the floor away to rise back up.",
      "Keep a straight line from knees to head — no sagging through the low back.",
      "Reps end when your form fades or the giggles turn to snack demands, whichever comes first."
    ],
    cue: "Best resistance training feedback loop in the world: every rep gets applause.",
    videoId: ""
  },
  {
    name: "Box Breathing on the Bolster",
    nickname: "restorative reset",
    category: "Restorative",
    focus: "Nervous system · breath",
    level: "Beginner",
    duration: "5 minutes",
    steps: [
      "Lie back over a bolster or two firm pillows placed under your mid-back, knees bent or legs long.",
      "Rest one hand on your heart, one on your belly.",
      "Inhale through your nose for 4 counts, hold for 4, exhale for 4, hold empty for 4.",
      "Repeat for ten rounds. If 4 counts feels like too much, make it 3 — the shape matters, not the size.",
      "When you finish, roll to your side and pause before sitting up. No rushing off the mat."
    ],
    cue: "If your mind wanders to your to-do list, that's not failing — noticing it is literally the exercise.",
    videoId: ""
  },
  {
    name: "Wall Angels",
    nickname: "posture's best friend",
    category: "Restorative",
    focus: "Upper back · shoulders · posture",
    level: "Beginner",
    duration: "8 slow reps",
    steps: [
      "Stand with your back against a wall, feet a few inches away, low back gently pressing in.",
      "Bring your arms to a goalpost shape against the wall — elbows and hands touching if you can.",
      "Exhale: slide your arms up the wall as far as they go without anything peeling off.",
      "Inhale: draw the elbows back down, squeezing your shoulder blades into your back pockets.",
      "If your hands can't touch the wall, that's information, not a problem. It changes fast."
    ],
    cue: "Move only as far as you can stay glued to the wall — honest range beats impressive range.",
    videoId: ""
  }
];
