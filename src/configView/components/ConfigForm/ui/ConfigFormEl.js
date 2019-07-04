import { Button } from "@kintone/kintone-ui-component/src/js";

class ConfigFormEl {
    constructor(formFieldList, handleSubmit) {
        this.formWrapper = document.createElement('div')

        if (Array.isArray(formFieldList)) {
            formFieldList.forEach((formField) => {
                this.formWrapper.appendChild(formField)
            })
        }

        this.handleSubmit = handleSubmit
        this.element = document.createElement('div')
        this.buttonWrapper = document.createElement('div')
        this.submitButton = new Button({ text: 'Save' })

        this.submitButton.on('click', () => { this.handleSubmit() })

        this.formWrapper.appendChild(document.createElement('br'))
        this.buttonWrapper.appendChild(this.submitButton.render())
        this.element.appendChild(this.formWrapper)
        this.element.appendChild(this.buttonWrapper)
    }
}

export default ConfigFormEl