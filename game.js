/* =========================================================
   DEMON & HUMAN
   RIVER CROSSING GAME
   VERSION 3 — SPECIAL CHARACTER SYSTEM
========================================================= */

/* =========================================================
   LEVEL CONFIGURATION
========================================================= */

const LEVELS = [

    /* =========================
       BEGINNER
    ========================= */

    {
        level: 1,
        difficulty: "BEGINNER",
        humans: 3,
        demons: 3,
        boatCapacity: 2,
        title: "The First Crossing",
        description: "Take all characters safely across the river."
    },

    {
        level: 2,
        difficulty: "BEGINNER",
        humans: 4,
        demons: 4,
        boatCapacity: 3,
        title: "The Dangerous Crossing",
        description: "Keep the humans safe while moving everyone across."
    },

    {
        level: 3,
        difficulty: "BEGINNER",
        humans: 5,
        demons: 5,
        boatCapacity: 3,
        title: "The Hard Crossing",
        description: "A classic river-crossing challenge."
    },


    /* =========================
       ULTRA
       Demon Slayer + Big Demon
    ========================= */

    {
        level: 4,
        difficulty: "ULTRA",
        humans: 4,
        demons: 2,
        slayers: 1,
        bigDemons: 1,
        boatCapacity: 3,
        title: "The Big Threat",
        description:
            "The Demon Slayer can protect humans from the Big Demon."
    },

    {
        level: 5,
        difficulty: "ULTRA",
        humans: 5,
        demons: 3,
        slayers: 1,
        bigDemons: 1,
        boatCapacity: 3,
        title: "Protector's Path",
        description:
            "Do not leave humans with the Big Demon without the Slayer."
    },

    {
        level: 6,
        difficulty: "ULTRA",
        humans: 6,
        demons: 4,
        slayers: 1,
        bigDemons: 1,
        boatCapacity: 4,
        title: "Ultra Crossing",
        description:
            "Use the Demon Slayer wisely to protect the humans."
    },


    /* =========================
       SUPER
       Hashira + Powerful Demon
    ========================= */

    {
        level: 7,
        difficulty: "SUPER",
        humans: 6,
        demons: 3,
        hashira: 1,
        powerfulDemons: 1,
        boatCapacity: 4,
        title: "Hashira's Trial",
        description:
            "The Hashira can neutralize the Powerful Demon."
    },

    {
        level: 8,
        difficulty: "SUPER",
        humans: 7,
        demons: 4,
        hashira: 1,
        powerfulDemons: 2,
        boatCapacity: 4,
        title: "Power Beyond Limits",
        description:
            "Keep the Hashira with the humans whenever Powerful Demons are present."
    },


    /* =========================
       TITAN
       Titan + Scout
    ========================= */

    {
        level: 9,
        difficulty: "TITAN",
        humans: 8,
        titans: 1,
        scouts: 1,
        boatCapacity: 4,
        title: "Titan's Territory",
        description:
            "The Scout protects humans from the Titan. Never abandon them."
    },


    /* =========================
       MASTERMIND
       Dragon + Dragon Slayer
    ========================= */

    {
        level: 10,
        difficulty: "MASTERMIND",
        humans: 6,
        dragonMonsters: 1,
        dragonSlayers: 1,
        boatCapacity: 5,
        title: "Dragon's Final Trial",
        description:
            "The Dragon Slayer must stay with the humans against the Dragon."
    },


    /* =========================
       JURASSIC
       T-Rex + Dino Ranger
    ========================= */

    {
        level: 11,
        difficulty: "JURASSIC",
        humans: 6,
        trexes: 1,
        dinoRangers: 1,
        boatCapacity: 5,
        title: "T-Rex Territory",
        description:
            "The Dino Ranger must stay with the humans to hold back the T-Rex."
    },


    /* =========================
       KAIJU
       Monster + Mecha Pilot
    ========================= */

    {
        level: 12,
        difficulty: "KAIJU",
        humans: 6,
        kaijus: 1,
        mechaPilots: 1,
        boatCapacity: 5,
        title: "Monster Uprising",
        description:
            "The Mecha Pilot must control the Monster whenever humans are near."
    },


    /* =========================
       XENO
       Alien + Space Marine
    ========================= */

    {
        level: 13,
        difficulty: "XENO",
        humans: 7,
        aliens: 2,
        spaceMarines: 1,
        boatCapacity: 6,
        title: "Alien Invasion",
        description:
            "The Space Marine must keep the Aliens away from the humans."
    },


    /* =========================
       MARVEL
       Supervillain + Avenger
    ========================= */

    {
        level: 14,
        difficulty: "MARVEL",
        humans: 7,
        supervillains: 2,
        avengers: 1,
        boatCapacity: 6,
        title: "Hero's Stand",
        description:
            "The Avenger must thwart the Supervillains to protect the humans."
    },


    /* =========================
       LEGENDARY
       FINAL BOSS
       Every threat, together
    ========================= */

    {
        level: 15,
        difficulty: "LEGENDARY",
        humans: 8,
        trexes: 1,
        kaijus: 1,
        aliens: 1,
        supervillains: 1,
        dinoRangers: 1,
        mechaPilots: 1,
        spaceMarines: 1,
        avengers: 1,
        boatCapacity: 7,
        title: "Ultimate Crossing",
        description:
            "Every threat has joined forces. Never leave the humans without at least one protector."
    }


    /* ========================= FINAL ARC — BOSS RUSH ========================= */
    ,{
        level: 16, difficulty: "CHAOS", humans: 6, demons: 2, anacondas: 1, supermen: 1,
        boatCapacity: 6, title: "Chaos Crossing",
        description: "Demons and the Anaconda threaten the humans. Superman is the only shield against total chaos."
    },
    {
        level: 17, difficulty: "SAVAGE", humans: 7, tigers: 2, supermen: 1,
        boatCapacity: 6, title: "Speed & Power",
        description: "The Tigers are fast and relentless. Keep Superman with any humans facing the beasts."
    },
    {
        level: 18, difficulty: "BEAST", humans: 7, lions: 1, spiderMen: 1,
        boatCapacity: 6, title: "Beast vs Hero",
        description: "The Lion controls the bank. Spider-Man must protect the humans with speed and mobility."
    },
    {
        level: 19, difficulty: "MYTHIC", humans: 8, azureDragons: 1, thors: 1,
        boatCapacity: 7, title: "Mythic Storm",
        description: "The Azure Dragon has awakened. Thor alone can stand against its mythic power."
    },
    {
        level: 20, difficulty: "OMEGA", humans: 8, magnetos: 1, jeanGreys: 1,
        boatCapacity: 7, title: "Mind & Magnetism",
        description: "Magneto's force and Jean Grey's psychic power collide in an Omega-level crossing."
    },
    {
        level: 21, difficulty: "SHADOW", humans: 8, shadows: 1, spiderMen: 1, thors: 1, jeanGreys: 1,
        boatCapacity: 8, title: "THE SHADOW — FINAL BATTLE",
        description: "Final Rule: Spider-Man, Thor and Jean Grey must unite to protect humanity from The Shadow."
    } ,
    /* ================= SEASON 2 — THE DOOM ARC ================= */
    { level: 22, difficulty: "RENEWAL", humans: 8, wolves: 2, mutatedBeasts: 1, boatCapacity: 7, title: "New Beginning", description: "Season 2 begins." },
    { level: 23, difficulty: "WILD", humans: 8, wolves: 3, mutatedBeasts: 2, boatCapacity: 7, title: "Wild Hunt", description: "Fast predators and unstable mutations." },
    { level: 24, difficulty: "WARRIOR", humans: 9, darkWarriors: 3, eliteGuardians: 1, boatCapacity: 8, title: "Dark Warriors", description: "Elite warriors control the battlefield." },
    { level: 25, difficulty: "MUTATION", humans: 9, mutants: 3, superHumans: 2, boatCapacity: 8, title: "Mutation", description: "Mutants and superpowered humans." },
    { level: 26, difficulty: "ELEMENTAL", humans: 9, fireLords: 1, iceWraiths: 1, lightningBeasts: 1, thors: 1, boatCapacity: 8, title: "Elemental War", description: "Fire, ice and lightning collide." },
    { level: 27, difficulty: "KING", humans: 10, risingKings: 1, royalGuards: 2, boatCapacity: 8, title: "The Rising King", description: "Season 2 mid-boss." },
    { level: 28, difficulty: "MONSTER", humans: 10, giantCreatures: 2, mutatedBeasts: 2, boatCapacity: 9, title: "Monster Breakout", description: "Giant creatures escape containment." },
    { level: 29, difficulty: "APOCALYPSE", humans: 10, undeads: 3, mutants: 2, boatCapacity: 9, title: "Apocalypse", description: "The dead rise while mutations spread." },
    { level: 30, difficulty: "ALIENWAR", humans: 11, alienWarriors: 3, spaceMarines: 2, boatCapacity: 9, title: "Alien Invasion", description: "Alien warriors descend from the stars." },
    { level: 31, difficulty: "MACHINE", humans: 11, robots: 3, aiSentinels: 2, boatCapacity: 9, title: "Machine War", description: "Advanced robots and rogue AI attack." },
    { level: 32, difficulty: "MULTIVERSE", humans: 11, alternateEnemies: 3, riftWalkers: 2, boatCapacity: 10, title: "Multiverse", description: "Reality fractures." },
    { level: 33, difficulty: "TITANS", humans: 12, season2Titans: 3, thors: 1, boatCapacity: 10, title: "Titans & Legends", description: "Legendary warriors and colossal threats push the mission to the limit." },
    { level: 34, difficulty: "COSMIC", humans: 12, cosmicEnemies: 3, starGuardians: 2, jeanGreys: 1, boatCapacity: 10, title: "Cosmic War", description: "The battle expands beyond Earth." },
    { level: 35, difficulty: "DOOM", humans: 12, doombots: 4, drDooms: 1, spiderMen: 1, thors: 1, jeanGreys: 1, boatCapacity: 11, title: "Doom's Arrival", description: "You defeated The Shadow... but you were never ready for Doom." },
    { level: 36, difficulty: "DOOMFINAL", humans: 12, drDooms: 1, doombots: 5, spiderMen: 1, thors: 1, jeanGreys: 1, magnetos: 1, azureDragons: 1, supermen: 1, boatCapacity: 12, title: "DOOM — FINAL BOSS", description: "EVERYONE VS DR. DOOM. The ultimate team must unite." },
    /* ================= MASSIVE EVENT — SHADOW RETURNS AS HERO ================= */
    { level: 37, difficulty: "SHADOWWAR", humans: 14, drDooms: 1, doombots: 6, shadows: 1, spiderMen: 1, thors: 1, jeanGreys: 1, magnetos: 1, azureDragons: 1, supermen: 1, starGuardians: 2, boatCapacity: 14, title: "SHADOW VS DR. DOOM — MASSIVE WAR", description: "The Shadow has returned as a Hero. Shadow and the ultimate alliance must stop Dr. Doom and his Doombot army." }

];


