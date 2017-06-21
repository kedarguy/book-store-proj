<template>
  <li>
    <h2>{{item.title}}</h2>
    <h3>{{item.quantity}}</h3>
    <button>+</button>
    <button>-</button>
  </li>
</template>

<script>
export default {
  name: 'cart-details',
  props: ['item']

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
