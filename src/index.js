import ListBoards from './components/App/container'

function getRecordsByStatus(status) {
    var queryStatus = 'rb_status in ("' + status + '")';
    var body = { app: 2, query: queryStatus, totalCount: true };

    return kintone.api(kintone.api.url('/k/v1/records', true), 'GET', body);
}

let url = window.location.href;
if (url.includes('view=2062')) {

    kintone.events.on('app.record.index.show', function () {

        let states = ["Todo", "Implement", "Testing", "Done"];

        let boards = states.map(status => {
            return getRecordsByStatus(status);
        })

        Promise.all(boards).then(resp => {
            console.log(resp);
            let listBoards = new ListBoards(resp, false, states)

            document.getElementById('app').append(listBoards.render());
        }).catch(error => {
            console.log(error);

        })
    });
}