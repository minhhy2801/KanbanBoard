import Task from './components/Task/components/Task'

let task = new Task();
kintone.events.on('app.record.index.show', function(event) {
    console.log(11111111111);
    document.getElementById('app').appendChild(task.render());
    return event;
});