import { Label, Text } from '@kintone/kintone-ui-component/src/js';
import { inputWidthStyle } from '../../util/config';
import { setStyle } from '../../util/styleUtil';

class NumProgressField {
    constructor(valueNumProgress) {
        this.text = new Text()
        this.label = new Label()
        this.numProgess = 0
        this.valueNumProgress = valueNumProgress
        this.numProgressInit = document.createElement('div')

        this.label.setText('Number Of Init Progress (%): ')
        this.setNumProgress()
        this.text.setValue(this.numProgess)
    }

    setNumProgress = () => {
        if (typeof this.valueNumProgress !== 'undefined') {
            this.numProgess = this.valueNumProgress
        }
    }

    getNumProgress = () => {
        return this.text.element.value
    }

    render = () => {
        this.numProgressInit.append(this.label.render())
        this.numProgressInit.append(this.text.render())
        return this.numProgressInit;
    }
}

export default NumProgressField;