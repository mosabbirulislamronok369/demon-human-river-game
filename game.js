/* =========================================================
   DEMON & HUMAN — RIVER CROSSING
   Version 3 — 10 Levels / Click-to-Board / Smart Scroll UI
========================================================= */

const LEVELS = [
  { level:1, humans:3, demons:3, boatCapacity:2, title:'The First Crossing', description:'Take all 6 characters safely across the river.' },
  { level:2, humans:4, demons:4, boatCapacity:3, title:'The Rising Tide', description:'Take all 8 characters safely across the river.' },
  { level:3, humans:5, demons:5, boatCapacity:3, title:'The Dangerous Crossing', description:'Take all 10 characters safely across the river.' },
  { level:4, humans:6, demons:6, boatCapacity:4, title:'Six Against Six', description:'Take all 12 characters safely across the river.' },
  { level:5, humans:7, demons:7, boatCapacity:4, title:'The Dark Current', description:'Take all 14 characters safely across the river.' },
  { level:6, humans:8, demons:8, boatCapacity:4, title:'The Narrow Route', description:'Take all 16 characters safely across the river.' },
  { level:7, humans:9, demons:9, boatCapacity:4, title:'Shadow Waters', description:'Take all 18 characters safely across the river.' },
  { level:8, humans:10, demons:10, boatCapacity:4, title:'The Long Crossing', description:'Take all 20 characters safely across the river.' },
  { level:9, humans:12, demons:12, boatCapacity:4, title:'River of Shadows', description:'Take all 24 characters safely across the river.' },
  { level:10, humans:15, demons:15, boatCapacity:5, title:'The Final Passage', description:'Take all 30 characters safely across the river.' }
];

let currentLevel = 1;
let moves = 0;
let boatSide = 'left';

let leftBank = [];
let rightBank = [];
let boatPassengers = [];

let selectedCharacters = [];

let gameLocked = false;
let boardingBusy = false;


/* =========================================================
   DOM
========================================================= */

const $ = id => document.getElementById(id);

const leftCharacters = $('leftCharacters');
const rightCharacters = $('rightCharacters');

const boat = $('boat');
const boatPassengersElement = $('boatPassengers');

const levelNumber = $('levelNumber');
const moveNumber = $('moveNumber');
const boatCapacityElement = $('boatCapacity');

const levelTitle = $('levelTitle');
const levelDescription = $('levelDescription');

const selectedCount = $('selectedCount');
const turnText = $('turnText');

const progressText = $('progressText');
const progressBar = $('progressBar');

const ruleCapacity = $('ruleCapacity');

const crossButton = $('crossButton');
const resetButton = $('resetButton');

const messageOverlay = $('messageOverlay');

const resultIcon = $('resultIcon');
const resultLabel = $('resultLabel');
const resultTitle = $('resultTitle');
const resultMessage = $('resultMessage');

const resultLevel = $('resultLevel');
const resultMoves = $('resultMoves');

const resultButton = $('resultButton');

const resultCard =
  document.querySelector('.result-card');


/* =========================================================
   LEVEL CONFIG
========================================================= */

function getCurrentLevelConfig(level = currentLevel) {

  return LEVELS[
    Math.max(
      0,
      Math.min(
        level - 1,
        LEVELS.length - 1
      )
    )
  ];

}


function getTotalCharacters() {

  const config =
    getCurrentLevelConfig();

  return (
    config.humans +
    config.demons
  );

}


/* =========================================================
   START LEVEL
========================================================= */

