import {UseFetchOptions} from "#app";

export const useOvcApi = async (path: string, options: UseFetchOptions<any>) => {
    return (await useFetch(useRuntimeConfig().public.apiUrl + path, {
        ...options
    })).data.value
}
