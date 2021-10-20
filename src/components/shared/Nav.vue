<template>
	<div>
  <b-navbar toggleable="lg" type="dark" variant="secondary">
    <b-navbar-brand href="#">Recount App</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/home" >Home</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right v-if="isAuth">
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>{{ user.name }}</em>
          </template>
          <b-dropdown-item @click="changeUser">Change User</b-dropdown-item>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Settings</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <signIn/>
</div>
</template>
<script>

  import { mapGetters } from 'vuex';
  import signIn from '@/components/shared/signIn';

	export default { 
    components: { signIn },

    computed: { 
      ...mapGetters({ user: 'user/active'}),

      isAuth () { 
        return this.user != null ? true : false;
      }
    },

    methods: { 
      changeUser () { 
        this.$bvModal.show('user-sign-in');
      }
    }
	}
</script>
<style lang="scss">
	
</style>