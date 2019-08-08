import { btnNewTaskStyle, headerStyle, divHeaderStyle } from "./style";
import { IconButton } from "@kintone/kintone-ui-component/src/js";
import { setStyle } from "../../../util/styleUtil";
import { config } from "../../../util/config";

class Header {
    constructor(totalCount, stateName, onClickOpenModal) {
        this.totalCount = totalCount;
        this.stateName = stateName;
        this.onClickOpenModal = onClickOpenModal;
        this.titleContentEl = document.createElement('h1');
    }

    setTotalCount = (totalCount) => {
        this.totalCount = totalCount;
        this.titleContentEl.textContent = this.stateName + ' (' + this.totalCount + ')';
    }

    render() {
        let headerEl = document.createElement('div');

        if (this.stateName === config.todoField) {
            let btnNewTask = new IconButton({ type: 'insert' });
            setStyle(btnNewTask.element, btnNewTaskStyle)
            btnNewTask.on('click', () => { this.onClickOpenModal() })
            headerEl.append(btnNewTask.render());
        }
        setStyle(this.titleContentEl, headerStyle)
        setStyle(headerEl, divHeaderStyle)
        this.titleContentEl.textContent = this.stateName + ' (' + this.totalCount + ')';

        headerEl.append(this.titleContentEl);
        return headerEl;
    }
}

export default Header;