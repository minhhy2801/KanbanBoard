let style = {
    btnNewTaskStyle: {
        float: 'right',
        backgroundColor: 'grey',
        border: '1px solid white',
        color: 'white',
        width: '30px',
        height: '30px'
    }
}

class Header {
    constructor(totalCount, stateName, onClick, allowCreate) {
        this.totalCount = totalCount;
        this.stateName = stateName;
        this.onClick = onClick;
        this.allowCreate = allowCreate;
    }

    render() {
        let headerEl = document.createElement('div');
        
        if (this.allowCreate) {
            let btnNewTaskEl = document.createElement('button');
            btnNewTaskEl.style = style.btnNewTaskStyle;
            btnNewTaskEl.innerText = '+';
            btnNewTaskEl.onclick = this.onClick;
            headerEl.append(btnNewTaskEl);
        }

        let titleContentEl = document.createElement('h1');
        titleContentEl.textContent = this.stateName + ' (' + this.stateName + ')';
        headerEl.append(titleContentEl);

        return headerEl;
    }
}

export default Header;