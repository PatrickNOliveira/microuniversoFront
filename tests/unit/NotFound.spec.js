import { shallowMount } from "@vue/test-utils";
import notFound from '../../src/components/notFound/notFound'

describe('NotFound.vue', () => {
  let wrapper

  beforeAll(() => {
    wrapper =  shallowMount(notFound)
  })

  /************ Teste para garantir que existe um objeto com o id notFound dentro do component ******************/
  it('should be renders a element with notfound id', () => {
    const div = wrapper.find('#notFound')

    expect(div.exists()).toBeTruthy()
  })

})
