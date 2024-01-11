import { HOME_PAGE } from "./route-name";

export const routes = [
    { name: HOME_PAGE, path: '/', component: () => import("@/views/HomePage.vue") },
]