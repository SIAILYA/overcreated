// @ts-ignore
const BACKEND_PORT = import.meta.env.VITE_PORT || 5088
// @ts-ignore
export const BACKEND = import.meta.env.VITE_BACKEND || `http://localhost:${BACKEND_PORT}`
export const API = "/api/"
export const BACK_API = BACKEND + API
