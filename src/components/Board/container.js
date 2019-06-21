import Board from './ui/Board';
import { getRecordByIdFromAPI, updateStatusFromAPI } from './service';
import { NUM_PROGRESS_DONE, NUM_PROGRESS_RESET_DONE, DONE_STATUS } from '../../config';
import CreateTaskModal from '../App/ui/ModalCreate';

class BoardContainer {
    constructor(listTasks, header, onClickModal) {
        this.listTasks = listTasks;
        this.header = header;
        this.onClickModal = onClickModal;

        this.board = new Board(this.listTasks, this.header, this.onClickModal);
    }

    openCreateModal() {
        if (!this.onClickModal) {
            this.onClickModal = new CreateTaskModal(this.header);
            document.getElementById('app').appendChild(this.onClickModal.render());
        }
        this.onClickModal.isVisible(true);
    }

    async updateStatusHeader(recordId, status) {
        try {
            let record = await getRecordByIdFromAPI(recordId);
            let numProgress;
            if (status === DONE_STATUS) {
                numProgress = NUM_PROGRESS_DONE;
            } else {
                if (record.num_progress.value !== NUM_PROGRESS_DONE) {
                    numProgress = record.num_progress.value;
                } else {
                    numProgress = NUM_PROGRESS_RESET_DONE;
                }
            }
            updateStatusFromAPI(recordId, record.txt_projectTitle.value, record.txt_taskTitle.value, status,
                numProgress, record.rich_text_description.value, record.user_selection_assignee.value[0].code);

            window.location.reload(true);
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return this.board.render();
    }
}

export default BoardContainer;