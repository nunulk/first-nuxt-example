import axios from 'axios'

export const state = () => ({
  list: []
})

export const mutations = {
  add (state, text) {
    state.list.push({
      body: text,
      done: false
    })
  },
  remove (state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle (state, todo) {
    todo.done = !todo.done
  },
  setList (state, list) {
    state.list = list
  }
}

export const actions = {
  async fetchList ({commit}) {
    const res = await this.$axios.$get('/api/todos')
    commit("setList", res)
  }
}
