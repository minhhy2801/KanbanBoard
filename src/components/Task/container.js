import Task from './components/Task'

class TaskContainer {
    constructor(numProgress, projectTitle, taskTitle, id, onClick, onDelete) {
        this.numProgress = numProgress;
        this.projectTitle = projectTitle;
        this.taskTitle = taskTitle;
        this.id = id;
        this.onClick = onClick;
        this.onDelete = onDelete;
        this.task = new Task(this.numProgress, this.projectTitle, this.taskTitle, this.id, this.onClick, this.onDelete);
    }

    render() {
        return this.task.render();
    }

}

export default TaskContainer;