/* =========================================================
   SAVE / LOAD PROGRESS
========================================================= */

const SAVE_KEY = "demonHumanRiverCrossing.progress";

function clampLevel(level) {

    return Math.min(
        Math.max(1, level || 1),
        LEVELS.length
    );

}

function loadProgress() {

    try {

        const raw =
            localStorage.getItem(SAVE_KEY);

        if (!raw) return null;

        const data = JSON.parse(raw);

        if (
            typeof data.currentLevel !== "number" ||
            typeof data.unlockedLevel !== "number"
        ) {
            return null;
        }

        return data;

    }

    catch (e) {

        return null;

    }

}

function saveProgress() {

    try {

        localStorage.setItem(
            SAVE_KEY,
            JSON.stringify({
                currentLevel,
                unlockedLevel
            })
        );

    }

    catch (e) {

        /* storage unavailable - ignore */

    }

}

const savedProgress = loadProgress();


/* =========================================================
   GAME STATE
========================================================= */

let currentLevel =
    savedProgress
        ? clampLevel(savedProgress.currentLevel)
        : 1;

let unlockedLevel =
    savedProgress
        ? clampLevel(savedProgress.unlockedLevel)
        : 1;

let moves = 0;

let boatSide = "left";

let leftBank = [];

let rightBank = [];

let boatPassengers = [];

let selectedCharacters = [];

let gameLocked = false;


/* =========================================================
   DOM ELEMENTS
========================================================= */

const leftCharacters =
    document.getElementById("leftCharacters");

const rightCharacters =
    document.getElementById("rightCharacters");

const boat =
    document.getElementById("boat");

const boatPassengersElement =
    document.getElementById("boatPassengers");

const levelNumber =
    document.getElementById("levelNumber");

const moveNumber =
    document.getElementById("moveNumber");

const boatCapacityElement =
    document.getElementById("boatCapacity");

const levelTitle =
    document.getElementById("levelTitle");

const levelDescription =
    document.getElementById("levelDescription");

const selectedCount =
    document.getElementById("selectedCount");

const turnText =
    document.getElementById("turnText");

const progressText =
    document.getElementById("progressText");

const progressBar =
    document.getElementById("progressBar");

const ruleCapacity =
    document.getElementById("ruleCapacity");

const crossButton =
    document.getElementById("crossButton");

const resetButton =
    document.getElementById("resetButton");

const messageOverlay =
    document.getElementById("messageOverlay");

const resultIcon =
    document.getElementById("resultIcon");

const resultLabel =
    document.getElementById("resultLabel");

const resultTitle =
    document.getElementById("resultTitle");

const resultMessage =
    document.getElementById("resultMessage");

const resultLevel =
    document.getElementById("resultLevel");

const resultMoves =
    document.getElementById("resultMoves");

const resultButton =
    document.getElementById("resultButton");

const resultCard =
    document.querySelector(".result-card");

const levelsButton =
    document.getElementById("levelsButton");

const levelSelectOverlay =
    document.getElementById("levelSelectOverlay");

const levelSelectGrid =
    document.getElementById("levelSelectGrid");

const closeLevelSelect =
    document.getElementById("closeLevelSelect");


/* =========================================================
   LEVEL CONFIG
========================================================= */

function getCurrentLevelConfig(level) {

    return LEVELS[
        Math.min(
            level - 1,
            LEVELS.length - 1
        )
    ];

}


/* =========================================================
   CREATE CHARACTER DATA
========================================================= */

function createCharacterData(
    id,
    type,
    name
) {

    return {
        id,
        type,
        name
    };

}


/* =========================================================
   START LEVEL
========================================================= */

function startLevel(level) {

    const config =
        getCurrentLevelConfig(level);

    moves = 0;

    boatSide = "left";

    leftBank = [];

    rightBank = [];

    boatPassengers = [];

    selectedCharacters = [];

    gameLocked = false;

    window.lastPassengers = [];


    /* =========================
       NORMAL HUMANS
    ========================= */

    for (
        let i = 1;
        i <= (config.humans || 0);
        i++
    ) {

        leftBank.push(
            createCharacterData(
                `human-${i}`,
                "human",
                `Human ${i}`
            )
        );

    }


    /* =========================
       NORMAL DEMONS
    ========================= */

    for (
        let i = 1;
        i <= (config.demons || 0);
        i++
    ) {

        leftBank.push(
            createCharacterData(
                `demon-${i}`,
                "demon",
                `Demon ${i}`
            )
        );

    }


    /* =========================
       DEMON SLAYER
    ========================= */

    for (
        let i = 1;
        i <= (config.slayers || 0);
        i++
    ) {

        leftBank.push(
            createCharacterData(
                `slayer-${i}`,
                "demon-slayer",
                `Demon Slayer ${i}`
            )
        );

    }


    /* =========================
       BIG DEMON
    ========================= */

    for (
        let i = 1;
        i <= (config.bigDemons || 0);
        i++
    ) {

        leftBank.push(
            createCharacterData(
                `big-demon-${i}`,
                "big-demon",
                `Big Demon ${i}`
            )
        );

    }


    /* =========================
       HASHIRA
    ========================= */

    for (
        let i = 1;
        i <= (config.hashira || 0);
        i++
    ) {

        leftBank.push(
            createCharacterData(
                `hashira-${i}`,
                "hashira",
                `Hashira ${i}`
            )
        );

    }


    /* =========================
       POWERFUL DEMON
    ========================= */

    for (
        let i = 1;
        i <= (config.powerfulDemons || 0);
        i++
    ) {

        leftBank.push(
            createCharacterData(
                `powerful-demon-${i}`,
                "powerful-demon",
                `Powerful Demon ${i}`
            )
        );

    }


    /* =========================
       TITAN
    ========================= */

    for (
        let i = 1;
        i <= (config.titans || 0);
        i++
    ) {

        leftBank.push(
            createCharacterData(
                `titan-${i}`,
                "titan",
                `Titan ${i}`
            )
        );

    }


    /* =========================
       SCOUT
    ========================= */

    for (
        let i = 1;
        i <= (config.scouts || 0);
        i++
    ) {

        leftBank.push(
            createCharacterData(
                `scout-${i}`,
                "scout",
                `Scout ${i}`
            )
        );

    }


    /* =========================
       DRAGON
    ========================= */

    for (
        let i = 1;
        i <= (config.dragonMonsters || 0);
        i++
    ) {

        leftBank.push(
            createCharacterData(
                `dragon-${i}`,
                "dragon",
                `Dragon Monster ${i}`
            )
        );

    }


    /* =========================
       DRAGON SLAYER
    ========================= */

    for (
        let i = 1;
        i <= (config.dragonSlayers || 0);
        i++
    ) {

        leftBank.push(
            createCharacterData(
                `dragon-slayer-${i}`,
                "dragon-slayer",
                `Dragon Slayer ${i}`
            )
        );

    }


    /* =========================
       T-REX
    ========================= */

    for (
        let i = 1;
        i <= (config.trexes || 0);
        i++
    ) {

        leftBank.push(
            createCharacterData(
                `trex-${i}`,
                "trex",
                `T-Rex ${i}`
            )
        );

    }


    /* =========================
       DINO RANGER
    ========================= */

    for (
        let i = 1;
        i <= (config.dinoRangers || 0);
        i++
    ) {

        leftBank.push(
            createCharacterData(
                `dino-ranger-${i}`,
                "dino-ranger",
                `Dino Ranger ${i}`
            )
        );

    }


    /* =========================
       KAIJU
    ========================= */

    for (
        let i = 1;
        i <= (config.kaijus || 0);
        i++
    ) {

        leftBank.push(
            createCharacterData(
                `kaiju-${i}`,
                "kaiju",
                `Kaiju ${i}`
            )
        );

    }


    /* =========================
       MECHA PILOT
    ========================= */

    for (
        let i = 1;
        i <= (config.mechaPilots || 0);
        i++
    ) {

        leftBank.push(
            createCharacterData(
                `mecha-pilot-${i}`,
                "mecha-pilot",
                `Mecha Pilot ${i}`
            )
        );

    }


    /* =========================
       ALIEN
    ========================= */

    for (
        let i = 1;
        i <= (config.aliens || 0);
        i++
    ) {

        leftBank.push(
            createCharacterData(
                `alien-${i}`,
                "alien",
                `Alien ${i}`
            )
        );

    }


    /* =========================
       SPACE MARINE
    ========================= */

    for (
        let i = 1;
        i <= (config.spaceMarines || 0);
        i++
    ) {

        leftBank.push(
            createCharacterData(
                `space-marine-${i}`,
                "space-marine",
                `Space Marine ${i}`
            )
        );

    }


    /* =========================
       SUPERVILLAIN
    ========================= */

    for (
        let i = 1;
        i <= (config.supervillains || 0);
        i++
    ) {

        leftBank.push(
            createCharacterData(
                `supervillain-${i}`,
                "supervillain",
                `Supervillain ${i}`
            )
        );

    }


    /* =========================
       AVENGER
    ========================= */

    for (
        let i = 1;
        i <= (config.avengers || 0);
        i++
    ) {

        leftBank.push(
            createCharacterData(
                `avenger-${i}`,
                "avenger",
                `Avenger ${i}`
            )
        );

    }


    /* FINAL ARC CHARACTERS */
    const finalArcGroups = [
        ["anacondas", "anaconda", "Anaconda"], ["supermen", "superman", "Superman"],
        ["tigers", "tiger", "Tiger"], ["lions", "lion", "Lion"],
        ["spiderMen", "spider-man", "Spider-Man"], ["azureDragons", "azure-dragon", "Azure Dragon"],
        ["thors", "thor", "Thor"], ["magnetos", "magneto", "Magneto"],
        ["jeanGreys", "jean-grey", "Jean Grey"], ["shadows", "shadow", "The Shadow"], ["wolves","wolf","Wolf"],["mutatedBeasts","mutated-beast","Mutated Beast"],["darkWarriors","dark-warrior","Dark Warrior"],["eliteGuardians","elite-guardian","Elite Guardian"],["mutants","mutant","Mutant"],["superHumans","super-human","Superhuman"],["fireLords","fire-lord","Fire Lord"],["iceWraiths","ice-wraith","Ice Wraith"],["lightningBeasts","lightning-beast","Lightning Beast"],["risingKings","rising-king","The Rising King"],["royalGuards","royal-guard","Royal Guard"],["giantCreatures","giant-creature","Giant Creature"],["undeads","undead","Undead"],["alienWarriors","alien-warrior","Alien Warrior"],["spaceMarines","space-marine","Space Marine"],["robots","robot","War Robot"],["aiSentinels","ai-sentinel","AI Sentinel"],["alternateEnemies","alternate-enemy","Alternate Enemy"],["riftWalkers","rift-walker","Rift Walker"],["season2Titans","season2-titan","Titan"],["cosmicEnemies","cosmic-enemy","Cosmic Enemy"],["starGuardians","star-guardian","Star Guardian"],["doombots","doombot","Doombot"],["drDooms","dr-doom","Dr. Doom"]
    ];
    finalArcGroups.forEach(([key, type, label]) => {
        const total = config[key] || 0;
        for (let i = 1; i <= total; i++) {
            leftBank.push(createCharacterData(`${type}-${i}`, type, `${label}${total > 1 ? ` ${i}` : ""}`));
        }
    });

    shuffleArray(leftBank);


    /* =========================
       UPDATE UI
    ========================= */

    levelNumber.textContent =
        currentLevel;

    moveNumber.textContent =
        moves;

    boatCapacityElement.textContent =
        config.boatCapacity;

    levelTitle.textContent =
        config.title;

    levelDescription.textContent =
        config.description;

    ruleCapacity.textContent =
        `Maximum ${config.boatCapacity} passengers`;


    /* =========================
       DIFFICULTY THEME
    ========================= */

    setDifficultyTheme(
        config.difficulty
    );


    /* =========================
       BOAT RESET
    ========================= */

    boat.classList.remove(
        "boarding"
    );

    boat.style.left = "5%";


    renderGame();

}


