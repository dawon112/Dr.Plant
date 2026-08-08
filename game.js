"use strict";


/* =========================================================
   메인 화면 요소
========================================================= */

const mainMenuScreen =
    document.getElementById("mainMenuScreen");

const startButton =
    document.getElementById("startButton");

const gameViewport =
    document.getElementById("gameViewport");

const gameScaler =
    document.getElementById("gameScaler");

const gameScreen =
    document.getElementById("gameScreen");


/* =========================================================
   게임 화면 요소
========================================================= */

const plant =
    document.getElementById("plant");
/*
식물 위에 표시할 선글라스 액세서리
*/

const plantSunglasses =
    document.getElementById(
        "plantSunglasses"
    );

const patientReview =
    document.getElementById("patientReview");

const nextButton =
    document.getElementById("nextButton");

const speechBubble =
    document.getElementById("speechBubble");

const speechText =
    document.getElementById("speechText");


/* 디버그 */

const debugPanel =
    document.getElementById("debugPanel");

const debugPatient =
    document.getElementById("debugPatient");

const debugSymptoms =
    document.getElementById("debugSymptoms");


/* 상태값 */

const hpClip =
    document.getElementById("hpClip");

const humidityClip =
    document.getElementById("humidityClip");

const temperatureClip =
    document.getElementById("temperatureClip");

const boredomClip =
    document.getElementById("boredomClip");


/* 치료 체크리스트 */

const checklistOverlay =
    document.getElementById("checklistOverlay");

const closeChecklistButton =
    document.getElementById("closeChecklistButton");

const confirmTreatmentButton =
    document.getElementById("confirmTreatmentButton");

const checklistMessage =
    document.getElementById("checklistMessage");

    /* =========================================================
   스테이지 UI
========================================================= */

const stageProgressUI =
    document.getElementById(
        "stageProgressUI"
    );


const currentStageText =
    document.getElementById(
        "currentStageText"
    );


const patientProgressText =
    document.getElementById(
        "patientProgressText"
    );
const centerPatientProgressText =
    document.getElementById(
        "centerPatientProgressText"
    );


const stageOverlay =
    document.getElementById(
        "stageOverlay"
    );


const stageOverlayTitle =
    document.getElementById(
        "stageOverlayTitle"
    );


const stageOverlayDescription =
    document.getElementById(
        "stageOverlayDescription"
    );
const stageUnlockArea =
    document.getElementById(
        "stageUnlockArea"
    );


const stageUnlockItems =
    document.getElementById(
        "stageUnlockItems"
    );
/* =========================================================
   위급 환자 / AED UI
========================================================= */

const emergencyWarning =
    document.getElementById(
        "emergencyWarning"
    );


const aedMiniGame =
    document.getElementById(
        "aedMiniGame"
    );


const aedTimingBar =
    document.getElementById(
        "aedTimingBar"
    );


const aedSuccessZone =
    document.getElementById(
        "aedSuccessZone"
    );


const aedTimingMarker =
    document.getElementById(
        "aedTimingMarker"
    );


const aedActionButton =
    document.getElementById(
        "aedActionButton"
    );


const aedResultText =
    document.getElementById(
        "aedResultText"
    );


const emergencyHpFill =
    document.getElementById(
        "emergencyHpFill"
    );


const emergencyHpText =
    document.getElementById(
        "emergencyHpText"
    );

const stageContinueButton =
    document.getElementById(
        "stageContinueButton"
    );

const restartGameButton =
    document.getElementById(
        "restartGameButton"
    );

/* =========================================================
   기본 설정
========================================================= */

const DEBUG_MODE =
    false;

const GAME_WIDTH =
    1600;

const GAME_HEIGHT =
    900;

const DEFAULT_FRAME_WIDTH =
    32;

const MOVE_DURATION =
    1500;

/* =========================================================
   스테이지 설정
========================================================= */

const STAGES = {

    1: {

        number:
            1,

        displayName:
            "Stage 1",

        patientTarget:
            7,

        symptomCount:
            1,

        unlockedSymptomIds: [

            "dehydration",

            "hot",

            "cold",

            "malnutrition"
        ],

        unlockItem:
            null

    },


    2: {

        number:
            2,

        displayName:
            "Stage 2",

        patientTarget:
            8,

        symptomCount:
            2,

        unlockedSymptomIds: [

            "dehydration",

            "hot",

            "cold",

            "malnutrition",

            "boredom"
        ],

        unlockItem: {

            id:
                "instrument",

            name:
                "기타",

            icon:
                "🎸",

            treatmentValue:
                "music"
        }

    },


    3: {

        number:
            3,

        displayName:
            "Stage 3",

        patientTarget:
            9,


        symptomCount:
            3,

        unlockedSymptomIds: [

            "dehydration",

            "hot",

            "cold",

            "malnutrition",

            "boredom",

            "overgrown"
        ],

        unlockItem: {

            id:
                "scissors",

            name:
                "가위",

            icon:
                "✂️",

            treatmentValue:
                "prune"
        }

    },


    4: {

        number:
            4,

        displayName:
            "Last Stage",

        patientTarget:
            10,

        symptomCount:
            3,

        unlockedSymptomIds: [

            "dehydration",

            "hot",

            "cold",

            "malnutrition",

            "boredom",

            "overgrown"
        ],

        /*
        Last Stage 진입 시
        두 아이템을 나란히 표시한다.
        */

        unlockItems: [

            {
                id:
                    "sunglasses",

                name:
                    "선글라스",

                icon:
                    "🕶️",

                treatmentValue:
                    "sunglasses"
            },

            {
                id:
                    "aed",

                name:
                    "AED",

                icon:
                    "⚡",

                treatmentValue:
                    null
            }
        ]
    }

};


const STAGE_INTRO_DURATION =
    1000;

/* =========================================================
   증상별 시각 효과 설정
========================================================= */

/*
과성장 환자 크기

원래 환자 크기의 1.8배
*/

const OVERGROWN_SCALE_MULTIPLIER =
    1.8;


/*
지루함 상태에서는 애니메이션을
기본 속도의 2배 느리게 한다.

animation-duration은 값이 커질수록 느려진다.
*/

const BOREDOM_SLOW_MULTIPLIER =
    2;

const BOREDOM_RECOVERY_SPEED_MULTIPLIER =
    2.5;


const NORMAL_DIALOGUE_CHANCE =
    0.3;


const PATIENT_SCALE_MULTIPLIER =
    1.5;


const POSITION = {

    LEFT:
        -160,

    CENTER:
        800,

    RIGHT:
        1760

};


//    MP3 음악 및 효과음


const calmBGM =
    new Audio("Sounds/CalmBGM.mp3");

calmBGM.loop =
    true;

calmBGM.volume =
    0.3;

calmBGM.preload =
    "auto";


const gameStartSound =
    new Audio("Sounds/GameStart.mp3");

gameStartSound.volume =
    0.65;

gameStartSound.preload =
    "auto";


const popSound =
    new Audio("Sounds/Check_Pop.mp3");


popSound.volume =
    0.5;


popSound.preload =
    "auto";


/*
페이지가 열릴 때 미리 파일을 불러온다.
*/

popSound.load();



//    환자 종류


