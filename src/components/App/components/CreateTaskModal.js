let style = {
    modalStyle: {
        display: 'none',
        position: 'fixed',
        zIndex: '1',
        left: '0',
        top: '0',
        width: '100%',
        height: '100%',
        overflow: 'auto',
        backgroundColor: 'rgb(0, 0, 0)',
        backgroundColor: 'rgba(0, 0, 0, 0.4)'
    },
    modalContentStyle: {
        backgroundColor: '#fefefe',
        margin: '15% auto',
        padding: '20px',
        border: '1px solid #888',
        width: '20%'
    },
    btnSumbitCreateStyle: {
        backgroundColor: 'brown',
        border: '1px solid white',
        color: 'white',
        height: '50px'
    },
    closeSpanStyle: {
        color: '#aaa',
        float: 'right',
        fontSize: '28px',
        fontWeight: 'bold'
    }, closeSpanStyleHover: {
        color: 'black',
        textDecoration: 'none',
        cursor: 'pointer'
    }
}

class CreateTaskModal {
    constructor(allowCreate) {
        this.allowCreate = allowCreate;
    }

    render() {
        let modal = document.createElement('div');
        let modalContent = document.createElement('div');
        let closeSpan = document.createElement('span');
        let btnCreateTask = document.createElement('button');
        let titleAddTask = document.createElement('h1');
        let titleTask = document.createElement('p');
        let inputTaskName = document.createElement('input');
        let titleProject = document.createElement('p');
        let inputProjectName = document.createElement('input');

        modal.style = style.modalStyle;
        modalContent.style = style.modalContentStyle;
        btnCreateTask.style = style.btnSumbitCreateStyle;
        closeSpan.style = style.closeSpanStyle;

        titleAddTask.textContent = 'Add New Task';
        titleProject.textContent = 'Project Title:';
        inputProjectName.name = 'txtProjectTitle';
        inputProjectName.type = 'text';

        titleTask.textContent = 'Task Title:';
        inputTaskName.name = 'txtTaskTitle';
        inputTaskName.type = 'text';

        closeSpan.onmouseover = () => {
            closeSpan.style = style.closeSpanStyleHover;
        };

        closeSpan.onfocus = () => {
            closeSpan.style = style.closeSpanStyleHover;
        }

        modalContent.append(closeSpan);
        modalContent.append(titleAddTask);
        modalContent.append(titleProject);
        modalContent.append(inputProjectName);
        modalContent.append(titleTask);
        modalContent.append(inputTaskName);
        modalContent.append(btnCreateTask);
        modal.append(modalContent);
        return modal;
    }

}


export default CreateTaskModal;