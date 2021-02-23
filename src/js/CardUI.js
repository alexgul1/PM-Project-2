import updIco from '../img/update-icon.svg';
import deleteIco from '../img/delete-icon.svg';
import CardAPI from './CardAPI';

class CardUI {
  constructor(card) {
    this.card = card;
    this.createCard.bind(this);
  }

  renderCard(column) {
    const card = document.createElement('li');
    card.classList.add('card');

    const title = document.createElement('p');
    title.classList.add('title');
    title.textContent = this.card.title;

    const controls = document.createElement('div');
    controls.classList.add('controls');

    const deleteBtn = document.createElement('img');
    deleteBtn.src = deleteIco;

    const updBtn = document.createElement('img');
    updBtn.src = updIco;

    controls.append(updBtn, deleteBtn);

    card.append(title, controls);
    column.append(card);
  }

  async createCard(title, column) {
    const card = await CardAPI.createCard({
      title,
      description: '',
      status: this.status,
    });
    this.card = card;
    this.renderCard(column);
  }
}

export default CardUI;
