<script context="module" lang="ts">
	import AboutComponent from '$lib/components/About.component.svelte';
	import HeaderComponent from '$lib/components/Header.component.svelte';
	import TechsComponent from '$lib/components/Techs.component.svelte';
	import graphQLClient from '$lib/graphql/graphQLClient';
	import { getEnTextsQuery } from '$lib/graphql/text.query';
	import type Text from '$lib/types/Text.type';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async () => {
		const [{ texts }] = await Promise.all([graphQLClient.request(getEnTextsQuery)]);

		return {
			props: {
				t: texts[0]
			}
		};
	};
</script>

<script lang="ts">
	export let t: Text;
</script>

<HeaderComponent {t} />
<AboutComponent {t} />
<TechsComponent {t} />