/* =========================================================
   DIFFICULTY THEME
========================================================= */

function setDifficultyTheme(
    difficulty
) {

    document.body.classList.remove(
        "difficulty-beginner",
        "difficulty-ultra",
        "difficulty-super",
        "difficulty-titan",
        "difficulty-mastermind",
        "difficulty-jurassic",
        "difficulty-kaiju",
        "difficulty-xeno",
        "difficulty-marvel",
        "difficulty-legendary",
        "difficulty-chaos", "difficulty-savage", "difficulty-beast",
        "difficulty-mythic", "difficulty-omega", "difficulty-shadow", "difficulty-renewal", "difficulty-wild", "difficulty-warrior", "difficulty-mutation", "difficulty-elemental", "difficulty-king", "difficulty-monster", "difficulty-apocalypse", "difficulty-alienwar", "difficulty-machine", "difficulty-multiverse", "difficulty-titans", "difficulty-cosmic", "difficulty-doom", "difficulty-doomfinal", "difficulty-shadowwar"
    );

    document.body.classList.add(
        `difficulty-${difficulty.toLowerCase()}`
    );

}


/* =========================================================
   RENDER GAME
========================================================= */

function renderGame() {

    renderBank(
        leftBank,
        leftCharacters
    );

    renderBank(
        rightBank,
        rightCharacters
    );

    renderBoat();

    updateUI();

}


/* =========================================================
   RENDER BANK
========================================================= */

function renderBank(
    bank,
    container
) {

    container.innerHTML = "";

    bank.forEach(
        (character, index) => {

            const element =
                createCharacter(
                    character
                );

            element.style.animationDelay =
                `${index * 0.05}s`;

            container.appendChild(
                element
            );

        }
    );

}


/* =========================================================
   CREATE CHARACTER
========================================================= */

function createCharacter(
    character
) {

    const element =
        document.createElement("div");

    element.className =
        `character ${character.type}`;

    element.dataset.id =
        character.id;


    if (
        selectedCharacters.includes(
            character.id
        )
    ) {

        element.classList.add(
            "selected"
        );

    }


    const face =
        getCharacterFace(
            character.type
        );


    element.innerHTML = `

        <div class="character-body">

            <div class="character-torso"></div>

            <div class="character-head">

                <span class="character-symbol">
                    ${face}
                </span>

            </div>

            <div class="character-arm arm-left"></div>

            <div class="character-arm arm-right"></div>

            <div class="character-torso-shade"></div>

            <div class="character-legs">
                <div class="leg leg-left"><span class="foot"></span></div>
                <div class="leg leg-right"><span class="foot"></span></div>
            </div>

        </div>

        <div class="character-shadow"></div>

        <div class="character-name">
            ${character.name}
        </div>

    `;


    element.addEventListener(
        "click",
        () => {

            if (gameLocked) {
                return;
            }

            selectCharacter(
                character
            );

        }
    );


    return element;

}


/* =========================================================
   ANIME FACE GENERATOR
   Every character type gets a distinct hand-built SVG
   face (hair, eyes, accessory) so the cast reads at a
   glance instead of relying on a text glyph. All faces
   share one eye-construction helper for a consistent
   "house style" while hair / horns / masks / visors
   carry the per-type identity.
========================================================= */

/* ---- shared anime eye pair ---- */

function eyePair(opts = {}) {

    const iris = opts.iris || "#2b2b40";
    const rx = opts.rx || 9;
    const ry = opts.ry || 11;
    const cy = opts.cy || 55;
    const gap = opts.gap || 18;
    const cx = 50;
    const lx = cx - gap;
    const rx2 = cx + gap;
    const slant = opts.slant || 0;
    const glow = opts.glow ? `filter="drop-shadow(0 0 3px ${iris})"` : "";

    const rotL = slant
        ? `transform="rotate(${slant} ${lx} ${cy})"`
        : "";

    const rotR = slant
        ? `transform="rotate(${-slant} ${rx2} ${cy})"`
        : "";

    return `
        <g ${glow}>
            <ellipse cx="${lx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="#fff" ${rotL}/>
            <circle cx="${lx}" cy="${cy + 2}" r="${(rx * 0.55).toFixed(1)}" fill="${iris}" ${rotL}/>
            <circle cx="${lx - 2}" cy="${cy - 3}" r="1.6" fill="#fff" ${rotL}/>

            <ellipse cx="${rx2}" cy="${cy}" rx="${rx}" ry="${ry}" fill="#fff" ${rotR}/>
            <circle cx="${rx2}" cy="${cy + 2}" r="${(rx * 0.55).toFixed(1)}" fill="${iris}" ${rotR}/>
            <circle cx="${rx2 - 2}" cy="${cy - 3}" r="1.6" fill="#fff" ${rotR}/>
        </g>
    `;

}


/* ---- shared mouth shapes ---- */

function mouthCurve(open, color = "#3a2416") {

    return open
        ? `<path d="M40,74 Q50,80 60,74" stroke="${color}" stroke-width="2.6" fill="none" stroke-linecap="round"/>`
        : `<path d="M42,73 Q50,76 58,73" stroke="${color}" stroke-width="2.2" fill="none" stroke-linecap="round"/>`;

}

function fangMouth(color = "#fff") {

    return `
        <path d="M38,72 Q50,80 62,72 Q50,84 38,72 Z" fill="#1b0207"/>
        <path d="M42,73 L45,80 L48,73 Z" fill="${color}"/>
        <path d="M58,73 L55,80 L52,73 Z" fill="${color}"/>
    `;

}


/* ---- per-type faces ---- */

