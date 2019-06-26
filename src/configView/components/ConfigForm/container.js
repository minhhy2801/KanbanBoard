import ViewIDField from '../ViewIDField/container'
import ConfigFormEl from './ui/ConfigFormEl';
class ConfigForm {
    constructor() {
        this.viewConfig = new ViewIDField()

        this.formEl = new ConfigFormEl([this.viewConfig.render()], this.handleSubmit)
    }
    handleSubmit = () => {
        let submitData = {
            viewID: this.viewConfig.getViewID()
        }
        console.log('form submit')
        console.log(submitData)
    }
    render = () => {
        return this.formEl.element
    }
}

export default ConfigForm