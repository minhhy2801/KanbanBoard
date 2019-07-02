import { setStyle } from "../../../util/config";

class TextInput {
    constructor() {
        this.label = document.createElement('h4');
        this.inputValue = document.createElement('input')
    }

    setStyleText = (value) => {
        setStyle(this.label, value)
        setStyle(this.inputValue, value)
    }

    setValue = (value) => {
        this.inputValue.value = value
    }

    getValue() {
        return this.inputValue.value
    }

    setLabel = (value) => {
        this.label.textContent = value
    }
}

export default TextInput