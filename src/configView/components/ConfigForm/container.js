import ConfigFormEl from './ui/ConfigFormEl';
import NumProgressField from '../NumProgressField/container';
import ViewIDField from '../ViewIDField/container';
import StatusField from '../StatusField/container';

const PLUGIN_DATA = kintone.plugin.app.getConfig(kintone.$PLUGIN_ID)

class ConfigForm {
    constructor() {
        this.numProgessConfig = new NumProgressField(PLUGIN_DATA.numProgess)

        this.viewIDConfig = new ViewIDField(PLUGIN_DATA.viewID)

        this.statusConfig = new StatusField(PLUGIN_DATA.statusCode)
        this.formEl = new ConfigFormEl([
            this.viewIDConfig.render(), this.numProgessConfig.render(),
            this.statusConfig.render(), 
        ], this.handleSubmit)
    }

    handleSubmit = () => {
        let listStatus = this.statusConfig.getListStatus()

        let submitData = {
            viewID: this.viewIDConfig.getViewID(),
            numProgess: this.numProgessConfig.getNumProgress(),
            statusCode: this.statusConfig.getStatus(),
            listStatus: listStatus.toString(),
            todoField: listStatus[0],
            doneField: listStatus[listStatus.length - 1],
        }
        console.log(submitData);
        
        kintone.plugin.app.setConfig(submitData)
    }

    render = () => {
        return this.formEl.element
    }
}

export default ConfigForm