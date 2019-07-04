import { KEY } from './util/config';
import { getRecordsByStatus } from './service';
import ListBoardContainer from './components/App/container';
import * as firebase from 'firebase/app'
import 'firebase/database'

let config = kintone.plugin.app.getConfig(KEY)
let configFirebase = {
    apiKey: config.apiKeyFirebase,
    authDomain: config.authDomainFirebase,
    databaseURL: config.dbUrlFirebase,
};

firebase.initializeApp(configFirebase);

kintone.events.on('app.record.index.show', (e) => {
    if (e.viewId == config.viewID) {
        let arr = config.listStatus.split(",")
        let boards = arr.map(status => {
            return getRecordsByStatus(status);
        })

        kintone.Promise.all(boards).then(resp => {
            let firebaseRef = firebase.database().ref(".info/connected");
            firebaseRef.on('value', (connectedSnap) => {
                let checkedConnect = connectedSnap.val()
                if (checkedConnect == true && JSON.parse(config.acceptFirebase) == true) {
                    window.firebase = true;
                    let listBoards = new ListBoardContainer(resp, false, arr);
                } else {
                    window.firebase = false;
                    let listBoards = new ListBoardContainer(resp, false, arr);
                    document.getElementById('app').innerHTML = ''
                    document.getElementById('app').append(listBoards.render());
                }
            });
        }).catch(error => {
            console.log(error);
        })
    }

});



