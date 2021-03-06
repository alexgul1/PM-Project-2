import CardAPI from './CardAPI';
import CardUI from './CardUI';

class AddFormUI {
  constructor(status) {
    this.status = status;
    this.form = null;
    this.addBtn = null;
    this.cancelBtn = null;
    this.confirmBtn = null;
  }

  render(target) {
    target.insertAdjacentHTML(
      'beforeend',
      `
        <input class="button" type="button" value="+ Add Task">
        <form class="create-card-form">
              <input class="text-field" type="text" placeholder="Title">
              <input class="button cancel-button" type="button" value="Cancel">
              <input class="button confirm-button" type="submit" value="Add Task">
        </form>
      `
    );
    this.registerListeners(target);
  }

  registerListeners(target) {
    this.form = target.querySelector('.create-card-form');
    this.addBtn = target.querySelector('.button');
    this.cancelBtn = target.querySelector('.cancel-button');
    this.confirmBtn = target.querySelector('.confirm-button');
    this.input = target.querySelector('.text-field');

    this.addBtn.addEventListener('click', () => {
      this.form.classList.add('active');
      this.addBtn.style.display = 'none';
    });

    this.cancelBtn.addEventListener('click', () => {
      this.form.classList.remove('active');
      this.addBtn.style.display = 'block';
      this.input.value = '';
    });

    const postCard = () => {
      if (this.input.value.trim()) {
        const newCard = {
          title: this.input.value,
          description: '',
          status: this.status,
        };

        this.input.value = '';

        CardAPI.createCard(newCard).then((card) =>
          new CardUI(card).renderCard(target.querySelector('.card-list'))
        );
      }
    };

    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      postCard();
    });

    this.confirmBtn.addEventListener('click', () => postCard);
  }
}

export default AddFormUI;
