<script lang="ts">
	import type About from '$lib/types/About.type';
	import { marked } from 'marked';
	export let about: About;
</script>

<main>
	<div class="content">
		<h3>{about.title}</h3>
		<h4>{about.description}</h4>
		<article>
			{@html marked(about.content)}
		</article>
	</div>
	<div class="thumbnail">
		<picture>
			<img
				class="thumbnail-img mask"
				src="handsome.jpeg"
				alt="My handsome thumbnail"
				title="My handsome thumbnail"
			/>
			<div class="purple-box mask" />
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

	article {
		color: var(--gray-1-color);
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
	}
	.thumbnail-img:hover {
		transform: scale(0.95);
	}

	.purple-box {
		position: absolute;
		top: 50%;
		left: 50%;
		height: 99%;
		width: 99%;
		transform: translate(-50%, -50%);
		background: var(--primary-linear-gradient);
		z-index: -1;
		transition: 0.3s all ease-out;
	}
</style>
