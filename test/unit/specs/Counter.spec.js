import Vue from 'vue'
import Counter from '../../../src/components/Counter'

describe('Counter.vue', () => {
  it('Counter.vue', () => {
    const Constructor = Vue.extend(Counter)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('button').textContent)
      .to.equal('increment')
  })
})
