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

let avaStyle = {
    width: '36px',
    height: '36px',
    display: 'inline-block',
    float: 'right',
    margin: '1px',
    position: 'relative'
}

let teamStyle = {
    width: '36px',
    height: '36px',
    display: 'inline-block',
    borderRadius: '50%',
    overflow: 'hidden',
    float: 'left',
    backgroundColor: '#d9d9d9',
    color: 'black',
    textAlign: 'center',
    lineHeight: '36px',
    margin: '1px'
}

let tooltipStyle = {
    backgroundColor: '#555',
    color: '#fff',
    textAlign: 'center',
    borderRadius: '6px',
    padding: '2px 5px',
    position: 'absolute',
    bottom: '125%',
    left: '50%',
    marginLeft: '-50%',
    transition: 'opacity 0.3s'
}

let style = {
    tooltipStyle: tooltipStyle,
    teamStyle: teamStyle,
    avaStyle: avaStyle,
    taskStyleVN: taskStyleVN,
    taskStyleJA: taskStyleJA,
    taskStyleZH: taskStyleZH,
    taskStyleOther: taskStyleOther,
    taskStyleDefault: taskStyleDefault,
    floatLeft: floatLeft,
    linkDeleteStyle: linkDeleteStyle
}

export default style;
export { tooltipStyle, teamStyle, taskStyleVN, avaStyle, taskStyleJA, taskStyleDefault, taskStyleZH, taskStyleOther, linkDeleteStyle, floatLeft, taskDragStyle, taskDropStyle };