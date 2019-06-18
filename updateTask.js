(function () {
    "use strict";

    let url = window.location.href;
    if (url.includes('view=2068')) {

        kintone.events.on('app.record.index.show', function (event) {
            var dropTarget = document.querySelector(".drop-target");
            var draggables = document.querySelectorAll(".div--task--info");

            draggables.forEach(item => {
                item.addEventListener("dragstart", function (ev) {

                    ev.dataTransfer.setData("text", ev.target.id);
                });
            })

            dropTarget.addEventListener('dragover', function (ev) {

                ev.preventDefault();
            });

            dropTarget.addEventListener('drop', function (ev) {
                ev.preventDefault();
                let target = ev.target;
                let hasTask = target.classList.contains('div--task--info');
                let srcId = ev.dataTransfer.getData("text");

                if (hasTask) {
                    target.parentNode.append(document.getElementById(srcId));
                } else {
                    target.querySelectorAll('.div--task--state .div--task--container')[0].append(document.getElementById(srcId))
                }

            });
        });
    }

    function updateStatus(id, status) {
        let body = { app: 2, id, records: { rb_status: { value: status } } }

        return kintone.api(kintone.api.url('/k/v1/record', true), 'PUT', body);
    }

})();