function startLevel(level = currentLevel) {

  currentLevel =
    Math.max(
      1,
      Math.min(
        level,
        LEVELS.length
      )
    );


  const config =
    getCurrentLevelConfig();


  /* Reset state */

  moves = 0;

  boatSide = 'left';

  leftBank = [];
  rightBank = [];

  boatPassengers = [];

  selectedCharacters = [];

  gameLocked = false;
  boardingBusy = false;


  /* Reset boat */

  boat.classList.remove(
    'boarding'
  );

  boat.style.left = '4%';


  /* Hide result */

  if (resultCard) {

    resultCard.classList.remove(
      'level-up'
    );

  }


  if (messageOverlay) {

    messageOverlay.classList.add(
      'hidden'
    );

  }


  /* =======================================================
     CREATE HUMANS
  ======================================================= */

  for (
    let i = 1;
    i <= config.humans;
    i++
  ) {

    leftBank.push({

      id:
        `human-${i}`,

      type:
        'human',

      name:
        `Human ${i}`

    });

  }


  /* =======================================================
     CREATE DEMONS
  ======================================================= */

  for (
    let i = 1;
    i <= config.demons;
    i++
  ) {

    leftBank.push({

      id:
        `demon-${i}`,

      type:
        'demon',

      name:
        `Demon ${i}`

    });

  }


  /* Random starting positions */

  shuffleArray(
    leftBank
  );


  /* =======================================================
     UPDATE LEVEL UI
  ======================================================= */

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


  renderGame();


  setTurn(
    `Choose up to ${config.boatCapacity} characters to board the boat.`
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

  container.innerHTML = '';


  bank.forEach(
    (character, index) => {

      const element =
        createCharacter(
          character,
          false
        );


      element.style.animationDelay =
        `${Math.min(
          index * 0.035,
          0.5
        )}s`;


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
  character,
  mini = false
) {

  const element =
    document.createElement(
      'div'
    );


  element.className =
    `character ${character.type}${
      mini
        ? ' mini-character'
        : ''
    }`;


  element.dataset.id =
    character.id;


  element.innerHTML = `

    <div class="character-body">

      <div class="character-head"></div>

      <div class="character-legs"></div>

    </div>

    <div class="character-name">

      ${character.name}

    </div>

  `;


  /*
     Bank character click
  */

  if (!mini) {

    element.addEventListener(
      'click',
      () => {

        boardCharacter(
          character
        );

      }
    );

  }


  return element;

}


/* =========================================================
   BOARD CHARACTER
========================================================= */

function boardCharacter(
  character
) {

  if (
    gameLocked ||
    boardingBusy
  ) {

    return;

  }


  const config =
    getCurrentLevelConfig();


  const bank =
    boatSide === 'left'
      ? leftBank
      : rightBank;


  const index =
    bank.findIndex(
      c =>
        c.id === character.id
    );


  if (index === -1) {

    return;

  }


  /* Boat full */

  if (
    boatPassengers.length >=
    config.boatCapacity
  ) {

    setTurn(
      `Boat is full — maximum ${config.boatCapacity} passengers.`
    );

    pulseBoat();

    return;

  }


  /*
     Find original character
  */

  const source =
    document.querySelector(
      `.character[data-id="${CSS.escape(character.id)}"]`
    );


  if (!source) {

    return;

  }


  const sourceRect =
    source.getBoundingClientRect();


  const fromLeft =
    sourceRect.left;

  const fromTop =
    sourceRect.top;


  /*
     Remove from bank
  */

  bank.splice(
    index,
    1
  );


  /*
     Add to boat
  */

  boatPassengers.push(
    character
  );


  selectedCharacters =
    boatPassengers.map(
      c => c.id
    );


  /*
     Render new state
  */

  renderGame();


  /*
     Find passenger in boat
  */

  const target =
    boatPassengersElement.querySelector(
      `[data-id="${CSS.escape(character.id)}"]`
    );


  if (!target) {

    return;

  }


  const targetRect =
    target.getBoundingClientRect();


  /*
     Create walking clone
  */

  const clone =
    source.cloneNode(
      true
    );


  clone.classList.add(
    'walking-clone'
  );


  clone.style.left =
    `${fromLeft}px`;

  clone.style.top =
    `${fromTop}px`;

  clone.style.width =
    `${sourceRect.width}px`;

  clone.style.height =
    `${sourceRect.height}px`;


  document.body.appendChild(
    clone
  );


  boardingBusy = true;


  boat.classList.add(
    'boarding'
  );


  /*
     Animate character
  */

  requestAnimationFrame(
    () => {

      clone.style.left =
        `${targetRect.left}px`;

      clone.style.top =
        `${targetRect.top}px`;

      clone.style.transform =
        'scale(.72)';

    }
  );


  /*
     Finish boarding
  */

  setTimeout(
    () => {

      clone.remove();

      boardingBusy = false;

      boat.classList.remove(
        'boarding'
      );


      updateUI();


      setTurn(
        `${boatPassengers.length} passenger${
          boatPassengers.length === 1
            ? ''
            : 's'
        } aboard. Click more or cross the river.`
      );

    },
    780
  );

}


/* =========================================================
   CROSS BUTTON
========================================================= */

crossButton.addEventListener(
  'click',
  crossRiver
);


/* =========================================================
   CROSS RIVER
========================================================= */

function crossRiver() {

  if (
    gameLocked ||
    boardingBusy
  ) {

    return;

  }


  if (
    boatPassengers.length === 0
  ) {

    setTurn(
      'Board at least one character before crossing.'
    );

    pulseBoat();

    return;

  }


  const config =
    getCurrentLevelConfig();


  if (
    boatPassengers.length >
    config.boatCapacity
  ) {

    setTurn(
      `Maximum ${config.boatCapacity} passengers.`
    );

    return;

  }


  /*
     Lock game
  */

  gameLocked = true;

  crossButton.disabled =
    true;


  boat.classList.add(
    'boarding'
  );


  setTurn(
    'Crossing the river…'
  );


  /*
     Determine destination
  */

  const destination =
    boatSide === 'left'
      ? 'right'
      : 'left';


  /*
     Move boat
  */

  boat.style.left =
    destination === 'right'
      ? '68%'
      : '4%';


  /*
     Finish after animation
  */

  setTimeout(
    () => {

      finishCrossing();

    },
    1900
  );

}


/* =========================================================
   FINISH CROSSING
========================================================= */

function finishCrossing() {

  boat.classList.remove(
    'boarding'
  );


  /*
     LEFT → RIGHT
  */

  if (
    boatSide === 'left'
  ) {

    rightBank.push(
      ...boatPassengers
    );

    boatSide =
      'right';

  }


  /*
     RIGHT → LEFT
  */

  else {

    leftBank.push(
      ...boatPassengers
    );

    boatSide =
      'left';

  }


  /*
     Empty boat
  */

  boatPassengers = [];

  selectedCharacters = [];


  /*
     Count move
  */

  moves++;


  gameLocked = false;

  crossButton.disabled =
    false;


  renderGame();


  /*
     Safety check
  */

  const safe =
    isBankSafe(leftBank) &&
    isBankSafe(rightBank);


  if (!safe) {

    loseGame();

    return;

  }


  /*
     Victory check
  */

  if (
    rightBank.length ===
    getTotalCharacters()
  ) {

    winLevel();

    return;

  }


  setTurn(
    `Boat is now on the ${
      boatSide === 'left'
        ? 'left'
        : 'right'
    } bank. Choose passengers.`
  );

}


/* =========================================================
   RENDER BOAT
========================================================= */

function renderBoat() {

  boatPassengersElement.innerHTML =
    '';


  boatPassengers.forEach(
    (character, index) => {

      const passenger =
        createCharacter(
          character,
          true
        );


      passenger.style.setProperty(
        '--passenger-index',
        index
      );


      boatPassengersElement.appendChild(
        passenger
      );

    }
  );

}


/* =========================================================
   SAFETY RULE
========================================================= */

function isBankSafe(
  bank
) {

  const humans =
    bank.filter(
      c =>
        c.type === 'human'
    ).length;


  const demons =
    bank.filter(
      c =>
        c.type === 'demon'
    ).length;


  /*
     Empty bank safe
  */

  if (
    humans === 0 &&
    demons === 0
  ) {

    return true;

  }


  /*
     No humans
  */

  if (
    humans === 0
  ) {

    return true;

  }


  /*
     No demons
  */

  if (
    demons === 0
  ) {

    return true;

  }


  /*
     Demons cannot outnumber humans
  */

  return humans >= demons;

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
    total
      ? Math.round(
          (
            completed /
            total
          ) * 100
        )
      : 0;


  /*
     Top stats
  */

  levelNumber.textContent =
    currentLevel;

  moveNumber.textContent =
    moves;


  /*
     Passenger count
  */

  selectedCount.textContent =
    boatPassengers.length;


  /*
     Progress
  */

  progressText.textContent =
    `${completed} / ${total}`;


  progressBar.style.width =
    `${percentage}%`;


  /*
     Capacity
  */

  boatCapacityElement.textContent =
    getCurrentLevelConfig()
      .boatCapacity;


  /*
     Cross button
  */

  crossButton.disabled =
    gameLocked ||
    boardingBusy ||
    boatPassengers.length === 0;


  crossButton.classList.toggle(
    'ready',
    boatPassengers.length > 0 &&
    !gameLocked &&
    !boardingBusy
  );


  /*
     Add class for high character counts
  */

  leftCharacters
    .closest('.land')
    ?.classList.toggle(
      'has-many',
      leftBank.length > 8
    );


  rightCharacters
    .closest('.land')
    ?.classList.toggle(
      'has-many',
      rightBank.length > 8
    );

}


/* =========================================================
   TURN MESSAGE
========================================================= */

function setTurn(
  message
) {

  if (
    turnText
  ) {

    turnText.textContent =
      message;

  }

}


/* =========================================================
   BOAT ALERT
========================================================= */

function pulseBoat() {

  boat.classList.remove(
    'boat-alert'
  );


  /*
     Force reflow
  */

  void boat.offsetWidth;


  boat.classList.add(
    'boat-alert'
  );


  setTimeout(
    () => {

      boat.classList.remove(
        'boat-alert'
      );

    },
    500
  );

}


/* =========================================================
   WIN
========================================================= */

function winLevel() {

  gameLocked = true;


  messageOverlay.classList.remove(
    'hidden'
  );


  resultIcon.className =
    'result-icon success';


  resultLabel.textContent =
    'MISSION COMPLETE';


  resultTitle.textContent =
    currentLevel < LEVELS.length
      ? 'CROSSING SUCCESSFUL'
      : 'ALL LEVELS COMPLETE';


  resultMessage.textContent =
    currentLevel < LEVELS.length
      ? 'Every character reached the opposite bank safely.'
      : 'You completed the entire river-crossing campaign.';


  resultLevel.textContent =
    currentLevel;


  resultMoves.textContent =
    moves;


  resultButton.textContent =
    currentLevel < LEVELS.length
      ? 'NEXT LEVEL'
      : 'PLAY AGAIN';


  if (resultCard) {

    resultCard.classList.add(
      'level-up'
    );

  }

}


/* =========================================================
   LOSE
========================================================= */

function loseGame() {

  gameLocked = true;


  messageOverlay.classList.remove(
    'hidden'
  );


  resultIcon.className =
    'result-icon failure';


  resultLabel.textContent =
    'MISSION FAILED';


  resultTitle.textContent =
    'THE BANK IS UNSAFE';


  resultMessage.textContent =
    'The demons have outnumbered the humans. Try another strategy.';


  resultLevel.textContent =
    currentLevel;


  resultMoves.textContent =
    moves;


  resultButton.textContent =
    'TRY AGAIN';

}


/* =========================================================
   RESULT BUTTON
========================================================= */

resultButton.addEventListener(
  'click',
  handleResultButton
);


function handleResultButton() {

  messageOverlay.classList.add(
    'hidden'
  );


  if (resultCard) {

    resultCard.classList.remove(
      'level-up'
    );

  }


  const completed =
    rightBank.length ===
    getTotalCharacters();


  if (completed) {

    currentLevel =
      currentLevel <
      LEVELS.length
        ? currentLevel + 1
        : 1;

  }


  startLevel(
    currentLevel
  );

}


/* =========================================================
   RESET
========================================================= */

resetButton.addEventListener(
  'click',
  resetCurrentLevel
);


function resetCurrentLevel() {

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
    ] =
    [
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
  'keydown',
  event => {

    /*
       SPACE = CROSS
    */

    if (
      event.code === 'Space'
    ) {

      event.preventDefault();

      crossRiver();

    }


    /*
       R = RESET
    */

    if (
      event.key.toLowerCase() === 'r' &&
      !gameLocked
    ) {

      resetCurrentLevel();

    }

  }
);


/* =========================================================
   START
========================================================= */

startLevel(1);