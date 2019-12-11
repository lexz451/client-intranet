<template>
	<section id="products" class="section">
		<svg class="divider" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
				<path class="bg" fill="#f9ce1c" d="M 0 0 L 0 100 L 100 100 L 100 0 Z"></path>
				<path class="arc" fill="#fafafa" d="M 0 100 C 40 0 60 0 100 100 Z"></path>
		</svg>
		<div class="container">
			<div class="content">
				<h3 class="title">Our <br> <em>Products</em></h3>
				<div color="#fafafa" v-show="loading">Loading</div>
				<fade-transition mode="out-in" origin="center" :duration="150">
					<products-grid :tree="products" v-show="!loading"></products-grid>
				</fade-transition>
			</div>
		</div>
	</section>
</template>

<script>
import ProductsGrid from '~/components/ProductsGrid.vue';
import { FadeTransition } from 'vue2-transitions';

export default {
	name: 'products',
	props: ['products', 'loading'],
	components: {
		ProductsGrid,
		FadeTransition
	}
}
</script>

<style lang="scss" scoped>
#products {
	background-color: var(--primary);
	padding-top: 2rem;
	padding-bottom: 12rem;
	position: relative;
	.title {
		font-weight: 700;
		text-transform: uppercase;
		color: #212121;
		text-align: center;
		position: absolute;
		top: -10px;
		em {
			color: #fafafa;
			font-style: normal;
		}
	}
	.divider {
		.arc {
			stroke: #fafafa;
		}
	}
}
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 40vh;
	padding-top: 4rem;
}
</style>