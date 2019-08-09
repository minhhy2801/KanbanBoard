import { kintoneRecord, appId } from "../../service";

export const deleteTaskFromAPI = (recordId) => {
    return kintoneRecord.deleteRecords(appId, [recordId])
}

export const getUserByCode = (code) => {
    let body = {
        codes: code
    };
    return kintone.api(kintone.api.url('/v1/users', true), 'GET', body).then(resp => {
        return resp.users
    });
}