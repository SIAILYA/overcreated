import {useRootStore} from "../stores/rootStore";
import {h} from "vue";

interface messageOptions {
    duration: number,
}

export const useMessage = () => {
    const messages = useRootStore().messages;

    const _show = (message: string, options: messageOptions, type: "success" | "danger") => {
        const msg = h("div", {
            class: "alert alert-" + type,
            key: Math.random() * 1000
        }, message);

        messages.unshift(msg);

        setTimeout(() => {
            messages.splice(messages.indexOf(msg), 1);
        }, options.duration);
    }

    const success = (message: string, options: messageOptions = {duration: 3000}) => {
        _show(message, options, "success");
    }

    const danger = (message: string, options: messageOptions = {duration: 3000}) => {
        _show(message, options, "danger");
    }

    return {success, danger}
}
