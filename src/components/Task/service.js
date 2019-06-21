
export const deleteTaskFromAPI = (recordId) => {
    var body = { app: kintone.app.getId(), ids: [recordId] };
    return kintone.api(kintone.api.url('/k/v1/records', true), 'DELETE', body);
}
