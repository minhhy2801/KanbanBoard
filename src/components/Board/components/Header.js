import { setStyle } from "../../../util/style";

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
    constructor(totalCount, stateName, onClickOpenModal) {
        this.totalCount = totalCount;
        this.stateName = stateName;
        this.onClickOpenModal = onClickOpenModal;
    }

    render() {
        let headerEl = document.createElement('div');

        if (this.stateName === 'Todo') {
            let btnNewTaskEl = document.createElement('button');

            setStyle(btnNewTaskEl, style.btnNewTaskStyle);
            btnNewTaskEl.innerText = '+';
            btnNewTaskEl.onclick = this.onClickOpenModal.bind(this);
            headerEl.append(btnNewTaskEl);
        }

        let titleContentEl = document.createElement('h1');
        titleContentEl.textContent = this.stateName + ' (' + this.totalCount + ')';
        
        headerEl.append(titleContentEl);
        headerEl.append(document.createElement('hr'));
        
        return headerEl;
    }
}

export default Header;