import Select from "../ViewIDField/ui/Select";
import { getFormFields } from "../ViewIDField/service";
import { type_drop_down, type_radio_button } from "../../util/config";

class StatusField {
    constructor(label, valueStatus) {
        this.select = new Select()
        this.listStatus = []
        this.statusInit = document.createElement('div')
        this.listOptionsOfStatus = []
        this.valueStatus = valueStatus
        this.select.setLabel(label)
        this.setStatusList()
    }

    setStatusList = async () => {
        this.listOptionsOfStatus = await getFormFields()
        Object.keys(this.listOptionsOfStatus).map(key => {
            if (this.listOptionsOfStatus[key].type == type_drop_down || this.listOptionsOfStatus[key].type == type_radio_button)
                this.listStatus.push(this.listOptionsOfStatus[key])
        })


        this.select.setTypeOptions(this.listStatus, this.valueStatus)
    }

    setSelectedStatus = (value) => {
        this.select.setSelected(value)
    }

    getStatus = () => {
        return this.select.getValue()
    }

    getListStatus = () => {
        let value = this.select.getValue()
        let options = []
        this.listStatus.forEach(status => {
            if (status.code == value) {
                options = status.options
            }
        })
        this.listStatus = Object.keys(options).map(key => {
            return options[key]
        });
        return this.select.getListStatus(this.listStatus)
    }

    render = () => {

        this.statusInit.append(this.select.label)
        this.statusInit.append(this.select.options)
        return this.statusInit
    }
}

export default StatusField;