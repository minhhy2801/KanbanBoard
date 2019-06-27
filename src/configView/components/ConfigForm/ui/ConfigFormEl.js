class ConfigFormEl {
    constructor(formFieldList, handleSubmit) {
        this.formWrapper = document.createElement('div')
        if (Array.isArray(formFieldList)) {
            formFieldList.forEach((formField)=>{
                this.formWrapper.appendChild(formField)
            })
        }

        this.buttonWrapper = document.createElement('div')
        this.submitButton = document.createElement('button')
        this.submitButton.innerText = 'Save'
        this.submitButton.onclick = handleSubmit
        this.buttonWrapper.appendChild(this.submitButton)

        this.element = document.createElement('div')
        this.element.appendChild(this.formWrapper)
        this.element.appendChild(this.buttonWrapper)
    }
}

export default ConfigFormEl