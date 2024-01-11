import { HOME_PAGE, STAT_PREVIEW_PAGE } from "./route-name";

export const routes = [
    { name: HOME_PAGE, path: '/', component: () => import("@/views/HelloWorld.vue") },
    { name: STAT_PREVIEW_PAGE, path: '/stats/preview', component: () => import ("@/views/StatPreview.vue")}
]