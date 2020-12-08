<template>
  <div>
    <h1>{{title}}</h1>
    <ul>
      <book-item v-for='book in books' :key='book.id' :book='book'></book-item>
    </ul>
    <br><hr>
    <book-form @addBook='appendBook'></book-form>
  </div>
</template>

<script>
import BookItem from "./BookItem";
import BookForm from "./BookForm";

export default {
  name: "BookList",
  data() {
    return {
      title: "All Books",
      states: ["Want to Read", "Read", "Reading"],
      books: [
        { title: "Self-Reliance", author: "Ralph Waldo Emerson",
        finishedReading: true},
        { title: "American Gods", author: "Neil Gaiman", 
        finishedReading: false},
        { title: "Amusing Ourselves to Death", author: "Neil Postman",
        finishedReading: true}
      ]
    };
  },
  components: {
    BookItem,
    BookForm
  },
  methods: {
    appendBook(bookData) {
      this.books.push({ 
        title: bookData.bookTitle, author: bookData.bookAuthor, 
        finishedReading: bookData.finishedReading });
    }
  }
};
</script>

<style>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: block;
  margin: 0 10px;
}
</style>
