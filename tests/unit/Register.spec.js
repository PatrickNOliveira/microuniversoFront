import { shallowMount } from "@vue/test-utils";
import Register from '../../src/components/User/Register'

describe('Register.vue', () => {
  let wrapper

  beforeAll(() => {
    wrapper =  shallowMount(Register)
  })

  /************ Teste para garantir que existe um objeto com o id notFound dentro do component ******************/
  it('should be renders a element with register id', () => {
    const div = wrapper.find('#register')

    expect(div.exists()).toBeTruthy()
  })

  /************ Teste para garantir que o component está renderizando os dados corretos ******************/
  it('should be renders a correct data', () => {
    //Variáveis esperadas no component
    const expectData = [
      "user",
      "successMessage",
    ]

    expect(Object.keys(wrapper.vm.$data)).toMatchObject(expectData)
  })

  /************ Teste para garantir que o data user está renderizando um objeto vazio ******************/
  it('user component must render a empty user data', () => {

    expect(wrapper.vm.$data.user).toMatchObject({})

  })

})
