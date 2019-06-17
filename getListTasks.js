(function() {
    "use strict";

    kintone.events.on('app.record.index.show', function(event) {
        let states = ["Todo", "Implement", "Testing", "Done"];

        for (let i = 0; i < states.length; i++) {
            getRecordsByStatus(states[i]).then(resp => {
                // console.log(resp);
                setTaskOnBoards(resp.totalCount, resp.records, i, 'numOf' + states[i]);
            }).catch(err => {
                console.log(err);
            });
        }
    });

    function setTaskOnBoards(totalRecords, records, index, idTitle) {
        for (let i = 0; i < totalRecords; i++) {
            var taskDivEl = document.createElement('div');
            var linkDeleteTask = document.createElement('a');

            taskDivEl.className = 'div--task--info';
            taskDivEl.innerText = "[" + records[i].num_progress.value + "%] Project Title: " +
                records[i].txt_projectTitle.value + '\n Task Name: ' +
                records[i].txt_taskTitle.value + '\n';

            linkDeleteTask.innerText = 'X';
            linkDeleteTask.className = 'link--delete--task';

            taskDivEl.onclick = function() { viewDetailTask(records[i].$id.value) };
            linkDeleteTask.onclick = function() { deleteTask(records[i].$id.value) };

            taskDivEl.appendChild(linkDeleteTask);
            document.getElementsByClassName('div--task--container')[index].appendChild(taskDivEl);
        }
        document.getElementById(idTitle).innerText = '(' + totalRecords + ')';
    }

    function viewDetailTask(recordId) {
        window.open('/k/2/show#record=' + recordId);
    }

    function deleteTask(recordId) {
        window.event.stopImmediatePropagation();
        swal({
                title: "Are you sure?",
                text: "Do you want to delete this task",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Your task has been deleted!", {
                        icon: "success",
                    });
                } else {

                }
            });
        console.log('delete task ' + recordId);
    }

    /**
     * Call REST API
     */
    function getRecordsByStatus(status) {
        var queryStatus = 'rb_status in ("' + status + '")';
        var body = { app: 2, query: queryStatus, totalCount: true };

        return kintone.api(kintone.api.url('/k/v1/records', true), 'GET', body);
    }

})();