import { setStyle } from "../../../util/styleUtil";
import { listBoardsStyle } from "./style";
import BoardContainer from "../../Board/container";

class ListBoards {
    constructor(listBoards, triggerModal, status, createTask) {
        this.listBoards = listBoards;
        this.triggerModal = triggerModal;
        this.status = status;
        this.createTask = createTask;
    }

    render() {
        let listBoardEl = document.createElement('div');

        setStyle(listBoardEl, listBoardsStyle);

        this.status.forEach((state, index) => {
            let board = new BoardContainer(this.listBoards[index].records, state, this.triggerModal, this.createTask);
            listBoardEl.append(board.render());
        });

        listBoardEl.addEventListener('dragover', function (ev) {
            ev.preventDefault();
        });

        return listBoardEl;
    }

}

export default ListBoards;