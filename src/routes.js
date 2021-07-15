import Home from "./components/Home/Home";
import Redirect from "./components/Redirect/Redirect";
import notFound from './components/404/notFound'


export const routes = [
  //Rota de teste, excluir antes de mandar pra prod
  {
    path: '/',
    component: Home,
    alias: '/home'
  },
  {
    path: '/:code',
    component: Redirect
  },
  {
    path: '/404',
    component: notFound,
    name: 'notFound'
  }
];
