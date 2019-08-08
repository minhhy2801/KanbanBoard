import ListBoards from './ui/ListBoards'
import { createTaskFromAPI } from './service';
import { message_success, text_message_add_success, title_message_fail, message_error } from '../../util/configMessage';
import { NotifyPopup } from '@kintone/kintone-ui-component/src/js';

class ListBoardContainer {
    constructor(listBoards, triggerModal, status) {
        this.listBoards = listBoards;
        this.triggerModal = triggerModal;
        this.status = status;
        this.listBoardsApp = null
        this.listBoardsApp = new ListBoards(this.listBoards, this.triggerModal, this.status, this.createTask);
    }

    createTask = async (inputProject, inputTask) => {
        let body = document.getElementsByTagName("body")[0];
        try {
            await createTaskFromAPI(inputProject, inputTask);
            let msg = new NotifyPopup({ text: text_message_add_success, type: message_success })
            body.append(msg.render())
            window.location.reload(true);
        } catch (error) {
            let msg = new NotifyPopup({ text: title_message_fail, type: message_error })
            body.append(msg.render())
        }
    }

    render() {
        return this.listBoardsApp.render();
    }
}

export default ListBoardContainer;