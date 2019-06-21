import { setStyle } from "../../../util/styleUtil";
import { btnNewTaskStyle } from "./style";
import BoardContainer from "../container";
import { TODO_STATUS } from "../../../config";

class Header {
    constructor(totalCount, stateName, onClickOpenModal) {
        this.totalCount = totalCount;
        this.stateName = stateName;
        this.onClickOpenModal = onClickOpenModal;
    }

    render() {
        let headerEl = document.createElement('div');

        if (this.stateName === TODO_STATUS) {
            let btnNewTaskEl = document.createElement('button');

            setStyle(btnNewTaskEl, btnNewTaskStyle);
            btnNewTaskEl.innerText = '+';
            
            let boardContainer = new BoardContainer([], this.stateName, this.onClickOpenModal);
            
            btnNewTaskEl.onclick = boardContainer.openCreateModal.bind(this);
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