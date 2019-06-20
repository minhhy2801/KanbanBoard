import ListBoards from './components/App/container'
import { APP_ID, GET_LIST_TASKS_BY_STATUS, LIST_STATUS } from './config';

function getRecordsByStatus(status) {
    let body = { app: APP_ID, query: GET_LIST_TASKS_BY_STATUS(status), totalCount: true };

    return kintone.api(kintone.api.url('/k/v1/records', true), 'GET', body);
}

let url = window.location.href;
if (url.includes('view=2062')) {

    kintone.events.on('app.record.index.show', function () {

        let boards = LIST_STATUS.map(status => {
            return getRecordsByStatus(status);
        })

        Promise.all(boards).then(resp => {
            let listBoards = new ListBoards(resp, false, LIST_STATUS)

            document.getElementById('app').append(listBoards.render());
        }).catch(error => {
            console.log(error);

        })
    });
}