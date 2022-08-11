<script lang="ts">
	import type About from '$lib/types/About.type';
	export let about: About;
</script>

<header>
	<section>
		<h1>{about.title}</h1>
		<h2>{about.description}</h2>
	</section>
</header>

<style>
	header {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		position: relative;
	}

	section {
		padding: 3rem;
	}

	h1 {
		color: var(--light-color);
		font-size: 8rem;
		margin: 1rem 0;
	}

	h2 {
		background: linear-gradient(20deg, var(--primary-color) 35%, var(--secondary-color) 65%);
		-webkit-text-fill-color: transparent;
		-webkit-background-clip: text;
		background-clip: text;
		font-size: 5rem;
		margin: 0;
	}
</style>
