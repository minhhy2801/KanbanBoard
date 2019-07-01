import { setStyle } from "../../../util/styleUtil";
import { modalStyle, modalContentStyle, btnCancelStyle, closeSpanStyle, inputWidthStyle, closeSpanStyleHover, modalHideStyle, modalShowStyle, btnCreateStyle } from "./style";
import Button from "./Button";
import TextInput from "./TextInput";
import CloseSpan from "./CloseSpan";
import { span_close, button_submit, button_cancel, title_input_project, title_input_task } from "../../../util/configMessage";


class CreateTaskModal {
    constructor(title, status, onSumbitTask, closeModal) {
        this.title = title;
        this.status = status;
        this.onSumbitTask = onSumbitTask;
        this.closeModal = closeModal;
        this.inputProject = new TextInput(inputWidthStyle, title_input_project);
        this.inputTask = new TextInput(inputWidthStyle, title_input_task);
    }

    onClickSubmit = () => {
        this.onSumbitTask(this.inputProject.inputDOM.value, this.inputTask.inputDOM.value, this.closeModal);
    }

    render() {
        let modal = document.createElement('div');
        let modalContent = document.createElement('div');
        let titleAddTask = document.createElement('h1');

        let closeSpan = new CloseSpan(span_close, closeSpanStyle, closeSpanStyleHover, closeSpanStyleHover, modalHideStyle, modal);
        let btnCreateTask = new Button(button_submit, this.onClickSubmit, btnCreateStyle);
        let btnCancelCreateTask = new Button(button_cancel, this.closeModal, btnCancelStyle);

        titleAddTask.textContent = this.title;

        window.onclick = (event) => {
            if (event.target === modal)
                setStyle(modal, modalHideStyle);
        }

        setStyle(modal, modalStyle);
        setStyle(modalContent, modalContentStyle);

        modalContent.append(closeSpan.render());
        modalContent.append(titleAddTask);
        modalContent.append(this.inputProject.render());
        modalContent.append(this.inputTask.render());
        modalContent.append(document.createElement('br'));
        modalContent.append(btnCreateTask.render());
        modalContent.append(btnCancelCreateTask.render());

        modal.append(modalContent);
        this.modalDOM = modal;

        return modal;
    }

}


export default CreateTaskModal;