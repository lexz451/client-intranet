<template>
	<div class="info-item">
		<div class="row">
			<div class="col">
				<img v-lazy="item.image" class="img" alt="">
			</div>
			<div class="col">
				<span class="title">{{ item.title }}</span>
			</div>
		</div>
		<div class="row action">
			<b-button size="sm" class="" ><i class="fa fa-file"></i> View</b-button>
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
	margin: 0 8px;
	width: 260px;
	background: #fff;
	padding: 12px 20px;
	border-radius: 5px;
	box-shadow: var(--bg-shadow-lg);
	img {
		width: 100%;
		object-fit: cover;
		object-position: center;
	}
}
</style>