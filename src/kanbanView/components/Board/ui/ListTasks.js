import { setStyle } from "../../../util/styleUtil";
import { listTasksStyle } from "./style";
import TaskContainer from "../../Task/container";


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

        this.listTasks.forEach(objTask => {
            let task = {}
            if (window.firebase) {
                task = new TaskContainer(objTask.numProgress, objTask.projectTitle,
                    objTask.taskTitle, objTask.id, this.header, this.setDragBoard, this.setHeader);
            } else {
                task = new TaskContainer(objTask.num_progress.value, objTask.txt_projectTitle.value,
                    objTask.txt_taskTitle.value, objTask.$id.value, this.header, this.setDragBoard, this.setHeader);
            }
            this.listTasksEl.append(task.render());
        });

        return this.listTasksEl;
    }
}

export default ListTasks;