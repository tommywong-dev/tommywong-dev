<script lang="ts">
	import type Tech from '$lib/types/Tech.type';

	import type Text from '$lib/types/Text.type';

	export let t: Text;
	export let techs: Tech[];
</script>

<section>
	<h3>{t.techTitle}</h3>
	<h4>{t.techDescription}</h4>
	<div class="cards">
		{#each techs as tech}
			<div class="card">
				<div class="card-header">
					<img src={tech.icon.url} alt={tech.title} class="card-header-icon" />
					<h5 class="card-header-title">
						{tech.title}
					</h5>
				</div>
				<p class="card-content">
					{tech.description}
					<!-- In this industry, how can you be a web developer without knowing NodeJS? I have built tons
					of NodeJS related projects including using frameworks like Angular, Ionic, React Native, Firebase
					Functions, and more. -->
				</p>
			</div>
		{/each}
	</div>
</section>

<style>
	section {
		padding: 5rem 3rem;
	}

	h3 {
		color: var(--secondary-color);
		font-size: 3rem;
		margin: 0 0 1rem;
	}

	h4 {
		font-size: 1.2rem;
	}

	.cards {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1rem;
	}

	.card {
		background-color: var(--gray-9-color);
		border-radius: 1.2rem;
		padding: 1rem;
		max-width: 500px;
	}

	.card-header {
		display: flex;
		align-items: center;
		margin-bottom: 0.5rem;
	}

	.card-header-icon {
		max-width: 32px;
		height: auto;
		margin-right: 1rem;
	}

	.card-header-title {
		font-size: 1.3rem;
		margin: 0;
	}

	.card-content {
		color: var(--gray-1-color);
		margin: 0;
	}
</style>
