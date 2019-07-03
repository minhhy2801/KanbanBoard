import { btnNewTaskStyle } from "./style";
import { KEY } from "../../../util/config";
import { IconButton } from "@kintone/kintone-ui-component/src/js";
import { setStyle } from "../../../util/styleUtil";

let config = kintone.plugin.app.getConfig(KEY);

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

        this.titleContentEl.textContent = this.stateName + ' (' + this.totalCount + ')';

        headerEl.append(this.titleContentEl);
        headerEl.append(document.createElement('hr'));

        return headerEl;
    }
}

export default Header;