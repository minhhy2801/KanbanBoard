import ConfigFormEl from './ui/ConfigFormEl';
import ViewIDField from '../ViewIDField/container';
import StatusField from '../StatusField/container';
import MultipleSelectField from '../MultipleSelectField/container';
import { type_multi_select, type_assignee_select } from '../../util/config';

const PLUGIN_DATA = kintone.plugin.app.getConfig(kintone.$PLUGIN_ID)

class ConfigForm {
    constructor() {
        this.viewIDConfig = new ViewIDField(PLUGIN_DATA.viewID)
        this.statusConfig = new StatusField(PLUGIN_DATA.statusCode)
        this.multiSelectConfig = new MultipleSelectField(PLUGIN_DATA.teamField, 'Choose Team Field:', type_multi_select)
        this.assigneeConfig = new MultipleSelectField(PLUGIN_DATA.assigneeField, 'Choose Assignee Field:', type_assignee_select)
        this.formEl = new ConfigFormEl([
            this.viewIDConfig.render(), 
            this.multiSelectConfig.render(),
            this.statusConfig.render(),
            this.assigneeConfig.render()
        ], this.handleSubmit)
    }

    handleSubmit = () => {
        let listStatus = this.statusConfig.getListStatus()

        let submitData = {
            viewID: this.viewIDConfig.getViewID(),
            statusCode: this.statusConfig.getStatus(),
            listStatus: listStatus.toString(),
            todoField: listStatus[0],
            doneField: listStatus[listStatus.length - 1],
            teamField: this.multiSelectConfig.getStatus(),
            assigneeField: this.assigneeConfig.getStatus()
        }
        kintone.plugin.app.setConfig(submitData)
    }

    render = () => {
        return this.formEl.element
    }
}

export default ConfigForm