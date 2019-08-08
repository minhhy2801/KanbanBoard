import { setStyle } from "../../../util/styleUtil";
import { taskStyleVN, linkDeleteStyle, taskDropStyle, taskDragStyle, taskStyleJA, taskStyleZH, taskStyleOther, taskStyleDefault } from "./style";
import { IconButton } from "@kintone/kintone-ui-component/src/js";

class Task {
    constructor(assigneeUser, teamName, projectTitle, taskTitle, id, header, processDeleteTask, setDragBoard, setHeader) {
        this.teamName = teamName;
        this.assigneeUser = assigneeUser;
        this.projectTitle = projectTitle;
        this.taskTitle = taskTitle;
        this.id = id;
        this.header = header;
        this.processDeleteTask = processDeleteTask;
        this.setDragBoard = setDragBoard;
        this.setHeaderTask = setHeader;
    }

    render() {
        let taskSpan = document.createElement('pre')
        let taskEl = document.createElement('div');
        let btnDelete = new IconButton({ type: 'close', color: 'red', size: 'small' })
        taskEl.id = this.id;
        this.assigneeUser = this.assigneeUser.map(i => {
            return i.name;
        })
        
        taskSpan.textContent = '[' + this.teamName + '] \nProject Name: ' +
            this.projectTitle + '\nTask Name: ' +
            this.taskTitle + '\nAssignee: ' + this.assigneeUser;

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
        let teamName = JSON.stringify(this.teamName).toLowerCase()
        if (teamName.includes('vn')) {
            setStyle(taskEl, taskStyleVN);
        } else if (teamName.includes('ja')) {
            setStyle(taskEl, taskStyleJA);
        } else if (teamName.includes('zh')) {
            setStyle(taskEl, taskStyleZH);
        }
        if (this.teamName.length > 1) {
            setStyle(taskEl, taskStyleOther)
        }
        if (this.teamName.length < 1) {
            setStyle(taskEl, taskStyleDefault)
        }
        setStyle(btnDelete.element, linkDeleteStyle);

        taskEl.append(btnDelete.render());
        taskEl.append(taskSpan)
        this.taskDOM = taskEl;
        return taskEl;
    }

}

export default Task;