import Teste from "./components/Teste";
import Home from "./components/Home/Home";
import TodosOsUsuarios from "./components/Usuarios/TodosOsUsuarios";
import createUser from "./components/Usuarios/createUser";


export const routes = [
  //Rota de teste, excluir antes de mandar pra prod
  {
    path: '/teste',
    component: Teste,
    name: 'teste'
  },
  {
    path: '/',
    component: Home,
  },
  {
    path: '/home',
    component: Home,
    name: 'home'
  },
  {
    path: '/user',
    component: TodosOsUsuarios,
    name: 'user'
  },
  {
    path: '/user/create',
    component: createUser,
    name: 'user.create'
  }
];
