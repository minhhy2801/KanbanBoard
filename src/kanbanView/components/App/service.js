import { DESCRIPTION_INIT, text_ProjectField, text_TaskField, rich_DescriptionField, config } from "../../util/config";
import { kintoneRecord, appId } from "../../service";


export const createTaskFromAPI = (projectTitle, taskTitle) => {
    let record = {
        [text_ProjectField]: { value: projectTitle },
        [text_TaskField]: { value: taskTitle },
        [config.statusCode]: { value: config.todoField },
        [rich_DescriptionField]: { value: DESCRIPTION_INIT },
        [config.assigneeField]: { value: [{ code: kintone.getLoginUser().code }] }
    }
    return kintoneRecord.addRecord(appId, record).then(resp => { return resp.id })
}
