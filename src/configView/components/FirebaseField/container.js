import { Label, Text, CheckBox } from "@kintone/kintone-ui-component/src/js";

class FirebaseField {
    constructor(acceptFirebase, apiKeyFirebase, authDomainFirebase, dbUrlFirebase) {
        this.firebaseInt = document.createElement("div")
        this.checkBoxLabel = new Label()
        this.textApiKeyLabel = new Label()
        this.textAuthDomainLabel = new Label()
        this.textDbUrlLabel = new Label()
        this.checkBox = new CheckBox({ items: [{ label: 'Accept firebase', value: 'true' }], value: ['true'] })
        this.textApiKey = new Text()
        this.textAuthDomain = new Text()
        this.textDbUrl = new Text()

        this.checkBoxLabel.setText('Integrating with firebase: ')
        this.textApiKeyLabel.setText('Api Key: ')
        this.textAuthDomainLabel.setText('Auth Domain: ')
        this.textDbUrlLabel.setText('Database URL: ')

        this.setCheckedFirebase(acceptFirebase)

        this.setConfigFirebase(apiKeyFirebase, authDomainFirebase, dbUrlFirebase)

        this.checkBox.on('change', () => {
            this.isDisable()
        })
    }

    isDisable = () => {
        if (!this.hasUsingFirebase()) {
            this.textApiKey.disable()
            this.textAuthDomain.disable()
            this.textDbUrl.disable()
        } else {
            this.textApiKey.enable()
            this.textAuthDomain.enable()
            this.textDbUrl.enable()
        }
    }

    hasUsingFirebase = () => {
        if (this.checkBox.getValue().length > 0)
            return true
        return false
    }

    setCheckedFirebase = (acceptFirebase) => {
        if (acceptFirebase) this.checkBox.setValue([acceptFirebase + ''])
        else this.checkBox.setValue([])
        this.isDisable()
    }

    setConfigFirebase = (apiKeyFirebase, authDomainFirebase, dbUrlFirebase) => {
        if (this.hasUsingFirebase()) {
            this.textApiKey.setValue(apiKeyFirebase)
            this.textAuthDomain.setValue(authDomainFirebase)
            this.textDbUrl.setValue(dbUrlFirebase)
        }
    }

    getTextApiKey = () => {
        return this.textApiKey.element.value
    }

    getTextAuthDomain = () => {
        return this.textAuthDomain.element.value
    }

    getTextDbUrl = () => {
        return this.textDbUrl.element.value
    }

    render = () => {
        this.firebaseInt.append(this.checkBoxLabel.render())
        this.firebaseInt.append(this.checkBox.render())
        this.firebaseInt.append(this.textApiKeyLabel.render())
        this.firebaseInt.append(this.textApiKey.render())
        this.firebaseInt.append(this.textAuthDomainLabel.render())
        this.firebaseInt.append(this.textAuthDomain.render())
        this.firebaseInt.append(this.textDbUrlLabel.render())
        this.firebaseInt.append(this.textDbUrl.render())

        return this.firebaseInt;
    }
}

export default FirebaseField