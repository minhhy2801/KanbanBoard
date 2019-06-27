import Select from "./ui/Select";
import { getListViews } from "./service";

class ViewIDField {
    constructor(valueView) {
        this.select = new Select()
        this.listViews = []
        this.valueView = valueView
        this.viewInit = document.createElement('div')

        this.select.setLabel('View ID: ')
        this.setViewsList()
    }

    setViewsList = async () => {
        let viewsObj = await getListViews();
        this.listViews = Object.keys(viewsObj).map(key => {
            return viewsObj[key]
        })

        this.select.setOptions(this.listViews, this.valueView)
    }

    setSelectedView = async (value) => {
        this.select.setSelected(value)
    }

    getViewID = () => {
        return this.select.getValue()
    }

    render = () => {
        this.viewInit.append(this.select.label)
        this.viewInit.append(this.select.options)
        return this.viewInit
    }
}

export default ViewIDField;