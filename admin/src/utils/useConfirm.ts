import {useRootStore} from "../stores/rootStore";

export const useConfirm = (question: string) => {
    const confirm = useRootStore().confirm;

    return new Promise((resolve, reject) => {
        confirm.question = question;
        confirm.visible = true;
        confirm.onConfirm = () => {
            resolve(true);
            confirm.visible = false;
        };
        confirm.onCancel = () => {
            reject(false);
            confirm.visible = false;
        }
    })
}
