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
    constructor() {

    }

    render(){
        let modal = document.createElement('div');
        let modalContent = document.createElement('div');
        let closeSpan = document.createElement('span');
        let btnCreateTask = document.createElement('button');
        let titleAddTask = document.createElement('h1');

        modal.style = style.modalStyle;
        modalContent.style = style.modalContentStyle;
        btnCreateTask.style = style.btnSumbitCreateStyle;
        closeSpan.style = style.closeSpanStyle;
        closeSpan.onmouseover = () => {
            closeSpan.style = style.closeSpanStyleHover;
        };

        closeSpan.onfocus = () => {
            closeSpan.style = style.closeSpanStyleHover;
        }

        return;
    }

}


export default CreateTaskModal;