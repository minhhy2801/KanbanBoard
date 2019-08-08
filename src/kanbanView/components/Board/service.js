import { text_ProjectField, text_TaskField, rich_DescriptionField, config } from "../../util/config";
import { appId, kintoneRecord } from "../../service";

export const getRecordByIdFromAPI = (recordId) => {
    return kintoneRecord.getRecord(appId, recordId).then(resp => { return resp.record })
}

export const updateStatusFromAPI = (recordId, projecTitle, taskTitle, status, description, userCode) => {
    let record = {
        [text_ProjectField]: { value: projecTitle },
        [text_TaskField]: { value: taskTitle },
        [config.statusCode]: { value: status },
        [rich_DescriptionField]: { value: description },
        [config.assigneeField]: { value: [{ code: userCode }] }
    }

    return kintoneRecord.updateRecordByID(appId, recordId, record)
}

