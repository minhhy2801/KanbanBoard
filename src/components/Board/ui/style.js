
let boardStyle = {
    border: '1px solid black',
    padding: '5px',
    marginLeft: '1%',
    width: '22%',
    marginTop: '10px',
    textAlign: 'center',
    minHeight: '30vh',
}

let listTasksStyle = {
    display: 'grid',
    width: '100%',
    maxHeight: '30vh',
    overflowY: 'scroll',
    textAlign: 'left'
}

let btnNewTaskStyle = {
    float: 'right',
    backgroundColor: 'grey',
    border: '1px solid white',
    color: 'white',
    width: '30px',
    height: '30px'
}

let style = {
    boardStyle: boardStyle,
    listTasksStyle: listTasksStyle,
    btnNewTaskStyle: btnNewTaskStyle
}

export default style;
export {
    boardStyle,
    listTasksStyle,
    btnNewTaskStyle
}