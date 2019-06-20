import Task from './components/Task'

class TaskContainer {
    constructor(numProgress, projectTitle, taskTitle, id, header) {
        this.numProgress = numProgress;
        this.projectTitle = projectTitle;
        this.taskTitle = taskTitle;
        this.id = id;
        this.header = header
        this.task = new Task(this.numProgress, this.projectTitle, this.taskTitle, this.id, this.header);
    }

    render() {
        return this.task.render();
    }

}

export default TaskContainer;