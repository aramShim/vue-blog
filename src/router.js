import { createWebHistory, createRouter } from "vue-router";
import List from './components/ListBlog.vue';
import Home from './components/ComponentMain.vue';
import Detail from './components/DetailView.vue';
import Author from './components/DetailAuthor.vue';
import Comment from './components/DetailComment.vue';
const routes = [
  {
    path: "/list", //순서가 위일 수록 우선순위
    component: List,
  },
  {
    path: "/",
    component: Home,
  },
  {
    path: "/detail/:id", //아무 문자나 들어오면
    //파라미터에 정규식을 쓸수도 있다!
    //'/detail/:id(\\d)'
    component: Detail,
    children:[
      {
        path: "author",
        component: Author,
      },
      {
        path: "comment",
        component: Comment,
      },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 