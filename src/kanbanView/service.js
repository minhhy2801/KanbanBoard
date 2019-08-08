
import { App, Record } from '@kintone/kintone-js-sdk'
import { config } from "./util/config";

export const kintoneApp = new App()
export const kintoneRecord = new Record()
export const appId = kintone.app.getId()

export const createQueryForGetTasksByStatus = (status) => `${config.statusCode} in ("${status}")`;

export const getRecordsByStatus = (status) => {
    return kintoneRecord.getAllRecordsByQuery(appId, createQueryForGetTasksByStatus(status), [], true).then((rsp) => {
        return rsp
    })
};
