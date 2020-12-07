<template>
<ul>
  <li>{{book.title}}:{{book.author}}</li>
</ul>
</template>
<script>
  export default {
    name: 'BookItem',
    props: ['book'],
  }
</script>
<style lang="stylus" scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
}
</style>