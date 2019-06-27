import ListBoards from './ui/ListBoards'
import { createTaskFromAPI } from './service';
import Message from '../commonComponents/Message';
import { message_success, title_message_success, text_message_add_success, title_message_fail, text_message_add_fail, message_error, button_close } from '../../util/configMessage';

class ListBoardContainer {
    constructor(listBoards, triggerModal, status) {
        this.listBoards = listBoards;
        this.triggerModal = triggerModal;
        this.status = status;

        this.listBoardsApp = new ListBoards(this.listBoards, this.triggerModal, this.status, this.createTask, this.onDragStart);
    }


    createTask = async (inputProject, inputTask, closeModal) => {
        try {
            await createTaskFromAPI(inputProject, inputTask);
            let msg = new Message(title_message_success, text_message_add_success, message_success, button_close, false).render();

            msg.then(val => {
                closeModal();
                window.location.reload(true);
            });
        } catch (error) {
            let msg = new Message(title_message_fail, text_message_add_fail, message_error, button_close, false).render();
        }
    }


    render() {
        return this.listBoardsApp.render();
    }

}

export default ListBoardContainer;