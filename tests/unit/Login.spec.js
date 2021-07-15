import { shallowMount } from "@vue/test-utils";
import Login from '../../src/components/Login/Login'

describe('Login.vue', () => {
  let wrapper

  beforeAll(() => {
    wrapper =  shallowMount(Login)
  })

  /************ Teste para garantir que existe um objeto com o id notFound dentro do component ******************/
  it('should be renders a element with register id', () => {
    const div = wrapper.find('#login')

    expect(div.exists()).toBeTruthy()
  })

  /************ Teste para garantir que o component está renderizando os dados corretos ******************/
  it('should be renders a correct data', () => {
    //Variáveis esperadas no component
    const expectData = ["user", "emailRules", "passwordRules"]

    expect(Object.keys(wrapper.vm.$data)).toMatchObject(expectData)
  })

  /************ Teste para garantir que o data user está renderizando um objeto vazio ******************/
  it('user component must render a empty user data', () => {

    expect(wrapper.vm.$data.user).toMatchObject({})

  })

  /************ Teste para garantir que o component está renderizando os métodos corretos ******************/
  it('should be renders a correct data', () => {
    //Variáveis esperadas no component
    const expectData = ["user", "emailRules", "passwordRules"]

    expect(Object.keys(wrapper.vm.methods)).toMatchObject(expectData)
  })

})
