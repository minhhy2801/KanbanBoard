import {DESCRIPTION_INIT, rb_StatusField, text_ProjectField, text_TaskField, num_ProgressField, rich_DescriptionField, assignee_SelectField, KEY } from "../../util/config";

let config = kintone.plugin.app.getConfig(KEY);

export const createTaskFromAPI = (projectTitle, taskTitle) => {
    let body = {
        app: kintone.app.getId(),
        record: {
            [text_ProjectField]: { value: projectTitle },
            [text_TaskField]: { value: taskTitle },
            [rb_StatusField]: { value: config.todoField },
            [num_ProgressField]: { value: config.numProgess },
            [rich_DescriptionField]: { value: DESCRIPTION_INIT },
            [assignee_SelectField]: { value: [{ code: kintone.getLoginUser().code }] }
        }
    };

    return kintone.api(kintone.api.url('/k/v1/record', true), 'POST', body);
}
