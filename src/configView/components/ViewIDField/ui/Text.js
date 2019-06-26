class TextInput {
    constructor(){
        this.element = document.createElement('input')
    }
    setValue(value) {
        this.element.value = value
    }
}

export default TextInput