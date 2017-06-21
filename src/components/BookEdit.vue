<template>
  <section class="popup book-edit">
  
    <h1 v-if="book">Edit: {{book.title}}</h1>
    <h1 v-else>New Book</h1>
  
    <input type="text" v-model="bookToEdit.title" placeholder="Title" />
    <input type="text" v-model="bookToEdit.description" placeholder="Description" />
    <input type="number" v-model="bookToEdit.price" placeholder="Price" />
    <button @click="save">Save</button>
    <button @click="cancel">Cancel</button>
  </section>
</template>

<script>

export default {
  name: 'book-edit',
  props: ['book'],
  data() {
    return {
      bookToEdit: null
    }
  },
  created() {
    this.bookToEdit = Object.assign({}, this.book)
  },
  methods: {

    save() {
      console.log('Saving', this.bookToEdit)
      this.$emit('save', this.bookToEdit);
    },
    cancel() {
      console.log('Cancel')
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
