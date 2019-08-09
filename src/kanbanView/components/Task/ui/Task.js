import { setStyle } from "../../../util/styleUtil";
import { taskStyleVN, linkDeleteStyle, taskDropStyle, taskDragStyle, taskStyleJA, taskStyleZH, taskStyleOther, taskStyleDefault, avaStyle, teamStyle, tooltipStyle } from "./style";
import { IconButton } from "@kintone/kintone-ui-component/src/js";

class Task {
    constructor(avatarList, teamName, projectTitle, taskTitle, id, header, processDeleteTask, setDragBoard, setHeader) {
        this.avatarList = avatarList
        this.teamName = teamName;
        this.projectTitle = projectTitle;
        this.taskTitle = taskTitle;
        this.id = id;
        this.header = header;
        this.processDeleteTask = processDeleteTask;
        this.setDragBoard = setDragBoard;
        this.setHeaderTask = setHeader;

        this.taskEl = null;
        this.footerEl = null;
    }

    createHeaderEl() {
        let btnDelete = new IconButton({ type: 'close', color: 'red', size: 'small' })
        btnDelete.on('click', () => { this.processDeleteTask() })
        setStyle(btnDelete.element, linkDeleteStyle);

        let headerEl = document.createElement('div');
        headerEl.appendChild(btnDelete.render());
        return headerEl;
    }

    createBodyEl() {
        let taskSpan = document.createElement('pre')
        taskSpan.textContent = 'Project Name: ' +
            this.projectTitle + '\nTask Name: ' +
            this.taskTitle

        let bodyEl = document.createElement('div');
        bodyEl.appendChild(taskSpan)
        return bodyEl;
    }

    createFooterEl() {
        //'[' + this.teamName + '] \n
        let footerEl = document.createElement('div');

        this.teamName.forEach(team => {
            footerEl.appendChild(this.createTeamEl(team))
        });
        return footerEl
    }

    createTeamEl(teamName) {
        let teamEl = document.createElement('span')
        teamEl.textContent = teamName
        setStyle(teamEl, teamStyle)
        return teamEl
    }
    createTaskContainerEl() {
        let taskEl = document.createElement('div');
        taskEl.id = this.id;
        taskEl.onclick = () => {
            window.open('/k/2/show#record=' + this.id);
        };
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

        return taskEl;
    }

    render() {
        this.taskEl = this.createTaskContainerEl();

        this.taskEl.append(this.createHeaderEl())
        this.taskEl.append(this.createBodyEl())

        this.footerEl = this.createFooterEl()
        this.taskEl.append(this.footerEl)
        return this.taskEl;
    }

    createAvatarEl(img, name) {
        let avaEl = document.createElement('img')
        avaEl.src = img
        let el = document.createElement('span');
        let tooltipEl = document.createElement('span')
        tooltipEl.textContent = name
        setStyle(tooltipEl, {...tooltipStyle, visibility: 'hidden', opacity: '0'})
        el.addEventListener("mouseover", () => {
            setStyle(tooltipEl, {...tooltipStyle, visibility: 'visible', opacity: '1'})
        });
        el.addEventListener("mouseleave", () => {
            setStyle(tooltipEl, {...tooltipStyle, visibility: 'hidden', opacity: '0'})
        });
        setStyle(el, avaStyle);
        el.appendChild(tooltipEl)
        el.appendChild(avaEl);

        return el;
    }

    setAvaList = (avatarList) => {
        avatarList.forEach(ava => {
            this.footerEl.append(this.createAvatarEl(ava.img, ava.name))
        });
    }
}

export default Task;