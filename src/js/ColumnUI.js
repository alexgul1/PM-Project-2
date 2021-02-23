import CardUI from './CardUI';

class ColumnUI {
  constructor(status, cards) {
    this.status = status;
    this.cards = cards.filter((card) => card.status === status.value);
    this.columnsContainer = document.querySelector('.column-list');
  }

  render() {
    const column = document.createElement('li');
    column.classList.add('column');

    const title = document.createElement('p');
    title.classList.add('title');
    title.textContent = this.status.title;

    const cardsList = document.createElement('ul');
    cardsList.classList.add('card-list');

    this.renderCards(cardsList);

    column.append(title);

    column.append(cardsList);

    this.columnsContainer.append(column);
  }

  renderCards(column) {
    this.cards.map((card) => new CardUI(card).renderCard(column));
  }
}

export default ColumnUI;
