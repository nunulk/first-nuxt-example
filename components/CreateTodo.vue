<template>
  <div>
    <input v-model="body">
    <button class="button--green" @click="createTodo(body)">Create</button>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      body: ""
    }
  },
  methods: {
    createTodo (body) {
      this.create(body)
      this.body = ""
    },
    ...mapMutations({
      create: 'todos/add'
    })
  }
}
</script>
<style>
  input {
    padding: 8px 0;
  }
  button {
    margin-left: 8px;
  }
</style>
