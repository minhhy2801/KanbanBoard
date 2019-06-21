import ListBoards from './components/App/container'
import { LIST_STATUS, VIEW_ES6_ID } from './config';
import { getRecordsByStatus } from './service';

kintone.events.on('app.record.index.show', function (e) {
    if (e.viewId === VIEW_ES6_ID) {
        let boards = LIST_STATUS.map(status => {
            return getRecordsByStatus(status);
        })

        kintone.Promise.all(boards).then(resp => {
            let listBoards = new ListBoards(resp, false, LIST_STATUS);

            document.getElementById('app').append(listBoards.render());
        }).catch(error => {
            console.log(error);
        })
    }

});
