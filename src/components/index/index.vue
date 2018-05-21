<template>
	<div class="hello">
		<mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
		  <router-link to="/" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<i class="fa fa-close"></i>
		<mt-checklist
		  title="checkbox list"
		  v-model="value"
		  :options="['optionA', 'optionB', 'optionC']">
		</mt-checklist>
	</div>
</template>

<script>

import { Checklist } from 'mint-ui';

export default {
	name: 'index',
	data () {
		return {
			value: [
				1,2,3
			]
		}
	},
	components:{
		Checklist
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
