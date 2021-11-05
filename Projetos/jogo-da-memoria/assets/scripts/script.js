const FRONT = "card_front";
const BACK = "card_back";

let techs = [
    "bootstrap",
    "css",
    "electron",
    "firebase",
    "html",
    "javascript",
    "jquery",
    "mongo",
    "node",
    "react",
];

createCardsFromTechs(techs);

function createCardsFromTechs(techs) {
    let cards = [];

    for (let tech of techs) {
        cards.push(createPairFromTech(tech));
    }
    return cards.flatMap((pair) => pair);
}

function createPairFromTech(tech) {
    return [{
            id: createIdWithech(tech),
            icon: tech,
            flipped: false,
        },
        {
            id: createIdWithech(tech),
            icon: tech,
            flipped: false,
        },
    ];
}

function createIdWithech(tech) {
    return tech + parseInt(Math.random() * 1000);
}

/* {
    id: 1234
    icone: 'bootstrap'
    flipped: false
} */