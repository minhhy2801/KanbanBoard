import Header from "./Header";
import ListTasks from "./ListTasks";
import { setStyle } from "../../../util/styleUtil";
import { boardStyle } from "./style";

class Board {
    constructor(listTasks, header, openCreateModal, updateStatusHeader, setTotalRecords, setDragBoard) {
        this.listTasks = listTasks;
        this.header = header;
        this.openCreateModal = openCreateModal;
        this.updateStatusHeader = updateStatusHeader;
        this.headerComponent = new Header(this.listTasks.length, this.header, this.openCreateModal);
        this.totalCount = this.listTasks.length;
        this.setTotalRecords = setTotalRecords;
        this.setDragBoard = setDragBoard
        this.listTasksComponent = new ListTasks(this.listTasks, this.header, this.setDragBoard, this.setHeader);

        this.boardDOM = null
    }

    setTotal = (totalCount) => {
        this.headerComponent.setTotalCount(totalCount);
    }

    setTaskList = (listTasks) => {
        this.listTasks = listTasks
        this.listTasksComponent = new ListTasks(this.listTasks, this.header, this.setDragBoard, this.setHeader);
    }

    setHeader = (e) => {
        e.header = this.header;
    }

    rerender() {
        if (this.boardDOM) {
            this.boardDOM.innerHTML = ''
            this.boardDOM.append(this.headerComponent.render());
            this.boardDOM.append(this.listTasksComponent.render());
        }
    }

    render() {
        let board = document.createElement('div');
        setStyle(board, boardStyle);

        board.addEventListener('drop', async (ev) => {
            ev.preventDefault();
            board.lastElementChild.append(document.getElementById(window.draggingTask.id));
            await this.updateStatusHeader(window.draggingTask.id);
            let dragBoard = window.dragBoard;
            dragBoard.setTotalRecords();

            delete window.draggingTask
            delete window.dragBoard
            
            dragBoard.rerender()
            this.rerender()
        });

        this.boardDOM = board;
        this.rerender()
        return board;
    }
}

export default Board;