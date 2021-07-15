import Home from "./components/Home/Home";
import Redirect from "./components/Redirect/Redirect";
import notFound from './components/notFound/notFound'
import Login from "./components/Login/Login";
import Register from "./components/User/Register";
import Links from "./components/Links/Links";
import EditUser from "./components/User/EditUser";


export const routes = [
  //Rota de teste, excluir antes de mandar pra prod
  {
    path: '/',
    component: Home,
    alias: '/home',
    name: 'home',
    meta: {
      public: true
    }
  },
  {
    path: '/notFound',
    component: notFound,
    name: 'notFound',
    meta: {
      public: true
    }
  },
  {
    path: '/login',
    component: Login,
    name: 'login',
    meta: {
      public: true
    }
  },
  {
    path: '/register',
    component: Register,
    name: 'register',
    meta: {
      public: true
    }
  },
  {
    path: '/links',
    component: Links,
    name: 'links'
  },
  {
    path: '/user/edit',
    component: EditUser,
    name: 'user.edit'
  },
  {
    path: '/:code',
    component: Redirect,
    meta: {
      public: true
    }
  }

];
