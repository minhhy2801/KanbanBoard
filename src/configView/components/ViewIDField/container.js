import { Dropdown, Label } from '@kintone/kintone-ui-component/src/js'
import { getListViews } from '../../util/service';

class ViewIDField {
    constructor(valueView) {
        this.label = new Label()
        this.select = new Dropdown()
        this.listViews = []
        this.valueView = valueView
        this.viewInit = document.createElement('div')
        this.label.setText('View ID')
        this.label.setRequired(true)
        this.setViewsList()
    }

    setViewsList = async () => {
        let viewsObj = await getListViews();
        this.listViews = Object.keys(viewsObj).map(key => {
            return viewsObj[key]
        })
        this.select.innerHTML = ''

        this.listViews.forEach((opt, i) => {
            this.select.addItem({ label: opt.name, value: opt.id });
        });

        if (typeof this.valueView !== 'undefined')
            this.select.setValue(this.valueView)
    }

    setSelected = (value) => {
        this.select.setValue(value)
    }

    getViewID = () => {
        return this.select.getValue()
    }

    render = () => {
        this.viewInit.append(this.label.render())
        this.viewInit.append(this.select.render())
        return this.viewInit
    }
}

export default ViewIDField;