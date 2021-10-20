<template>
	<!-- <b-button v-b-modal.modal-1>Launch demo modal</b-button> -->

	<b-modal 
		id="user-sign-in" 
		title="Select User" 
		hide-header-close 
		no-close-on-backdrop
	>
		<b-list-group>
			<b-list-group-item 
				v-for="user in users" 
				:key="user.id"
				@click="setActiveUser(user)"
			>
				<b-media 
					tag="div" 
					class="d-flex align-items-center user-list-item"
				>
					<template #aside>
						<b-avatar class="mr-3" variant="info"></b-avatar>
					</template>
					<h5 class="mt-0 mb-1">{{ user.name }}</h5>
					<p class="mb-0">

					</p>
				</b-media>
			</b-list-group-item>
		</b-list-group>
	</b-modal>

</template>
<script type="text/javascript">
	import { mapGetters } from 'vuex';
	export default { 
		computed: { 
			...mapGetters({ users: 'user/list' }),
		},
		methods: {
			async setActiveUser(user) { 
				await this.$store.dispatch('user/loadData', { user });
				this.$bvModal.hide('user-sign-in');
			}
		}
	}
</script>
<style lang="sass">

</style>