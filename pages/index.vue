<template lang="html">

</template>

<script>
export default {
  beforeMount () {
    if (this.$route.path === '/') this.$router.push('/resolutions')
  }
}
</script>

<style lang="css">
</style>
