import { type_drop_down, type_radio_button } from "../../util/config";
import { Dropdown, Label } from "@kintone/kintone-ui-component/src/js";
import { getFormFields } from "../../util/service";

class StatusField {
    constructor(valueStatus) {
        this.label = new Label()
        this.select = new Dropdown()
        this.statusInit = document.createElement('div')
        this.listStatus = []
        this.listOptionsOfStatus = []
        this.valueStatus = valueStatus
        this.label.setText('Choose status field:')
        this.setStatusList()
    }

    setStatusList = async () => {
        this.listOptionsOfStatus = await getFormFields()
        Object.keys(this.listOptionsOfStatus).map(key => {
            if (this.listOptionsOfStatus[key].type == type_drop_down || this.listOptionsOfStatus[key].type == type_radio_button)
                this.listStatus.push(this.listOptionsOfStatus[key])
        })
        this.select.innerHTML = ''

        this.listStatus.forEach((opt) => {
            this.select.addItem({ label: opt.label, value: opt.code });
        });

        if (typeof this.valueStatus !== 'undefined') {
            this.select.setValue(this.valueStatus)
        }
    }

    setSelected = (value) => {
        this.select.setValue(value)
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

        let listStatus = []
        for (let i = 0; i < this.listStatus.length; i++) {
            this.listStatus.map((opt) => {
                if (i == opt.index) {
                    listStatus.push(opt.label)
                }
            });
        }

        return listStatus;
    }

    render = () => {
        this.statusInit.append(this.label.render())
        this.statusInit.append(this.select.render())
        return this.statusInit
    }
}

export default StatusField;