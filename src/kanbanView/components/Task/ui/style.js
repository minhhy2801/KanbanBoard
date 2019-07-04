let taskStyle = {
    border: '1px solid #d4d4d4',
    width: '80%',
    padding: '2%',
    margin: '2%',
    marginLeft: '8%',
    minHeight: '6vh',
    backgroundColor: 'lightgoldenrodyellow',
}

let taskDragStyle = {
    boxShadow: 'inset 0 0 5px #eaba84'
}
let taskDropStyle = {
    boxShadow: 'none'
}

let linkDeleteStyle = {
    float: 'right',
}
let floatLeft = {
    float: 'left',
}
let style = {
    taskStyle: taskStyle,
    floatLeft: floatLeft,
    linkDeleteStyle: linkDeleteStyle
}

export default style;
export { taskStyle, linkDeleteStyle, floatLeft, taskDragStyle, taskDropStyle };