class GameManager {
  constructor() {
    this.topicIndex = 0;
  }

  setCurrentTopic(index) {
    this.topicIndex = index;
    //console.log(this.topicIndex);
  }

  getCurrentTopic() {
    return this.topicIndex;
  }
}

const gameManager = new GameManager();

module.exports = gameManager;
