import { getRecordsByStatus } from './service';
import ListBoardContainer from './components/App/container';
import { config } from './util/config';

kintone.events.on('app.record.index.show', (e) => {
    if (e.viewId == config.viewID) {
        let arr = config.listStatus.split(",")
        let boards = arr.map(status => {
            return getRecordsByStatus(status);
        })
        kintone.Promise.all(boards).then(resp => {
            let listBoards = new ListBoardContainer(resp, false, arr);
            document.getElementById('app').innerHTML = ''
            document.getElementById('app').append(listBoards.render());
        }).catch(error => {
            console.log(error);
        })
    }

});



