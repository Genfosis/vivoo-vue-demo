import { DETAIL_PAGE, HOME_PAGE, STAT_PREVIEW_PAGE } from "./route-name";

export const routes = [
    { name: HOME_PAGE, path: '/', component: () => import("@/views/HomePage.vue") },
    { name: STAT_PREVIEW_PAGE, path: '/stats/preview', component: () => import ("@/views/StatPreview.vue")},
    { name: DETAIL_PAGE, path: '/stats/:id/detail', component: () => import ("@/views/Detail.vue")}
]