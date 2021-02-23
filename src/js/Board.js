import CardAPI from './CardAPI';

class Board {
  async loadData() {
    this.statuses = await CardAPI.getCardStatuses();
    this.cards = await CardAPI.getCards();
  }
}

export default new Board();
