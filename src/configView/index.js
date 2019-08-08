import ConfigFrom from './components/ConfigForm/container'

const form = new ConfigFrom()

document.addEventListener('DOMContentLoaded', ()=>{
    const formContainer = document.getElementById('kanban_config')
    formContainer.append(form.render())
}, false);