// Import Vue and the component being tested
import Vue from 'vue'
import Home from './index.vue'
// Here are some Jasmine 2.0 tests, though you can
// use any test runner / assertion library combo you prefer
describe('Home', () => {
  // Inspect the raw component options
  it('sets the correct default data', () => {
    expect(typeof Home.data).toBe('function')
    const defaultData = Home.data()
    expect(defaultData.items).toBe(null)
  })

})
