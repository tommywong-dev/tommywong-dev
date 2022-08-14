<script context="module" lang="ts">
	import AboutComponent from '$lib/components/About.component.svelte';
	import HeaderComponent from '$lib/components/Header.component.svelte';
	import TechsComponent from '$lib/components/Techs.component.svelte';
	import graphQLClient from '$lib/graphql/graphQLClient';
	import { getEnTechsQuery } from '$lib/graphql/tech.query';
	import { getEnTextsQuery } from '$lib/graphql/text.query';
	import type Tech from '$lib/types/Tech.type';
	import type Text from '$lib/types/Text.type';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async () => {
		const [{ texts }, { techs }] = await Promise.all([
			graphQLClient.request(getEnTextsQuery),
			graphQLClient.request(getEnTechsQuery)
		]);

		return {
			props: {
				t: texts[0],
				techs
			}
		};
	};
</script>

<script lang="ts">
	export let t: Text;
	export let techs: Tech[];
</script>

<HeaderComponent {t} />
<AboutComponent {t} />
<TechsComponent {t} {techs} />
