import Task from "../../Task/container";
import { setStyle } from "../../../util/style";

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

    render() {
        let listTasks = document.createElement('div');
        setStyle(listTasks, style.listTasksStyle);

        this.listTasks.forEach(objTask => {
            let task = new Task(objTask.num_progress.value, objTask.txt_projectTitle.value, objTask.txt_taskTitle.value, objTask.$id.value);
            listTasks.append(task.render());
        });
        return listTasks;
    }
}

export default ListTasks;