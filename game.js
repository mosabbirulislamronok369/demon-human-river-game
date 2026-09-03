/* =========================================================
   DEMON & HUMAN
   RIVER CROSSING GAME
   FULL GAME ENGINE
========================================================= */


/* =========================================================
   LEVEL CONFIGURATION
========================================================= */

const LEVELS = [
    {
        level: 1,
        humans: 3,
        demons: 3,
        boatCapacity: 2,
        title: "The First Crossing",
        description:
            "Take all 6 characters safely across the river."
    },

    {
        level: 2,
        humans: 5,
        demons: 5,
        boatCapacity: 3,
        title: "The Dangerous Crossing",
        description:
            "Take all 10 characters safely across the river."
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
   START LEVEL
========================================================= */

function startLevel(level) {

    const config =
        getCurrentLevelConfig(level);


    /* Reset state */

    moves = 0;

    boatSide = "left";

    leftBank = [];

    rightBank = [];

    boatPassengers = [];

    selectedCharacters = [];

    gameLocked = false;


    /* Remove old animation */

    boat.classList.remove("boarding");

    resultCard.classList.remove("level-up");


    /* Create Humans */

    for (
        let i = 1;
        i <= config.humans;
        i++
    ) {

        leftBank.push({
            id: `human-${i}`,
            type: "human",
            name: `Human ${i}`
        });

    }


    /* Create Demons */

    for (
        let i = 1;
        i <= config.demons;
        i++
    ) {

        leftBank.push({
            id: `demon-${i}`,
            type: "demon",
            name: `Demon ${i}`
        });

    }


    /* Shuffle starting positions */

    shuffleArray(leftBank);


    /* Update level information */

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


    /* Reset boat */

    boat.style.left = "5%";


    /* Render */

    renderGame();

}


/* =========================================================
   GET LEVEL CONFIG
========================================================= */

function getCurrentLevelConfig(level) {

    /*
        For future levels, the last configuration
        will temporarily be used.
    */

    return LEVELS[
        Math.min(
            level - 1,
            LEVELS.length - 1
        )
    ];

}


/* =========================================================
   RENDER EVERYTHING
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

function createCharacter(character) {

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


    element.innerHTML = `

        <div class="character-body">

            <div class="character-head"></div>

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
   SELECT / DESELECT CHARACTER
========================================================= */

function selectCharacter(character) {

    if (gameLocked) {
        return;
    }


    const currentBank =
        boatSide === "left"
            ? leftBank
            : rightBank;


    /* Check whether character is on current bank */

    const exists =
        currentBank.some(
            item =>
                item.id === character.id
        );


    if (!exists) {
        return;
    }


    const existingIndex =
        selectedCharacters.indexOf(
            character.id
        );


    /* Deselect */

    if (existingIndex !== -1) {

        selectedCharacters.splice(
            existingIndex,
            1
        );

    }


    /* Select */

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

    }


    renderGame();

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


    /* Must select someone */

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


    /* Capacity check */

    if (
        selectedCharacters.length >
        config.boatCapacity
    ) {

        turnText.textContent =
            `Maximum ${config.boatCapacity} passengers.`;

        return;

    }


    gameLocked = true;


    /*
        Get current bank.
    */

    const currentBank =
        boatSide === "left"
            ? leftBank
            : rightBank;


    /*
        Find selected passengers.
    */

    boatPassengers =
        currentBank.filter(
            character =>
                selectedCharacters.includes(
                    character.id
                )
        );


    /*
        Store character positions
        BEFORE removing them.
    */

    const positions = [];


    selectedCharacters.forEach(
        id => {

            const element =
                document.querySelector(
                    `.character[data-id="${id}"]`
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


    /*
        Keep a copy for animation.
    */

    window.lastPassengers =
        [...boatPassengers];


    /*
        Remove passengers from bank.
    */

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


    /*
        Render banks.
    */

    renderGame();


    /*
        Animate characters toward boat.
    */

    animateCharactersToBoat(
        positions
    );


    /*
        Boat boarding animation.
    */

    setTimeout(
        () => {

            boat.classList.add(
                "boarding"
            );

            renderBoat();

        },
        650
    );


    /*
        Move boat.
    */

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


    /*
        Finish crossing.
    */

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


                    /*
                        Create visual clone.
                    */

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


                    /*
                        Disable interactions.
                    */

                    clone.style.pointerEvents =
                        "none";


                    document.body.appendChild(
                        clone
                    );


                    /*
                        Find boat position.
                    */

                    const boatRect =
                        boat.getBoundingClientRect();


                    const targetLeft =
                        boatRect.left +
                        35 +
                        (index * 28);


                    const targetTop =
                        boatRect.top +
                        5;


                    /*
                        Force browser
                        to register starting position.
                    */

                    void clone.offsetWidth;


                    /*
                        Move toward boat.
                    */

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


                    /*
                        Fade when boarding.
                    */

                    setTimeout(
                        () => {

                            clone.style.opacity =
                                "0";

                        },
                        700
                    );


                    /*
                        Remove clone.
                    */

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

function findCharacter(id) {

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


    /*
        Move passengers
        to destination bank.
    */

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


    /*
        Clear boat.
    */

    boatPassengers = [];

    window.lastPassengers = [];


    /*
        Count move.
    */

    moves++;


    /*
        Unlock.
    */

    gameLocked = false;


    /*
        Render.
    */

    renderGame();


    /*
        Check safety.
    */

    const leftSafe =
        isBankSafe(leftBank);


    const rightSafe =
        isBankSafe(rightBank);


    if (
        !leftSafe ||
        !rightSafe
    ) {

        loseGame();

        return;

    }


    /*
        Check victory.
    */

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
   RENDER BOAT PASSENGERS
========================================================= */

function renderBoat() {

    boatPassengersElement.innerHTML =
        "";


    boatPassengers.forEach(
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


            passenger.style.animationDelay =
                `${index * 0.1}s`;


            boatPassengersElement.appendChild(
                passenger
            );

        }
    );

}


/* =========================================================
   BANK SAFETY RULE
========================================================= */

function isBankSafe(bank) {

    const humans =
        bank.filter(
            character =>
                character.type === "human"
        ).length;


    const demons =
        bank.filter(
            character =>
                character.type === "demon"
        ).length;


    /*
        Empty bank = safe.
    */

    if (
        humans === 0 &&
        demons === 0
    ) {

        return true;

    }


    /*
        No humans = no one to protect.
    */

    if (humans === 0) {

        return true;

    }


    /*
        No demons = safe.
    */

    if (demons === 0) {

        return true;

    }


    /*
        Demons cannot outnumber humans.
    */

    return humans >= demons;

}


/* =========================================================
   TOTAL CHARACTERS
========================================================= */

function getTotalCharacters() {

    const config =
        getCurrentLevelConfig(
            currentLevel
        );


    return (
        config.humans +
        config.demons
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


    /*
        Stats
    */

    levelNumber.textContent =
        currentLevel;

    moveNumber.textContent =
        moves;


    /*
        Selection
    */

    selectedCount.textContent =
        selectedCharacters.length;


    /*
        Progress
    */

    progressText.textContent =
        `${completed} / ${total}`;


    progressBar.style.width =
        `${percentage}%`;


    /*
        Selection message
    */

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


    /*
        Button state
    */

    crossButton.disabled =
        gameLocked ||
        selectedCharacters.length === 0;

}


/* =========================================================
   WIN LEVEL
========================================================= */

function winLevel() {

    gameLocked = true;


    /*
        Level-up animation.
    */

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
        "The demons have outnumbered the humans. Try another strategy.";


    resultLevel.textContent =
        currentLevel;


    resultMoves.textContent =
        moves;


    resultButton.textContent =
        "TRY AGAIN";

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


    /*
        If level was completed,
        advance to next level.
    */

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


    /*
        Restart.
    */

    startLevel(
        currentLevel
    );

}


/* =========================================================
   RESET BUTTON
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
   SHUFFLE ARRAY
========================================================= */

function shuffleArray(array) {

    for (
        let i = array.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );


        [
            array[i],
            array[j]
        ] =
        [
            array[j],
            array[i]
        ];

    }


    return array;

}


/* =========================================================
   KEYBOARD CONTROLS
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        /*
            Space = cross river
        */

        if (
            event.code === "Space"
        ) {

            event.preventDefault();

            if (!gameLocked) {
                crossRiver();
            }

        }


        /*
            R = reset
        */

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
   INITIALIZE GAME
========================================================= */

startLevel(1);