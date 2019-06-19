import { setStyle } from "../../../util/style";


let style = {
    taskStyle: {
        border: '1px solid black',
        width: '80%',
        padding: '2%',
        margin: '2%',
        marginLeft: '8%',
        minHeight: '10vh'
    },
    linkDeleteStyle: {
        float: 'right',
        color: '#aaa',
        fontSize: '20px',
        fontWeight: 'bold'
    }
}

class Task {
    constructor(numProgress, projectTitle, taskTitle, id) {
        this.numProgress = numProgress;
        this.projectTitle = projectTitle;
        this.taskTitle = taskTitle;
        this.id = id;
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
                deleteTaskFromAPI(recordId);
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

        setStyle(taskEl, style.taskStyle);

        taskEl.id = this.id;
        taskEl.innerText = '[' + this.numProgress + '%] Project Title: ' +
            this.projectTitle + '\n Task Name: ' +
            this.taskTitle + '\n';

        taskEl.onclick = () => {
            window.open('/k/2/show#record=' + this.id);
        };

        taskEl.addEventListener('dragstart', function (event) {
            event.dataTransfer.setData('text', event.target.id);
        })

        setStyle(linkDelete, style.linkDeleteStyle);
        linkDelete.textContent = 'X';
        linkDelete.onclick = () => {
            processDeleteTask(this.id);
        }

        taskEl.append(document.createElement('br'));
        taskEl.append(linkDelete);

        return taskEl;
    }

}

export default Task;