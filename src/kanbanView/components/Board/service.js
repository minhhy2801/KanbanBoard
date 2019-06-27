import { rb_StatusField, text_ProjectField, text_TaskField, num_ProgressField, rich_DescriptionField, assignee_SelectField } from "../../util/config";

export const getRecordByIdFromAPI = (recordId) => {
    let body = { app: kintone.app.getId(), id: recordId };
    return kintone.api(kintone.api.url('/k/v1/record', true), 'GET', body).then(resp => { return resp.record });
}

export const updateStatusFromAPI = (recordId, projecTitle, taskTitle, status, numProgress, description, userCode) => {
    let body = {
        app: kintone.app.getId(),
        id: recordId,
        record: {
            [text_ProjectField]: { value: projecTitle },
            [text_TaskField]: { value: taskTitle },
            [rb_StatusField]: { value: status },
            [num_ProgressField]: { value: numProgress },
            [rich_DescriptionField]: { value: description },
            [assignee_SelectField]: { value: [{ code: userCode }] }
        }
    };
    return kintone.api(kintone.api.url('/k/v1/record', true), 'PUT', body);
}

