let game = {

    lockMode: false,
    firstCard: null,
    secondCard: null,

    unsetCard: function (){
        this.firstCard = null
        this.secondCard = null
    },

    setCard: function (id) {
        let card = this.cards.filter(card => card.id === id)[0]

        if (card.flipped || this.lockMode) {
            return false
        }

        if (this.firstCard === null) {
            this.firstCard = card
            return true
        } else {
            this.secondCard = card
            this.lockMode = true
            return true
        }
    },

    checkMatch: function () {
        return this.firstCard.icon === this.secondCard.icon
    },

    clearCards: function () {
        this.firstCard = null
        this.secondeCard = null
        this.lockMode = false
    },

    techs: [
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
    ],

    cards: null,

    createCardsFromTechs: function () {
        this.cards = []

        for (let tech of this.techs) {
            this.cards.push(this.createPairFromTech(tech))
        }

        this.cards = this.cards.flat();
        this.shuffleCards(this.cards)
    },

    createPairFromTech: function (tech) {
        return [{
                id: this.createIdWithech(tech),
                icon: tech,
                flipped: false,
            },
            {
                id: this.createIdWithech(tech),
                icon: tech,
                flipped: false,
            },
        ];
    },

    createIdWithech: function (tech) {
        return tech + parseInt(Math.random() * 1000);
    },

    shuffleCards: function (cards) {
        let currentIndex = this.cards.length
        let randomIndex = 0

        while (currentIndex !== 0) {

            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex--

            [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]]
        }
    }
}
