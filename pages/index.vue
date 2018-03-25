<template>
  <section class="container">
    <div class="row">
      <h1 class="title">
        TODO
      </h1>
    </div>
    <div class="row">
      <div class="card">
        <div class="card-body">
          <TodoList :items="todos"></TodoList>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TodoList from '~/components/TodoList.vue'

export default {
  components: {
    TodoList
  },
  head () {
    return {
      title: "Welcome"
    }
  },
  computed: {
    todos () { return this.$store.state.todos.list }
  }
}
</script>

<style>
.container {
  margin: 15px;
}
.row {
  margin-bottom: 30px;
}
.card {
  border: 1px solid #ccc;
  border-radius: 4px;
}
.card > * {
  padding: 16px;
}
.card-header {
  border-bottom: 1px solid #ccc;
}
.card-footer {
  border-top: 1px solid #ccc;
}
.list-unstyled {
  list-style: none;
}
.todo-body {
  margin-left: 8px;
}
</style>
