import { shallowMount } from "@vue/test-utils";
import Form from "../../src/components/Shared/Form";
describe('Form.vue', () => {
  let wrapper

  beforeAll(() => {
    wrapper =  shallowMount(Form)
  })

  /************ Teste para garantir que existe um objeto com o id form dentro do component ******************/
  it('should be renders a element with form id', () => {
    const div = wrapper.find('#form')

    expect(div.exists()).toBeTruthy()
  })

  /************ Teste para garantir que o component está renderizando as props corretas ******************/
  it('should be renders a correct data', () => {
    //Variáveis esperadas no component
    const expectData =[
      "clearForm",
      "typeMessage",
      "message",
      "btnText",
      "sendFunction"
    ]

    expect(Object.keys(wrapper.vm.$props)).toMatchObject(expectData)
  })


})
