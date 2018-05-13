<template>
	<div class="field has-addons">
	<!--<p class="control">
		<span class="select">
		<select>
			<option>$</option>
			<option>£</option>
			<option>€</option>
		</select>
		</span>
	</p>-->
	<p class="control">
		<input class="input" type="text" placeholder="Send a hint" v-model="hint" @keyup.enter="sendHint">
	</p>
	<p class="control">
		<button :class="['button', classes]" @click="sendHint">
			Send
		</button>
	</p>
	</div>
</template>

<script>
import axios from '../axios-roommanager'
export default {
	data() {
		return {
			hint: '',
			loading: false
		}
	},
	methods: {
		sendHint() {
			this.loading=true
			axios.post("/hint", {hint: this.hint})
			.then( response => {
				this.loading = false
				this.hint = ''
			})
		}
	},
	computed: {
		classes() {
			return {
				'is-loading': this.loading,
				'is-disabled': this.hint === ''
			}
		}
	}
}
</script>

<style>

</style>
