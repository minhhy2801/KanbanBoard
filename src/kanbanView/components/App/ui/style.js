// CreateTaskModal

let modalStyle = {
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
}

let modalContentStyle = {
    backgroundColor: '#fefefe',
    margin: '15% auto',
    padding: '20px',
    border: '1px solid #888',
    width: '20%'
}

let btnCreateStyle = {
    backgroundColor: 'brown',
    border: '1px solid white',
    color: 'white',
    marginRight: '5%',
    marginLeft: '30%',
    height: '50px',
    marginTop: '2%'
}

let btnCancelStyle = {
    backgroundColor: 'gray',
    border: '1px solid white',
    color: 'white',
    height: '50px',
}

let closeSpanStyle = {
    color: '#aaa',
    float: 'right',
    fontSize: '28px',
    fontWeight: 'bold'
}

let closeSpanStyleHover = {
    color: 'black',
    textDecoration: 'none',
    cursor: 'pointer'
}

let modalHideStyle = {
    display: 'none',
}

let modalShowStyle = {
    display: 'block',
}

let inputWidthStyle = {
    width: '100%',
}

// ListBoards
let listBoardsStyle = {
    display: 'flex',
    width: '100%',
    alignItems: 'stretch'
}


let style = {
    modalStyle: modalStyle,
    modalContentStyle: modalContentStyle,
    btnCreateStyle: btnCreateStyle,
    btnCancelStyle: btnCancelStyle,
    closeSpanStyle: closeSpanStyle,
    closeSpanStyleHover: closeSpanStyleHover,
    modalHideStyle: modalHideStyle,
    modalShowStyle: modalShowStyle,
    inputWidthStyle: inputWidthStyle,
    listBoardsStyle: listBoardsStyle
}


export default style;
export {
    modalStyle,
    modalContentStyle,
    btnCreateStyle,
    btnCancelStyle,
    closeSpanStyle,
    closeSpanStyleHover,
    modalHideStyle,
    modalShowStyle,
    inputWidthStyle,
    listBoardsStyle
};



