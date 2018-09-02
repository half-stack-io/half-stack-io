import store from 'simple-vuex'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let s = store()
  .addKey('dark', true)
  .addKey('menu', false)

s.mutations['toggle-dark'] = (state) => {state.dark = !state.dark}

export default s.simplify()