import { setStyle } from "../../../util/style";
import { DRAG_ID } from "../../../config";
import { taskStyle, linkDeleteStyle } from "./style";

class Task {
    constructor(numProgress, projectTitle, taskTitle, id, header) {
        this.numProgress = numProgress;
        this.projectTitle = projectTitle;
        this.taskTitle = taskTitle;
        this.id = id;
        this.header = header;
    }

    deleteTaskFromAPI(recordId) {
        var body = { app: 2, ids: [recordId] };

        return kintone.api(kintone.api.url('/k/v1/records', true), 'DELETE', body);
    }

    processDeleteTask(recordId) {
        window.event.stopImmediatePropagation();
        swal({
            title: "Are you sure?",
            text: "Do you want to delete this task",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((isDelete) => {
            if (isDelete) {
                this.deleteTaskFromAPI(recordId);
                swal("Your task has been deleted!", {
                    icon: "success",
                }).then(value => {
                    window.location.reload(true);
                });
            }
        });
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
            this.processDeleteTask(this.id);
        }

        taskEl.append(document.createElement('br'));
        taskEl.append(linkDelete);

        return taskEl;
    }

}

export default Task;