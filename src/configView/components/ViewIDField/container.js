import Text from './ui/Text'
class ViewIDConfig {
    constructor() {
        this.textEl = new Text()
        this.viewID = 0

        this.textEl.setValue(this.viewID)
    }
    setViewID = (viewID) => {
        this.viewID = viewID
        this.textEl.setValue(this.viewID)
    }
    getViewID = () => {
        return this.viewID
    }
    render = () => {
        return this.textEl.element
    }
}

export default ViewIDConfig;