class GameManager {
    constructor() {
        this.topicIndex = 0;
    }

    setCurrentTopic(index) {
        this.topicIndex = index;
    }
}

const gameManager = new GameManager();

module.exports = gameManager;