import Board from "../../Board/components/Board";

let style = {
    listBoardsStyle: {
        display: 'flex', 
        width: '100%', 
        alignItems: 'stretch'
    }
}

class ListBoards {
    constructor(listBoards, triggerModal) {
        this.listBoards = listBoards;
        this.triggerModal = triggerModal;
    }

    openModal(state) {
        if(this.triggerModal){
            this.triggerModal(state);
        }
    }

    render(){
        let listBoardsEl = document.createElement('div');

        listBoardsEl.style = style.listBoardsStyle;

        this.listBoards.forEach(boardObj => {
          let board = new Board(boardObj.listTasks, boardObj.state, boardObj.allowCreate, this.openModal);
          listBoardsEl.append(board.render());
        });

        return listBoardsEl;
    }

}

export default ListBoards;