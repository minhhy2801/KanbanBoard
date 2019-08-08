import { setStyle } from "../../../util/styleUtil";
import { listTasksStyle } from "./style";
import TaskContainer from "../../Task/container";
import { config } from "../../../util/config";


class ListTasks {
    constructor(listTasks, header, setDragBoard, setHeader) {
        this.listTasks = listTasks;
        this.header = header;
        this.setDragBoard = setDragBoard;
        this.setHeader = setHeader;
        this.listTasksEl = document.createElement('div')
    }

    render() {
        setStyle(this.listTasksEl, listTasksStyle);
        let user_selection_assignee = config.assigneeField
        let choice_team = config.teamField
        this.listTasks.forEach(objTask => {
            let task = {}
            task = new TaskContainer(objTask[user_selection_assignee].value, objTask[choice_team].value, objTask.txt_projectTitle.value,
                objTask.txt_taskTitle.value, objTask.$id.value, this.header, this.setDragBoard, this.setHeader);
            this.listTasksEl.append(task.render());
        });

        return this.listTasksEl;
    }
}

export default ListTasks;