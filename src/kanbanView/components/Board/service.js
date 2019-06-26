export const getRecordByIdFromAPI = (recordId) => {
    let body = { app: kintone.app.getId(), id: recordId };
    return kintone.api(kintone.api.url('/k/v1/record', true), 'GET', body).then(resp => { return resp.record });
}

export const updateStatusFromAPI = (recordId, projecTitle, taskTitle, status, numProgress, description, userCode) => {
    let body = {
        app: kintone.app.getId(),
        id: recordId,
        record: {
            txt_projectTitle: { value: projecTitle },
            txt_taskTitle: { value: taskTitle },
            rb_status: { value: status },
            num_progress: { value: numProgress },
            rich_text_description: { value: description },
            user_selection_assignee: { value: [{ code: userCode }] }
        }
    };
    return kintone.api(kintone.api.url('/k/v1/record', true), 'PUT', body);
}

