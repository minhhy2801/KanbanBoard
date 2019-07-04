
let boardStyle = {
    border: '1px solid #d4d4d4',
    padding: '5px',
    marginLeft: '1%',
    width: '22%',
    marginTop: '10px',
    textAlign: 'center',
    minHeight: '30vh',
    backgroundColor: 'floralwhite'
}

let listTasksStyle = {
    display: 'grid',
    width: '100%',
    maxHeight: '30vh',
    overflowY: 'scroll',
    textAlign: 'left'
}

let btnNewTaskStyle = {
    float: 'right'
}

let headerStyle = {
    fontSize: '1.2em',
}

let divHeaderStyle = {
    borderBottom: '1px solid #d4d4d4'
}


let style = {
    boardStyle: boardStyle,
    listTasksStyle: listTasksStyle,
    btnNewTaskStyle: btnNewTaskStyle,
    headerStyle: headerStyle,
    divHeaderStyle: divHeaderStyle
}

export default style;
export {
    divHeaderStyle,
    headerStyle,
    boardStyle,
    listTasksStyle,
    btnNewTaskStyle
}