const patientTypes = [

    {
        id:
            "flower",

        name:
            "꽃 환자",

        image:
            "Pictures/Flower.png",

        frameWidth:
            32,

        animationSpeed:
            0.65,

        scale:
            6.5 * PATIENT_SCALE_MULTIPLIER,

        voice: {

            frequency:
                650,

            waveType:
                "sine",

            volume:
                0.045,

            duration:
                0.045,

            pitchVariation:
                45
        }
    },

    {
        id:
            "bean",

        name:
            "콩 환자",

        image:
            "Pictures/Bean.png",

        frameWidth:
            32,

        animationSpeed:
            0.8,

        scale:
            6.5 * PATIENT_SCALE_MULTIPLIER,

        voice: {

            frequency:
                500,

            waveType:
                "square",

            volume:
                0.04,

            duration:
                0.04,

            pitchVariation:
                55
        }
    },

    {
        id:
            "cactus",

        name:
            "선인장 환자",

        image:
            "Pictures/Cactus.png",

        frameWidth:
            32,

        animationSpeed:
            0.7,

        scale:
            6.5 * PATIENT_SCALE_MULTIPLIER,

        voice: {

            frequency:
                440,

            waveType:
                "triangle",

            volume:
                0.055,

            duration:
                0.05,

            pitchVariation:
                40
        }
    },

    {
        id:
            "sprout",

        name:
            "새싹 환자",

        image:
            "Pictures/Sprout.png",

        frameWidth:
            32,

        animationSpeed:
            0.75,

        scale:
            7 * PATIENT_SCALE_MULTIPLIER,

        voice: {

            frequency:
                760,

            waveType:
                "sine",

            volume:
                0.035,

            duration:
                0.035,

            pitchVariation:
                70
        }
    },

    {
        id:
            "succulent",

        name:
            "다육이 환자",

        image:
            "Pictures/Succulent.png",

        frameWidth:
            32,

        animationSpeed:
            0.8,

        scale:
            6.5 * PATIENT_SCALE_MULTIPLIER,

        voice: {

            frequency:
                430,

            waveType:
                "triangle",

            volume:
                0.04,

            duration:
                0.06,

            pitchVariation:
                35
        }
    }

];


//    증상 종류

const symptoms = [
    {
        id: "dehydration",

        name: "수분 부족",

        treatments: [
            "water"
        ],

        requiredStage:
            1,

        dialogues: [
            "목이 너무 말라요...",
            "흙이 바싹 말라버린 것 같아요.",
            "물을 마신 지 너무 오래됐어요...",
            "잎에 힘이 하나도 없어요.",
            "저... 얼굴에 수분이 없어졌죠??"
        ]
    },

    {
        id:
            "hot",

        name:
            "고온",

        treatments: [
            "cool"
        ],

        requiredStage:
            1,

        dialogues: [
            "몸이 너무 뜨거워요...",
            "잎 끝이 뜨겁게 달아올랐어요.",
            "조금 시원한 곳으로 가고 싶어요.",
            "햇빛이 오늘따라 너무 따가워요.",
            "몸에서 계속 열이 나는 기분이에요...",
            "옷은 없지만 옷을 벗고 싶은 날이네요.",
            "선글라스라도 없나요?"
        ]
    },

    {
        id:
            "cold",

        name:
            "저온",

        treatments: [
            "warm"
        ],

        requiredStage:
            1,

        dialogues: [
            "몸이 자꾸 덜덜 떨려요...",
            "뿌리까지 얼어붙는 것 같아요.",
            "조금 더 따뜻한 곳은 없나요?",
            "따뜻한 햇빛이 그리워요.",
            "화분 안까지 너무 차가워졌어요.",
            "벌써 겨울인가요? 아직 옷 준비를 안 했는데...",
            "여기 히터 없나요?"
        ]
    },

    {
        id:
            "malnutrition",

        name:
            "영양 부족",

        treatments: [
            "fertilizer"
        ],

        requiredStage:
            1,

        dialogues: [
            "삶의 원동력이 없어요",
            "뭘 먹어도 계속 기운이 없어요...",
            "요즘 새잎이 잘 자라지 않아요.",
            "몸에 필요한 게 부족한 것 같아요.",
            "잎 색이 전보다 옅어진 것 같아요.",
            "충분히 쉬었는데도... 힘이 안 나요..."
        ]
    },

    {
        id:
            "boredom",

        name:
            "지루함",

        treatments: [
            "music"
        ],

        requiredStage:
            2,

        dialogues: [

            "저 너무 지루해요...",

            "누가 음악이라도 들려줬으면 좋겠어요.",

            "벽 무늬를 세는 것도 이제 지겨워요.",

            "신나는 노래 같은 건 없나요?",

            "계속 가만히 있으니까 너무 심심해요..."
        ]
    },

    {
        id:
            "overgrown",

        name:
            "과성장",

        treatments: [
            "prune"
        ],

        requiredStage:
            3,

        dialogues: [

            "어라? 선생님이 작아지신 건가요?",

            "지금 좀 움직이기 힘들어요.",

            "오래된 잎을 조금 정리하고 싶어요.",

            "새잎이 자랄 공간이 부족해요.",

            "제 몸이 커진 거죠? 그죠??"
        ]
    }

];


/*
함께 나올 수 없는 증상 조합
*/

const incompatibleSymptomPairs = [

    [
        "hot",
        "cold"
    ]

];



/* =========================================================
   게임 상태
========================================================= */
/* =========================================================
   AED 미니게임 상태
========================================================= */

let emergencyEventActive =
    false;


let emergencyHp =
    10;


let aedMarkerPosition =
    0;


let aedMarkerDirection =
    1;


let aedAnimationFrameId =
    null;


let aedInputLocked =
    false;


/*
스킬 체크 설정
*/

const AED_INITIAL_HP =
    10;


const AED_SUCCESS_GAIN =
    30;


const AED_FAILURE_DAMAGE =
    20;


/*
AED 기본 속도

현재 0.03이 너무 느렸으므로
처음부터 약간 빠르게 시작.
*/

const AED_BASE_MARKER_SPEED =
    0.052;


/*
성공 단계가 올라갈 때마다
속도를 1.3배 증가
*/

const AED_SPEED_MULTIPLIER =
    1.8;


const AED_SUCCESS_ZONE_START =
    40;


const AED_SUCCESS_ZONE_END =
    60;

let currentStage =
    1;


let treatedPatientCount =
    0;


let stageActive =
    false;


let gameOver =
    false;

let gameStarted =
    false;

let gameInitialized =
    false;

let isMoving =
    false;

let patientReady =
    false;

let typingId =
    0;

let currentPatient =
    null;

let lastArrivalDialogue =
    "";

let lastPatientDialogue =
    "";


/* Web Audio API 상태 */

let audioContext =
    null;

let lastTypingSoundTime =
    0;

const MASTER_TYPING_VOLUME =
    5;

const TYPING_SOUND_INTERVAL =
    32;


/* =========================================================
   대사 목록
========================================================= */

const arrivalDialogues = [
    "안녕하세요!",
    "안녕요...!",
    "잘 부탁드려요.",
    "오늘 진료 잘 부탁드릴게요.",
    "여기가 Dr.Plant 맞죠?",
    "선생님, 안녕하세요.",
    "조금 긴장되네요...",
    "여기까지 오기는 싫었는데..."
];

// 잡담
const normalDialogues = [

    "오늘 날씨가 좋네요... 그죠?",
    "저 조금 긴장했어요.",
    "선생님은 식물을 좋아하세요?",
    "여기 병원 분위기가 신기하네요.",
    "요즘 어떻게 지내세요?",
    "저 잘 부탁드릴게요.",
    "병원은 처음이라 신기해요.",
    "제 주인이 저를 신경쓰지 않아서 여기 왔어요."
];


const goodTreatmentReviews = [
    "이제 괜찮아졌어요!",
    "몸이 한결 가벼워졌어요!",
    "정확한 치료였어요. 감사합니다!",
    "다음에도 여기로 올게요!",
    "선생님을 믿길 잘했어요!",
    "상쾌해졌어요!"
];


const badTreatmentReviews = [
    "기분이 많이 상했어요...",
    "이거 돌팔이 아니야?",
    "전보다 더 아픈 것 같은데...",
    "정말 이 치료가 맞는 건가요?",
    "다음에는 다른 병원에 갈래요.",
    "다신 여기 오나 봐라..."
];



//    화면 비율

function resizeGameScreen() {

    if (
        !gameScaler
    ) {

        return;
    }


    const viewportWidth =

        window.visualViewport

            ? window.visualViewport.width

            : window.innerWidth;


    const viewportHeight =

        window.visualViewport

            ? window.visualViewport.height

            : window.innerHeight;


    if (
        viewportWidth <= 0
        ||
        viewportHeight <= 0
    ) {

        return;
    }


    const gameScale =

        Math.min(

            viewportWidth
            /
            GAME_WIDTH,

            viewportHeight
            /
            GAME_HEIGHT

        );


    const roundedScale =

        Math.floor(
            gameScale
            *
            10000
        )
        /
        10000;


    gameScaler.style.setProperty(
        "--game-scale",
        roundedScale
    );


    gameScaler.classList.add(
        "scale-ready"
    );

}


