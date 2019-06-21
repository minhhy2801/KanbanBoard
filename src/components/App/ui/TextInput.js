import { setStyle } from "../../../util/styleUtil";

class TextInput {
    constructor(style, title) {
        this.style = style;
        this.title = title;
    }

    render() {
        let border = document.createElement('div');
        let input = document.createElement('input');
        let title = document.createElement('p');
        input.type = 'text';
        title.textContent = this.title;
        setStyle(input, this.style);

        border.append(title);
        border.append(input);
        return border;
    }
}
export default TextInput;