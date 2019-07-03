import ListBoards from './ui/ListBoards'
import { createTaskFromAPI } from './service';
import Message from '../Common/Message';
import { message_success, title_message_success, text_message_add_success, title_message_fail, text_message_add_fail, message_error, button_close } from '../../util/configMessage';
import * as firebase from 'firebase/app'
import 'firebase/database'
import { KEY, text_ProjectField, text_TaskField, num_ProgressField, rb_StatusField } from '../../util/config';

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
            this.listBoardsApp = new ListBoards(this.listBoards, this.triggerModal, this.status, this.createTask, this.onDragStart);
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

    getListTasks = () => {
        let map = {}
        let tasks = []
        let ref = firebase.database().ref(`app/${kintone.app.getId()}/tasks/`);
        ref.on("value", (resp) => {
            this.status.forEach((state) => {
                resp.forEach(item => {
                    if (item.val().status == state) {
                        tasks.push(item.val())
                    }

                });
                map[state] = tasks
                tasks = []
            })
            this.listBoards = Object.keys(map).map(key => {
                return map[key];
            })
            this.listBoardsApp = new ListBoards(this.listBoards, this.triggerModal, this.status, this.createTask, this.onDragStart).render();
            document.getElementById('app').innerHTML = ''
            document.getElementById('app').append(this.listBoardsApp);
        });
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

    createTask = async (inputProject, inputTask) => {
        try {
            let id = await createTaskFromAPI(inputProject, inputTask);
            let msg = new Message(title_message_success, text_message_add_success, message_success, button_close, false).render();
            msg.then(val => {
                if (window.firebase) {
                    this.writeNewTask(id, inputProject, inputTask)
                } else {
                    window.location.reload(true);
                }
            });
        } catch (error) {
            let msg = new Message(title_message_fail, text_message_add_fail, message_error, button_close, false).render();
        }
    }

    render() {
        return this.listBoardsApp.render();
    }


}

export default ListBoardContainer;