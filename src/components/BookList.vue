<template>
  <section v-if="books">
    <h2>We have {{books.length}} Books</h2>
    <button @click="isCreateMode=true">+</button>
    <ul>
      <book-preview v-for="currBook in books" 
                    @click.native="selectBook(currBook)" 
                    @edit="editBook(currBook)" 
                    @delete="deleteBook(currBook)" 
                    @addToCart="addBookToCart(currBook)" 
                    @removeFromCart="removeBookFromCart(currBook)" 
                    :book="currBook">
      </book-preview>
    </ul>
    <book-details v-if="selectedBook" @close="resetSelected" @next="selectNext" :book="selectedBook">
    </book-details>
  
    <book-edit v-if="editedBook || isCreateMode" :book="editedBook" @save="saveBook">
    </book-edit>
  
  </section>
</template>

<script>
import BookService from '../api/book.service'
import CartService from '../api/cart.service'
import BookPreview from '@/components/BookPreview'
import BookDetails from '@/components/BookDetails'
import BookEdit from '@/components/BookEdit'

export default {
  name: 'book-list',
  created() {

    BookService.getBooks().then(books => this.books = books)
  },
  data() {
    return {
      books: null,
      selectedBook: null,
      editedBook: null,
      isCreateMode: false
    }
  },
  components: {
    BookPreview,
    BookDetails,
    BookEdit,
  },
  methods: {
    selectBook(book) {
      this.selectedBook = book;
    },
    resetSelected() {
      this.selectedBook = null;
    },
    selectNext() {
      this.selectedBook = bookService.getNext(this.selectedBook);
    },
    editBook(book) {
      console.log('Editing the book', book)
      this.editedBook = book;
    },
    deleteBook(book) {
      bookService.deleteBook(book);
    },
    addBookToCart(book) {
      console.log(book);
      this.$emit('addToCart', book);
    },
    removeBookFromCart(book) {
      this.$emit('removeFromCart', book);
    },
    saveBook(book) {
      var ids = this.books.map((book) => book.id);
      var maxId = Math.max(...ids);
      BookService.saveBook(book);
      book.id = maxId + 1;
      this.editedBook = null;
      this.isCreateMode = false;
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


//  @click.native="selectBook(currBook)" 
//                     @edit="editBook(currBook)"
//                     @delete="deleteBook(currBook)"
//                     @addToCart="addBookToCart(currBook)"
//                     @removeFromCart="removeBookFromCart(currBook)"
//                     :book="currBook">