const CHARACTER_FACES = {

    human: () => `
        <path d="M12,40 Q50,4 88,40 Q82,16 50,12 Q18,16 12,40 Z" fill="#5b3a29"/>
        <path d="M12,40 Q18,28 30,24" stroke="#5b3a29" stroke-width="5" fill="none" stroke-linecap="round"/>
        ${eyePair({ iris: "#4a2f1c", gap: 17 })}
        ${mouthCurve(false)}
    `,

    demon: () => `
        <path d="M18,42 Q26,10 50,16 Q74,10 82,42 Q64,22 50,28 Q36,22 18,42 Z" fill="#c81d33"/>
        <path d="M25,28 Q6,-20 27,-16 Q36,2 36,26 Q30,26 25,28 Z" fill="#3a0d14"/>
        <path d="M75,28 Q94,-20 73,-16 Q64,2 64,26 Q70,26 75,28 Z" fill="#3a0d14"/>
        ${eyePair({ iris: "#ffce33", slant: 10, ry: 9 })}
        <path d="M42,74 Q50,70 58,74 L56,80 Q50,83 44,80 Z" fill="#1b0207"/>
    `,

    "demon-slayer": () => `
        <path d="M14,38 Q50,2 86,38 Q80,14 50,10 Q20,14 14,38 Z" fill="#eafcff"/>
        <path d="M18,42 Q50,32 82,42 L80,50 Q50,42 20,50 Z" fill="#d13b3b"/>
        <circle cx="50" cy="46" r="3.4" fill="#eafcff"/>
        ${eyePair({ iris: "#5ee7df", gap: 17, glow: true })}
        ${mouthCurve(false, "#1b3b3b")}
    `,

    "big-demon": () => `
        <path d="M14,44 Q22,6 50,14 Q78,6 86,44 Q64,18 50,26 Q36,18 14,44 Z" fill="#3b0b20"/>
        <path d="M16,18 Q2,-4 22,-4 Q22,12 32,18 Z" fill="#160309"/>
        <path d="M84,18 Q98,-4 78,-4 Q78,12 68,18 Z" fill="#160309"/>
        ${eyePair({ iris: "#ff3264", slant: 12, ry: 9, glow: true })}
        ${fangMouth()}
    `,

    hashira: () => `
        <path d="M10,50 Q6,90 20,96 Q16,64 24,44 Z" fill="#d7f9ff"/>
        <path d="M90,50 Q94,90 80,96 Q84,64 76,44 Z" fill="#d7f9ff"/>
        <path d="M14,36 Q50,2 86,36 Q80,12 50,8 Q20,12 14,36 Z" fill="#7657ff"/>
        <path d="M50,10 L54,18 L46,18 Z" fill="#fff"/>
        ${eyePair({ iris: "#a78bfa", gap: 17, ry: 10 })}
        ${mouthCurve(false, "#4b3a7a")}
    `,

    "powerful-demon": () => `
        <path d="M16,40 Q26,4 50,14 Q74,4 84,40 Q66,10 50,20 Q34,10 16,40 Z" fill="#160309"/>
        <path d="M18,16 Q34,6 32,20 Q24,20 18,16 Z" fill="#ff1744"/>
        <path d="M82,16 Q66,6 68,20 Q76,20 82,16 Z" fill="#ff1744"/>
        <path d="M14,16 Q2,-6 22,-8 Q20,10 30,16 Z" fill="#0a0004"/>
        <path d="M86,16 Q98,-6 78,-8 Q80,10 70,16 Z" fill="#0a0004"/>
        ${eyePair({ iris: "#ff1744", slant: 14, ry: 8, glow: true })}
        ${fangMouth()}
    `,

    titan: () => `
        ${eyePair({ iris: "#3a2416", gap: 20, rx: 11, ry: 12 })}
        <path d="M22,76 Q50,98 78,76 Q50,90 22,76 Z" fill="#1b0d07"/>
        <path d="M30,78 L32,86 M40,80 L41,88 M50,81 L50,89 M60,80 L59,88 M70,78 L68,86" stroke="#fff" stroke-width="2"/>
    `,

    scout: () => `
        <path d="M14,40 Q50,2 86,40 Q80,14 50,10 Q20,14 14,40 Z" fill="#5b3a29"/>
        <rect x="26" y="38" width="48" height="9" rx="4" fill="#5c3a1e"/>
        <circle cx="35" cy="42" r="6" fill="rgba(255,255,255,.35)" stroke="#2c1c10" stroke-width="1.5"/>
        <circle cx="65" cy="42" r="6" fill="rgba(255,255,255,.35)" stroke="#2c1c10" stroke-width="1.5"/>
        ${eyePair({ iris: "#2f7d4f", gap: 17 })}
        <path d="M38,88 L50,98 L62,88 Z" fill="#174d28"/>
    `,

    dragon: () => `
        <path d="M20,16 Q6,-16 28,-14 Q30,4 36,18 Z" fill="#ff6b35"/>
        <path d="M80,16 Q94,-16 72,-14 Q70,4 64,18 Z" fill="#ff6b35"/>
        <path d="M14,44 Q10,60 20,68 Q16,52 22,42 Z" fill="#4a0710"/>
        <path d="M86,44 Q90,60 80,68 Q84,52 78,42 Z" fill="#4a0710"/>
        <ellipse cx="50" cy="58" rx="30" ry="24" fill="#c9481f"/>
        <path d="M50,34 Q30,40 26,58 M50,34 Q70,40 74,58" stroke="#4a0710" stroke-width="1.6" fill="none" opacity=".6"/>
        ${eyePair({ iris: "#ffb000", slant: 16, ry: 7, gap: 19, glow: true })}
        <ellipse cx="40" cy="68" rx="2" ry="2.6" fill="#2a0508"/>
        <ellipse cx="60" cy="68" rx="2" ry="2.6" fill="#2a0508"/>
        ${fangMouth("#fff2c8")}
    `,

    "dragon-slayer": () => `
        <path d="M14,40 Q50,2 86,40 Q80,14 50,10 Q20,14 14,40 Z" fill="#dce8ff"/>
        <path d="M30,90 Q50,100 70,90 L66,74 Q50,80 34,74 Z" fill="#5c7cff"/>
        <path d="M46,14 L50,6 L54,14 Z" fill="#5c7cff"/>
        ${eyePair({ iris: "#5c7cff", gap: 17, glow: true })}
        ${mouthCurve(false, "#243a6b")}
    `,

    trex: () => `
        <path d="M6,54 Q2,26 22,16 Q42,4 74,14 Q96,24 94,48 Q93,58 80,60 L79,48 Q70,38 48,36 Q26,36 16,52 Z" fill="#6fae2e"/>
        <path d="M30,8 L34,0 L38,8 Z M50,2 L54,-6 L58,2 Z" fill="#4a7a1e"/>
        <ellipse cx="36" cy="44" rx="6" ry="7" fill="#1c3308"/>
        <circle cx="35" cy="42" r="1.6" fill="#fff"/>
        <path d="M18,58 Q50,68 90,50 L90,58 Q52,76 18,66 Z" fill="#4a7a1e"/>
        <path d="M20,58 L88,52 L84,62 L79,54 L75,64 L70,55 L65,65 L60,56 L55,66 L50,57 L45,66 L40,57 L35,65 L30,56 L26,64 L22,55 Z" fill="#f4fbe0"/>
    `,

    "dino-ranger": () => `
        <path d="M12,42 Q50,0 88,42 Q84,20 50,16 Q16,20 12,42 Z" fill="#a8641b"/>
        <path d="M18,40 Q50,30 82,40 L80,44 Q50,36 20,44 Z" fill="#5c3a10"/>
        ${eyePair({ iris: "#7a4a20", gap: 17 })}
        <path d="M38,88 L50,96 L62,88 Z" fill="#ffd166"/>
        ${mouthCurve(false, "#5c3a10")}
    `,

    kaiju: () => `
        <path d="M28,20 L34,2 L40,20 Z" fill="#2fbfae"/>
        <path d="M44,16 L50,-4 L56,16 Z" fill="#2fbfae"/>
        <path d="M60,20 L66,2 L72,20 Z" fill="#2fbfae"/>
        ${eyePair({ iris: "#8bffea", slant: 10, ry: 8, glow: true })}
        <path d="M34,74 L66,74 L62,84 L58,76 L54,84 L50,76 L46,84 L42,76 L38,84 Z" fill="#0b3b38"/>
    `,

    "mecha-pilot": () => `
        <path d="M10,44 Q10,-2 50,-2 Q90,-2 90,44 L78,44 Q78,10 50,10 Q22,10 22,44 Z" fill="#c8ccd6"/>
        <rect x="20" y="42" width="60" height="20" rx="8" fill="rgba(90,140,220,.55)" stroke="#4b5566" stroke-width="2"/>
        <circle cx="50" cy="6" r="3.2" fill="#ff5c5c"/>
        ${eyePair({ iris: "#dff3ff", gap: 17, ry: 8, glow: true })}
    `,

    alien: () => `
        <path d="M20,52 Q10,2 50,-8 Q90,2 80,52 Q78,22 50,14 Q22,22 20,52 Z" fill="#c4e6a0"/>
        <path d="M46,2 Q44,-14 38,-22 M54,2 Q56,-14 62,-22" stroke="#9dff5c" stroke-width="2.4" stroke-linecap="round" fill="none"/>
        <circle cx="38" cy="-23" r="2.6" fill="#9dff5c"/>
        <circle cx="62" cy="-23" r="2.6" fill="#9dff5c"/>
        <ellipse cx="32" cy="54" rx="13" ry="17" fill="#0b0b0b"/>
        <ellipse cx="68" cy="54" rx="13" ry="17" fill="#0b0b0b"/>
        <ellipse cx="29" cy="48" rx="3" ry="4" fill="rgba(255,255,255,.5)"/>
        <ellipse cx="65" cy="48" rx="3" ry="4" fill="rgba(255,255,255,.5)"/>
        <path d="M46,80 Q50,83 54,80" stroke="#274d0f" stroke-width="2" fill="none" stroke-linecap="round"/>
    `,

    "space-marine": () => `
        <path d="M10,44 Q10,-2 50,-2 Q90,-2 90,44 L80,44 Q80,10 50,10 Q20,10 20,44 Z" fill="#7a3b00"/>
        <rect x="18" y="40" width="64" height="18" rx="7" fill="rgba(255,180,70,.6)" stroke="#7a3b00" stroke-width="2"/>
        <rect x="44" y="0" width="12" height="10" rx="3" fill="#ffb347"/>
        ${eyePair({ iris: "#fff3e0", gap: 18, ry: 8, glow: true })}
    `,

    supervillain: () => `
        <path d="M14,36 Q50,-6 86,36 Q78,10 50,6 Q22,10 14,36 Z" fill="#200048"/>
        <path d="M20,46 Q50,36 80,46 Q80,58 50,60 Q20,58 20,46 Z" fill="#120024"/>
        ${eyePair({ iris: "#b388ff", slant: 14, ry: 8 })}
        <path d="M40,76 Q50,71 60,76" stroke="#b388ff" stroke-width="2.4" fill="none" stroke-linecap="round"/>
    `,

    anaconda: () => `<path d="M10,66 Q26,18 52,28 Q78,38 88,12" stroke="#3f8f43" stroke-width="15" fill="none" stroke-linecap="round"/><path d="M20,60 Q34,46 52,50 Q70,54 82,30" stroke="#a8d96b" stroke-width="5" fill="none" stroke-linecap="round"/><circle cx="78" cy="28" r="3" fill="#ffde59"/><circle cx="86" cy="24" r="3" fill="#ffde59"/>`,
    superman: () => `<path d="M12,42 Q50,2 88,42 Q82,16 50,10 Q18,16 12,42 Z" fill="#171d5b"/>${eyePair({ iris: "#2e7de9", gap: 17 })}<path d="M39,74 L50,88 L61,74 L50,68 Z" fill="#f2c230" stroke="#c62828" stroke-width="2"/>`,
    tiger: () => `<path d="M12,38 Q50,4 88,38 Q80,14 50,10 Q20,14 12,38 Z" fill="#e8872b"/><path d="M22,24 L28,42 M38,16 L42,38 M62,16 L58,38 M78,24 L72,42" stroke="#24150a" stroke-width="5"/>${eyePair({ iris: "#5b3210", gap: 18, slant: 8 })}${fangMouth("#fff7df")}`,
    lion: () => `<circle cx="50" cy="48" r="40" fill="#9b5a22"/><circle cx="50" cy="52" r="29" fill="#d59a55"/>${eyePair({ iris: "#5a2d10", gap: 17 })}${mouthCurve(false, "#3b1c0a")}`,
    "spider-man": () => `<path d="M14,42 Q50,4 86,42 Q82,14 50,10 Q18,14 14,42 Z" fill="#b41426"/><path d="M18,44 Q50,34 82,44 M24,28 Q50,52 76,28 M30,18 Q50,44 70,18" stroke="#19233a" stroke-width="2" fill="none"/><ellipse cx="32" cy="54" rx="11" ry="14" fill="#fff"/><ellipse cx="68" cy="54" rx="11" ry="14" fill="#fff"/>`,
    "azure-dragon": () => `<path d="M18,22 L30,4 L38,24 M62,24 L70,4 L82,22" fill="#2c7edb"/><path d="M18,52 Q20,18 50,14 Q80,18 82,52 Q74,84 50,88 Q26,84 18,52 Z" fill="#2374c9"/>${eyePair({ iris: "#d9f7ff", gap: 18, glow: true })}${fangMouth("#d9f7ff")}`,
    thor: () => `<path d="M12,40 Q50,2 88,40 Q80,12 50,8 Q20,12 12,40 Z" fill="#d8b45c"/>${eyePair({ iris: "#78c8ff", gap: 17, glow: true })}<path d="M44,12 L50,2 L56,12" stroke="#c9cdd5" stroke-width="4" fill="none"/>${mouthCurve(false, "#6b4b1c")}`,
    magneto: () => `<path d="M12,48 Q10,4 50,4 Q90,4 88,48 L74,46 Q74,20 50,20 Q26,20 26,46 Z" fill="#8b1c65"/><path d="M22,50 Q50,34 78,50 L76,64 Q50,56 24,64 Z" fill="#4a1238"/>${eyePair({ iris: "#f0b4ff", gap: 17, glow: true })}`,
    "jean-grey": () => `<path d="M10,48 Q12,4 50,6 Q88,4 90,48 Q74,22 50,24 Q26,22 10,48 Z" fill="#9b3d2f"/>${eyePair({ iris: "#67f4d8", gap: 17, glow: true })}<path d="M44,76 Q50,80 56,76" stroke="#7a1f1f" stroke-width="2.4" fill="none"/>`,
    shadow: () => `<path d="M10,82 Q18,12 50,6 Q82,12 90,82 Q74,96 50,94 Q26,96 10,82 Z" fill="#0a0715"/><path d="M28,54 L42,50 M58,50 L72,54" stroke="#a855f7" stroke-width="6" stroke-linecap="round"/><path d="M38,74 Q50,82 62,74" stroke="#d8b4fe" stroke-width="2.5" fill="none"/>`,

    avenger: () => `
        <path d="M14,38 Q50,4 86,38 Q80,14 50,10 Q20,14 14,38 Z" fill="#7c0a0a"/>
        <path d="M50,4 L56,16 L44,16 Z" fill="#ffd166"/>
        <path d="M18,46 Q50,34 82,46 Q80,62 50,64 Q20,62 18,46 Z" fill="#1b1b1b"/>
        <ellipse cx="32" cy="54" rx="10" ry="9" fill="#fff"/>
        <ellipse cx="68" cy="54" rx="10" ry="9" fill="#fff"/>
        ${mouthCurve(true, "#fff")}
    `

    ,wolf: () => `${eyePair({ iris: "#facc15", gap: 18, slant: 8 })}${fangMouth()}`
    ,"mutated-beast": () => `${eyePair({ iris: "#7CFF6B", gap: 20, glow: true })}${fangMouth()}`
    ,"dark-warrior": () => `${eyePair({ iris: "#ef4444", gap: 17, glow: true })}`
    ,"elite-guardian": () => `${eyePair({ iris: "#38bdf8", gap: 17 })}`
    ,mutant: () => `${eyePair({ iris: "#d946ef", gap: 17, glow: true })}`
    ,"super-human": () => `${eyePair({ iris: "#0ea5e9", gap: 17 })}`
    ,"fire-lord": () => `${eyePair({ iris: "#fef08a", gap: 17, glow: true })}`
    ,"ice-wraith": () => `${eyePair({ iris: "#e0f2fe", gap: 17, glow: true })}`
    ,"lightning-beast": () => `${eyePair({ iris: "#fde047", gap: 18, glow: true })}`
    ,"rising-king": () => `${eyePair({ iris: "#fef3c7", gap: 17 })}`
    ,"royal-guard": () => `${eyePair({ iris: "#fbbf24", gap: 17 })}`
    ,"giant-creature": () => `${eyePair({ iris: "#fb923c", gap: 22, glow: true })}${fangMouth()}`
    ,undead: () => `${eyePair({ iris: "#86efac", gap: 17, glow: true })}${fangMouth("#d1fae5")}`
    ,"alien-warrior": () => `${eyePair({ iris: "#111827", gap: 20, rx: 13, ry: 17 })}`
    ,robot: () => `<rect x="14" y="18" width="72" height="62" rx="14" fill="#64748b"/>${eyePair({ iris: "#22d3ee", gap: 18, glow: true })}`
    ,"ai-sentinel": () => `<circle cx="50" cy="50" r="42" fill="#0f172a"/>${eyePair({ iris: "#a78bfa", gap: 20, glow: true })}`
    ,"alternate-enemy": () => `${eyePair({ iris: "#f472b6", gap: 17, glow: true })}`
    ,"rift-walker": () => `<circle cx="50" cy="50" r="42" fill="#312e81"/>${eyePair({ iris: "#c4b5fd", gap: 18, glow: true })}`
    ,god: () => `${eyePair({ iris: "#fde68a", gap: 17, glow: true })}`
    ,"season2-titan": () => `<circle cx="50" cy="52" r="43" fill="#475569"/>${eyePair({ iris: "#fb7185", gap: 22, glow: true })}`
    ,"cosmic-enemy": () => `<circle cx="50" cy="50" r="44" fill="#312e81"/>${eyePair({ iris: "#f0abfc", gap: 18, glow: true })}`
    ,"star-guardian": () => `${eyePair({ iris: "#fff", gap: 16 })}`
    ,doombot: () => `${eyePair({ iris: "#ef4444", gap: 17, glow: true })}`
    ,"dr-doom": () => `<path d="M18,30 Q50,-6 82,30 L74,48 H26 Z" fill="#94a3b8"/><path d="M20,34 L50,10 L80,34" fill="#166534"/>${eyePair({ iris: "#facc15", gap: 17, glow: true })}`
};


