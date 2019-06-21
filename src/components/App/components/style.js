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


let style = {
    modalStyle: modalStyle,
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
        marginRight: '5%',
        marginLeft: '30%',
        height: '50px',
        marginTop: '2%'

    },
    btnCancelStyle: {
        backgroundColor: 'gray',
        border: '1px solid white',
        color: 'white',
        height: '50px',
    },
    closeSpanStyle: {
        color: '#aaa',
        float: 'right',
        fontSize: '28px',
        fontWeight: 'bold'
    },
    closeSpanStyleHover: {
        color: 'black',
        textDecoration: 'none',
        cursor: 'pointer'
    },
    modalHideStyle: {
        display: 'none'
    },
    modalShowStyle: {
        display: 'block'
    },
    inputWidthStyle: {
        width: '100%',
    }
}


export default style;
export {modalStyle};

