import { createWebHistory, createRouter } from "vue-router";
import ImgDetail from './components/ImgDetail.vue'
import ImgItems from './components/ImgItems.vue'

const routes = [
  { path: '/', component: ImgItems },
  { path: '/:id', component: ImgDetail }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;