function getCharacterFace(type) {

    const builder =
        CHARACTER_FACES[type] ||
        CHARACTER_FACES.human;

    return `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
            ${builder()}
        </svg>
    `;

}


/* =========================================================
   SELECT CHARACTER
========================================================= */

function selectCharacter(
    character
) {

    if (gameLocked) {
        return;
    }


    const currentBank =
        boatSide === "left"
            ? leftBank
            : rightBank;


    const exists =
        currentBank.some(
            item =>
                item.id ===
                character.id
        );


    if (!exists) {
        return;
    }


    /* =========================
       CAPTURE CURRENT POSITION
       (used to animate the
       character walking to/from
       the boat)
    ========================= */

    const element =
        document.querySelector(
            `.character[data-id="${CSS.escape(character.id)}"]`
        );

    const startRect =
        element
            ? element.getBoundingClientRect()
            : null;


    const existingIndex =
        selectedCharacters.indexOf(
            character.id
        );


    /* =========================
       DESELECT — STEP OFF BOAT
    ========================= */

    if (existingIndex !== -1) {

        selectedCharacters.splice(
            existingIndex,
            1
        );

        if (startRect) {

            animateBoardingClone(
                character,
                startRect,
                "leave"
            );

        }

    }


    /* =========================
       SELECT — BOARD BOAT
    ========================= */

    else {

        const config =
            getCurrentLevelConfig(
                currentLevel
            );


        if (
            selectedCharacters.length >=
            config.boatCapacity
        ) {

            turnText.textContent =
                `Boat capacity: ${config.boatCapacity}`;

            return;

        }


        selectedCharacters.push(
            character.id
        );

        if (startRect) {

            animateBoardingClone(
                character,
                startRect,
                "board"
            );

        }

    }


    renderGame();

}


