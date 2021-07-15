import {mount, shallowMount} from "@vue/test-utils";
import Home from "../../src/components/Home/Home.vue";

jest.mock('axios', () => ({
  get: Promise.resolve('value'),
  post: Promise.resolve('value')
}))

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
    const expectData = ["valid", "url", "urlRules"]

    expect(Object.keys(wrapper.vm.$data)).toMatchObject(expectData)
  })



  /**************************** Teste para garantir que o data URL inicia vazio ***********************/
  it('url data should be start empty', () => {
    expect(wrapper.vm.$data.url).toBe("")
  })


  /********************************** Testes para o botão de enviar URL ***************************************/
  //Teste para garantir que o botão foi renderizado
  it('shoul be render a sendButton', async () => {

    const button = await wrapper.find('#sendButton')
    expect(button.exists()).toBe(true)

  })

})
