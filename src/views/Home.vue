<template>
	<b-container>
		<h3 class="mt-4 mb-4">{{user.name}}'s Family</h3>
		<b-row>
			<b-col lg="4">
				<b-card>
					<ul class="list-unstyled">
						<b-media 
							tag="li"
							v-for="relative in relatives"
							:key="`relative-${relative.id}`"
							@click="setSelected(relative)"
							class="d-flex align-items-center user-list-item mb-2"
						>
							<template #aside>
								<b-img blank blank-color="#abc" width="64" alt="placeholder"></b-img>
							</template>
							<h5 class="mt-0 mb-1">{{ relative.name }}</h5>
							<p class="mb-0">

							</p>
						</b-media>
					</ul>
				</b-card>
			</b-col>
			<b-col lg="8">
				<b-row>
					<b-col lg="12">
						<h4>{{ Name }}'s profile</h4>
					</b-col>
					<b-col lg="6">
						<label>Hometown</label>
						<span>{{ Hometown }}</span>
					</b-col>
					<b-col lg="6">
						<label>Birth Year</label>
						<span>{{ Birth }}</span>
					</b-col>
				</b-row>
			</b-col>
		</b-row>
	</b-container>
</template>
<script>
	import { mapGetters } from 'vuex';
	export default { 
		computed: {
			...mapGetters({ 
				user: 'user/active',
				loadRelatives: 'user/relatives', 
			}),
			relatives () { 
				return this.loadRelatives(this.user);
			},

			Name () { 
				return this.selected != null ? this.selected.name : '';
			},

			Birth () { 
				return this.selected != null ? this.selected.born : '';
			},

			Hometown () { 
				return this.selected != null ? this.selected.hometown : '';
			},


		},

		data () { 
			return { 
				selected: null,
			}
		},

		methods: { 
			setSelected (user) { 
				this.selected = user;
			} 
		}


	}
</script>
<style lang="scss">
	
</style>