import ColumnUI from './ColumnUI';

class BoardUI {
  constructor(statuses, cards) {
    this.columnStatuses = statuses;
    this.cards = cards;
  }

  render() {
    this.columnStatuses.map((status) =>
      new ColumnUI(status, this.cards).render()
    );
  }
}

export default BoardUI;
