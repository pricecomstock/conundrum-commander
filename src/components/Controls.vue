<template>
	<div class="field is-grouped">
		<p class="control">
			<a class="button is-success">
			<span class="icon is-small">
				<i class="fa fa-trophy" aria-hidden="true"></i>
			</span>
			<span>Win</span>
			</a>
		</p>
		<div class="field has-addons">
			<p class="control" v-if="paused">
				<a class="button" @click="togglePause">
				<span class="icon is-small">
					<i class="fa fa-play"></i>
				</span>
				<span>Play</span>
				</a>
			</p>
			<p class="control" v-else>
				<a class="button" @click="togglePause">
				<span class="icon is-small">
					<i class="fa fa-pause"></i>
				</span>
				<span>Pause</span>
				</a>
			</p>
			<p class="control">
				<a class="button">
				<span class="icon is-small">
					<i class="fa fa-history" aria-hidden="true"></i>
				</span>
				<span>Set Time</span>
				</a>
			</p>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			paused: false
		}
	},
	methods: {
		togglePause() {
			this.paused = !this.paused
			this.$emit('pause', this.paused)
		}
	}
}
</script>

<style>

</style>
