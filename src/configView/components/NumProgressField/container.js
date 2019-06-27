import Text from './ui/Text'
class NumProgressField {
    constructor(valueNumProgress) {
        this.textEl = new Text()
        this.numProgess = 0
        this.valueNumProgress = valueNumProgress
        this.numProgressInit = document.createElement('div');

        this.textEl.setLabel('Number Of Init Progress (%): ')
        this.setNumProgress()
        this.textEl.setValue(this.numProgess)
    }

    setNumProgress = () => {
        if (typeof this.valueNumProgress !== 'undefined') {
            this.numProgess = this.valueNumProgress
        }
    }

    getNumProgress = () => {
        return this.textEl.getValue()
    }

    render = () => {
        this.numProgressInit.append(this.textEl.label)
        this.numProgressInit.append(this.textEl.inputValue)
        return this.numProgressInit;
    }
}

export default NumProgressField;