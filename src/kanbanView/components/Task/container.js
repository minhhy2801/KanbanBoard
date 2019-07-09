import Task from './ui/Task'
import { title_message_confirm, text_message_confirm_delete, text_message_delete_success, message_success, button_cancel, button_delete } from '../../util/configMessage';
import { deleteTaskFromAPI } from './service';
import * as firebase from 'firebase/app'
import 'firebase/database'
import { Dialog, Button, NotifyPopup } from '@kintone/kintone-ui-component/src/js';
import { setStyle } from '../../util/styleUtil';
import { floatLeft } from './ui/style';

class TaskContainer {
    constructor(numProgress, projectTitle, taskTitle, id, header, setDragBoard, setHeader) {
        this.numProgress = numProgress;
        this.projectTitle = projectTitle;
        this.taskTitle = taskTitle;
        this.id = id;
        this.header = header;
        this.setDragBoard = setDragBoard;
        this.setHeader = setHeader;

        this.task = new Task(numProgress, projectTitle, taskTitle, id,
            header, this.processDeleteTask, setDragBoard, setHeader)
        this.dialogConfirm = new Dialog()
        this.btnDelete = new Button({ text: button_delete, type: 'submit' })
        this.btnCancel = new Button({ text: button_cancel })

    }

    processDeleteTask = () => {
        window.event.stopImmediatePropagation();

        let modalFooter = document.createElement('div')
        modalFooter.append(this.btnDelete.render());
        modalFooter.append(this.btnCancel.render());
        setStyle(this.btnDelete.element, floatLeft)

        this.dialogConfirm.setHeader(title_message_confirm)
        this.dialogConfirm.setContent(text_message_confirm_delete)
        this.dialogConfirm.setFooter(modalFooter)

        this.btnCancel.on('click', () => { this.dialogConfirm.hide() })

        this.btnDelete.on('click', () => {
            this.onClickDeleteBtn()
            this.dialogConfirm.hide()
        })

        document.getElementById('app').append(this.dialogConfirm.render())
    }

    onClickDeleteBtn = () => {
        let body = document.getElementsByTagName("body")[0];
        let msg = new NotifyPopup({ text: text_message_delete_success, type: message_success })

        deleteTaskFromAPI(this.id);
        if (window.firebase) {
            let ref = firebase.database().ref(`app/${kintone.app.getId()}/tasks/${this.id}`)
            ref.remove()
        } else {
            window.location.reload(true);
        }
        body.append(msg.render())
    }

    render() {
        this.taskContainerDOM = this.task;
        return this.task.render();
    }

}

export default TaskContainer;