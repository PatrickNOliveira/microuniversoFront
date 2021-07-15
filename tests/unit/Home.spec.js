import { shallowMount } from "@vue/test-utils";
import Home from "../../src/components/Home/Home.vue";

describe('Home.vue', () => {
  let wrapper

  beforeAll(() => {
    wrapper =  shallowMount(Home)
  })

  /********************** Teste para garantir que existe o input de url no home.vue **********************/
  it('renders a url input', () => {

    expect(wrapper.find('input')).toBeTruthy()
  })

  /*********************** Teste para garantir que todas as variáveis foram setadas ***********************/
  it('url data should be start empty', () => {
    //Variáveis esperadas no component
    const expectData = ["url", "urlRules", "valid"]
    expect(Object.keys(wrapper.vm.$data)).toBe(expectData)
  })

  /**************************** Teste para garantir que o data URL inicia vazio ***********************/
  it('url data should be start empty', () => {
    expect(wrapper.vm.$data.url).toBe("")
  })

})
