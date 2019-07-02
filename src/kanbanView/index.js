import { KEY } from './util/config';
import { getRecordsByStatus } from './service';
import ListBoardContainer from './components/App/container';
import * as firebase from 'firebase/app'
import { firebaseConfig } from './util/configFirebase';

let config = kintone.plugin.app.getConfig(KEY)

let configFirebase = firebaseConfig()


kintone.events.on('app.record.index.show', (e) => {
    if (e.viewId == config.viewID) {
        let arr = config.listStatus.split(",")
        let boards = arr.map(status => {
            return getRecordsByStatus(status);
        })

        kintone.Promise.all(boards).then(resp => {
            let firebaseRef = firebase.database().ref(".info/connected");
            firebaseRef.on('value', (connectedSnap) => {
                if (connectedSnap.val() == true) {
                    window.firebase = true;
                } else {
                    window.firebase = false;
                }
                let listBoards = new ListBoardContainer(resp, false, arr);
                if (!window.firebase) {
                    document.getElementById('app').append(listBoards.render());
                }
            });
        }).catch(error => {
            console.log(error);
        })
    }

});



