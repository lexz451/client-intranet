<template>
	<card shadow>
		<template #header>
			<h3 class="title">Create a new account</h3>
		</template>
		<form-input v-model="credentials.name" placeholder="Full Name" addonLeftIcon="fa fa-user"></form-input>
		<form-input v-model="credentials.enterprise" placeholder="Enterprice" addonLeftIcon="fa fa-user"></form-input>
		<div class="select form-group w-100">
			<b-select placeholder="Select your company type" v-model="credentials.companyType" :options="selectOptions"></b-select>
		</div>
		<form-input v-model="credentials.web" placeholder="Company Website" addonLeftIcon="fa fa-link"></form-input>
		<form-input v-model="credentials.country" placeholder="Country" addonLeftIcon="fa fa-globe"></form-input>
		<form-input v-model="credentials.email" placeholder="Email" addonLeftIcon="fa fa-envelope"></form-input>
		<form-input v-model="credentials.password" placeholder="Password" addonLeftIcon="fa fa-lock"></form-input>
		<form-input v-model="credentials.passwordRepeat" placeholder="Repeat Password" addonLeftIcon="fa fa-lock"></form-input>
		<b-button @click="onSubmit" type="primary">Sign Up</b-button>
		<template #footer>
			<span>Have an account? <router-link :to="{name: 'sign-in'}">Sign In</router-link></span>
		</template>
	</card>
</template>

<script>
import { mapActions } from 'vuex';
export default {
	data() {
		return {
			credentials: {
				name: '',
				enterprise: '',
				travelAgency: undefined,
				web: '',
				country: '',
				email: '',
				password: '',
				passwordRepeat: '',
				_token: undefined
			},
			selectOptions: [
				{
					title: 'Travel Agency',
					value: 'travel_agency'
				},
				{
					title: 'Tour Operator',
					value: 'tour_operator'
				}
			]
		}
	},
	methods: {
		...mapActions(['signUp', 'getCSFRCode']),
		validate() {
			return true;
		},
		onSubmit() {
			const valid = this.validate();
			if (valid) {
				this.signUp()
					.then(() => {

					})
					.catch(e => {
						
					});
			}
		}
	},
	mounted() {
		this.getCSFRCode().then(code => {
			this.credentials._token = code;
		});
	}
}
</script>

<style>

</style>