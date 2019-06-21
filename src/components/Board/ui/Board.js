import Header from "./Header";
import ListTasks from "./ListTasks";
import { setStyle } from "../../../util/styleUtil";
import { boardStyle } from "./style";
import BoardContainer from "../container";

class Board {
    constructor(listTasks, header, modal) {
        this.listTasks = listTasks;
        this.header = header;
        this.modal = modal;
    }

    render() {
        let board = document.createElement('div');
        setStyle(board, boardStyle);

        let headerEl = new Header(this.listTasks.length, this.header, this.openCreateModal);
        let listTasks = new ListTasks(this.listTasks, this.header);
        let header = this.header;

        let boardContainer = new BoardContainer(this.listTasks, this.header, this.openCreateModal);

        board.addEventListener('drop', function (ev) {
            ev.preventDefault();
            let srcId = ev.dataTransfer.getData("text");

            board.lastElementChild.append(document.getElementById(srcId));

            boardContainer.updateStatusHeader(window.DRAG_ID, header);
        });

        board.append(headerEl.render());
        board.append(listTasks.render());

        return board;
    }
}

export default Board;