function initializeScreenScale() {

    resizeGameScreen();


    requestAnimationFrame(
        () => {

            resizeGameScreen();


            requestAnimationFrame(
                resizeGameScreen
            );
        }
    );


    window.setTimeout(
        resizeGameScreen,
        100
    );


    window.setTimeout(
        resizeGameScreen,
        300
    );
}


window.addEventListener(
    "resize",
    resizeGameScreen
);


window.addEventListener(
    "orientationchange",
    () => {

        window.setTimeout(
            resizeGameScreen,
            100
        );
    }
);


if (
    window.visualViewport
) {

    window.visualViewport.addEventListener(
        "resize",
        resizeGameScreen
    );
}

//    현재 스테이지 설정 가져오기

function getCurrentStageConfig() {

    return STAGES[
        currentStage
    ];
}


//    스테이지 진행 표시

function updateStageProgressUI() {

    const stageConfig =
        getCurrentStageConfig();


    if (
        !stageConfig
    ) {

        console.error(
            "존재하지 않는 스테이지:",
            currentStage
        );

        return;
    }


    /*
    왼쪽 위 스테이지 표시
    */

    currentStageText.textContent =
        stageConfig.displayName;


    /*
    왼쪽 위 진행 인원
    */

    patientProgressText.textContent =

        `${treatedPatientCount} / ${stageConfig.patientTarget}`;


    /*
    게임 화면 중앙 아래 진행 인원
    */

    if (
        centerPatientProgressText
    ) {

        centerPatientProgressText.textContent =

            `${treatedPatientCount} / ${stageConfig.patientTarget}`;
    }
}



/* =========================================================
   스테이지 오버레이 기본 표시
========================================================= */

function showStageOverlay(
    title,
    description = ""
) {

    if (
        !stageOverlay
        ||
        !stageOverlayTitle
        ||
        !stageOverlayDescription
    ) {

        console.error(
            "스테이지 오버레이 HTML 요소가 없습니다."
        );

        return;
    }


    stageOverlayTitle.textContent =
        title;


    if (
        description
    ) {

        stageOverlayDescription.textContent =
            description;


        stageOverlayDescription.classList.remove(
            "hidden"
        );
    }

    else {

        stageOverlayDescription.textContent =
            "";


        stageOverlayDescription.classList.add(
            "hidden"
        );
    }


    /*
    일반 스테이지 안내에서는
    해금 영역과 버튼을 숨긴다.
    */

    stageUnlockArea.classList.add(
        "hidden"
    );


    stageContinueButton.classList.add(
        "hidden"
    );


    if (
        restartGameButton
    ) {

        restartGameButton.classList.add(
            "hidden"
        );
    }


    stageOverlay.classList.remove(
        "hidden"
    );
}


function getCurrentAedMarkerSpeed() {



    if (
        emergencyHp < 40
    ) {

        return AED_BASE_MARKER_SPEED;
    }


    if (
        emergencyHp < 70
    ) {

        return (
            AED_BASE_MARKER_SPEED
            *
            AED_SPEED_MULTIPLIER
        );
    }




    return (
        AED_BASE_MARKER_SPEED
        *
        AED_SPEED_MULTIPLIER
        *
        AED_SPEED_MULTIPLIER
    );
}

// 게임오버
function showGameOverScreen(
    message
) {

    /*
    게임오버 효과음
    */

    playSoundEffect(
        gameoverSound
    );


    /*
    게임오버 화면
    */

    showStageOverlay(
        "GAME OVER",
        message
    );


    stageContinueButton.classList.add(
        "hidden"
    );


    stageUnlockArea.classList.add(
        "hidden"
    );


    restartGameButton.classList.remove(
        "hidden"
    );
}


//    해피 엔딩 화면 표시

function showHappyEndingScreen() {

    showStageOverlay(
        "HAPPY ENDING",
        "위급 환자를 살리고 모든 진료를 완료했습니다!"
    );


    /*
    스테이지 진행 관련 UI 숨김
    */

    stageUnlockArea.classList.add(
        "hidden"
    );


    stageContinueButton.classList.add(
        "hidden"
    );


    /*
    다시하기 버튼 표시
    */

    restartGameButton.classList.remove(
        "hidden"
    );


    restartGameButton.disabled =
        false;
}



function hideStageOverlay() {

    stageOverlay.classList.add(
        "hidden"
    );
}


async function startStage(
    stageNumber
) {
    
    

    const stageConfig =
        STAGES[
            stageNumber
        ];


    if (
        !stageConfig
    ) {

        console.error(
            "시작할 수 없는 스테이지:",
            stageNumber
        );

        return;
    }


    currentStage =
        stageNumber;


    treatedPatientCount =
        0;


    stageActive =
        false;


    gameOver =
        false;

    emergencyEventActive =
        false;


    aedMiniGame.classList.add(
        "hidden"
    );


    emergencyWarning.classList.add(
        "hidden"
    );


    stopAedMarkerAnimation();


    plant.style.filter =
        "";


    nextButton.disabled =
        true;


    hidePatientReview();


    hideSpeechBubble();


    updateStageProgressUI();

    showStageOverlay(

        stageConfig.displayName,

        `${stageConfig.patientTarget}명의 환자를 치료하세요.\n(최대 ${stageConfig.symptomCount}개의 증상)`
    );


    /*
    1초 동안 안내 표시
    */

    await sleep(
        STAGE_INTRO_DURATION
    );


    hideStageOverlay();


    stageActive =
        true;


    startPatient();
}

function randomNumber(
    min,
    max
) {

    return Math.floor(
        Math.random()
        *
        (
            max
            -
            min
            +
            1
        )
    )
    +
    min;
}


function getRandomItem(
    array
) {

    return array[
        Math.floor(
            Math.random()
            *
            array.length
        )
    ];
}


function shuffleArray(
    array
) {

    const copiedArray =
        [
            ...array
        ];


    for (
        let index =
            copiedArray.length - 1;

        index > 0;

        index--
    ) {

        const randomIndex =

            Math.floor(
                Math.random()
                *
                (
                    index
                    +
                    1
                )
            );


        [
            copiedArray[index],
            copiedArray[randomIndex]
        ]
        =
        [
            copiedArray[randomIndex],
            copiedArray[index]
        ];
    }


    return copiedArray;
}


function getNonRepeatedItem(
    dialogueList,
    previousDialogue
) {

    if (
        !Array.isArray(dialogueList)
        ||
        dialogueList.length === 0
    ) {

        return "";
    }


    if (
        dialogueList.length === 1
    ) {

        return dialogueList[0];
    }


    const availableDialogues =

        dialogueList.filter(
            dialogue =>
                dialogue !== previousDialogue
        );


    return getRandomItem(

        availableDialogues.length > 0

            ? availableDialogues

            : dialogueList
    );
}


function sleep(
    milliseconds
) {

    return new Promise(
        resolve => {

            window.setTimeout(
                resolve,
                milliseconds
            );
        }
    );
}



//    MP3 재생 함수

function playSoundEffect(
    audio
) {

    if (
        !audio
    ) {

        return;
    }


    try {

        audio.pause();

        audio.currentTime =
            0;


        const playPromise =
            audio.play();


        if (
            playPromise
            &&
            typeof playPromise.catch === "function"
        ) {

            playPromise.catch(
                error => {

                    console.warn(
                        "효과음 재생 실패:",
                        error
                    );
                }
            );
        }
    }

    catch (
        error
    ) {

        console.warn(
            "효과음 처리 실패:",
            error
        );
    }
}


function playChecklistPopSound(
    isChecked
) {

    const sound =
        popSound.cloneNode();


    sound.volume =
        popSound.volume;


    sound.playbackRate =

        isChecked

            ? 1.0

            : 0.82;


    if (
        "preservesPitch"
        in
        sound
    ) {

        sound.preservesPitch =
            false;
    }


    if (
        "mozPreservesPitch"
        in
        sound
    ) {

        sound.mozPreservesPitch =
            false;
    }


    if (
        "webkitPreservesPitch"
        in
        sound
    ) {

        sound.webkitPreservesPitch =
            false;
    }


    sound.play().catch(
        error => {

            console.warn(
                "체크리스트 Pop 효과음 재생 실패:",
                error
            );
        }
    );
}

