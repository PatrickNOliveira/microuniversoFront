import Home from "./components/Home/Home";
import Redirect from "./components/Redirect/Redirect";
import notFound from './components/notFound/notFound'
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";


export const routes = [
  //Rota de teste, excluir antes de mandar pra prod
  {
    path: '/',
    component: Home,
    alias: '/home',
    name: 'home'
  },
  {
    path: '/notFound',
    component: notFound,
    name: 'notFound'
  },
  {
    path: '/login',
    component: Login,
    name: 'login'
  },
  {
    path: '/register',
    component: Register,
    name: 'register'
  },
  {
    path: '/:code',
    component: Redirect
  },
];
