import { setStyle } from "../../../util/styleUtil";
import { modalStyle, btnCancelStyle, closeSpanStyle, inputWidthStyle, btnCreateStyle } from "./style";
import { button_cancel, button_submit, title_input_project, title_input_task } from "../../../util/configMessage";
import { Label, Text, Dialog, IconButton, Button } from '@kintone/kintone-ui-component/src/js'

class CreateTaskModal {
    constructor(title, status, onSumbitTask) {
        this.title = title;
        this.status = status;
        this.onSumbitTask = onSumbitTask;
        this, modal = new Dialog()
        this.inputTaskLabel = new Label()
        this.inputProjectLabel = new Label()
        this.inputProject = new Text()
        this.inputTask = new Text()
        this.closeSpan = new IconButton({ type: 'close' })
        this.btnCreateTask = new Button({ text: button_submit, type: 'submit' })
        this.btnCancelTask = new Button({ text: button_cancel })

        this.inputTaskLabel.setText(title_input_task)
        this.inputTaskLabel.setRequired(true)
        this.inputProjectLabel.setText(title_input_project)
        this.inputProjectLabel.setRequired(true)
    }

    onClickSubmit = () => {
        this.onSumbitTask(this.inputProject.element.value, this.inputTask.element.value)
    }

    render = () => {
        let headerSpan = document.createElement('span')
        headerSpan.textContent = this.title
        headerSpan.append(this.closeSpan.render())

        this.closeSpan.on('click', () => { this.modal.hide() })
        this.btnCancelTask.on('click', () => { this.modal.hide() })

        this.btnCreateTask.on('click', () => {
            this.onClickSubmit()
            this.modal.hide()
        })

        setStyle(headerSpan, modalStyle)
        setStyle(this.closeSpan.element, closeSpanStyle)
        setStyle(this.btnCancelTask.element, btnCancelStyle)
        setStyle(this.btnCreateTask.element, btnCreateStyle)
        setStyle(this.inputProject.element, inputWidthStyle)
        setStyle(this.inputTask.element, inputWidthStyle)

        let modalContent = document.createElement('div')
        modalContent.append(this.inputProjectLabel.render())
        modalContent.append(this.inputProject.render())
        modalContent.append(this.inputTaskLabel.render())
        modalContent.append(this.inputTask.render())
        modalContent.append(document.createElement('br'))

        let modalFooter = document.createElement('div')
        modalFooter.append(this.btnCreateTask.render())
        modalFooter.append(this.btnCancelTask.render())
        
        this.modal.setHeader(headerSpan)
        this.modal.setContent(modalContent)
        this.modal.setFooter(modalFooter)

        this.modalDOM = this.modal
        return modal.render()
    }

}


export default CreateTaskModal