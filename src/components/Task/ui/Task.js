import { setStyle } from "../../../util/styleUtil";
import { DRAG_ID } from "../../../config";
import { taskStyle, linkDeleteStyle } from "./style";
import TaskContainer from "../container";

class Task {
    constructor(numProgress, projectTitle, taskTitle, id, header) {
        this.numProgress = numProgress;
        this.projectTitle = projectTitle;
        this.taskTitle = taskTitle;
        this.id = id;
        this.header = header;
    }

    render() {
        let taskEl = document.createElement('div');
        let linkDelete = document.createElement('a');

        setStyle(taskEl, taskStyle);

        taskEl.id = this.id;
        taskEl.innerText = '[' + this.numProgress + '%] Project Name: ' +
            this.projectTitle + '\n Task Name: ' +
            this.taskTitle + '\n';

        taskEl.onclick = () => {
            window.open('/k/2/show#record=' + this.id);
        };

        let header = this.header;

        taskEl.addEventListener('dragstart', function (event) {
            event.dataTransfer.setData('text', event.target.id);
            window.DRAG_ID = this.id;
            window.NUM_PROGRESS = this.numProgress;
            window.HEADER = header;
        })

        taskEl.draggable = true;
        setStyle(linkDelete, linkDeleteStyle);

        linkDelete.textContent = 'X';

        linkDelete.onclick = () => {
            let container = new TaskContainer(this.numProgress, this.projectTitle, this.taskTitle, this.id, this.header);
            container.processDeleteTask();
        }

        taskEl.append(document.createElement('br'));
        taskEl.append(linkDelete);

        return taskEl;
    }

}

export default Task;