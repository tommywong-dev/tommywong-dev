<script lang="ts">
	import type Text from '$lib/types/Text.type';

	export let t: Text;
</script>

<header>
	<section>
		<h1>{t.headerTitle}</h1>
		<h2>{t.headerDescription}</h2>
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
		background: var(--primary-linear-gradient);
		-webkit-text-fill-color: transparent;
		-webkit-background-clip: text;
		background-clip: text;
		font-size: 5rem;
		margin: 0;
	}
</style>
