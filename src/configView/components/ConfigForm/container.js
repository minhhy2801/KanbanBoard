import ConfigFormEl from './ui/ConfigFormEl';
import NumProgressField from '../NumProgressField/container';
import ViewIDField from '../ViewIDField/container';
import StatusField from '../StatusField/container';
import { PLUGIN_DATA } from '../../util/config';
import FirebaseField from '../FirebaseField/container';

class ConfigForm {
    constructor() {
        this.numProgessConfig = new NumProgressField(PLUGIN_DATA.numProgess)

        this.viewIDConfig = new ViewIDField(PLUGIN_DATA.viewID)

        this.statusConfig = new StatusField(PLUGIN_DATA.statusCode)

        this.firebaseConfig = new FirebaseField(JSON.parse(PLUGIN_DATA.acceptFirebase), PLUGIN_DATA.apiKeyFirebase,
            PLUGIN_DATA.authDomainFirebase, PLUGIN_DATA.dbUrlFirebase)

        this.formEl = new ConfigFormEl([
            this.viewIDConfig.render(), this.numProgessConfig.render(),
            this.statusConfig.render(), this.firebaseConfig.render()
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
            acceptFirebase: this.firebaseConfig.hasUsingFirebase() + '',
            apiKeyFirebase: this.firebaseConfig.getTextApiKey(),
            authDomainFirebase: this.firebaseConfig.getTextAuthDomain(),
            dbUrlFirebase: this.firebaseConfig.getTextDbUrl()
        }
        kintone.plugin.app.setConfig(submitData)
    }

    render = () => {
        return this.formEl.element
    }
}

export default ConfigForm