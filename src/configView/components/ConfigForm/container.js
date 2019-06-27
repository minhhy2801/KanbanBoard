import ConfigFormEl from './ui/ConfigFormEl';
import NumProgressField from '../NumProgressField/container';
import ViewIDField from '../ViewIDField/container';

class ConfigForm {
    constructor() {
        this.numProgessConfig = new NumProgressField(kintone.plugin.app.getConfig(kintone.$PLUGIN_ID).numProgess)

        this.viewIDConfig = new ViewIDField(kintone.plugin.app.getConfig(kintone.$PLUGIN_ID).viewID)

        this.formEl = new ConfigFormEl(
            [this.viewIDConfig.render(), this.numProgessConfig.render()],
            this.handleSubmit)
    }

    handleSubmit = () => {
        let submitData = {
            viewID: this.viewIDConfig.getViewID(),
            numProgess: this.numProgessConfig.getNumProgress()
        }
        kintone.plugin.app.setConfig(submitData);
    }

    render = () => {
        return this.formEl.element
    }
}

export default ConfigForm