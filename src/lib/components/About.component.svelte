<script lang="ts">
	import type Text from '$lib/types/Text.type';
	import { marked } from 'marked';
	export let t: Text;
</script>

<main>
	<div class="content">
		<h3>{t.aboutTitle}</h3>
		<h4>{t.aboutDescription}</h4>
		<article class="markdown">
			{@html marked(t.aboutMarkdown)}
		</article>
	</div>
	<div class="thumbnail">
		<picture>
			<img
				class="thumbnail-img"
				src="handsome.jpeg"
				alt="My handsome thumbnail"
				title="My handsome thumbnail"
			/>
			<div class="box" />
		</picture>
	</div>
</main>

<style>
	main {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		align-items: center;
		min-height: 100vh;
	}

	.content {
		padding: 5rem 3rem;
	}

	h3 {
		color: var(--primary-color);
		font-size: 3rem;
		margin: 0 0 1rem;
	}

	h4 {
		font-size: 1.2rem;
	}

	.thumbnail {
		padding: 5rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	picture {
		position: relative;
	}

	.thumbnail-img {
		width: 100%;
		height: auto;
		background: var(--primary-linear-gradient);
		transition: 0.3s all ease-out;
		border-radius: 0.5rem;
	}
	.thumbnail-img:hover {
		transform: translate(-10%, -10%);
		outline: 6px solid var(--primary-color);
	}

	.box {
		position: absolute;
		top: 50%;
		left: 50%;
		height: 95%;
		width: 95%;
		transform: translate(-50%, -50%);
		outline: 2px dashed var(--primary-color);
		border-radius: 0.5rem;
		z-index: -1;
		transition: 0.3s transform ease-out;
	}
	.box:hover {
		transform: translate(5%, 5%);
	}
</style>