/* =========================================================
   ANIMATE SINGLE CHARACTER BOARDING / LEAVING
   Plays a quick walking-clone animation between the
   character's bank position and its seat in the boat,
   used on every select/deselect click so the character
   visibly boards the boat instead of just highlighting.
========================================================= */

function animateBoardingClone(
    character,
    startRect,
    direction
) {

    const boatRect =
        boat.getBoundingClientRect();

    const seatIndex =
        Math.max(
            selectedCharacters.length - 1,
            0
        );

    const boatLeft =
        boatRect.left +
        35 +
        seatIndex * 28;

    const boatTop =
        boatRect.top + 5;


    const clone =
        createCharacter(
            character
        );

    clone.classList.add(
        "walking-clone"
    );

    clone.style.pointerEvents =
        "none";

    clone.style.width =
        `${startRect.width}px`;

    clone.style.height =
        `${startRect.height}px`;


    const fromLeft =
        direction === "board"
            ? startRect.left
            : boatLeft;

    const fromTop =
        direction === "board"
            ? startRect.top
            : boatTop;

    const toLeft =
        direction === "board"
            ? boatLeft
            : startRect.left;

    const toTop =
        direction === "board"
            ? boatTop
            : startRect.top;

    const fromScale =
        direction === "board"
            ? 1
            : 0.55;

    const toScale =
        direction === "board"
            ? 0.55
            : 1;


    clone.style.left =
        `${fromLeft}px`;

    clone.style.top =
        `${fromTop}px`;

    clone.style.transform =
        `scale(${fromScale})`;


    document.body.appendChild(
        clone
    );

    void clone.offsetWidth;

    requestAnimationFrame(
        () => {

            clone.style.left =
                `${toLeft}px`;

            clone.style.top =
                `${toTop}px`;

            clone.style.transform =
                `scale(${toScale})`;

        }
    );

    setTimeout(
        () => {
            clone.style.opacity = "0";
        },
        520
    );

    setTimeout(
        () => {
            clone.remove();
        },
        680
    );

}


/* =========================================================
   CROSS BUTTON
========================================================= */

crossButton.addEventListener(
    "click",
    crossRiver
);


/* =========================================================
   CROSS RIVER
========================================================= */

function crossRiver() {

    if (gameLocked) {
        return;
    }


    if (
        selectedCharacters.length === 0
    ) {

        turnText.textContent =
            "Select at least one character.";

        return;

    }


    const config =
        getCurrentLevelConfig(
            currentLevel
        );


    if (
        selectedCharacters.length >
        config.boatCapacity
    ) {

        turnText.textContent =
            `Maximum ${config.boatCapacity} passengers.`;

        return;

    }


    gameLocked = true;


    const currentBank =
        boatSide === "left"
            ? leftBank
            : rightBank;


    boatPassengers =
        currentBank.filter(
            character =>
                selectedCharacters.includes(
                    character.id
                )
        );


    const positions = [];


    selectedCharacters.forEach(
        id => {

            const element =
                document.querySelector(
                    `.character[data-id="${CSS.escape(id)}"]`
                );


            if (!element) {
                return;
            }


            const rect =
                element.getBoundingClientRect();


            positions.push({

                id,

                left:
                    rect.left,

                top:
                    rect.top,

                width:
                    rect.width,

                height:
                    rect.height

            });

        }
    );


    window.lastPassengers =
        [...boatPassengers];


    /* =========================
       REMOVE FROM BANK
    ========================= */

    if (boatSide === "left") {

        leftBank =
            leftBank.filter(
                character =>
                    !selectedCharacters.includes(
                        character.id
                    )
            );

    }

    else {

        rightBank =
            rightBank.filter(
                character =>
                    !selectedCharacters.includes(
                        character.id
                    )
            );

    }


    selectedCharacters = [];


    renderGame();


    /* =========================
       WALKING ANIMATION
    ========================= */

    animateCharactersToBoat(
        positions
    );


    /* =========================
       BOARDING
    ========================= */

    setTimeout(
        () => {

            boat.classList.add(
                "boarding"
            );

            renderBoat();

        },
        650
    );


    /* =========================
       MOVE BOAT
    ========================= */

    setTimeout(
        () => {

            if (boatSide === "left") {

                boat.style.left =
                    "65%";

            }

            else {

                boat.style.left =
                    "5%";

            }

        },
        850
    );


    /* =========================
       FINISH
    ========================= */

    setTimeout(
        finishCrossing,
        2750
    );

}


/* =========================================================
   CHARACTER → BOAT ANIMATION
========================================================= */

function animateCharactersToBoat(
    positions
) {

    positions.forEach(
        (position, index) => {

            setTimeout(
                () => {

                    const characterData =
                        findCharacter(
                            position.id
                        );


                    if (!characterData) {
                        return;
                    }


                    const clone =
                        createCharacter(
                            characterData
                        );


                    clone.classList.add(
                        "walking-clone"
                    );


                    clone.style.position =
                        "fixed";

                    clone.style.left =
                        `${position.left}px`;

                    clone.style.top =
                        `${position.top}px`;

                    clone.style.width =
                        `${position.width}px`;

                    clone.style.height =
                        `${position.height}px`;


                    clone.style.pointerEvents =
                        "none";


                    document.body.appendChild(
                        clone
                    );


                    const boatRect =
                        boat.getBoundingClientRect();


                    const targetLeft =
                        boatRect.left +
                        35 +
                        index * 28;


                    const targetTop =
                        boatRect.top +
                        5;


                    void clone.offsetWidth;


                    requestAnimationFrame(
                        () => {

                            clone.style.left =
                                `${targetLeft}px`;

                            clone.style.top =
                                `${targetTop}px`;

                            clone.style.transform =
                                "scale(0.55)";

                        }
                    );


                    setTimeout(
                        () => {

                            clone.style.opacity =
                                "0";

                        },
                        700
                    );


                    setTimeout(
                        () => {

                            clone.remove();

                        },
                        1050
                    );

                },
                index * 180
            );

        }
    );

}


/* =========================================================
   FIND CHARACTER
========================================================= */

function findCharacter(
    id
) {

    const allCharacters = [

        ...leftBank,

        ...rightBank,

        ...boatPassengers,

        ...(window.lastPassengers || [])

    ];


    return allCharacters.find(
        character =>
            character.id === id
    );

}


/* =========================================================
   FINISH CROSSING
========================================================= */

function finishCrossing() {

    boat.classList.remove(
        "boarding"
    );


    /* =========================
       MOVE PASSENGERS
    ========================= */

    if (boatSide === "left") {

        rightBank.push(
            ...boatPassengers
        );

        boatSide = "right";

    }

    else {

        leftBank.push(
            ...boatPassengers
        );

        boatSide = "left";

    }


    boatPassengers = [];

    window.lastPassengers = [];


    moves++;


    gameLocked = false;


    renderGame();


    /* =========================
       SAFETY CHECK
    ========================= */

    const leftSafe =
        isBankSafe(
            leftBank
        );

    const rightSafe =
        isBankSafe(
            rightBank
        );


    if (
        !leftSafe ||
        !rightSafe
    ) {

        gameLocked = true;

        const unsafeBank =
            !leftSafe ? leftBank : rightBank;

        const unsafeContainer =
            !leftSafe ? leftCharacters : rightCharacters;

        const eatenPair =
            getEatenPair(unsafeBank);

        if (eatenPair) {

            playEatingAnimation(
                unsafeContainer,
                eatenPair.humans,
                eatenPair.predators,
                loseGame
            );

        }

        else {

            loseGame();

        }

        return;

    }


    /* =========================
       VICTORY
    ========================= */

    const total =
        getTotalCharacters();


    if (
        rightBank.length === total
    ) {

        winLevel();

        return;

    }

}


/* =========================================================
   EATEN ANIMATION
   Whenever a bank ends up unsafe, whichever threat type
   is present without its protector "eats" the human(s)
   left with it before the mission-failed card appears.
========================================================= */

const PREDATOR_TYPES = [
    "demon",
    "big-demon",
    "powerful-demon",
    "titan",
    "dragon",
    "trex",
    "kaiju",
    "alien",
    "supervillain"
];


function getEatenPair(bank) {

    const humans =
        bank.filter(
            character => character.type === "human"
        );

    const predators =
        bank.filter(
            character =>
                PREDATOR_TYPES.includes(
                    character.type
                )
        );

    if (
        humans.length === 0 ||
        predators.length === 0
    ) {
        return null;
    }

    return {
        humans,
        predators
    };

}