function startCalmBGM() {

    if (
        !calmBGM.paused
    ) {

        return;
    }


    const playPromise =
        calmBGM.play();


    if (
        playPromise
        &&
        typeof playPromise.catch === "function"
    ) {

        playPromise.catch(
            error => {

                console.warn(
                    "BGM 재생 실패:",
                    error
                );
            }
        );
    }
}

/* =========================================================
   추가 효과음
========================================================= */



const treatButtonPopSound =
    new Audio(
        "Sounds/Treatbutton_Pop.mp3"
    );


treatButtonPopSound.preload =
    "auto";


treatButtonPopSound.volume =
    0.65;

const stageClearSound =
    new Audio(
        "Sounds/Stageclear.mp3"
    );


stageClearSound.preload =
    "auto";


stageClearSound.volume =
    0.7;




const gameClearSound =
    new Audio(
        "Sounds/Gameclear.mp3"
    );


gameClearSound.preload =
    "auto";


gameClearSound.volume =
    0.75;



const gameoverSound =
    new Audio(
        "Sounds/Gameover.mp3"
    );


gameoverSound.preload =
    "auto";


gameoverSound.volume =
    0.7;


const emergencySound =
    new Audio(
        "Sounds/Emergency.mp3"
    );


emergencySound.preload =
    "auto";


emergencySound.volume =
    0.75;

/* =========================================================
   이미지 크기 자동 계산
========================================================= */

function loadImageMetadata(
    patientType
) {

    return new Promise(
        (
            resolve,
            reject
        ) => {

            const image =
                new Image();


            image.onload =
                () => {

                    const frameWidth =

                        patientType.frameWidth

                        ??

                        DEFAULT_FRAME_WIDTH;


                    const sheetWidth =
                        image.naturalWidth;


                    const frameHeight =
                        image.naturalHeight;


                    const frameCount =

                        sheetWidth
                        /
                        frameWidth;


                    if (
                        !Number.isInteger(frameCount)
                    ) {

                        reject(
                            new Error(
                                `${patientType.image}: `
                                +
                                `${sheetWidth}px를 `
                                +
                                `${frameWidth}px 단위로 나눌 수 없습니다.`
                            )
                        );

                        return;
                    }


                    patientType.sheetWidth =
                        sheetWidth;


                    patientType.frameHeight =
                        frameHeight;


                    patientType.frameCount =
                        frameCount;


                    resolve(
                        patientType
                    );
                };


            image.onerror =
                () => {

                    reject(
                        new Error(
                            `이미지를 불러오지 못했습니다: ${patientType.image}`
                        )
                    );
                };


            image.src =
                patientType.image;
        }
    );
}


async function preparePatientTypes() {

    await Promise.all(

        patientTypes.map(
            patientType =>
                loadImageMetadata(patientType)
        )
    );
}



//    현재 스테이지에 등장 가능한 증상


function getAvailableSymptoms() {

    const stageConfig =
        getCurrentStageConfig();


    if (
        !stageConfig
    ) {

        return [];
    }


    return symptoms.filter(
        symptom =>

            stageConfig
                .unlockedSymptomIds
                .includes(
                    symptom.id
                )
    );
}


function areSymptomsIncompatible(
    symptomA,
    symptomB
) {

    return incompatibleSymptomPairs.some(
        pair =>

            pair.includes(symptomA.id)

            &&

            pair.includes(symptomB.id)
    );
}


/* =========================================================
   스테이지 치료 항목 해금
========================================================= */

function unlockStageTreatment(
    stageNumber
) {

    const stageConfig =
        STAGES[
            stageNumber
        ];


    if (
        !stageConfig
    ) {

        return;
    }


    let unlockItems =
        [];


    if (
        Array.isArray(
            stageConfig.unlockItems
        )
    ) {

        unlockItems =
            stageConfig.unlockItems;
    }

    else if (
        stageConfig.unlockItem
    ) {

        unlockItems = [
            stageConfig.unlockItem
        ];
    }


    unlockItems.forEach(
        unlockItem => {

            if (
                !unlockItem.treatmentValue
            ) {

                return;
            }


            const treatmentOption =

                document.querySelector(
                    `[data-treatment-unlock="${unlockItem.id}"]`
                );


            if (
                !treatmentOption
            ) {

                console.warn(
                    "해금할 치료 항목을 찾지 못했습니다:",
                    unlockItem.id
                );

                return;
            }


            treatmentOption.classList.remove(
                "hidden",
                "lockedTreatment"
            );


            const checkbox =

                treatmentOption.querySelector(
                    'input[type="checkbox"]'
                );


            if (
                checkbox
            ) {

                checkbox.disabled =
                    false;
            }
        }
    );
}

/* =========================================================
   다음 스테이지 해금 화면
========================================================= */

function showNextStageUnlockScreen(
    nextStageNumber
) {

    const nextStageConfig =
        STAGES[
            nextStageNumber
        ];
    playSoundEffect(
        stageClearSound
    );

    if (
        !nextStageConfig
    ) {

        console.error(
            "다음 스테이지 설정이 없습니다:",
            nextStageNumber
        );

        return;
    }

    stageActive =
        false;


    patientReady =
        false;


    isMoving =
        false;


    nextButton.disabled =
        true;


    hideSpeechBubble();


    hidePatientReview();


    stageOverlayTitle.textContent =
        nextStageConfig.displayName;


    stageOverlayDescription.textContent =
        "새로운 치료 도구가 해금되었습니다!";


    stageOverlayDescription.classList.remove(
        "hidden"
    );


    stageUnlockItems.innerHTML =
        "";


    let unlockItems =
        [];


    if (
        Array.isArray(
            nextStageConfig.unlockItems
        )
    ) {

        unlockItems =
            nextStageConfig.unlockItems;
    }

    else if (
        nextStageConfig.unlockItem
    ) {

        unlockItems = [
            nextStageConfig.unlockItem
        ];
    }


    if (
        unlockItems.length > 0
    ) {

        unlockItems.forEach(
            item => {

                const itemElement =
                    document.createElement(
                        "div"
                    );


                itemElement.className =
                    "stageUnlockItem";


                const iconElement =
                    document.createElement(
                        "div"
                    );


                iconElement.className =
                    "stageUnlockItemIcon";


                iconElement.textContent =
                    item.icon;


                const nameElement =
                    document.createElement(
                        "div"
                    );


                nameElement.className =
                    "stageUnlockItemName";


                nameElement.textContent =
                    `${item.name} 해금!`;


                itemElement.append(
                    iconElement,
                    nameElement
                );


                stageUnlockItems.appendChild(
                    itemElement
                );
            }
        );


        stageUnlockArea.classList.remove(
            "hidden"
        );
    }


    stageContinueButton.classList.remove(
        "hidden"
    );


    stageContinueButton.disabled =
        false;


    stageContinueButton.dataset.nextStage =
        String(
            nextStageNumber
        );

    stageOverlay.classList.remove(
        "hidden"
    );
}

function createRandomSymptoms() {

    const availableSymptoms =
        getAvailableSymptoms();


    if (
        availableSymptoms.length === 0
    ) {

        throw new Error(
            "현재 스테이지에 등장 가능한 증상이 없습니다."
        );
    }


    const stageConfig =
        getCurrentStageConfig();


    const maxSymptomCount =

        stageConfig

            ? stageConfig.symptomCount

            : 1;


    /*
    1개부터 현재 스테이지의 최대 증상 수까지
    랜덤하게 결정.

    Stage 1 → 1
    Stage 2 → 1~2
    Stage 3 → 1~3
    Last Stage → 1~3
    */

    const targetCount =

        Math.floor(
            Math.random()
            *
            maxSymptomCount
        )

        +

        1;


    const selectedSymptoms =
        [];


    for (
        const symptom
        of shuffleArray(availableSymptoms)
    ) {

        const conflict =

            selectedSymptoms.some(
                selectedSymptom =>

                    areSymptomsIncompatible(
                        selectedSymptom,
                        symptom
                    )
            );


        if (
            conflict
        ) {

            continue;
        }


        selectedSymptoms.push(
            symptom
        );


        if (
            selectedSymptoms.length
            >=
            targetCount
        ) {

            break;
        }
    }


    return selectedSymptoms;
}


