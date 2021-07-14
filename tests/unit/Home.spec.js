import { shallowMount } from "@vue/test-utils";
import Home from "../../src/components/Home/Home.vue";

/****************** Teste unitário para garantir que o app.vue está retornando uma instância vue****************/
describe('Home.vue', () => {
  let wrapper

  beforeAll(() => {
    wrapper =  shallowMount(Home)
  })

  it('renders a Vue Component', () => {

    expect(wrapper.isVueInstance()).toBeTruthy()

  })
})
