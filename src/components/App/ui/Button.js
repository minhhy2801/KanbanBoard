import { setStyle } from "../../../util/styleUtil";

class Button {
    constructor(text, onClick, style) {
        this.text = text;
        this.onClick = onClick;
        this.style = style;
    }

    render() {
        let btn = document.createElement('button');
        btn.textContent = text;
        setStyle(btn, this.style);
        btn.onClick = this.onClick;
        return btn;
    }
}
export default Button;