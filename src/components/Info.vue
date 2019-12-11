<template>
	<section id="info" class="section">
		<svg class="divider" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
				<path class="bg" fill="transparent" d="M 0 0 L 0 100 L 100 100 L 100 0 Z"></path>
				<path class="arc" fill="#212121" d="M 0 100 C 40 0 60 0 100 100 Z"></path>
		</svg>
		<div class="container">
			<div class="content">
				<h3 class="title">About <br> <em>Cuba</em></h3>
				<fade-transition mode="out-in" origin="center" :duration="150">
					<div v-if="loading"></div>
					<info-grid :items="info" v-else></info-grid>
				</fade-transition>
			</div>
		</div>
	</section>
</template>

<script>
import { FadeTransition } from 'vue2-transitions';
import InfoGrid from '~/components/InfoGrid.vue';

export default {
	name: 'info',
	props: ['info', 'loading'],
	components: {
		InfoGrid,
		FadeTransition
	}
}
</script>

<style lang="scss" scoped>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 40vh;
	padding-top: 4rem;
}
#info {
	padding-top: 2rem;
	padding-bottom: 12rem;
	position: relative;
	background-color: #fafafa;
	.title {
		font-weight: 700;
		text-transform: uppercase;
		color: #212121;
		text-align: center;
		position: absolute;
		top: -10px;
		em {
			color: #f9ce1c;
			font-style: normal;
		}
	}
	.divider {
		.arc {
			stroke: #212121;
		}
	}
}
</style>