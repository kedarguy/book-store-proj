<template>
  <section class="popup book-details">
    testing 123
  </section>
</template>

<script>
export default {
  name: 'test',
  props: ['book'],
  methods: {
    closeMe() {
      console.log('close me!');
      this.$emit('close');
    },
    requestNextBook() {
      console.log('Requesting Next');
      this.$emit('next');
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
