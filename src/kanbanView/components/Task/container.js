import Task from './ui/Task'
import { title_message_confirm, text_message_confirm_delete, text_message_delete_success, message_success, button_cancel, button_delete } from '../../util/configMessage';
import { deleteTaskFromAPI, getUserByCode } from './service';
import { Dialog, Button, NotifyPopup } from '@kintone/kintone-ui-component/src/js';
import { setStyle } from '../../util/styleUtil';
import { floatLeft } from './ui/style';

class TaskContainer {
    constructor(assigneeUser, teamName, projectTitle, taskTitle, id, header, setDragBoard, setHeader) {
        this.teamName = teamName
        this.assigneeUser = assigneeUser
        this.projectTitle = projectTitle;
        this.taskTitle = taskTitle;
        this.id = id;
        this.header = header;
        this.setDragBoard = setDragBoard;
        this.setHeader = setHeader;
        // this.avatarList = this.handleAssigneeUser()
        this.task = new Task(this.avatarList, this.teamName, projectTitle, taskTitle, id,
            header, this.processDeleteTask, setDragBoard, setHeader)
        this.handleAssigneeUser().then(resp => {
            this.task.setAvaList(resp)
        })
        this.dialogConfirm = new Dialog()
        this.btnDelete = new Button({ text: button_delete, type: 'submit' })
        this.btnCancel = new Button({ text: button_cancel })
    }

    handleAssigneeUser = async () => {
        try {
            let listUser = this.assigneeUser.map(item => {
                return item.code
            })
            let listUserId = await getUserByCode(listUser);
            this.avatarList = listUserId.map(item => {
                return { img: 'https://bozuman.cybozu.com/api/user/photo.do/-/user.png?id=' + item.id, name: item.name };
            })
            return this.avatarList;
        } catch (error) {
            console.log(error);
        }
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
        window.location.reload(true);
        body.append(msg.render())
    }

    render() {
        this.taskContainerDOM = this.task;
        return this.task.render();
    }
}

export default TaskContainer;