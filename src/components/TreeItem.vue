<template>
    <li class="tree-item" @click.stop="toggle">
        <div id="tree-item-content" class="d-flex align-items-center p-2 m-2">
			<i class="mr-2 ml-2" :class="icon"></i>
            <span class="title flex-grow-1">{{ item.title }}</span>
            <div class="d-flex align-items-center" v-if="item.file">
                <b-button icon="fa fa-file" size="sm" type="" @click.native="showModal(item)">View</b-button>
                <a class="btn" :href="item.file" download><i class="fa fa-download"></i> Download</a>
            </div>
        </div>
        <ul v-if="isParent" v-show="isOpen" class="tree">
            <tree-item v-for="(child, index) in item.children" :key="index" :item="child"></tree-item>
        </ul>
    </li>
</template>

<script>
export default {
    name: 'tree-item',
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
			isOpen: false,
			modalOpen: false
        }
    },
    computed: {
        isParent() {
            return !!this.item.children;
		},
		icon() {
			if (!this.isOpen && this.isParent) return "fa fa-chevron-down";
			else if (this.isOpen && this.isParent) return "fa fa-chevron-up";
			else return "fa fa-tag";
		}
    },
    methods: {
        toggle() {
            if (this.isParent) {
                this.isOpen = !this.isOpen;
            }
        },
        showModal(item) {
            this.$modal.show(item.title, item.file);
        }
    },
    updated() {
        this.$parent.$forceUpdate();
    }
}
</script>

<style lang="scss">
#tree-item-content {
	height: 46px;
	border-radius: 3px;
	background-color: #eee;
	.title {
		font-weight: 500;
	}
}
</style>