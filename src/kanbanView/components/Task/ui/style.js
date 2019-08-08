let taskStyleVN = {
    border: '1px solid #d4d4d4',
    width: '80%',
    padding: '2%',
    margin: '2%',
    marginLeft: '8%',
    minHeight: '6vh',
    backgroundColor: '#ffa39e',
    color: 'black'
}

let taskStyleJA = {
    border: '1px solid #d4d4d4',
    width: '80%',
    padding: '2%',
    margin: '2%',
    marginLeft: '8%',
    minHeight: '6vh',
    backgroundColor: '#bae7ff',
    color: 'black'
}

let taskStyleZH = {
    border: '1px solid #d4d4d4',
    width: '80%',
    padding: '2%',
    margin: '2%',
    marginLeft: '8%',
    minHeight: '6vh',
    backgroundColor: '#d9f7be',
    color: 'black'
}
let taskStyleOther = {
    border: '1px solid #d4d4d4',
    width: '80%',
    padding: '2%',
    margin: '2%',
    marginLeft: '8%',
    minHeight: '6vh',
    backgroundColor: '#efdbff',
    color: 'black'
}

let taskStyleDefault = {
    border: '1px solid #d4d4d4',
    width: '80%',
    padding: '2%',
    margin: '2%',
    marginLeft: '8%',
    minHeight: '6vh',
    color: 'black',
    backgroundColor: '#f5f5f5'
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
    taskStyleVN: taskStyleVN,
    taskStyleJA: taskStyleJA,
    taskStyleZH: taskStyleZH,
    taskStyleOther: taskStyleOther,
    taskStyleDefault: taskStyleDefault,
    floatLeft: floatLeft,
    linkDeleteStyle: linkDeleteStyle
}

export default style;
export { taskStyleVN, taskStyleJA, taskStyleDefault, taskStyleZH, taskStyleOther, linkDeleteStyle, floatLeft, taskDragStyle, taskDropStyle };