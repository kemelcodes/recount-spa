<template>
  <div id="app">
    <Nav/>
    <router-view/>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
import Nav from '@/components/shared/Nav.vue';

export default {
  name: 'App',
  computed: {
    ...mapGetters({ user: 'user/active' }),
    isAuth () { 
      return this.user != null ? true : false;
    }
  },
  components: {
    Nav
  },
  async created () { 
    await this.$store.dispatch('user/loadList', { id: null });

    if(!this.isAuth) { 
      this.$bvModal.show('user-sign-in');
    }
  }
}
</script>

<style>

</style>