function createStatsFromSymptoms(
    selectedSymptoms
) {

    const stats = {

        hp:
            randomNumber(65, 95),

        humidity:
            randomNumber(45, 75),

        temperature:
            randomNumber(40, 65),

        boredom:
            randomNumber(30, 70)
    };


    selectedSymptoms.forEach(
        symptom => {

            switch (
                symptom.id
            ) {

                case "dehydration":

                    stats.humidity =
                        randomNumber(8, 28);

                    stats.hp =
                        Math.min(
                            stats.hp,
                            randomNumber(45, 72)
                        );

                    break;


                case "hot":

                    stats.temperature =
                        randomNumber(78, 100);

                    break;


                case "cold":

                    stats.temperature =
                        randomNumber(5, 25);

                    break;


                case "malnutrition":

                    stats.hp =
                        randomNumber(20, 48);

                    break;


                case "boredom":

                    stats.boredom =
                        randomNumber(80, 100);

                    break;


                case "overgrown":

                    stats.hp =
                        Math.min(
                            stats.hp,
                            randomNumber(45, 75)
                        );

                    break;
            }
        }
    );


    return stats;
}


function createRandomPatient() {

    const selectedSymptoms =
        createRandomSymptoms();


    return {

        character:
            getRandomItem(patientTypes),

        symptoms:
            selectedSymptoms,

        stats:
            createStatsFromSymptoms(
                selectedSymptoms
            )
    };
}


/* =========================================================
   환자 스프라이트
========================================================= */

function restartPlantAnimation() {

    plant.style.animationName =
        "none";


    void plant.offsetWidth;


    plant.style.animationName =
        "plantSpriteAnimation";
}


function applyPatientSprite(
    character
) {

    plant.classList.remove(
        "symptom-hot",
        "symptom-cold"
    );


    plant.style.width =
        `${character.frameWidth}px`;


    plant.style.height =
        `${character.frameHeight}px`;


    plant.style.setProperty(
        "--plant-image",
        `url("${character.image}")`
    );


    plant.style.setProperty(
        "--frame-count",
        character.frameCount
    );


    plant.style.setProperty(
        "--sheet-width",
        `${character.sheetWidth}px`
    );


    plant.style.setProperty(
        "--plant-scale",
        character.scale
    );


    plant.style.setProperty(
        "--animation-speed",
        `${character.animationSpeed}s`
    );


    restartPlantAnimation();
}


/* =========================================================
   증상에 따른 환자 시각 효과
========================================================= */

function applySymptomEffects(
    selectedSymptoms,
    character
) {


    plant.classList.remove(
        "symptom-hot",
        "symptom-cold"
    );


    const symptomIds =

        selectedSymptoms.map(
            symptom =>
                symptom.id
        );



    let patientScale =
        character.scale;


    let animationSpeed =
        character.animationSpeed;


    /*
    고온 증상: 붉은 색조
    */

    if (
        symptomIds.includes(
            "hot"
        )
    ) {

        plant.classList.add(
            "symptom-hot"
        );
    }


    /*
    저온 증상: 푸른 색조
    */

    if (
        symptomIds.includes(
            "cold"
        )
    ) {

        plant.classList.add(
            "symptom-cold"
        );
    }


    /*
    영양 부족: 애니메이션 2배 느리게

    기존에 사용하던 효과를 유지한다.
    */

    if (
        symptomIds.includes(
            "malnutrition"
        )
    ) {

        animationSpeed *=
            2;
    }


    /*
    지루함:
    애니메이션 2배 느리게

    animation-duration 값이 커질수록
    스프라이트 애니메이션은 느려진다.
    */

    if (
        symptomIds.includes(
            "boredom"
        )
    ) {

        animationSpeed *=
            BOREDOM_SLOW_MULTIPLIER;
    }


    /*
    과성장:
    식물 환자의 크기를 1.8배로 확대한다.
    */

    if (
        symptomIds.includes(
            "overgrown"
        )
    ) {

        patientScale *=
            OVERGROWN_SCALE_MULTIPLIER;
    }


    /*
    계산된 크기를 CSS 변수에 적용한다.
    */

    plant.style.setProperty(
        "--plant-scale",
        patientScale
    );

    plant.style.setProperty(
        "--animation-speed",
        `${animationSpeed}s`
    );


    restartPlantAnimation();

}

function currentPatientHasSymptom(
    symptomId
) {

    if (
        !currentPatient
        ||
        !Array.isArray(
            currentPatient.symptoms
        )
    ) {

        return false;
    }


    return currentPatient.symptoms.some(
        symptom =>
            symptom.id
            ===
            symptomId
    );
}

/* =========================================================
   치료 결과에 따른 퇴장 애니메이션 설정
========================================================= */

function applyTreatmentExitAnimation(
    isCorrect
) {

    if (
        !currentPatient
        ||
        !currentPatient.character
    ) {

        return;
    }


    if (
        !isCorrect
    ) {

        return;
    }


    if (
        !currentPatientHasSymptom(
            "boredom"
        )
    ) {

        return;
    }


    /*
    지루함을 정확하게 치료한 경우:

    환자의 원래 애니메이션 속도를
    2.5로 나누어 빠르게 만듦.

    */

    const recoveredAnimationSpeed =

        currentPatient.character.animationSpeed

        /

        BOREDOM_RECOVERY_SPEED_MULTIPLIER;


    plant.style.setProperty(
        "--animation-speed",
        `${recoveredAnimationSpeed}s`
    );


    /*
    빠른 애니메이션이 즉시 시작되도록 재시작
    */

    restartPlantAnimation();

}


function updateStatusBars(
    stats
) {

    if (
        hpClip
    ) {

        hpClip.style.width =
            `${stats.hp}%`;
    }


    if (
        humidityClip
    ) {

        humidityClip.style.width =
            `${stats.humidity}%`;
    }


    if (
        temperatureClip
    ) {

        temperatureClip.style.width =
            `${stats.temperature}%`;
    }


    if (
        boredomClip
    ) {

        boredomClip.style.width =
            `${stats.boredom}%`;
    }
}


function updateDebugInformation() {

    if (
        !DEBUG_MODE
        ||
        !debugPanel
    ) {

        return;
    }


    debugPatient.textContent =
        currentPatient.character.name;


    debugSymptoms.textContent =

        currentPatient.symptoms
            .map(
                symptom =>
                    symptom.name
            )
            .join(" + ");


    debugPanel.classList.remove(
        "hidden"
    );

}


/* =========================================================
   식물 전자 타자음
========================================================= */

function getAudioContext() {

    if (
        !audioContext
    ) {

        const AudioContextClass =

            window.AudioContext

            ||

            window.webkitAudioContext;


        if (
            !AudioContextClass
        ) {

            return null;
        }


        audioContext =
            new AudioContextClass();
    }


    if (
        audioContext.state === "suspended"
    ) {

        audioContext.resume();
    }


    return audioContext;
}


function playPatientTypingSound() {

    if (
        !currentPatient
        ||
        !currentPatient.character
        ||
        !currentPatient.character.voice
    ) {

        return;
    }


    const now =
        performance.now();


    if (
        now - lastTypingSoundTime
        <
        TYPING_SOUND_INTERVAL
    ) {

        return;
    }


    lastTypingSoundTime =
        now;


    const context =
        getAudioContext();


    if (
        !context
    ) {

        return;
    }


    const voice =
        currentPatient.character.voice;


    const frequency =

        voice.frequency

        +

        (
            Math.random()
            *
            2
            -
            1
        )

        *

        voice.pitchVariation;


    const oscillator =
        context.createOscillator();


    const gainNode =
        context.createGain();


    oscillator.type =
        voice.waveType;


    oscillator.frequency.setValueAtTime(

        Math.max(
            80,
            frequency
        ),

        context.currentTime
    );


    gainNode.gain.setValueAtTime(

        voice.volume
        *
        MASTER_TYPING_VOLUME,

        context.currentTime
    );


    gainNode.gain.exponentialRampToValueAtTime(

        0.0001,

        context.currentTime
        +
        voice.duration
    );


    oscillator.connect(
        gainNode
    );


    gainNode.connect(
        context.destination
    );


    oscillator.start(
        context.currentTime
    );


    oscillator.stop(

        context.currentTime
        +
        voice.duration
    );
}

