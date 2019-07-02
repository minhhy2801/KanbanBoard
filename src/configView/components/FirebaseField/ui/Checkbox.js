class CheckBox {
    constructor(onClickCheckBox) {
        this.label = document.createElement('h4');
        this.checkBox = document.createElement('input')
        this.checkBox.setAttribute("type", "checkbox")
        this.checkBoxLabel = document.createElement('label')
        this.onClickCheckBox = onClickCheckBox
        this.checkBox.onclick = () => { this.onClickCheckBox() }
    }
    setValue = (value) => {
        this.checkBox.checked = value
    }

    getValue() {
        return this.checkBox.checked
    }
    
    setCheckBoxLabel = (value) => {
        this.checkBoxLabel.textContent = value
    }

    setLabel = (value) => {
        this.label.textContent = value
    }
}

export default CheckBox