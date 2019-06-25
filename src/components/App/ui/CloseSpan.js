import { setStyle } from "../../../util/styleUtil";

class CloseSpan {
    constructor(closeText, style, onFocus, onMouseOver, onClick, modal) {
        this.closeText = closeText;
        this.style = style;
        this.onFocus = onFocus;
        this.onMouseOver = onMouseOver;
        this.onClick = onClick;
        this.modal = modal;
    }

    render() {
        let closeSpan = document.createElement('span');
        setStyle(closeSpan, this.style);

        closeSpan.textContent = this.closeText;
        
        closeSpan.onmouseover = () => {
            setStyle(closeSpan, this.onMouseOver);
        };

        closeSpan.onfocus = () => {
            setStyle(closeSpan, this.onFocus);
        }

        closeSpan.onclick = () => {
            setStyle(this.modal, this.onClick);
        }

        return closeSpan;
    }
}

export default CloseSpan;