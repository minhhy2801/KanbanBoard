import Task from './ui/Task'
import Message from '../Common/Message';
import { title_message_confirm, text_message_confirm_delete, message_warning, text_message_delete_success, message_success, button_cancel, button_delete } from '../../util/configMessage';
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
            header, this.processDeleteTask, setDragBoard, setHeader);
    }

    processDeleteTask = () => {
        window.event.stopImmediatePropagation();
        // let msgConfirm = new Message(title_message_confirm, text_message_confirm_delete, message_warning, true, true).render();
        let dialogConfirm = new Dialog()
        let btnDelete = new Button({ text: button_delete, type: 'submit' })
        let btnCancel = new Button({ text: button_cancel })
        let modalFooter = document.createElement('div')
        modalFooter.append(btnDelete.render());
        modalFooter.append(btnCancel.render());
        setStyle(btnDelete.element, floatLeft)
        dialogConfirm.setHeader(title_message_confirm)
        dialogConfirm.setContent(text_message_confirm_delete)
        dialogConfirm.setFooter(modalFooter)
        btnCancel.on('click', () => { dialogConfirm.hide() })

        btnDelete.on('click', () => {
            this.onClickDeleteBtn()
            dialogConfirm.hide()
        })

        document.getElementById('app').append(dialogConfirm.render())
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