import Task from './ui/Task'
import Message from '../commonComponents/Message';
import { title_message_confirm, text_message_confirm_delete, message_warning, text_message_delete_success, message_success } from '../../util/configMessage';
import { deleteTaskFromAPI } from './service';

class TaskContainer {
    constructor(numProgress, projectTitle, taskTitle, id, header) {
        this.numProgress = numProgress;
        this.projectTitle = projectTitle;
        this.taskTitle = taskTitle;
        this.id = id;
        this.header = header
        this.task = new Task(this.numProgress, this.projectTitle, this.taskTitle, this.id, this.header);
    }

    processDeleteTask() {
        window.event.stopImmediatePropagation();
        let msgConfirm = new Message(title_message_confirm, text_message_confirm_delete, message_warning, true, true).render();

        msgConfirm.then(isDelete => {
            if (isDelete) {
                deleteTaskFromAPI(this.id);
                let msgSuccess = new Message(false, text_message_delete_success, message_success, false, false).render();
                msgSuccess.then(value => {
                    window.location.reload(true);
                });
            }
        });
    }

    render() {
        return this.task.render();
    }

}

export default TaskContainer;