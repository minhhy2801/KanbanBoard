(function () {
    "use strict";
    let url = window.location.href;
    if (url.includes('view=2068')) {

        kintone.events.on('app.record.index.show', function (event) {
            var dropTarget = document.querySelector(".drop-target");

            dropTarget.addEventListener('dragover', function (ev) {
                ev.preventDefault();
            });

            dropTarget.addEventListener('drop', function (ev) {
                ev.preventDefault();
                let target = ev.target;
                let hasTask = target.classList.contains('div--task--info');
                let srcId = ev.dataTransfer.getData("text");

                if (hasTask) {
                    let status = target.parentNode.previousElementSibling.firstElementChild.innerHTML.split(" ")[0];
                    if (status === '+') status = 'Todo';

                    target.parentNode.append(document.getElementById(srcId));
                    updateStatus(srcId, status);

                } else {
                    let status = target.firstElementChild.firstElementChild.innerHTML.split(" ")[0];
                    if (status === '+') status = 'Todo';

                    target.querySelectorAll('.div--task--state .div--task--container')[0].append(document.getElementById(srcId));
                    updateStatus(srcId, status);
                }
            });
        });

    }

    // function 
    function updateStatus(recordId, status) {
        let body = {
            app: 2,
            id: recordId,
            record: {
                txt_projectTitle: {},
                txt_taskTitle: {},
                rb_status: {},
                num_progress: {},
                rich_text_description: {},
                user_selection_assignee: {}
            }
        };

        getRecordById(recordId).then(respRecord => {
            let record = respRecord.record
            body.record.txt_projectTitle.value = record.txt_projectTitle.value;

            body.record.txt_taskTitle.value = record.txt_taskTitle.value;
            body.record.rb_status.value = status;

            if (status === 'Done') {
                body.record.num_progress.value = 100;
            } else {
                if (record.num_progress.value !== '100') {
                    body.record.num_progress.value = record.num_progress.value;
                } else {
                    body.record.num_progress.value = 90;
                }
            }

            body.record.rich_text_description.value = record.rich_text_description.value;
            body.record.user_selection_assignee.value = [{}]
            body.record.user_selection_assignee.value[0].code = record.user_selection_assignee.value[0].code;

            kintone.api(kintone.api.url('/k/v1/record', true), 'PUT', body).then(revision => {
                let states = ["Todo", "Implement", "Testing", "Done"];
                for (let i = 0; i < states.length; i++) {
                    getRecordsByStatus(states[i]).then(resp => {
                        document.getElementById('numOf' + states[i]).innerText = '(' + resp.totalCount + ')';
                        renderTask(recordId, body.record.num_progress.value, body.record.txt_projectTitle.value, body.record.txt_taskTitle.value);
                    }).catch(err => {
                        console.log(err);
                    });
                }
            }).catch(err => {
                console.log(err);
            });
        }).catch(err => {
            console.log(err);
        });
    }

    function getRecordById(recordId) {
        let body = { app: 2, id: recordId };
        return kintone.api(kintone.api.url('/k/v1/record', true), 'GET', body);
    }
    
    function getRecordsByStatus(status) {
        var queryStatus = 'rb_status in ("' + status + '")';
        var body = { app: 2, query: queryStatus, totalCount: true };

        return kintone.api(kintone.api.url('/k/v1/records', true), 'GET', body);
    }
    function renderTask(recordId, num_progress, txt_projectTitle, txt_taskTitle) {
        document.getElementById(recordId).innerText = "[" + num_progress + "%] Project Title: " +
            txt_projectTitle + '\n Task Name: ' +
            txt_taskTitle + '\n';

        var linkDeleteTask = document.createElement('a');
        linkDeleteTask.innerText = 'X';
        linkDeleteTask.className = 'link--delete--task';

        linkDeleteTask.onclick = function () { processDeleteTask(recordId) };
        document.getElementById(recordId).append(linkDeleteTask);
    }
})();