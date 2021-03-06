import ListBoards from './ui/ListBoards'
import { createTaskFromAPI } from './service';
import { message_success, text_message_add_success, title_message_fail, message_error } from '../../util/configMessage';
import * as firebase from 'firebase/app'
import 'firebase/database'
import { KEY, text_ProjectField, text_TaskField, num_ProgressField, rb_StatusField } from '../../util/config';
import { NotifyPopup } from '@kintone/kintone-ui-component/src/js';

let config = kintone.plugin.app.getConfig(KEY);

class ListBoardContainer {
    constructor(listBoards, triggerModal, status) {
        this.listBoards = listBoards;
        this.triggerModal = triggerModal;
        this.status = status;
        this.listBoardsApp = null
        if (window.firebase) {
            this.writeListTasks()
            this.getListTasks()
        } else {
            this.listBoardsApp = new ListBoards(this.listBoards, this.triggerModal, this.status, this.createTask);
        }

    }

    writeListTasks = () => {
        try {
            this.status.forEach((state, index) => {
                let records = this.listBoards[index].records;
                records.forEach((item) => {
                    let taskData = {
                        id: item.$id.value,
                        projectTitle: item[text_ProjectField].value,
                        taskTitle: item[text_TaskField].value,
                        numProgress: item[num_ProgressField].value,
                        status: item[rb_StatusField].value
                    }
                    firebase.database().ref(`app/${kintone.app.getId()}/tasks/${item.$id.value}`).set(taskData)
                });
            });

        } catch (error) {
            console.log(error);

        }
    }

    writeNewTask = (id, projectTitle, taskTitle) => {
        let taskData = {
            id: id,
            projectTitle: projectTitle,
            taskTitle: taskTitle,
            numProgress: config.numProgess,
            status: config.todoField
        };

        firebase.database().ref(`app/${kintone.app.getId()}/tasks/${id}`).set(taskData)
        return taskData;
    }

    getListTasks = () => {
        let map = {}
        let tasks = []
        let ref = firebase.database().ref(`app/${kintone.app.getId()}/tasks/`);
        ref.on("value", (resp) => {
            this.status.forEach((state) => {
                resp.forEach(item => {
                    if (item.val().status == state) tasks.push(item.val())
                })

                map[state] = tasks
                tasks = []
            })

            this.listBoards = Object.keys(map).map(key => { return map[key]; })
            this.listBoardsApp = new ListBoards(this.listBoards, this.triggerModal, this.status, this.createTask).render();
            document.getElementById('app').innerHTML = ''
            document.getElementById('app').append(this.listBoardsApp);
        });
    }
    
    createTask = async (inputProject, inputTask) => {
        let body = document.getElementsByTagName("body")[0];
        try {
            let id = await createTaskFromAPI(inputProject, inputTask);
            let msg = new NotifyPopup({ text: text_message_add_success, type: message_success })
            body.append(msg.render())

            if (window.firebase) {
                this.writeNewTask(id, inputProject, inputTask)
            } else {
                window.location.reload(true);
            }
        } catch (error) {
            let msg = new NotifyPopup({ text: title_message_fail, type: message_error })
            body.append(msg.render())
        }
    }

    render() {
        return this.listBoardsApp.render();
    }
}

export default ListBoardContainer;