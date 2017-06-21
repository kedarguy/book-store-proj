<template>
  <div class="container">
  
    <section class="book-list-cont">
      <book-list @addToCart="addBookToCart" @removeFromCart="removeBookFromCart">
      </book-list>
    </section>
    <section class="cart-list-cont" v-if="cartItems.length > 0">
      <ul>
        <cart-details v-for="currItem in cartItems" :item="currItem">
        </cart-details>
      </ul>
  
      <cart-total></cart-total>
  
    </section>
  
  </div>
</template>

<script>

import BookList from '@/components/BookList'
import CartDetails from '@/components/CartDetails'
import CartTotal from '@/components/CartTotal'
import CartService from '@/api/cart.service'

export default {
  name: 'app',
  components: {
    BookList,
    CartDetails,
    CartTotal
  },
  created() {
    this.cartItems = CartService.getCartItems();
    console.log(this.cartItems);
  },
  data() {
    return {
      cartItems: null,

    }
  },
  methods: {
    addBookToCart(book) {
      CartService.addToCart(book);

    },
    removeBookFromCart(book) {
      CartService.substractFromCart(book);
    }
  }
}

</script>

<style>

.container {
  display: flex;
  flex-direction: row;
}
</style>
