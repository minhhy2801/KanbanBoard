import { setStyle } from "../../../util/styleUtil";
import { listTasksStyle } from "./style";
import TaskContainer from "../../Task/container";


class ListTasks {
    constructor(listTasks, header, setDragBoard, setHeader) {
        this.listTasks = listTasks;
        this.header = header;
        this.setDragBoard = setDragBoard;
        this.setHeader = setHeader;

    }

    render() {
        let listTasks = document.createElement('div');
        setStyle(listTasks, listTasksStyle);

        this.listTasks.forEach(objTask => {
            let task = {}
            task = new TaskContainer(objTask.numProgress, objTask.projectTitle,
                objTask.taskTitle, objTask.id, this.header, this.setDragBoard, this.setHeader);
            listTasks.append(task.render());
        });
        return listTasks;
    }
}

export default ListTasks;