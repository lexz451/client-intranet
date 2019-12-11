<template>
	<div class="info-item shadow shadow-1">
		<div class="row">
			<div class="col">
				<!--<img v-lazy="item.image" class="img" alt="">-->
				<img src="~/assets/images/hero.jpg" class="img" alt="">
			</div>
			<div class="col">
				<h6 class="title">{{ item.title }} Internet en Cuba</h6>
				<small>Last update: </small>
			</div>
		</div>
		<div class="row actions">
			<div class="col">
				<button class="btn btn-secondary btn-sm" size="sm"><i class="fa fa-file"></i> View</button>
				<a class="btn btn-primary btn-sm" role="button" href="#" size="sm"><i class="fa fa-file"></i> Download</a>
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
	height: 150px;
	background: #fff;
	padding: 12px 20px;
	border-radius: 5px;
	box-shadow: var(--bg-shadow-lg);
	position: relative;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}
	.actions {
		position: absolute;
		bottom: 20px;
		left: 20px;
		
	}
}
</style>