function playEatingAnimation(
    container,
    humans,
    predators,
    callback
) {

    const gameShell =
        document.querySelector(".game-shell");

    const predatorElements =
        predators
            .map(
                predator =>
                    container.querySelector(
                        `[data-id="${predator.id}"]`
                    )
            )
            .filter(Boolean);


    predatorElements.forEach(
        (predatorEl, index) => {

            setTimeout(
                () => {
                    predatorEl.classList.add(
                        "predator-lunge"
                    );
                },
                index * 90
            );

        }
    );


    humans.forEach(
        (human, index) => {

            const humanEl =
                container.querySelector(
                    `[data-id="${human.id}"]`
                );

            if (!humanEl) {
                return;
            }

            setTimeout(
                () => {

                    humanEl.classList.add(
                        "victim-caught"
                    );

                    spawnBiteEffect(
                        humanEl
                    );

                },
                280 + index * 140
            );

        }
    );


    if (gameShell) {

        setTimeout(
            () => {
                gameShell.classList.add("shake");
            },
            260
        );

        setTimeout(
            () => {
                gameShell.classList.remove("shake");
            },
            760
        );

    }


    setTimeout(
        () => {

            if (typeof callback === "function") {
                callback();
            }

        },
        1050
    );

}


function spawnBiteEffect(
    targetEl
) {

    const rect =
        targetEl.getBoundingClientRect();

    const fx =
        document.createElement("div");

    fx.className =
        "bite-fx";

    fx.textContent =
        "💥";

    fx.style.left =
        `${rect.left + rect.width / 2}px`;

    fx.style.top =
        `${rect.top + rect.height / 2}px`;

    document.body.appendChild(fx);

    setTimeout(
        () => {
            fx.remove();
        },
        700
    );

}


/* =========================================================
   SPECIAL BANK SAFETY SYSTEM
========================================================= */

function isBankSafe(
    bank
) {

    if (!bank || bank.length === 0) {
        return true;
    }


    const humans =
        countType(
            bank,
            "human"
        );


    const demons =
        countType(
            bank,
            "demon"
        );


    const slayers =
        countType(
            bank,
            "demon-slayer"
        );


    const bigDemons =
        countType(
            bank,
            "big-demon"
        );


    const hashira =
        countType(
            bank,
            "hashira"
        );


    const powerfulDemons =
        countType(
            bank,
            "powerful-demon"
        );


    const titans =
        countType(
            bank,
            "titan"
        );


    const scouts =
        countType(
            bank,
            "scout"
        );


    const dragons =
        countType(
            bank,
            "dragon"
        );


    const dragonSlayers =
        countType(
            bank,
            "dragon-slayer"
        );


    const trexes =
        countType(
            bank,
            "trex"
        );


    const dinoRangers =
        countType(
            bank,
            "dino-ranger"
        );


    const kaijus =
        countType(
            bank,
            "kaiju"
        );


    const mechaPilots =
        countType(
            bank,
            "mecha-pilot"
        );


    const aliens =
        countType(
            bank,
            "alien"
        );


    const spaceMarines =
        countType(
            bank,
            "space-marine"
        );


    const supervillains =
        countType(
            bank,
            "supervillain"
        );


    const avengers =
        countType(
            bank,
            "avenger"
        );

    const anacondas = countType(bank, "anaconda");
    const supermen = countType(bank, "superman");
    const tigers = countType(bank, "tiger");
    const lions = countType(bank, "lion");
    const spiderMen = countType(bank, "spider-man");
    const azureDragons = countType(bank, "azure-dragon");
    const thors = countType(bank, "thor");
    const magnetos = countType(bank, "magneto");
    const jeanGreys = countType(bank, "jean-grey");
    const shadows = countType(bank, "shadow");


    /* =========================
       NO HUMANS
       Nothing to protect.
    ========================= */

    if (humans === 0) {
        return true;
    }


    /* =====================================================
       LEVEL 1–3
       CLASSIC DEMON RULE
    ===================================================== */

    if (
        currentLevel <= 3
    ) {

        if (demons === 0) {
            return true;
        }

        return humans >= demons;

    }


    /* =====================================================
       LEVEL 4–6
       DEMON SLAYER + BIG DEMON
    ===================================================== */

    if (
        currentLevel >= 4 &&
        currentLevel <= 6
    ) {

        /*
           Big Demon requires
           Demon Slayer protection.
        */

        if (
            bigDemons > 0 &&
            slayers === 0
        ) {

            return false;

        }


        /*
           Normal demons still follow
           the classic rule.
        */

        if (
            demons > humans
        ) {

            return false;

        }


        return true;

    }


    /* =====================================================
       LEVEL 7–8
       HASHIRA + POWERFUL DEMON
    ===================================================== */

    if (
        currentLevel === 7 ||
        currentLevel === 8
    ) {

        /*
           Powerful Demon requires Hashira.
        */

        if (
            powerfulDemons > 0 &&
            hashira === 0
        ) {

            return false;

        }


        /*
           Normal demons still matter.
        */

        if (
            demons > humans
        ) {

            return false;

        }


        return true;

    }


    /* =====================================================
       LEVEL 9
       TITAN + SCOUT
    ===================================================== */

    if (
        currentLevel === 9
    ) {

        /*
           Titan requires Scout protection.
        */

        if (
            titans > 0 &&
            scouts === 0
        ) {

            return false;

        }


        return true;

    }


    /* =====================================================
       LEVEL 10
       DRAGON + DRAGON SLAYER
    ===================================================== */

    if (
        currentLevel === 10
    ) {

        /*
           Dragon requires Dragon Slayer.
        */

        if (
            dragons > 0 &&
            dragonSlayers === 0
        ) {

            return false;

        }


        /*
           Dragon Slayer can protect
           up to 6 humans in this level.
        */

        if (
            dragons > 0 &&
            humans > 6 &&
            dragonSlayers > 0
        ) {

            return false;

        }


        return true;

    }


    /* =====================================================
       LEVEL 11
       T-REX + DINO RANGER
    ===================================================== */

    if (
        currentLevel === 11
    ) {

        /*
           T-Rex requires Dino Ranger protection.
        */

        if (
            trexes > 0 &&
            dinoRangers === 0
        ) {

            return false;

        }


        return true;

    }


    /* =====================================================
       LEVEL 12
       KAIJU + MECHA PILOT
    ===================================================== */

    if (
        currentLevel === 12
    ) {

        /*
           Kaiju requires Mecha Pilot control.
        */

        if (
            kaijus > 0 &&
            mechaPilots === 0
        ) {

            return false;

        }


        return true;

    }


    /* =====================================================
       LEVEL 13
       ALIEN + SPACE MARINE
    ===================================================== */

    if (
        currentLevel === 13
    ) {

        /*
           Aliens require Space Marine protection.
        */

        if (
            aliens > 0 &&
            spaceMarines === 0
        ) {

            return false;

        }


        return true;

    }


    /* =====================================================
       LEVEL 14
       SUPERVILLAIN + AVENGER
    ===================================================== */

    if (
        currentLevel === 14
    ) {

        /*
           Supervillains require the Avenger.
        */

        if (
            supervillains > 0 &&
            avengers === 0
        ) {

            return false;

        }


        return true;

    }


    /* =====================================================
       LEVEL 15
       LEGENDARY — FINAL BOSS
       Every threat together. If any threat is present,
       at least one protector of ANY kind must be present
       or the mission fails.
    ===================================================== */

    if (
        currentLevel === 15
    ) {

        const totalThreats =
            trexes +
            kaijus +
            aliens +
            supervillains;

        const totalProtectors =
            dinoRangers +
            mechaPilots +
            spaceMarines +
            avengers;


        if (
            totalThreats > 0 &&
            totalProtectors === 0
        ) {

            return false;

        }


        return true;

    }


    /* LEVEL 16–21 — FINAL ARC */
    if (currentLevel === 16) return !(demons + anacondas > 0 && supermen === 0);
    if (currentLevel === 17) return !(tigers > 0 && supermen === 0);
    if (currentLevel === 18) return !(lions > 0 && spiderMen === 0);
    if (currentLevel === 19) return !(azureDragons > 0 && thors === 0);
    if (currentLevel === 20) return !(magnetos > 0 && jeanGreys === 0);
    if (currentLevel === 21) return shadows === 0 || (spiderMen > 0 && thors > 0 && jeanGreys > 0);
    if (currentLevel === 36) { const doom = countType(bank, "dr-doom"); const team = ["spider-man","thor","jean-grey","magneto","azure-dragon","superman"].every(t => countType(bank,t) > 0); return doom === 0 || team; }
    /* LEVEL 37 — MASSIVE WAR: The Shadow is now a Hero and must face Dr. Doom. */
    if (currentLevel === 37) { const doom = countType(bank, "dr-doom"); const shadow = countType(bank, "shadow"); const alliance = ["spider-man","thor","jean-grey","magneto","azure-dragon","superman"].filter(t => countType(bank,t) > 0).length; return doom === 0 || (shadow > 0 && alliance >= 3); }

    return true;

}


/* =========================================================
   COUNT TYPE
========================================================= */

function countType(
    bank,
    type
) {

    return bank.filter(
        character =>
            character.type === type
    ).length;

}


/* =========================================================
   TOTAL CHARACTERS
========================================================= */

function getTotalCharacters() {

    return (

        leftBank.length +

        rightBank.length +

        boatPassengers.length

    );

}


/* =========================================================
   UPDATE UI
========================================================= */

function updateUI() {

    const total =
        getTotalCharacters();


    const completed =
        rightBank.length;


    const percentage =
        total === 0
            ? 0
            : Math.round(
                (completed / total) * 100
            );


    levelNumber.textContent =
        currentLevel;


    moveNumber.textContent =
        moves;


    selectedCount.textContent =
        selectedCharacters.length;


    progressText.textContent =
        `${completed} / ${total}`;


    progressBar.style.width =
        `${percentage}%`;


    if (
        selectedCharacters.length > 0
    ) {

        turnText.textContent =
            `${selectedCharacters.length} selected`;

    }

    else if (!gameLocked) {

        turnText.textContent =
            boatSide === "left"
                ? "Select characters from WEST BANK"
                : "Select characters from EAST BANK";

    }


    crossButton.disabled =
        gameLocked ||
        selectedCharacters.length === 0;

    updateRulePanel();

}


