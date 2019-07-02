import CheckBox from "./ui/Checkbox";
import TextInput from "../NumProgressField/ui/Text";
import { css_field_hidden, css_field_visible } from "../../util/config";

class FirebaseField {
    constructor(acceptFirebase, apiKeyFirebase, authDomainFirebase, dbUrlFirebase) {
        this.firebaseInt = document.createElement("div")
        this.checkBoxFirebase = new CheckBox(this.isVisible)
        this.checkedFirebase = false
        this.checkBoxFirebase.setLabel('Integrating with firebase: ')
        this.setCheckedFirebase(acceptFirebase)

        this.checkBoxFirebase.setValue(this.checkedFirebase)
        this.checkBoxFirebase.setCheckBoxLabel(' Accept firebase')
        this.textApiKey = new TextInput()
        this.textApiKey.setLabel('Api Key: ')
        this.textAuthDomain = new TextInput()
        this.textAuthDomain.setLabel('Auth Domain: ')
        this.textDbUrl = new TextInput()
        this.textDbUrl.setLabel('Database URL: ')
        this.setConfigFirebase(apiKeyFirebase, authDomainFirebase, dbUrlFirebase)
        this.isVisible()

    }

    setCheckedFirebase = (acceptFirebase) => {
        this.checkedFirebase = acceptFirebase
    }

    setConfigFirebase = (apiKeyFirebase, authDomainFirebase, dbUrlFirebase) => {
        if (this.checkBoxFirebase.getValue()) {
            this.textApiKey.setValue(apiKeyFirebase)
            this.textAuthDomain.setValue(authDomainFirebase)
            this.textDbUrl.setValue(dbUrlFirebase)
        }
    }

    isVisible = () => {
        let style = {}
        if (this.checkBoxFirebase.getValue()) {
            style = css_field_visible
        } else {
            style = css_field_hidden
        }
        this.textApiKey.setStyleText(style)
        this.textDbUrl.setStyleText(style)
        this.textAuthDomain.setStyleText(style)
    }

    getCheckBoxValue = () => {
        return this.checkBoxFirebase.getValue()
    }

    getTextApiKey = () => {
        return this.textApiKey.getValue()
    }

    getTextAuthDomain = () => {
        return this.textAuthDomain.getValue()
    }

    getTextDbUrl = () => {
        return this.textDbUrl.getValue()
    }

    render = () => {
        this.firebaseInt.append(this.checkBoxFirebase.label)
        this.firebaseInt.append(this.checkBoxFirebase.checkBox)
        this.firebaseInt.append(this.checkBoxFirebase.checkBoxLabel)
        this.firebaseInt.append(this.textApiKey.label)
        this.firebaseInt.append(this.textApiKey.inputValue)
        this.firebaseInt.append(this.textAuthDomain.label)
        this.firebaseInt.append(this.textAuthDomain.inputValue)
        this.firebaseInt.append(this.textDbUrl.label)
        this.firebaseInt.append(this.textDbUrl.inputValue)

        return this.firebaseInt;
    }
}

export default FirebaseField