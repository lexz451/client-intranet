<template>
	<div class="backdrop" v-show="isOpen">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">Modal title</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="close">
					<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<iframe :src="src"></iframe>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
					<button type="button" class="btn btn-primary">Save changes</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'pdf-modal',
	components: {
		
	},
	data() {
		return {
			isOpen: false,
			src: ''
		}
	},
	methods: {
		show(src) {
			this.src = src;
			this.isOpen = true;
		},
		close() {
			this.src = '',
			this.isOpen = false;
		}
	}
}
</script>

<style lang="scss">
.backdrop {
	position: fixed;
	z-index: 9998;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, .5) !important;
	display: table;
	transition: opacity .3s ease;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	.wrapper {
		width: 300px;
		margin: 0px auto;
		padding: 20px 30px;
		background-color: #fafafa;
		border-radius: 2px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
		transition: all .3s ease;
		iframe {
			width: 100%;
		}
	}
}
</style>