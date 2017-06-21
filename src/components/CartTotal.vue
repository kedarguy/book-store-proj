<template>
  <div class="cart-total">
    {{this.cartTotal}}
  </div>
</template>

<script>
import CartService from '../api/cart.service'

export default {
  name: 'cart-total',
  created() {
    cartTotal = CartService.getCartTotal();
  },
  data() {
    return {
      cartTotal: null,

    }

  }
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
