import { btnNewTaskStyle } from "./style";
import PlusButton from "./PlusButton";
import { button_add } from "../../../util/configMessage";
import { KEY } from "../../../util/config";

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
            let btnNewTask = new PlusButton(button_add, btnNewTaskStyle, this.onClickOpenModal);

            headerEl.append(btnNewTask.render());
        }
        
        // let titleContentEl = document.createElement('h1');
        this.titleContentEl.textContent = this.stateName + ' (' + this.totalCount + ')';

        headerEl.append(this.titleContentEl);
        headerEl.append(document.createElement('hr'));

        return headerEl;
    }
}

export default Header;