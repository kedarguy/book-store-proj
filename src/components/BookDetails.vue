<template>
  <section class="popup book-details">
    <button @click="closeMe">x</button>
    <h1>Details of: {{book.title}}</h1>
    <img src="http://via.placeholder.com/250x150">
    <h3>\${{book.price}}</h3>
    <p>{{book.description}}</p>
    <button @click="requestNextBook">Next > </button>
  </section>
</template>

<script>
export default {
  name: 'book-details',
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
