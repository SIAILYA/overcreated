import {defineStore} from "pinia";
import type {Variant} from "~/data/types/theme";
import {useColorMode} from "#imports";

export const useThemeStore = defineStore("theme", {
    state: () => ({
        variant: "green" as Variant,
        theme: useColorMode(),
        accentColor: ""
    })
})
