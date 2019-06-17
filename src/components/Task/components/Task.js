let style = {
    taskStyle: {
        border: '1px solid black',
        width: '80%',
        padding:'2%',
        margin:'2%',
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
    constructor(numProgress, projectTitle, taskTitle, id){
        this.numProgress = numProgress;
        this.projectTitle = projectTitle;
        this.taskTitle = taskTitle;
        this.id = id;
    }

    render(){
        let taskEl = document.createElement('div');
        let linkDelete = document.createElement('a');

        taskEl.style = style.taskStyle;
        taskEl.textContent = "[" + this.numProgress + "%] Project Title: " +
                            this.projectTitle + '\n Task Name: ' +
                            this.taskTitle + '\n';
        taskEl.onclick = () => {
            window.open('/k/2/show#record=' + this.id);
        };

        linkDelete.style = style.linkDeleteStyle;
        linkDelete.textContent = 'X';
        linkDelete.onclick = () => {
            // this.onDelete(this.id);
            console.log("Delete task " + this.id);
        }

        taskEl.append('hr');
        taskEl.append(linkDelete);

        return taskEl;
    }
}

export default Task;