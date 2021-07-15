import { shallowMount } from "@vue/test-utils";
import Links from "../../src/components/Links/Links";
import axios from 'axios'

describe('Links.vue', () => {
  let wrapper

  beforeAll(() => {
    wrapper =  shallowMount(Links, { mocks: { $http: axios } })
  })

  /************ Teste para garantir que existe um objeto com o id notFound dentro do component ******************/
  it('should be renders a element with links id', () => {
    const div = wrapper.find('#links')

    expect(div.exists()).toBeTruthy()
  })

  /************ Teste para garantir que o component está renderizando os dados corretos ******************/
  it('should be renders a correct data', () => {
    //Variáveis esperadas no component
    const expectData = ["search", "urls", "headers"]

    expect(Object.keys(wrapper.vm.$data)).toMatchObject(expectData)
  })

  /************ Teste para garantir que o data user está renderizando um objeto vazio ******************/
  it('links component must render a correct headers data', () => {

    const expectedData = [
      {
        text: 'Url encurtada',
        align: 'start',
        value: 'tinyUrl',
      },
      { text: 'Destino',
        value: 'destiny'
      }
    ]
    expect(wrapper.vm.$data.headers).toMatchObject(expectedData)

  })
})
