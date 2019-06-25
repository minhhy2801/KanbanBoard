import { setStyle } from "../../../util/styleUtil";

class Button {
    constructor(btnName, onClick, style) {
        this.btnName = btnName;
        this.onClick = onClick;
        this.style = style;
    }

    render() {
        let btn = document.createElement('button');
        btn.textContent = this.btnName;
        setStyle(btn, this.style);

        btn.onclick = () => { this.onClick(); };
        return btn;
    }
}
export default Button;