import Board from './components/Board';

class BoardContainer {
    constructor(listTasks, header, onClick) {
        this.listTasks = listTasks;
        this.header = header;
        this.onClick = onClick;

        this.board = new Board(this.listTasks, this.header, this.onClick);
    }

    render() {
        return this.board.render();
    }
}

export default BoardContainer;