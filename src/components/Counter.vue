<template>
    <div>
      {{ count }}
      <button @click="increment">increment</button>
    </div>
</template>

<script>
export default {
  name: 'counter',
  data () {
    return {
      count: 0
    }
  },
  methods: {
    increment () {
      this.count++
    }
  }
}
</script>

<style scoped>
</style>
