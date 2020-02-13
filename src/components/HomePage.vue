<template lang="pug">
div.hello
  h3 This is home page
  div
    button(@click="$router.push('page-one')") GO TO PAGE ONE
    button(@click="$router.push('page-two')") GO TO PAGE TWO
</template>

<script lang="coffee">
export default
  name: 'HomePage'
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
h1, h2
  font-weight normal
button 
  margin-left 50px
  margin-right 50px
</style>