/* =========================================================
   DYNAMIC RULE PANEL
========================================================= */
function updateRulePanel() {
    const a = document.getElementById("ruleOneTitle"), b = document.getElementById("ruleOneText");
    const c = document.getElementById("ruleTwoTitle"), d = document.getElementById("ruleTwoText");
    if (!a || currentLevel < 16) return;
    const rules = {
        16:["Chaos Threats","Superman protects humans from Demons and the Anaconda","Superman","Required whenever a threat shares a bank with humans"],
        17:["Tigers","Keep Superman with humans facing the Tigers","Superman","Speed and power are the key to survival"],
        18:["Lion","Spider-Man must protect humans from the Lion","Spider-Man","Use mobility to keep the bank safe"],
        19:["Azure Dragon","Thor must face the mythic threat","Thor","Only thunder can challenge the Dragon"],
        20:["Magneto","Jean Grey must counter the threat","Jean Grey","Psychic power protects the humans"],
        21:["THE SHADOW","Never leave The Shadow with humans without the full team","Final Team","Spider-Man + Thor + Jean Grey must all be present"]
    };
    const r = rules[currentLevel]; if (!r) return;
    [a.textContent,b.textContent,c.textContent,d.textContent] = r;
}


/* =========================================================
   RENDER BOAT
========================================================= */

function getBoatDisplayPassengers() {

    /* While actually crossing, boatPassengers holds
       the real passenger list. Before that (just
       clicking characters to select them), preview
       the selected characters sitting in the boat. */

    if (boatPassengers.length > 0) {
        return boatPassengers;
    }

    const currentBank =
        boatSide === "left"
            ? leftBank
            : rightBank;

    return currentBank.filter(
        character =>
            selectedCharacters.includes(
                character.id
            )
    );

}


function renderBoat() {

    boatPassengersElement.innerHTML =
        "";


    getBoatDisplayPassengers().forEach(
        (character, index) => {

            const passenger =
                createCharacter(
                    character
                );


            passenger.classList.add(
                "mini-character"
            );


            passenger.style.width =
                "52px";

            passenger.style.height =
                "70px";


            passenger.style.cursor =
                "default";


            passenger.style.pointerEvents =
                "none";


            passenger.style.animationDelay =
                `${index * 0.1}s`;


            boatPassengersElement.appendChild(
                passenger
            );

        }
    );

}


/* =========================================================
   WIN LEVEL
========================================================= */

function winLevel() {

    gameLocked = true;

    if (currentLevel + 1 > unlockedLevel) {

        unlockedLevel =
            clampLevel(currentLevel + 1);

    }

    saveProgress();


    resultCard.classList.remove(
        "level-up"
    );


    void resultCard.offsetWidth;


    resultCard.classList.add(
        "level-up"
    );


    messageOverlay.classList.remove(
        "hidden"
    );


    resultIcon.className =
        "result-icon success";


    resultLabel.textContent =
        "MISSION COMPLETE";


    resultTitle.textContent =
        `LEVEL ${currentLevel} COMPLETE`;


    resultMessage.textContent = currentLevel === 21
        ? `THE SHADOW has been defeated. Spider-Man, Thor and Jean Grey saved everyone in ${moves} moves.`
        : `Everyone reached the other side safely in ${moves} moves.`;


    resultLevel.textContent =
        currentLevel;


    resultMoves.textContent =
        moves;


    if (
        currentLevel <
        LEVELS.length
    ) {

        resultButton.textContent =
            "NEXT LEVEL";

    }

    else {

        resultButton.textContent =
            "PLAY AGAIN";

    }

}


/* =========================================================
   LOSE GAME
========================================================= */

function loseGame() {

    gameLocked = true;


    messageOverlay.classList.remove(
        "hidden"
    );


    resultIcon.className =
        "result-icon failure";


    resultLabel.textContent =
        "MISSION FAILED";


    resultTitle.textContent =
        "THE BANK IS UNSAFE";


    resultMessage.textContent =
        getFailureMessage();


    resultLevel.textContent =
        currentLevel;


    resultMoves.textContent =
        moves;


    resultButton.textContent =
        "TRY AGAIN";

}


/* =========================================================
   FAILURE MESSAGE
========================================================= */

function getFailureMessage() {

    const config =
        getCurrentLevelConfig(
            currentLevel
        );


    if (
        currentLevel <= 3
    ) {

        return "The demons have outnumbered the humans. Try another strategy.";

    }


    if (
        currentLevel >= 4 &&
        currentLevel <= 6
    ) {

        return "The Big Demon is without the Demon Slayer, or the normal demon balance is unsafe.";

    }


    if (
        currentLevel === 7 ||
        currentLevel === 8
    ) {

        return "The Powerful Demon needs the Hashira's protection.";

    }


    if (
        currentLevel === 9
    ) {

        return "The Titan is without the Scout. Keep the protector with the humans.";

    }


    if (
        currentLevel === 10
    ) {

        return "The Dragon needs the Dragon Slayer to keep the humans safe.";

    }


    if (
        currentLevel === 11
    ) {

        return "The T-Rex is loose without the Dino Ranger. Keep them together.";

    }


    if (
        currentLevel === 12
    ) {

        return "The Kaiju has broken free of the Mecha Pilot's control.";

    }


    if (
        currentLevel === 13
    ) {

        return "The Aliens have reached the humans without the Space Marine.";

    }


    if (
        currentLevel === 14
    ) {

        return "The Supervillains struck while the Avenger was away.";

    }


    if (
        currentLevel === 15
    ) {

        return "Every threat converged and not a single protector was there to stop them.";

    }


    if (currentLevel === 16) return "Chaos has broken loose. Keep Superman with humans facing Demons or the Anaconda.";
    if (currentLevel === 17) return "The Tigers reached the humans without Superman's protection.";
    if (currentLevel === 18) return "The Lion controls the bank without Spider-Man there to protect the humans.";
    if (currentLevel === 19) return "The Azure Dragon is unleashed without Thor.";
    if (currentLevel === 20) return "Magneto's power overwhelmed the humans without Jean Grey's psychic defense.";
    if (currentLevel === 21) return "THE SHADOW cannot be stopped. Spider-Man, Thor and Jean Grey must stand together.";

    return "The current bank arrangement is unsafe.";

}


/* =========================================================
   RESULT BUTTON
========================================================= */

resultButton.addEventListener(
    "click",
    handleResultButton
);


function handleResultButton() {

    messageOverlay.classList.add(
        "hidden"
    );


    resultCard.classList.remove(
        "level-up"
    );


    const completed =
        rightBank.length ===
        getTotalCharacters();


    if (completed) {

        if (
            currentLevel <
            LEVELS.length
        ) {

            currentLevel++;

        }

        else {

            currentLevel = 1;

        }

    }


    saveProgress();


    startLevel(
        currentLevel
    );

}


/* =========================================================
   LEVEL SELECT
========================================================= */

levelsButton.addEventListener(
    "click",
    openLevelSelect
);

closeLevelSelect.addEventListener(
    "click",
    closeLevelSelectOverlay
);

levelSelectOverlay.addEventListener(
    "click",
    event => {

        if (event.target === levelSelectOverlay) {

            closeLevelSelectOverlay();

        }

    }
);


function openLevelSelect() {

    renderLevelSelect();

    levelSelectOverlay.classList.remove(
        "hidden"
    );

}


function closeLevelSelectOverlay() {

    levelSelectOverlay.classList.add(
        "hidden"
    );

}


function renderLevelSelect() {

    levelSelectGrid.innerHTML = "";

    LEVELS.forEach(
        config => {

            const locked =
                config.level > unlockedLevel;

            const item =
                document.createElement("button");

            item.type = "button";

            item.className =
                "level-select-item";

            if (config.level === currentLevel) {

                item.classList.add("current");

            }

            item.disabled = locked;

            item.innerHTML = locked
                ? `<span class="level-select-lock">🔒</span><span class="level-select-diff">${config.difficulty}</span>`
                : `<span class="level-select-num">${config.level}</span><span class="level-select-diff">${config.difficulty}</span>`;

            item.addEventListener(
                "click",
                () => selectLevel(config.level)
            );

            levelSelectGrid.appendChild(item);

        }
    );

}


function selectLevel(level) {

    currentLevel =
        clampLevel(level);

    saveProgress();

    messageOverlay.classList.add(
        "hidden"
    );

    resultCard.classList.remove(
        "level-up"
    );

    closeLevelSelectOverlay();

    startLevel(
        currentLevel
    );

}


/* =========================================================
   RESET
========================================================= */

resetButton.addEventListener(
    "click",
    resetCurrentLevel
);


function resetCurrentLevel() {

    messageOverlay.classList.add(
        "hidden"
    );


    resultCard.classList.remove(
        "level-up"
    );


    startLevel(
        currentLevel
    );

}


/* =========================================================
   SHUFFLE
========================================================= */

function shuffleArray(
    array
) {

    for (
        let i = array.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() *
                (i + 1)
            );


        [
            array[i],
            array[j]
        ] = [
            array[j],
            array[i]
        ];

    }


    return array;

}


/* =========================================================
   KEYBOARD
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        /* SPACE = CROSS */

        if (
            event.code === "Space"
        ) {

            event.preventDefault();


            if (!gameLocked) {

                crossRiver();

            }

        }


        /* R = RESET */

        if (
            event.key.toLowerCase() === "r"
        ) {

            if (!gameLocked) {

                resetCurrentLevel();

            }

        }

    }
);


/* =========================================================
   INITIALIZE
========================================================= */

startLevel(
    currentLevel
);