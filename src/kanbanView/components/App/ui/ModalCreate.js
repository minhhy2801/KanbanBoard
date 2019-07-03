import { setStyle } from "../../../util/styleUtil";
import { modalStyle, btnCancelStyle, closeSpanStyle, inputWidthStyle, btnCreateStyle } from "./style";
import { button_cancel, button_submit, title_input_project, title_input_task } from "../../../util/configMessage";
import { Label, Text, Dialog, IconButton, Button } from '@kintone/kintone-ui-component/src/js'

class CreateTaskModal {
    constructor(title, status, onSumbitTask) {
        this.title = title;
        this.status = status;
        this.onSumbitTask = onSumbitTask;
        this.inputTaskLabel = new Label()
        this.inputTaskLabel.setText(title_input_task)
        this.inputTaskLabel.setRequired(true)
        this.inputProjectLabel = new Label()
        this.inputProjectLabel.setText(title_input_project)
        this.inputProjectLabel.setRequired(true)
        this.inputProject = new Text()
        this.inputTask = new Text()
    }

    onClickSubmit = () => {
        this.onSumbitTask(this.inputProject.element.value, this.inputTask.element.value);
    }

    render() {
        let modal = new Dialog()
        let closeSpan = new IconButton({ type: 'close' })
        let headerSpan = document.createElement('span')
        headerSpan.textContent = this.title
        headerSpan.append(closeSpan.render())

        modal.setHeader(headerSpan)

        setStyle(headerSpan, modalStyle)
        setStyle(closeSpan.element, closeSpanStyle)

        closeSpan.on('click', () => { modal.hide() })

        let btnCreateTask = new Button({ text: button_submit, type: 'submit' })
        btnCreateTask.on('click', () => {
            this.onClickSubmit()
            modal.hide()
        })

        let btnCancelCreateTask = new Button({ text: button_cancel });
        btnCancelCreateTask.on('click', () => { modal.hide() })

        setStyle(btnCancelCreateTask.element, btnCancelStyle)
        setStyle(btnCreateTask.element, btnCreateStyle)
        setStyle(this.inputProject.element, inputWidthStyle)
        setStyle(this.inputTask.element, inputWidthStyle)

        let modalContent = document.createElement('div')
        modalContent.append(this.inputProjectLabel.render());
        modalContent.append(this.inputProject.render());
        modalContent.append(this.inputTaskLabel.render());
        modalContent.append(this.inputTask.render());
        modalContent.append(document.createElement('br'));
        modal.setContent(modalContent);
        let modalFooter = document.createElement('div')
        modalFooter.append(btnCreateTask.render());
        modalFooter.append(btnCancelCreateTask.render());
        modal.setFooter(modalFooter)
        this.modalDOM = modal

        return modal.render()
    }

}


export default CreateTaskModal;