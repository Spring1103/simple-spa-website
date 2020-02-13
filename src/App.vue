<template lang="pug">
div#app
  div#common-message
    h1 SPA Website
    h2 for testing only
  router-view
</template>

<script lang="coffee">
export default
  name: 'app',
  data: () ->
    name: 'Hello World'
    todos: [ {id: 1, text: 'li 2'}, {id: 1, text: 'li 1'}, {id: 1, text: 'li 1'},]
    myInput: 'hello'
  methods:
    submit: ->
      console.log this.myInput
</script>

<style lang="stylus">
// ref: http://stylus-lang.com
body
  margin 0px
#app
  font-family Arial, sans-serif
  text-align: center
  color #2c3e50
  width 100vw
  height 100vh

#common-message
  margin-top 200px
  margin-bottom 100px

a
  display inline-block
  padding 1em

</style>