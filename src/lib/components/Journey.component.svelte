<script lang="ts">
	import type Story from '$lib/types/Story.type';
	import type Text from '$lib/types/Text.type';
	import { marked } from 'marked';
	import dayjs from 'dayjs';

	export let t: Text;
	export let stories: Story[];

	let seeingIndex = 0;

	function seeStory(index: number) {
		seeingIndex = index;
	}
	function back() {
		seeingIndex = Math.max(0, seeingIndex - 1);
	}
	function next() {
		seeingIndex = Math.min(stories.length, seeingIndex + 1);
	}
	function readAgain() {
		seeingIndex = 0;
	}
</script>

<section>
	<h3>{t.journeyTitle}</h3>
	<h4>{t.journeyDescription}</h4>
	<ol>
		{#each stories as story, index}
			<li class:seen={seeingIndex > index} class:seeing={seeingIndex === index}>
				<div class="stepper-number" on:click={() => seeStory(index)}>
					{#if seeingIndex > index}
						✔️
					{:else if seeingIndex === index}
						👉
					{:else}
						{index + 1}
					{/if}
				</div>
				<div class="stepper-content">
					<span
						>{dayjs(story.startDate).format('MMM YYYY')} - {#if story.endDate}
							{dayjs(story.endDate).format('MMM YYYY')}
						{:else}
							now
						{/if}</span
					>
					<h5>{story.title}</h5>
					{#if seeingIndex === index}
						<div class="markdown">{@html marked(story.description)}</div>
						<div class="action-buttons">
							<div>
								{#if seeingIndex !== 0 && seeingIndex !== stories.length}
									<button class="back" on:click={back}>Back</button>
								{/if}
							</div>
							<button class="next" on:click={next}>{story.nextButtonLabel}</button>
						</div>
					{/if}
				</div>
			</li>
		{/each}

		{#if seeingIndex === stories.length}
			<button class="read-again" on:click={readAgain}>Read Again</button>
		{/if}
	</ol>
</section>

<style>
	h3 {
		color: var(--tertiary-color);
		font-size: 3rem;
		margin: 0 0 1rem;
	}

	h4 {
		font-size: 1.2rem;
	}

	span {
		font-size: 0.8rem;
		color: var(--gray-1-color);
		margin-bottom: 1rem;
	}

	h5 {
		color: white;
		font-size: 1.2rem;
		margin: 0 0 1rem;
	}

	.stepper-content {
		font-size: 1.4rem;
		color: var(--gray-1-color);
	}

	li {
		position: relative;
		display: flex;
		gap: 1rem;
		padding-bottom: 2rem;
	}
	.stepper-number {
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
		position: relative;
		z-index: 1;
		flex: 0 0 var(--circle-radius);
		height: var(--circle-radius);
		border-radius: 50%;
		background-color: var(--gray-7-color);
		cursor: pointer;
	}
	li:not(:last-child):after {
		content: '';
		position: absolute;
		top: calc(var(--circle-radius) + var(--spacing));
		bottom: var(--spacing);
		left: 0;
		width: 2px;
		background-color: var(--gray-7-color);
		transform: translateX(calc(var(--circle-radius) / 2 - 1px));
	}

	.seen > .stepper-number {
		background-color: var(--tertiary-color);
	}
	.seen:not(:last-child):after {
		background-color: var(--tertiary-color);
	}

	.seeing > .stepper-number {
		flex: 0 0 calc(var(--large-circle-radius));
		height: calc(var(--large-circle-radius));
		font-size: 2rem;
		transform: translateX(-0.75rem);
		background: var(--tertiary-color);
		cursor: default;
	}
	.seeing:not(:last-child):after {
		top: calc(var(--large-circle-radius) + calc(var(--spacing)));
		bottom: var(--spacing);
		background: var(--secondary-linear-gradient);
	}
	.seeing > .stepper-content > h5 {
		font-size: 2rem;
	}

	.stepper-content {
		width: 100%;
		max-width: 800px;
	}

	.action-buttons {
		display: flex;
		justify-content: space-between;
		margin-top: 2rem;
	}

	button {
		padding: 0.75rem 2rem;
		border-radius: 0.5rem;
		border: 0;
		cursor: pointer;
		font-size: 1.2rem;
	}

	.back {
		background: transparent;
		color: var(--secondary-color);
	}

	.next {
		background: var(--secondary-color);
		color: white;
		box-shadow: 0 4px 16px 4px var(--secondary-shadow);
		transition: 0.2s all ease-out;
	}
	.next:hover {
		transform: translateY(-5px);
	}

	.read-again {
		background: var(--tertiary-color);
		color: black;
	}

	@media only screen and (max-width: 768px) {
		h5 {
			font-size: 1rem;
		}

		.seeing > .stepper-content > h5 {
			font-size: 1.5rem;
		}

		.stepper-content {
			font-size: 1rem;
		}

		button {
			padding: 0.5rem 1.5rem;
			font-size: 1rem;
		}
	}
</style>
