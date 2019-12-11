<template>
	<div class="info-item shadow shadow-1">
		<div class="row">
			<div class="col">
				<!--<img v-lazy="item.image" class="img" alt="">-->
				<img src="~/assets/images/hero.jpg" class="img" alt="">
			</div>
			<div class="col">
				<div class="row">
					<span class="title">{{ item.title }}</span>
					<br>
					<small>Last update: </small>
				</div>
				<div class="row"></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'info-item',
	props: ['item'],
	data() {
		return {
			modalOpen: false
		}
	}
}
</script>

<style lang="scss">
.info-item {
	margin: 4px 8px;
	width: 300px;
	background: #fff;
	padding: 12px 20px;
	border-radius: 5px;
	box-shadow: var(--bg-shadow-lg);
	position: relative;
	img {
		width: 100%;
		height: 150px;
		object-fit: cover;
		object-position: center;
	}
	
}
</style>