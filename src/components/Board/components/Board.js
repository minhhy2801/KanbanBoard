import Header from "./Header";
import ListTasks from "./ListTasks";
import CreateTaskModal from "../../App/components/CreateTaskModal";
import { setStyle } from "../../../util/style";


let style = {
    boardStyle: {
        border: '1px solid black',
        padding: '5px',
        marginLeft: '1%',
        width: '22%',
        marginTop: '10px',
        textAlign: 'center',
        minHeight: '30vh'
    }
}

class Board {
    constructor(listTasks, header, openModal) {
        this.listTasks = listTasks;
        this.header = header;
        this.openModal = openModal;
    }

    onClick() {
        if (!this.model) {
            let model = new CreateTaskModal(this.stateName);
            this.model = model;
            document.getElementById('app').appendChild(this.model.render())
        }
        this.model.isVisible(true);
    }
    
    render() {
        let board = document.createElement('div');
        setStyle(board, style.boardStyle);

        let headerEl = new Header(this.listTasks.length, this.header, this.onClick);
        let listTasks = new ListTasks(this.listTasks);

        board.append(headerEl.render());
        board.append(listTasks.render());

        return board;
    }
}

export default Board;