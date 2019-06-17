import Task from "../../Task/container";

let style = {
    listTasksStyle: {
        display: 'grid',
        width: '100%',
        maxHeight: '30vh',
        overflowY: 'scroll',
        textAlign: 'left'
    }
}


class ListTasks {
    constructor(listTasks) {
        this.listTasks = listTasks;
    }

    // viewTaskDetail = (taskId) => {
    //     console.log("View Task " + taskId)
    // }

    // deleteTask = (taskId) => {
    //     console.log("Delete Task " + taskId)
    // }

    render() {
        let listTasks = document.createElement('div');
        listTasks.style = style.listTasksStyle;
        this.listTasks.forEach(objTask => {
            let task = new Task(objTask.numProgress, objTask.projectTitle, objTask.taskTitle, objTask.id);
            listTasks.append(task.render());
        });
        return listTasks;
    }
}

export default ListTasks;