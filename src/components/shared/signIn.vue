<template>
	<!-- <b-button v-b-modal.modal-1>Launch demo modal</b-button> -->

	<b-modal id="user-sign-in" title="Select User">
		<b-list-group>
			<b-list-group-item 
				v-for="user in users" 
				:key="user.id"
				@click="setActiveUser"
			>
				{{ user.name }}
			</b-list-group-item>
		</b-list-group>
	</b-modal>

</template>
<script type="text/javascript">
	import { ...mapGetters } from 'vuex';
	export default { 
		computed: { 
			...mapGetters({ users: 'user/list' });
		},
		methods: {
			async setActiveUser(user) { 
				await this.$store.dispatch('user/loadData', user);
			}
		}
	}
</script>
<style lang="sass">
	
</style>