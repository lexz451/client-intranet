<template>
	<card class="" shadow>
		<template #header>
			<h3 class="title">Sign in to your account</h3>
		</template>
		<div class="error">
			<small class="text-danger">{{ error ? error : '&nbsp;' }}</small>
		</div>
		<form-input v-model="email" placeholder="Email" addonLeftIcon="fa fa-envelope" :disabled="loading"></form-input>
		<form-input v-model="password" placeholder="Password" addonLeftIcon="fa fa-lock" :disabled="loading"></form-input>
		<router-link class="mb-2" :to="{name: 'reset'}">Forgot your password?</router-link>
		<b-button @click.native="onSubmit" class="mt-1" type="primary" :disabled="loading">Sign In</b-button>
		<template #footer>
			<span>Doesn't have an account? <router-link :to="{name: 'sign-up'}">Sign Up</router-link></span>
		</template>
	</card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
	data() {
		return {
			email: '',
			password: '',
			error: ''
		}
	},
	computed: {
		...mapGetters(['loading'])
	},
	methods: {
		...mapActions(['signIn']),
		onSubmit() {			
			this.error = '';
			this.signIn({email: this.email, password: this.password})
				.then(() => {
					this.$router.push({name: 'home'});
					console.log('User is authenticated. Redirecting to Home Page.');
				})
				.catch(e => {
					if (e.response) {
						switch (e.response.status) {
							case 401:
								this.error = "Invalid Email or Password";								
								break;
							case 403:
								this.error = "User not approved yet. Wait for comfirmation email."
								break;
							default:
								this.error = "Unknown error. Please try again."
								break;
						}
					} else if (e.request) {
						this.error = "Network Error. Check your internet connection and try again."
					}
				});
		}
	}
}
</script>

<style lang="scss">
.card-body, .card-footer {
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>