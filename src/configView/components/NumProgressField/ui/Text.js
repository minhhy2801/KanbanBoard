class TextInput {
    constructor() {
        this.label = document.createElement('h4');
        this.inputValue = document.createElement('input')
    }

    setValue = (value) => {
        this.inputValue.value = value
    }

    getValue() {
        return this.inputValue.value;
    }
    
    setLabel = (value) => {
        this.label.textContent = value
    }
}

export default TextInput