class Select {
    constructor() {
        this.label = document.createElement('h4');
        this.options = document.createElement('select')
        this.listStatus = []
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

    setTypeOptions = (listOpts, value) => {
        this.options.innerHTML = ''

        listOpts.forEach((opt, index) => {

            let optEl = document.createElement('option')
            optEl.value = opt.code
            optEl.text = opt.label
            this.options.add(optEl, index)

        });
        if (typeof value !== 'undefined')
            this.options.value = value
    }

    getListStatus = (listOpts) => {
        let listStatus = []
        for (let i = 0; i < listOpts.length; i++) {
            listOpts.map((opt) => {
                if (i == opt.index) {
                    listStatus.push(opt.label)
                }
            });
        }
        this.listStatus = listStatus
        return listStatus
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