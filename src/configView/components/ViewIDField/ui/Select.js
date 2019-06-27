class Select {
    constructor() {
        this.label = document.createElement('h4');
        this.options = document.createElement('select')
    }

    setOptions = (listOpts, value) => {
        this.options.innerHTML = ''

        listOpts.forEach((opt, i) => {
            let optEl = document.createElement('option')
            optEl.value = opt.id
            optEl.text = opt.name
            this.options.add(optEl, i)
        });

        if (typeof value !== 'undefined')
            this.options.value = value
    }

    setSelected = (value) => {
        this.options.defaultValue = value
    }

    getValue = () => {
        return this.options.value
    }

    setLabel = (value) => {
        this.label.textContent = value
    }

}

export default Select