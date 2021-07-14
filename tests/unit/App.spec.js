import { shallowMount } from "@vue/test-utils";
import App from "../../src/App";

/****************** Teste unitário para garantir que o app.vue está retornando uma instância vue****************/
describe('App.vue', () => {
  it('renders a Vue Component', () => {

    const wrapper = shallowMount(App)

    expect(wrapper.isVueInstance()).toBeTruthy()

  })
})
