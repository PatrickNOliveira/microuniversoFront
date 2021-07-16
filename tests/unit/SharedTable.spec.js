import { shallowMount } from "@vue/test-utils";
import Table from "../../src/components/Shared/Table";
describe('Table.vue', () => {
  let wrapper

  beforeAll(() => {
    wrapper =  shallowMount(Table)
  })

  /************ Teste para garantir que existe um objeto com o id table dentro do component ******************/
  it('should be renders a element with table id', () => {
    const div = wrapper.find('#table')

    expect(div.exists()).toBeTruthy()
  })

  /************ Teste para garantir que o component está renderizando as props corretas ******************/
  it('should be renders a correct data', () => {
    //Variáveis esperadas no component
    const expectData =[
      "items",
      "searchLabel",
      "headers",
      "search",

    ]

    expect(Object.keys(wrapper.vm.$props)).toMatchObject(expectData)
  })


})
