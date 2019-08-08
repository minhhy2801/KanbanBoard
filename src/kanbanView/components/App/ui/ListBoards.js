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
        this.listBoardEl = document.createElement('div')
    }

    render = () => {
        setStyle(this.listBoardEl, listBoardsStyle)

        this.status.forEach((state, index) => {
            let board = new BoardContainer(this.listBoards[index], state, this.triggerModal, this.createTask)
            this.listBoardEl.append(board.render())
            this.board.push(board)
        })

        this.listBoardEl.addEventListener('dragover', (ev) => {
            ev.preventDefault();
        })

        this.listBoardsDOM = this.listBoardEl
        return this.listBoardEl
    }
}

export default ListBoards