
import { App } from '@kintone/kintone-js-sdk'
export const kintoneApp = new App()
export const appId = kintone.app.getId()

export const getListViews = () => {
    return kintoneApp.getViews(appId).then((resp) => {
        return resp.views
    })
}

export const getFormFields = () => {
    return kintoneApp.getFormFields(appId).then((resp) => {
        return resp.properties
    });
}