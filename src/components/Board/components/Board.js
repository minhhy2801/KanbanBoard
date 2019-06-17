import Header from "./Header";
import ListTasks from "./ListTasks";

let style = {
    boardStyle: {
        border: '1px solid black',
        padding: '5px',
        marginLeft: '1%',
        width: '22%',
        marginTop: '10px',
        textAlign: 'center',
        minHeight: '30vh'
    }
}

class Board {
    constructor(listTasks, header, allowCreate, onClick) {
        this.listTasks = listTasks;
        this.header = header;
        this.allowCreate = allowCreate;
        this.onClick = onClick;
    }

    createTask = () => {
        if (onClick) {
            this.onClick(this.header)
        }
    }

    render() {
        let board = document.createElement('div');

        board.style = style.boardStyle;
        let headerEl = new Header(this.listTasks.length, this.header, this.createTask, this.allowCreate);
        let listTasks = new ListTasks(this.listTasks);

        board.append(headerEl.render());
        board.append(listTasks.render());

        return board;
    }
}

export default Board;