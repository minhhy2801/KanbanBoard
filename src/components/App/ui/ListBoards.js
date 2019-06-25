import { setStyle } from "../../../util/styleUtil";
// import { DRAG_ID } from "../../../util/config";
import { listBoardsStyle } from "./style";
import BoardContainer from "../../Board/container";
import { getRecordsByStatus } from "../../../service";

class ListBoards {
    constructor(listBoards, triggerModal, status, createTask) {
        this.listBoards = listBoards;
        this.triggerModal = triggerModal;
        this.status = status;
        this.createTask = createTask;
    }

    // onDragStart = async (state, self) => {
    //     console.log(state);
    //     try {
    //         // console.log(this);
    //         let records = await getRecordsByStatus(state);
    //         // console.log(records.totalCount);
    //         if (records.totalCount > 0) {
    //             self.setTotal(records.totalCount - 1);
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    render() {
        let listBoardEl = document.createElement('div');

        setStyle(listBoardEl, listBoardsStyle);

        this.status.forEach((state, index) => {
            let board = new BoardContainer(this.listBoards[index].records, state, this.triggerModal, this.createTask);
            listBoardEl.append(board.render());
        });

        listBoardEl.addEventListener('dragover', function (ev) {
            ev.preventDefault();
        });

        return listBoardEl;
    }

}

export default ListBoards;