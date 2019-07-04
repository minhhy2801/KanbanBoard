import { setStyle } from "../../../util/styleUtil";
import { taskStyle, linkDeleteStyle, taskHoverStyle, taskDropStyle, taskDragStyle } from "./style";
import { IconButton } from "@kintone/kintone-ui-component/src/js";
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
        let taskSpan = document.createElement('span')
        let taskEl = document.createElement('div');
        let btnDelete = new IconButton({ type: 'close', color: 'red', size: 'small' })
        taskEl.id = this.id;
        taskSpan.innerText = '[' + this.numProgress + '%] Project Name: ' +
            this.projectTitle + '\nTask Name (' + this.id + '): ' +
            this.taskTitle;

        taskEl.onclick = () => {
            window.open('/k/2/show#record=' + this.id);
        };
        btnDelete.on('click', () => { this.processDeleteTask() })

        taskEl.addEventListener('dragstart', async (event) => {
            window.draggingTask = this;
            this.setDragBoard();
        })

        taskEl.ondragstart = () => {
            setStyle(taskEl, taskDragStyle);
        }
        taskEl.ondragend = () => {
            setStyle(taskEl, taskDropStyle);
        }

        taskEl.draggable = true;
        setStyle(taskEl, taskStyle);
        setStyle(btnDelete.element, linkDeleteStyle);

        taskEl.append(btnDelete.render());
        taskEl.append(taskSpan)
        this.taskDOM = taskEl;
        return taskEl;
    }

}

export default Task;