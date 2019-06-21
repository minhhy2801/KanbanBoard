import { setStyle } from "../../../util/style";
import {modalStyle, modalContentStyle, btnCancelStyle, closeSpanStyle, inputWidthStyle, closeSpanStyleHover, modalHideStyle, modalShowStyle, btnCreateStyle} from "./style";


class CreateTaskModal {
    constructor(status) {
        this.status = status;
    }

    processCreateTask(inputProjectName, inputTaskName, modal) {
        this.createTaskFromAPI(inputProjectName, inputTaskName).then(resp => {
            swal({
                title: "Success!",
                text: "Your task added in todo list",
                icon: "success",
                button: "Close",
            }).then(value => {
                modal.style = style.modalHideStyle;
                window.location.reload(true);
            });
        }).catch(err => {
            swal({
                title: "Fail!",
                text: "Check task information and try again!",
                icon: "error",
                button: "Close",
            });
        })
    }

    createTaskFromAPI(projectTitle, taskTitle) {
        let body = {
            app: 2,
            record: {
                txt_projectTitle: {},
                txt_taskTitle: {},
                rb_status: {},
                num_progress: {},
                rich_text_description: {},
                user_selection_assignee: {}
            }
        };

        body.record.txt_projectTitle.value = projectTitle;
        body.record.txt_taskTitle.value = taskTitle;
        body.record.rb_status.value = "Todo"
        body.record.num_progress.value = 1
        body.record.rich_text_description.value = '<p>aa</p>'

        body.record.user_selection_assignee.value = [{}]
        body.record.user_selection_assignee.value[0].code = kintone.getLoginUser().code;

        return kintone.api(kintone.api.url('/k/v1/record', true), 'POST', body);
    }

    isVisible(isVisible) {
        if (isVisible) {
            setStyle(this.modal, modalShowStyle)
        } else {
            setStyle(this.modal, modalHideStyle)
        }
    }

    render() {
        let modal = document.createElement('div');
        let modalContent = document.createElement('div');
        let closeSpan = document.createElement('span');
        let btnCreateTask = document.createElement('button');
        let btnCancelCreateTask = document.createElement('button');
        let titleAddTask = document.createElement('h1');
        let titleTask = document.createElement('p');
        let inputTaskName = document.createElement('input');
        let titleProject = document.createElement('p');
        let inputProjectName = document.createElement('input');

        setStyle(modal, modalStyle);
        setStyle(modalContent, modalContentStyle);
        setStyle(btnCancelCreateTask, btnCancelStyle);
        setStyle(btnCreateTask, btnCreateStyle);
        setStyle(closeSpan, closeSpanStyle);
        setStyle(inputProjectName, inputWidthStyle);
        setStyle(inputTaskName, inputWidthStyle);

        closeSpan.textContent = 'X';
        titleAddTask.textContent = 'Add New Task';
        titleProject.textContent = 'Project Name:';
        inputProjectName.name = 'txtProjectTitle';
        inputProjectName.type = 'text';

        titleTask.textContent = 'Task Name:';
        inputTaskName.name = 'txtTaskTitle';
        inputTaskName.type = 'text';

        btnCancelCreateTask.textContent = 'Cancel';
        btnCreateTask.textContent = 'Submit';

        closeSpan.onmouseover = () => {
            setStyle(closeSpan, closeSpanStyleHover);
        };

        closeSpan.onfocus = () => {
            setStyle(closeSpan, closeSpanStyleHover);
        }

        closeSpan.onclick = () => {
            setStyle(modal, modalHideStyle);
        }

        btnCancelCreateTask.onclick = () => {
            setStyle(modal, modalHideStyle);

        }

        window.onclick = (event) => {
            if (event.target === modal)
                setStyle(modal, modalHideStyle);
        }

        btnCreateTask.onclick = () => {
            this.processCreateTask(inputProjectName.value, inputTaskName.value, modal);
        }

        modalContent.append(closeSpan);
        modalContent.append(titleAddTask);
        modalContent.append(titleProject);
        modalContent.append(inputProjectName);
        modalContent.append(titleTask);
        modalContent.append(inputTaskName);
        modalContent.append(document.createElement('br'));
        modalContent.append(btnCreateTask);
        modalContent.append(btnCancelCreateTask);

        modal.append(modalContent);
        this.modal = modal;
        return modal;
    }

}


export default CreateTaskModal;