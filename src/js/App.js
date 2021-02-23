import Board from './Board';
import BoardUI from './BoardUI';

class App {
  static async init() {
    await Board.loadData();
    new BoardUI(Board.statuses, Board.cards).render();
  }
}

export default App;
