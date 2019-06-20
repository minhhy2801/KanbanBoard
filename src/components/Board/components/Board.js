import Header from "./Header";
import ListTasks from "./ListTasks";
import CreateTaskModal from "../../App/components/CreateTaskModal";
import { setStyle } from "../../../util/style";
import { APP_ID } from "../../../config";


let style = {
    boardStyle: {
        border: '1px solid black',
        padding: '5px',
        marginLeft: '1%',
        width: '22%',
        marginTop: '10px',
        textAlign: 'center',
        minHeight: '30vh',
    }
}

class Board {
    constructor(listTasks, header, modal) {
        this.listTasks = listTasks;
        this.header = header;
        this.modal = modal;
    }

    openCreateModal() {
        if (!this.modal) {
            this.modal = new CreateTaskModal(this.stateName);
            document.getElementById('app').appendChild(this.modal.render())
        }
        this.modal.isVisible(true);
    }
    
    updateStatus(recordId, status) {
        let body = {
            app: 2,
            id: recordId,
            record: {
                txt_projectTitle: {},
                txt_taskTitle: {},
                rb_status: {},
                num_progress: {},
                rich_text_description: {},
                user_selection_assignee: {}
            }
        };

        this.getRecordById(recordId).then(respRecord => {
            let record = respRecord.record
            body.record.txt_projectTitle.value = record.txt_projectTitle.value;

            body.record.txt_taskTitle.value = record.txt_taskTitle.value;
            body.record.rich_text_description.value = record.rich_text_description.value;
            body.record.user_selection_assignee.value = [{}]
            body.record.user_selection_assignee.value[0].code = record.user_selection_assignee.value[0].code;

            body.record.rb_status.value = status;

            if (status === 'Done') {
                body.record.num_progress.value = 100;
            } else {
                if (record.num_progress.value !== '100') {
                    body.record.num_progress.value = record.num_progress.value;
                } else {
                    body.record.num_progress.value = 90;
                }
            }

            kintone.api(kintone.api.url('/k/v1/record', true), 'PUT', body);

            window.location.reload(true);
        }).catch(err => {
            console.log(err);
        });
    }

    getRecordById(recordId) {
        let body = { app: APP_ID, id: recordId };
        return kintone.api(kintone.api.url('/k/v1/record', true), 'GET', body);
    }
    
    render() {
        let board = document.createElement('div');
        setStyle(board, style.boardStyle);

        let headerEl = new Header(this.listTasks.length, this.header, this.openCreateModal);
        let listTasks = new ListTasks(this.listTasks, this.header);
        let header = this.header;

        let seft = this;

        board.addEventListener('drop', function (ev) {
            ev.preventDefault();
            let srcId = ev.dataTransfer.getData("text");

            board.lastElementChild.append(document.getElementById(srcId));

            
            seft.updateStatus(window.DRAG_ID, header);
        });

        board.append(headerEl.render());
        board.append(listTasks.render());

        return board;
    }
}

export default Board;