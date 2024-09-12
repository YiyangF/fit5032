import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import { userAuthenticate } from './authenticate'
import FirebaseSigninView from '@/views/FirebaseSigninView.vue'
import FirebaseRegisterView from '@/views/FirebaseRegisterView.vue'
import AdminView from '@/views/AdminView.vue'
import AddBookView from '@/views/AddBookView.vue'
import BookListView from '@/views/BookListView.vue'
import EditBookView from '@/views/EditBookView.vue'
import DeleteBookView from '@/views/DeleteBookView.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: AdminView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/FireLogin',
    name: 'FireLogin',
    component: FirebaseSigninView
  },
  {
    path: '/FireRegister',
    name: 'FireRegister',
    component: FirebaseRegisterView
  },
  {
    path: '/addbook',
    name: 'AddBook',
    component: AddBookView
  },
  {
    path: '/booklist',
    name: 'BookList',
    component: BookListView
  },
  {
    path: '/editbook',
    name: 'EditBook',
    component: EditBookView
  },
  {
    path: '/deletebook',
    name: 'DeleteBook',
    component: DeleteBookView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  // Perform logic before every route change
  const { isAuthenticated } = userAuthenticate()
  if (to.name === 'About') {
    if (isAuthenticated.value) { 
      next();
    } else {
      alert("Please login");
      next({ name: 'Login' });
    }
  } else {
    next();
  }
});

export default router;
