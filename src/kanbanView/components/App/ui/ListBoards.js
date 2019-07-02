import { setStyle } from "../../../util/styleUtil";
import { listBoardsStyle } from "./style";
import BoardContainer from "../../Board/container";

class ListBoards {
    constructor(listBoards, triggerModal, status, createTask) {
        this.listBoards = listBoards;
        this.triggerModal = triggerModal;
        this.status = status;
        this.createTask = createTask;
        this.board = []
    }


    render() {
        let listBoardEl = document.createElement('div');

        setStyle(listBoardEl, listBoardsStyle);

        this.status.forEach((state, index) => {
            let board = {}
            if (window.firebase) {
                board = new BoardContainer(this.listBoards[index], state, this.triggerModal, this.createTask);
            }
            else {
                board = new BoardContainer(this.listBoards[index].records, state, this.triggerModal, this.createTask);
            }
            listBoardEl.append(board.render());
            this.board.push(board)
        });

        listBoardEl.addEventListener('dragover', function (ev) {
            ev.preventDefault();
        });

        this.listBoardsDOM = listBoardEl
        return listBoardEl;
    }

}

export default ListBoards;