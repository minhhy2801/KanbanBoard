import { LIST_STATUS, VIEW_ES6_ID } from './util/config';
import { getRecordsByStatus } from './service';
import ListBoardContainer from './components/App/container';

kintone.events.on('app.record.index.show', function (e) {
    if (e.viewId === VIEW_ES6_ID) {
        let boards = LIST_STATUS.map(status => {
            return getRecordsByStatus(status);
        })

        kintone.Promise.all(boards).then(resp => {
            let listBoards = new ListBoardContainer(resp, false, LIST_STATUS);

            document.getElementById('app').append(listBoards.render());
        }).catch(error => {
            console.log(error);
        })
    }

});
