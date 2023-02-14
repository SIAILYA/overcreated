import {useThemeStore} from "@/stores/themeStore";
import type {Variant} from "~/data/types/theme";
import {storeToRefs} from "pinia";

export default defineNuxtRouteMiddleware((to) => {
    const setupVariant = (to.meta?.variant || "green") as Variant;

    const {setVariant} = useThemeStore()
    const {variant} = storeToRefs(useThemeStore())

    setVariant(setupVariant)
})
