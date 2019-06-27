import Board from './ui/Board';
import { getRecordByIdFromAPI, updateStatusFromAPI } from './service';
import { NUM_PROGRESS_DONE, NUM_PROGRESS_RESET_DONE, DONE_STATUS, LIST_STATUS } from '../../util/config';
import CreateTaskModal from '../App/ui/ModalCreate';
import { setStyle } from '../../util/styleUtil';
import { modalShowStyle, modalHideStyle } from '../App/ui/style';
import { getRecordsByStatus } from '../../service';

class BoardContainer {
    constructor(listTasks, header, modal, createTask) {
        this.listTasks = listTasks;
        this.header = header;
        this.modal = modal;
        this.createTask = createTask;
        this.board = new Board(this.listTasks, this.header, this.openCreateModal, this.updateStatusHeader, this.setTotalRecords, this.setDragBoard);
    }

    setDragBoard = () => {
        window.dragBoard = this;
    }

    isVisible = (isVisible) => {
        if (isVisible) {
            setStyle(this.modal.modalDOM, modalShowStyle);
        } else {
            setStyle(this.modal.modalDOM, modalHideStyle);
        }
    }

    openCreateModal = () => {
        if (!this.modal) {
            this.modal = new CreateTaskModal('Add New Task', this.header, this.createTask, this.isVisible);
            document.getElementById('app').appendChild(this.modal.render());
        }
        this.isVisible(true);
    }

    setTotalRecords = async () => {
        try {
            let records = await getRecordsByStatus(this.header);
            this.board.setTotal(parseInt(records.totalCount));
            this.board.setTaskList(records.records);
        } catch (error) {
            console.log(error);
        }
    }

    rerender() {
        this.board.rerender && this.board.rerender()
    }

    updateStatusHeader = async (recordId) => {
        try {
            let record = await getRecordByIdFromAPI(recordId);
            let numProgress;
            let status = this.header
            if (status === DONE_STATUS) {
                numProgress = NUM_PROGRESS_DONE;
            } else {
                if (record.num_progress.value !== NUM_PROGRESS_DONE) {
                    numProgress = record.num_progress.value;
                } else {
                    numProgress = NUM_PROGRESS_RESET_DONE;
                }
            }

            await updateStatusFromAPI(recordId, record.txt_projectTitle.value, record.txt_taskTitle.value, status,
                numProgress, record.rich_text_description.value, record.user_selection_assignee.value[0].code);

            await this.setTotalRecords();

        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return this.board.render();
    }
}

export default BoardContainer;