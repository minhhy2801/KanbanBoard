
import { App, Record } from '@kintone/kintone-js-sdk'
import { rb_StatusField } from "./util/config";

export const kintoneApp = new App()
export const kintoneRecord = new Record()
export const appId = kintone.app.getId()



export const createQueryForGetTasksByStatus = (status) => `${rb_StatusField} in ("${status}")`;

export const getRecordsByStatus = (status) => {
    return kintoneRecord.getRecords(appId, createQueryForGetTasksByStatus(status), [], true)
};
