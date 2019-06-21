import { setStyle } from "../../../util/styleUtil";
import { modalStyle, modalContentStyle, btnCancelStyle, closeSpanStyle, inputWidthStyle, closeSpanStyleHover, modalHideStyle, modalShowStyle, btnCreateStyle } from "./style";
import Button from "./Button";


class CreateTaskModal {
    constructor(status) {
        this.status = status;
    }

    isVisible(isVisible) {
        if (isVisible) {
            setStyle(this.modal, modalShowStyle)
        } else {
            setStyle(this.modal, modalHideStyle)
        }
    }

    processCreateTask(inputProjectName, inputTaskName, modal) {
        createTaskFromAPI(inputProjectName, inputTaskName).then(resp => {
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

    render() {
        let modal = document.createElement('div');
        let modalContent = document.createElement('div');
        let closeSpan = document.createElement('span');
        let btnCreateTask = new Button('Submit', processCreateTask(inputProjectName, inputTaskName, modal), btnCreateStyle);
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