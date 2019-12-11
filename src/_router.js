import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Home from './views/Home.vue';
import Access from './views/Access.vue';
import SignInForm from '~/components/SignInForm.vue';
import SignUpForm from '~/components/SignUpForm.vue';
import ResetPassword from '~/components/ResetPassword.vue';

const router = new Router({
	linkExactActiveClass: 'active',
	routes: [
		{
			name: 'home',
			path: '/',
			component: Home
		},
		{
			path: '/access',
			component: Access,
			children: [
				{
					name: 'sign-in',
					path: '',
					component: SignInForm
				},
				{
					name: 'sign-up',
					path: 'sign-up',
					component: SignUpForm
				},
				{
					name: 'reset',
					path: 'reset-password',
					component: ResetPassword
				}
			]
		}
	]
});

export default function initRouter() {
	return router;
}