/* =========================================================
   효과음 재생
========================================================= */

function playSoundEffect(
    sound
) {

    if (
        !sound
    ) {

        return;
    }


    /*
    같은 효과음을 빠르게 다시 눌러도
    처음부터 다시 재생
    */

    sound.pause();


    sound.currentTime =
        0;


    sound.play().catch(
        error => {

            console.warn(
                "효과음 재생 실패:",
                error
            );
        }
    );
}


/* =========================================================
   말풍선
========================================================= */

function showSpeechBubble() {

    speechBubble.classList.remove(
        "hidden"
    );
}


function hideSpeechBubble() {

    typingId +=
        1;


    speechText.textContent =
        "";


    speechBubble.classList.add(
        "hidden"
    );
}


async function typeText(
    text
) {

    typingId +=
        1;


    const currentTypingId =
        typingId;


    showSpeechBubble();


    speechText.textContent =
        "";


    for (
        let index = 0;

        index < text.length;

        index++
    ) {

        if (
            currentTypingId !== typingId
        ) {

            return;
        }


        const character =
            text[index];


        speechText.textContent +=
            character;


        if (
            ![
                " ",
                "\n",
                ".",
                ",",
                "!",
                "?",
                "…"
            ].includes(character)
        ) {

            playPatientTypingSound();
        }


        let delay =
            28;


        if (
            character === ","
        ) {

            delay =
                80;
        }

        else if (
            [
                ".",
                "!",
                "?"
            ].includes(character)
        ) {

            delay =
                140;
        }


        await sleep(
            delay
        );
    }
}


function getPatientDialogue() {

    let dialoguePool =
        normalDialogues;


    if (
        currentPatient
        &&
        currentPatient.symptoms.length > 0
        &&
        Math.random() >= NORMAL_DIALOGUE_CHANCE
    ) {

        const selectedSymptom =

            getRandomItem(
                currentPatient.symptoms
            );


        if (
            Array.isArray(selectedSymptom.dialogues)
            &&
            selectedSymptom.dialogues.length > 0
        ) {

            dialoguePool =
                selectedSymptom.dialogues;
        }
    }


    const selectedDialogue =

        getNonRepeatedItem(
            dialoguePool,
            lastPatientDialogue
        );


    lastPatientDialogue =
        selectedDialogue;


    return selectedDialogue;
}






/* =========================================================
   치료 체크리스트
========================================================= */

function openChecklist() {

    if (
        !stageActive
        ||
        gameOver
        ||
        isMoving
        ||
        !patientReady
    ) {

        return;
    }


    checklistMessage.textContent =
        "";


    checklistOverlay.classList.remove(
        "hidden"
    );


    checklistOverlay.setAttribute(
        "aria-hidden",
        "false"
    );
}


function closeChecklist() {

    checklistOverlay.classList.add(
        "hidden"
    );


    checklistOverlay.setAttribute(
        "aria-hidden",
        "true"
    );


    checklistMessage.textContent =
        "";


    checklistMessage.style.color =
        "";
}


function getSelectedTreatments() {

    return Array.from(

        checklistOverlay.querySelectorAll(
            'input[name="treatment"]:checked'
        )

    ).map(
        input =>
            input.value
    );
}


function resetTreatmentSelections() {

    checklistOverlay
        .querySelectorAll(
            'input[name="treatment"]'
        )
        .forEach(
            input => {

                input.checked =
                    false;
            }
        );


    checklistMessage.textContent =
        "";
}


function isTreatmentSelectionCorrect(
    selectedTreatments,
    patientSymptoms
) {

    if (
        selectedTreatments.length
        !==
        patientSymptoms.length
    ) {

        return false;
    }


    const usedTreatments =
        new Set();


    for (
        const symptom
        of patientSymptoms
    ) {

        const matchingTreatment =

            symptom.treatments.find(
                treatment =>

                    selectedTreatments.includes(
                        treatment
                    )

                    &&

                    !usedTreatments.has(
                        treatment
                    )
            );


        if (
            !matchingTreatment
        ) {

            return false;
        }


        usedTreatments.add(
            matchingTreatment
        );
    }


    return true;
}


function showPatientReview(
    reviewText,
    isCorrect
) {

    patientReview.textContent =
        reviewText;

    patientReview.classList.remove(
        "hidden",
        "review-good",
        "review-bad"
    );

    if (isCorrect) {

        patientReview.classList.add(
            "review-good"
        );

    } else {

        patientReview.classList.add(
            "review-bad"
        );

    }

}


function hidePatientReview() {

    patientReview.textContent =
        "";


    patientReview.classList.remove(
        "review-good",
        "review-bad"
    );


    patientReview.classList.add(
        "hidden"
    );
}


/* =========================================================
   게임 오버
========================================================= */

function endGameWithFailure() {

    gameOver =
        true;


    stageActive =
        false;


    isMoving =
        false;


    patientReady =
        false;


    nextButton.disabled =
        true;


    closeChecklist();


    hideSpeechBubble();


    calmBGM.pause();


    showGameOverScreen(
        "잘못된 치료를 선택했습니다."
    );
}


/* =========================================================
   식물 선글라스 액세서리
========================================================= */

/*
선글라스 표시
*/

function showPlantSunglasses() {

    if (
        !plantSunglasses
    ) {

        return;
    }


    plantSunglasses.classList.remove(
        "hidden"
    );
}

/* =========================================================
   Stage 1 클리어
========================================================= */

function clearStageOne() {

    /*
    Stage 2 해금 화면 표시
    */

    showNextStageUnlockScreen(
        2
    );
}
/*
선글라스 숨김
*/

function hidePlantSunglasses() {

    if (
        !plantSunglasses
    ) {

        return;
    }


    plantSunglasses.classList.add(
        "hidden"
    );
}


function confirmTreatments() {
    playSoundEffect(
        treatButtonPopSound
    );

    if (
        !stageActive
        ||
        gameOver
    ) {

        return;
    }


    const selectedTreatments =
        getSelectedTreatments();


    if (
        selectedTreatments.length === 0
    ) {

        checklistMessage.style.color =
            "#b23b36";


        checklistMessage.textContent =
            "치료 항목을 하나 이상 선택해주세요.";


        return;
    }


    const isCorrect =

        isTreatmentSelectionCorrect(
            selectedTreatments,
            currentPatient.symptoms
        );


    if (
        !isCorrect
    ) {

        checklistMessage.style.color =
            "#b23b36";


        checklistMessage.textContent =
            "잘못된 치료입니다!";


        confirmTreatmentButton.disabled =
            true;


        closeChecklistButton.disabled =
            true;


        window.setTimeout(
            () => {

                confirmTreatmentButton.disabled =
                    false;


                closeChecklistButton.disabled =
                    false;


                endGameWithFailure();
            },

            650
        );


        return;
    }


    checklistMessage.style.color =
        "#24713a";


    checklistMessage.textContent =
        "올바른 치료입니다!";


    confirmTreatmentButton.disabled =
        true;


    closeChecklistButton.disabled =
        true;


    const reviewText =

        getRandomItem(
            goodTreatmentReviews
        );


    window.setTimeout(
        () => {

            closeChecklist();


            confirmTreatmentButton.disabled =
                false;


            closeChecklistButton.disabled =
                false;


            showPatientReview(
                reviewText,
                true
            );


            treatedPatientCount +=
                1;


            updateStageProgressUI();


            sendPatientForStageClearCheck(
                true
            );
        },

        650
    );
}


/* =========================================================
   환자 이동
========================================================= */

