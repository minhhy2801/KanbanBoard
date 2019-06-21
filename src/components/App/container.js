import ListBoard from './ui/ListBoards'
import { createTaskFromAPI } from './service';

class ListBoardContainer {
    constructor(listBoards, triggerModal, status) {
        this.listBoards = listBoards;
        this.triggerModal = triggerModal;
        this.status = status;
        this.listBoardsApp = new ListBoard(this.listBoards, this.triggerModal, this.status);
    }

    

    render() {
        return this.listBoardsApp.render();
    }

}

export default ListBoardContainer;