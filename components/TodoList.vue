<template>
  <div class="card-body">
    <ul class="list-unstyled">
      <li v-for="todo in items" :key="todo.id" :class="{ [$style.done]: todo.done }">
        <label>
          <input type="checkbox" :checked="todo.done" @change="toggle(todo)">
          <span class="todo-body">{{ todo.body }}</span>
        </label>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapMutations, mapActions } from 'vuex'

export default {
  components: {
    CreateTodo
  },
  data () {
    return {
    }
  },
  props: ['items'],
  mounted () {
    this.fetchList()
  },
  methods: {
    ...mapMutations({
      toggle: 'todos/toggle'
    }),
    ...mapActions({
      fetchList: 'todos/fetchList'
    })
  }
}
</script>
<style module>
.listItem {
  padding: 8px 0;
}
.done {
  text-decoration: line-through;
  color: #999;
}
</style>