function startPatient() {
    isMoving =
        true;


    patientReady =
        false;


    nextButton.disabled =
        true;


    hidePatientReview();

    hidePlantSunglasses();


    resetTreatmentSelections();


    currentPatient =
        createRandomPatient();


    applyPatientSprite(
        currentPatient.character
    );


    applySymptomEffects(
        currentPatient.symptoms,
        currentPatient.character
    );


    updateStatusBars(
        currentPatient.stats
    );


    updateDebugInformation();


    hideSpeechBubble();


    plant.style.transition =
        "none";


    plant.style.left =
        `${POSITION.LEFT}px`;


    requestAnimationFrame(
        () => {

            requestAnimationFrame(
                () => {

                    plant.style.transition =

                        `left ${MOVE_DURATION}ms ease-in-out, `
                        +
                        `filter 0.35s ease`;


                    plant.style.left =
                        `${POSITION.CENTER}px`;


                    window.setTimeout(
                        () => {

                            isMoving =
                                false;


                            patientReady =
                                true;


                            nextButton.disabled =
                                false;


                            const arrivalDialogue =

                                getNonRepeatedItem(
                                    arrivalDialogues,
                                    lastArrivalDialogue
                                );


                            lastArrivalDialogue =
                                arrivalDialogue;


                            typeText(
                                arrivalDialogue
                            );
                        },

                        MOVE_DURATION
                    );
                }
            );
        }
    );
}


/* =========================================================
   환자와 후기 함께 퇴장
========================================================= */

function sendPatientForStageClearCheck(
    isCorrect
) {

    if (
        isMoving
        ||
        !patientReady
    ) {

        return;
    }


    isMoving =
        true;


    patientReady =
        false;


    nextButton.disabled =
        true;


    hideSpeechBubble();


    applyTreatmentExitAnimation(
        isCorrect
    );


    patientReview.style.transition =
        "none";


    patientReview.style.left =
        `${POSITION.CENTER}px`;


    requestAnimationFrame(
        () => {

            requestAnimationFrame(
                () => {

                    plant.style.transition =

                        `left ${MOVE_DURATION}ms ease-in-out, `
                        +
                        `filter 0.35s ease`;


                    patientReview.style.transition =

                        `left ${MOVE_DURATION}ms ease-in-out`;


                    plant.style.left =
                        `${POSITION.RIGHT}px`;


                    patientReview.style.left =
                        `${POSITION.RIGHT}px`;
                }
            );
        }
    );


    window.setTimeout(
        () => {

            hidePatientReview();


            const stageConfig =
                getCurrentStageConfig();


            if (
                treatedPatientCount
                >=
                stageConfig.patientTarget
            ) {

                if (
                    currentStage === 1
                ) {

                    showNextStageUnlockScreen(
                        2
                    );

                    return;
                }

                if (
                    currentStage === 2
                ) {

                    showNextStageUnlockScreen(
                        3
                    );

                    return;
                }

                if (
                    currentStage === 3
                ) {

                    showNextStageUnlockScreen(
                        4
                    );

                    return;
                }
                return;
            }
            if (
                currentStage === 4
                &&
                treatedPatientCount === 9
            ) {

                startEmergencyPatientEvent();

                return;
            }

            startPatient();
        },

        MOVE_DURATION
        +
        150
    );
}

/* =========================================================
   위급 환자 이벤트 시작
========================================================= */

async function startEmergencyPatientEvent() {

    /*
    이미 위급 이벤트가 진행 중이라면
    중복 실행하지 않는다.
    */

    if (
        emergencyEventActive
    ) {

        return;
    }


    emergencyEventActive =
        true;

    stageActive =
        false;


    patientReady =
        false;


    isMoving =
        true;


    nextButton.disabled =
        true;


    closeChecklist();


    hideSpeechBubble();


    hidePatientReview();


    hidePlantSunglasses();


    /*
    기존 환자 애니메이션 및 이동을 즉시 정지.

    */

    plant.style.transition =
        "none";


    plant.style.animationPlayState =
        "paused";



    plant.style.left =
        `${POSITION.RIGHT}px`;


    plant.style.visibility =
        "hidden";


    patientReview.style.transition =
        "none";


    patientReview.style.left =
        `${POSITION.RIGHT}px`;


    stopAedMarkerAnimation();


    aedMiniGame.classList.add(
        "hidden"
    );


    calmBGM.pause();

  

    playSoundEffect(
        emergencySound
    );



    emergencyWarning.classList.remove(
        "hidden"
    );


    emergencyWarning.classList.remove(
        "hidden"
    );


    await sleep(
        1200
    );


    emergencyWarning.classList.add(
        "hidden"
    );



    const emergencyCharacter =

        getRandomItem(
            patientTypes
        );


    currentPatient = {

        character:
            emergencyCharacter,

        symptoms:
            [],

        stats: {

            hp:
                AED_INITIAL_HP,

            humidity:
                0,

            temperature:
                0,

            boredom:
                0
        },

        isEmergency:
            true
    };




    applyPatientSprite(
        currentPatient.character
    );



    plant.classList.remove(
        "symptom-hot",
        "symptom-cold"
    );




    plant.style.filter =
        "grayscale(1) brightness(0.48)";



    plant.style.animationPlayState =
        "paused";




    plant.style.transition =
        "none";


    plant.style.left =
        `${POSITION.LEFT}px`;


    plant.style.visibility =
        "visible";



    await new Promise(
        resolve => {

            requestAnimationFrame(
                () => {

                    requestAnimationFrame(
                        resolve
                    );
                }
            );
        }
    );



    plant.style.transition =

        `left ${MOVE_DURATION}ms ease-in-out`;


    plant.style.left =
        `${POSITION.CENTER}px`;



    await sleep(
        MOVE_DURATION
    );


    isMoving =
        false;



    initializeAedMiniGame();
}

/* =========================================================
   AED HP 표시
========================================================= */

function updateEmergencyHpUI() {

    emergencyHp =

        Math.max(
            0,
            Math.min(
                100,
                emergencyHp
            )
        );


    emergencyHpFill.style.height =
        `${emergencyHp}%`;


    emergencyHpText.textContent =
        `${emergencyHp}%`;
}
function initializeAedMiniGame() {

    emergencyHp =
        AED_INITIAL_HP;


    aedMarkerPosition =
        0;


    aedMarkerDirection =
        1;


    aedInputLocked =
        false;


    aedResultText.textContent =
        "";


    updateEmergencyHpUI();


    aedMiniGame.classList.remove(
        "hidden"
    );


    startAedMarkerAnimation();
}

function startAedMarkerAnimation() {

    stopAedMarkerAnimation();


    let previousTime =
        performance.now();


    function animateMarker(
        currentTime
    ) {

        if (
            !emergencyEventActive
        ) {

            return;
        }


        const deltaTime =
            currentTime
            -
            previousTime;


        previousTime =
            currentTime;


        const currentMarkerSpeed =
            getCurrentAedMarkerSpeed();


        aedMarkerPosition +=

            currentMarkerSpeed

            *

            deltaTime

            *

            aedMarkerDirection;


        /*
        0~100 범위를 왕복.
        */

        if (
            aedMarkerPosition >= 100
        ) {

            aedMarkerPosition =
                100;


            aedMarkerDirection =
                -1;
        }

        else if (
            aedMarkerPosition <= 0
        ) {

            aedMarkerPosition =
                0;


            aedMarkerDirection =
                1;
        }


        aedTimingMarker.style.left =

            `calc(${aedMarkerPosition}% - 7px)`;


        aedAnimationFrameId =

            requestAnimationFrame(
                animateMarker
            );
    }


    aedAnimationFrameId =

        requestAnimationFrame(
            animateMarker
        );
}

function stopAedMarkerAnimation() {

    if (
        aedAnimationFrameId
        !==
        null
    ) {

        cancelAnimationFrame(
            aedAnimationFrameId
        );


        aedAnimationFrameId =
            null;
    }
}

function attemptAedSkillCheck() {

    if (
        !emergencyEventActive
        ||
        aedInputLocked
    ) {

        return;
    }


    playSoundEffect(
        treatButtonPopSound
    );


    aedInputLocked =
        true;


    const success =

        aedMarkerPosition
        >=
        AED_SUCCESS_ZONE_START

        &&

        aedMarkerPosition
        <=
        AED_SUCCESS_ZONE_END;


    if (
        success
    ) {

        emergencyHp +=
            AED_SUCCESS_GAIN;


        aedResultText.style.color =
            "#8cff50";


        aedResultText.textContent =
            "CLEAR! HP가 회복됐습니다.";


        updateEmergencyHpUI();


        if (
            emergencyHp >= 100
        ) {

            finishAedSuccess();

            return;
        }
    }

    else {


        if (
            emergencyHp <= 0
        ) {

            finishAedFailure();

            return;
        }


        emergencyHp -=
            AED_FAILURE_DAMAGE;


        updateEmergencyHpUI();


        aedResultText.style.color =
            "#ff5b52";


        aedResultText.textContent =
            "MISS! HP가 감소했습니다.";
    }




    window.setTimeout(
        () => {

            aedInputLocked =
                false;


            aedResultText.textContent =
                "";
        },

        450
    );
}

