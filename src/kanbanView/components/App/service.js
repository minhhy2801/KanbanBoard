import { NUM_PROGRESS_INIT, TODO_STATUS, DESCRIPTION_INIT } from "../../util/config";

export const createTaskFromAPI = (projectTitle, taskTitle) => {
    let body = {
        app: kintone.app.getId(),
        record: {
            txt_projectTitle: { value: projectTitle },
            txt_taskTitle: { value: taskTitle },
            rb_status: { value: TODO_STATUS },
            num_progress: { value: NUM_PROGRESS_INIT },
            rich_text_description: { value: DESCRIPTION_INIT },
            user_selection_assignee: { value: [{ code: kintone.getLoginUser().code }] }
        }
    };

    return kintone.api(kintone.api.url('/k/v1/record', true), 'POST', body);
}
