<script lang="ts">
	import type About from '$lib/types/About.type';
	import { marked } from 'marked';
	export let about: About;
</script>

<main>
	<div class="content">
		<article>
			{@html marked(about.content)}
		</article>
	</div>
	<div class="thumbnail" />
</main>
