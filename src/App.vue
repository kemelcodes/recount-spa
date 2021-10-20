<template>
  <div id="app">
    <Nav/>
    <router-view/>
  </div>
</template>

<script>

import Nav from '@/components/shared/Nav.vue';

export default {
  name: 'App',
  components: {
    Nav
  },
  async created () { 
    await this.$store.dispatch('user/loadList', { id: null });
  }
}
</script>

<style>

</style>
