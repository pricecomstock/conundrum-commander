<template>
	<div class="box">
		<h1 class="title is-4">{{ room.name }}</h1>
		<progress :class="['progress', 'is-small', statusColors]" :value="room.secondsRemaining" :max="maxSeconds"></progress>
		<div class="level">
			<div class="level-left">
				<div class="level-item">
					<strong>
						<h1 class="title">{{ timerString }}</h1>
					</strong>
				</div>
			</div>
			<div class="level-right">
				<div class="level-item">
					<room-controls @pause="onPause"></room-controls>
				</div>
				<div class="level-item">
					<room-hint></room-hint>
				</div>
			</div>
		</div>
		
		<div class="message is-danger" v-if="finished">
			<div class="message-body">
				Time has run out.
			</div>
		</div>
	</div>
</template>

<script>
import Hint from './Hint.vue'
import Controls from './Controls.vue'
export default {
	props: {
		room: {
			// type: Object,
			required: true
		}
	},
	data () {
		return {
			startingMinutes: 60,
			maxSeconds: 3600 // This should be provided by the room server as the central source of truth
		}
	},
	methods: {
		onPause(pStatus) {
			this.paused = pStatus;
			console.log('room paused')
		}
	},
	computed: {
		timerString() {
			return `${("00" + Math.floor(this.room.secondsRemaining / 60)).slice(-2)}:${("00" + (this.room.secondsRemaining % 60)).slice(-2)}`;
		},
		statusColors() {
			return {
				'is-success': this.room.secondsRemaining >= this.maxSeconds / 2 && !this.paused,
				'is-warning': this.room.secondsRemaining < this.maxSeconds / 2 && this.room.secondsRemaining >= this.maxSeconds / 6 && !this.paused,
				'is-danger': this.room.secondsRemaining < this.maxSeconds / 6 && !this.paused
			}
		},
		finished() {
			return this.room.secondsRemaining === 0
		}
	},
	components: {
		roomHint: Hint,
		roomControls: Controls
	}
}
</script>

<style>

</style>