async function finishAedSuccess() {

    emergencyEventActive =
        false;


    aedInputLocked =
        true;


    stopAedMarkerAnimation();


    emergencyHp =
        100;


    updateEmergencyHpUI();

    playSoundEffect(
        gameClearSound
    );


    aedResultText.style.color =
        "#8cff50";


    aedResultText.textContent =
        "환자를 살렸습니다!";



    plant.style.filter =
        "none";


    plant.style.animationPlayState =
        "running";


    plant.style.setProperty(
        "--animation-speed",
        `${currentPatient.character.animationSpeed}s`
    );


    restartPlantAnimation();


    const stageConfig =
        getCurrentStageConfig();


    treatedPatientCount =
        stageConfig.patientTarget;


    updateStageProgressUI();



    await sleep(
        1500
    );


    aedMiniGame.classList.add(
        "hidden"
    );


    showHappyEndingScreen();


    /*
    BGM 재개
    */

    calmBGM.currentTime =
        0;


    startCalmBGM();
}

function finishAedFailure() {

    emergencyEventActive =
        false;


    aedInputLocked =
        true;


    stopAedMarkerAnimation();


    aedMiniGame.classList.add(
        "hidden"
    );


    plant.style.filter =
        "grayscale(1) brightness(0.35)";


    gameOver =
        true;


    stageActive =
        false;


    patientReady =
        false;


    nextButton.disabled =
        true;


    calmBGM.pause();


    showGameOverScreen(
        "위급 환자를 살리지 못했습니다."
    );
}
/* =========================================================
   게임 초기화
========================================================= */

async function restartGameFromBeginning() {

    gameClearSound.pause();
    gameClearSound.currentTime =
        0;
    stageClearSound.pause();
    stageClearSound.currentTime =
        0;

    /*
    AED 관련 상태 완전 종료
    */

    emergencyEventActive =
        false;


    aedInputLocked =
        false;


    stopAedMarkerAnimation();


    aedMiniGame.classList.add(
        "hidden"
    );


    emergencyWarning.classList.add(
        "hidden"
    );


    gameOver =
        false;


    stageActive =
        false;


    patientReady =
        false;


    isMoving =
        false;


    currentStage =
        1;


    treatedPatientCount =
        0;


    closeChecklist();


    hideSpeechBubble();


    hidePatientReview();


    hidePlantSunglasses();


    hideStageOverlay();


    restartGameButton.classList.add(
        "hidden"
    );


    plant.style.filter =
        "";


    plant.style.visibility =
        "visible";


    plant.style.animationPlayState =
        "running";


    plant.classList.remove(
        "symptom-hot",
        "symptom-cold"
    );


    /*
    이전 환자를 화면 밖으로 이동
    */

    plant.style.transition =
        "none";


    plant.style.left =
        `${POSITION.LEFT}px`;


    resetTreatmentSelections();


    document
        .querySelectorAll(
            "[data-treatment-unlock]"
        )
        .forEach(
            treatmentOption => {

                treatmentOption.classList.add(
                    "hidden",
                    "lockedTreatment"
                );


                const checkbox =

                    treatmentOption.querySelector(
                        'input[type="checkbox"]'
                    );


                if (
                    checkbox
                ) {

                    checkbox.checked =
                        false;


                    checkbox.disabled =
                        true;
                }
            }
        );



    updateStageProgressUI();


    calmBGM.pause();


    calmBGM.currentTime =
        0;


    startCalmBGM();


    await startStage(
        1
    );
}

async function initializeGame() {

    if (
        gameInitialized
    ) {

        return;
    }


    await preparePatientTypes();

    gameInitialized =
        true;



    await startStage(
        1
    );
}


/* =========================================================
   이벤트
========================================================= */

aedActionButton.addEventListener(
    "click",
    attemptAedSkillCheck
);

plant.addEventListener(
    "click",
    () => {

        if (
            !stageActive
            ||
            gameOver
            ||
            isMoving
            ||
            !patientReady
        ) {

            return;
        }


        typeText(
            getPatientDialogue()
        );
    }
);


nextButton.addEventListener(
    "click",
    openChecklist
    
);


closeChecklistButton.addEventListener(
    "click",
    closeChecklist
);


confirmTreatmentButton.addEventListener(
    "click",
    confirmTreatments
);

/* =========================================================
   치료 체크리스트 체크/해제 효과음
========================================================= */

const treatmentCheckboxes =

    checklistOverlay.querySelectorAll(
        'input[name="treatment"]'
    );


treatmentCheckboxes.forEach(
    checkbox => {

        checkbox.addEventListener(
            "change",
            () => {

                playChecklistPopSound(
                    checkbox.checked
                );
            }
        );
    }
);



checklistOverlay.addEventListener(
    "click",
    event => {

        if (
            event.target === checklistOverlay
        ) {

            closeChecklist();
        }
    }
);



window.addEventListener(
    "keydown",
    event => {
        if (
            emergencyEventActive
            &&
            event.code === "Space"
        ) {

            event.preventDefault();


            attemptAedSkillCheck();


            return;
        }

        if (
            event.key === "Escape"
        ) {

            if (
                !checklistOverlay.classList.contains(
                    "hidden"
                )
            ) {

                closeChecklist();
            }


            return;
        }


        if (
            DEBUG_MODE
            &&
            event.key.toLowerCase() === "d"
            &&
            debugPanel
        ) {

            debugPanel.classList.toggle(
                "hidden"
            );
        }
    }
);


/* =========================================================
   다음 스테이지 시작 버튼
========================================================= */

stageContinueButton.addEventListener(
    "click",
    async () => {

        const nextStageNumber =

            Number(
                stageContinueButton.dataset.nextStage
            );


        if (
            !nextStageNumber
            ||
            !STAGES[nextStageNumber]
        ) {

            console.error(
                "시작할 다음 스테이지가 없습니다."
            );

            return;
        }


        stageContinueButton.disabled =
            true;


        /*
        해당 스테이지 치료법 해금
        */

        unlockStageTreatment(
            nextStageNumber
        );


        hideStageOverlay();


        await startStage(
            nextStageNumber
        );
    }
);

/* =========================================================
   게임 다시하기 버튼
========================================================= */

restartGameButton.addEventListener(
    "click",
    async () => {

        /*
        중복 클릭 방지
        */

        restartGameButton.disabled =
            true;


        await restartGameFromBeginning();


        restartGameButton.disabled =
            false;
    }
);

/* =========================================================
   START 버튼
========================================================= */

startButton.addEventListener(
    "click",
    async () => {

        if (
            gameStarted
        ) {

            return;
        }


        gameStarted =
            true;


        startButton.disabled =
            true;


        startButton.textContent =
            "LOADING...";


        getAudioContext();


        playSoundEffect(
            gameStartSound
        );


        try {

            mainMenuScreen.classList.add(
                "hidden"
            );


            gameScreen.classList.remove(
                "hidden"
            );


            resizeGameScreen();


            requestAnimationFrame(
                resizeGameScreen
            );


            await initializeGame();

            window.setTimeout(
                startCalmBGM,
                700
            );
        }

        catch (
            error
        ) {

            console.error(
                "게임 시작 실패:",
                error
            );


            gameStarted =
                false;


            gameInitialized =
                false;


            startButton.disabled =
                false;


            startButton.textContent =
                "START";


            gameScreen.classList.add(
                "hidden"
            );


            mainMenuScreen.classList.remove(
                "hidden"
            );


            calmBGM.pause();


            calmBGM.currentTime =
                0;


            resizeGameScreen();
        }
    }
);


/* =========================================================
   페이지 최초 실행
========================================================= */

if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializeScreenScale
    );
}

else {

    initializeScreenScale();
}