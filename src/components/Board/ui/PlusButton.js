import { setStyle } from "../../../util/styleUtil";

class PlusButton {
    constructor(text, style, onClick) {
        this.text = text;
        this.style = style;
        this.onClick = onClick;
    }

    render() {
        let btnNewTaskEl = document.createElement('button');

        setStyle(btnNewTaskEl, this.style);
        btnNewTaskEl.textContent = this.text;

        btnNewTaskEl.onclick = () => { this.onClick() };
        return btnNewTaskEl;
    }

}

export default PlusButton;