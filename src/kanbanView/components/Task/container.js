import Task from './ui/Task'
import Message from '../Common/Message';
import { title_message_confirm, text_message_confirm_delete, message_warning, text_message_delete_success, message_success } from '../../util/configMessage';
import { deleteTaskFromAPI } from './service';
import * as firebase from 'firebase/app'
import 'firebase/database'

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
        let msgConfirm = new Message(title_message_confirm, text_message_confirm_delete, message_warning, true, true).render();

        msgConfirm.then(isDelete => {
            if (isDelete) {
                deleteTaskFromAPI(this.id);
                let msgSuccess = new Message(false, text_message_delete_success, message_success, false, false).render();
                msgSuccess.then(value => {
                    if (window.firebase) {
                        let ref = firebase.database().ref(`app/${kintone.app.getId()}/tasks/${this.id}`)
                        ref.remove()
                    } else {
                        window.location.reload(true);
                    }
                });
            }
        });
    }

    render() {
        this.taskContainerDOM = this.task;
        return this.task.render();
    }

}

export default TaskContainer;