import Home from "./components/Home/Home";
import Redirect from "./components/Redirect/Redirect";
import notFound from './components/notFound/notFound'


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
    path: '/notFound',
    component: notFound,
    name: 'notFound'
  }
];
