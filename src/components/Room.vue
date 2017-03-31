<template>
	<div class="box">
		<h1 class="title is-4">{{ roomName }}</h1>
		<progress :class="['progress', 'is-small', statusColors]" :value="minutes*60 + seconds" :max="maxSeconds"></progress>
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
		roomName: {
			type: String,
			required: true
		},
		startingMinutes: {
			type: Number,
			default: 60,
			required: false
		}
	},
	data () {
		return {
			msg: 'Welcome to Your Vue.js App',
			minutes: 0,
			seconds: 0,
			maxSeconds: 0,
			finished: false,
			paused: false,
			showDetails: false
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
			return `${("00" + this.minutes).slice(-2)}:${("00" + this.seconds).slice(-2)}`;
		},
		statusColors() {
			return {
				'is-success': this.minutes >= this.startingMinutes / 2 && !this.paused,
				'is-warning': this.minutes < this.startingMinutes / 2 && this.minutes >= this.startingMinutes / 6 && !this.paused,
				'is-danger': this.minutes < this.startingMinutes / 6 && !this.paused
			}
		}
	},
	created() {
		this.minutes = this.startingMinutes
		this.maxSeconds = this.startingMinutes * 60
		var timer = setInterval( () => {
			if (!this.paused) {
				if (this.seconds === 0 && this.minutes === 0) {
					this.finished = true;
					clearInterval(timer);
				} else if (this.seconds === 0) {
					this.seconds = 59;
					// this.seconds = 40;
					this.minutes--;
				} else {
					this.seconds--;
					// this.seconds -= 20;
				}
			}
		}, 1000)

	},
	components: {
		roomHint: Hint,
		roomControls: Controls
	}
}
</script>

<style>

</style>
