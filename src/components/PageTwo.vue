<template lang="pug">
div.hello
  h3 This is page one.
  button(@click="$router.go(-1)") BACK
</template>

<script lang="coffee">
export default
  name: 'PageTwo'
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
h1, h2
  font-weight normal
</style>