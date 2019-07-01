import { setStyle } from "../../../util/styleUtil";
import { taskStyle, linkDeleteStyle } from "./style";
import { span_close } from "../../../util/configMessage";

class Task {
    constructor(numProgress, projectTitle, taskTitle, id, header, processDeleteTask, setDragBoard, setHeader) {
        this.numProgress = numProgress;
        this.projectTitle = projectTitle;
        this.taskTitle = taskTitle;
        this.id = id;
        this.header = header;
        this.processDeleteTask = processDeleteTask;
        this.setDragBoard = setDragBoard;
        this.setHeaderTask = setHeader;
    }

    render() {
        let taskEl = document.createElement('div');
        let linkDelete = document.createElement('a');

        setStyle(taskEl, taskStyle);

        taskEl.id = this.id;
        taskEl.innerText = '[' + this.numProgress + '%] Project Name: ' +
            this.projectTitle + '\n Task Name(' + this.id + '): ' +
            this.taskTitle + '\n';

        taskEl.onclick = () => {
            window.open('/k/2/show#record=' + this.id);
        };

        taskEl.addEventListener('dragstart', async (event) => {
            window.draggingTask = this;
            this.setDragBoard();
        })

        taskEl.draggable = true;
        setStyle(linkDelete, linkDeleteStyle);

        linkDelete.textContent = span_close;

        linkDelete.onclick = () => {
            this.processDeleteTask();
        }

        taskEl.append(document.createElement('br'));
        taskEl.append(linkDelete);
        this.taskDOM = taskEl;
        return taskEl;
    }

}

export default Task;