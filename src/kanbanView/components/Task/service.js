import { kintoneRecord, appId } from "../../service";

export const deleteTaskFromAPI = (recordId) => {
    return kintoneRecord.deleteRecords(appId, [recordId])
}
