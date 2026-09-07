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

];


/* =========================================================
   GAME STATE
========================================================= */

let currentLevel = 1;

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
        "difficulty-legendary"
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


    const symbol =
        getCharacterSymbol(
            character.type
        );


    element.innerHTML = `

        <div class="character-body">

            <div class="character-head">

                <span class="character-symbol">
                    ${symbol}
                </span>

            </div>

            <div class="character-legs"></div>

        </div>

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
   CHARACTER SYMBOLS
========================================================= */

function getCharacterSymbol(
    type
) {

    const symbols = {

        human: "H",

        demon: "D",

        "demon-slayer": "S",

        "big-demon": "B",

        hashira: "H★",

        "powerful-demon": "PD",

        titan: "T",

        scout: "SC",

        dragon: "DR",

        "dragon-slayer": "DS",

        trex: "TX",

        "dino-ranger": "DNR",

        kaiju: "KJ",

        "mecha-pilot": "MP",

        alien: "AL",

        "space-marine": "SM",

        supervillain: "SV",

        avenger: "AV"

    };


    return symbols[type] || "?";

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

        loseGame();

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


    resultMessage.textContent =
        `Everyone reached the other side safely in ${moves} moves.`;


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