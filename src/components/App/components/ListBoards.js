import Board from "../../Board/container";
import { setStyle } from "../../../util/style";

let style = {
    listBoardsStyle: {
        display: 'flex',
        width: '100%',
        alignItems: 'stretch'
    }
}

class ListBoards {
    constructor(listBoards, triggerModal, status) {
        this.listBoards = listBoards;
        this.triggerModal = triggerModal;
        this.status = status;
    }

    render() {
        let listBoardEl = document.createElement('div');
        setStyle(listBoardEl, style.listBoardsStyle);

        this.status.forEach((state, index) => {

            let board = new Board(this.listBoards[index].records, state, this.triggerModal);
            listBoardEl.append(board.render());
        });

        return listBoardEl;
    }

}

export default ListBoards;