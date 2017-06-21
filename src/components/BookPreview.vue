<template>
  <li class="book-preview">
    <h2>{{book.title}}</h2>
    <img src="http://via.placeholder.com/250x150">
    <h3>${{book.price}}</h3>
    <button @click.stop="editBook">&#9998;</button>
    <button @click.stop="deleteBook">x</button>
    <button @click.stop="addBookToCart">+</button>
    <button @click.stop="removeBookFromCart">-</button>
  </li>
</template>

<script>
import BookService from '@/api/book.service'

export default {
  name: 'book-preview',
  props: ['book'],
  methods: {
        editBook(){
            console.log('Request Edit');
            this.$emit('edit');
        },
        deleteBook(){
            console.log('Request Delete');
            this.$emit('delete');
        },
        addBookToCart(){
            console.log('Request Add To Cart');
            this.$emit('addToCart');
        },
        removeBookFromCart(){
            console.log('Request remove From Cart');
            this.$emit('removeFromCart');
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
