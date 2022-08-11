<script context="module" lang="ts">
	import AboutComponent from '$lib/components/About.component.svelte';
	import HeaderComponent from '$lib/components/Header.component.svelte';
	import graphQLClient, { getEnAboutQuery } from '$lib/utils/graphQLClient';
	import type About from '$lib/types/About.type';

	import type { Load } from '@sveltejs/kit';

	export const load: Load = async () => {
		const { abouts } = await graphQLClient.request(getEnAboutQuery);
		return {
			props: {
				about: abouts[0]
			}
		};
	};
</script>

<script lang="ts">
	export let about: About;
</script>

<HeaderComponent {about} />
<AboutComponent {about} />
