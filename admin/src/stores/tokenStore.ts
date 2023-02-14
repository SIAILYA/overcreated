import {defineStore} from "pinia";
import {axiosInstance, parseJwt} from "../data/network";

type tokenDataType = { login: string, iat: number, exp: number }

export const useTokenStore = defineStore("token", {
    state: () => ({
        token: null as null | string,
        tokenData: {} as tokenDataType
    }),
    actions: {
        async setToken(tokenValue: string): Promise<void | Error> {
            return new Promise((resolve, reject) => {
                try {
                    this.tokenData = parseJwt(tokenValue)
                } catch (e: any) {
                    reject(new Error("Invalid JWT: " + e.message))
                }

                this.token = tokenValue
                axiosInstance.defaults.headers.common['Authorization'] = tokenValue
                localStorage.setItem("token", tokenValue)

                resolve()
            })
        },
        checkSavedToken(): Promise<void | Error> {
            return new Promise<void | Error>((resolve, reject) => {
                const savedToken = localStorage.getItem("token")

                if (savedToken && parseJwt(savedToken).exp > Date.now() / 1000) {
                    this.tokenData = parseJwt(savedToken)
                    axiosInstance.defaults.headers.common['Authorization'] = savedToken
                    resolve()
                } else {
                    localStorage.removeItem("token")
                    reject(new Error("JWT is expire"))
                }
            })
        }
    },
    getters: {
        expireAt(state) {
            return state.tokenData.exp * 1000
        }
    }
})
