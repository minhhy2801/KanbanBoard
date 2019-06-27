import { rb_StatusField } from "./util/config";

export const createQueryForGetTasksByStatus = (status) => `${rb_StatusField} in ("${status}")`;

export const getRecordsByStatus = (status) => {
    let body = { app: kintone.app.getId(), query: createQueryForGetTasksByStatus(status), totalCount: true };
    return kintone.api(kintone.api.url('/k/v1/records', true), 'GET', body);
};
