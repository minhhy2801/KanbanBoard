(function () {
    "use strict";
    
    let url = window.location.href;
    if (url.includes('view=2068')) {

        kintone.events.on('app.record.index.show', function (event) {
            var btnOpenModal = document.getElementById("btnOpenModalNewTask");
            var modalNewTask = document.getElementById("divCreateModal");
            var closeModalNewTask = document.getElementById("closeCreateModal");
            var btnSubmitCreateTask = document.getElementById("btnCreateTask");

            btnOpenModal.onclick = function () {
                modalNewTask.style.display = "block";
            }

            closeModalNewTask.onclick = function () {
                modalNewTask.style.display = "none";
            }

            window.onclick = function (event) {
                if (event.target == modalNewTask) {
                    modalNewTask.style.display = "none";
                }
            }

            btnSubmitCreateTask.onclick = function () {
                var txtProjectTitle = document.getElementsByName("txtProjectTitle")[0].value;
                var txtTaskTitle = document.getElementsByName("txtTaskTitle")[0].value;
                createTask(txtProjectTitle, txtTaskTitle).then(resp => {
                    swal({
                        title: "Success!",
                        text: "Your task added in todo list",
                        icon: "success",
                        button: "Close",

                    }).then(value => {
                        window.location.reload(true);
                    });
                    modalNewTask.style.display = "none";

                }).catch(err => {
                    swal({
                        title: "Fail!",
                        text: " Check task information and try again!",
                        icon: "error",
                        button: "Close",
                    });
                });

            }
        })
    }

    function createTask(projectTitle, taskTitle) {
        let body = setATask(projectTitle, taskTitle);

        return kintone.api(kintone.api.url('/k/v1/record', true), 'POST', body);
    }

    function setATask(projectTitle, taskTitle) {
        let body = {
            app: 2,
            record: {
                txt_projectTitle: {},
                txt_taskTitle: {},
                rb_status: {},
                num_progress: {},
                rich_text_description: {},
                user_selection_assignee: {}
            }
        };

        body.record.txt_projectTitle.value = projectTitle;
        body.record.txt_taskTitle.value = taskTitle;
        body.record.rb_status.value = "Todo"
        body.record.num_progress.value = 1
        body.record.rich_text_description.value = '<p>aa</p>'

        body.record.user_selection_assignee.value = [{}]
        body.record.user_selection_assignee.value[0].code = kintone.getLoginUser().code;
        return body;
    }

})();