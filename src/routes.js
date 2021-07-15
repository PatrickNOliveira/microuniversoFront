import Home from "./components/Home/Home";


export const routes = [
  //Rota de teste, excluir antes de mandar pra prod
  {
    path: '/',
    component: Home,
    alias: '/home'
  }
];
