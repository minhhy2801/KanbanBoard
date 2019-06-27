
export const getListViews = () => {
    let body = { app: kintone.app.getId() }

    return kintone.api(kintone.api.url('/k/v1/app/views', true), 'GET', body).then(resp => { return resp.views })
}

export const getFormFields = () => {
    let body = { app: kintone.app.getId() }
    
    return kintone.api(kintone.api.url('/k/v1/app/form/fields', true), 'GET', body).then(resp => { return resp.properties })
}