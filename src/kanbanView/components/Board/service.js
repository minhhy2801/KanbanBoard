import { rb_StatusField, text_ProjectField, text_TaskField, num_ProgressField, rich_DescriptionField, assignee_SelectField } from "../../util/config";
import { appId, kintoneRecord } from "../../service";

export const getRecordByIdFromAPI = (recordId) => {
    return kintoneRecord.getRecord(appId, recordId).then(resp => { return resp.record })
}

export const updateStatusFromAPI = (recordId, projecTitle, taskTitle, status, numProgress, description, userCode) => {
    let record = {
        [text_ProjectField]: { value: projecTitle },
        [text_TaskField]: { value: taskTitle },
        [rb_StatusField]: { value: status },
        [num_ProgressField]: { value: numProgress },
        [rich_DescriptionField]: { value: description },
        [assignee_SelectField]: { value: [{ code: userCode }] }
    }

    return kintoneRecord.updateRecordByID(appId, recordId, record)
}

