<script context="module" lang="ts">
	import AboutComponent from '$lib/components/About.component.svelte';
	import HeaderComponent from '$lib/components/Header.component.svelte';
	import TechsComponent from '$lib/components/Techs.component.svelte';
	import JourneyComponent from '$lib/components/Journey.component.svelte';
	import LetsTalkComponent from '$lib/components/LetsTalk.component.svelte';
	import FooterComponent from '$lib/components/Footer.component.svelte';
	import graphQLClient from '$lib/graphql/graphQLClient';
	import { getEnTechsQuery } from '$lib/graphql/tech.query';
	import { getEnTextsQuery } from '$lib/graphql/text.query';
	import type Tech from '$lib/types/Tech.type';
	import type Text from '$lib/types/Text.type';
	import type Story from '$lib/types/Story.type';
	import type { Load } from '@sveltejs/kit';
	import { getEnStoriesQuery } from '$lib/graphql/story.query';

	export const load: Load = async () => {
		const [{ texts }, { techs }, { stories }] = await Promise.all([
			graphQLClient.request(getEnTextsQuery),
			graphQLClient.request(getEnTechsQuery),
			graphQLClient.request(getEnStoriesQuery)
		]);

		return {
			props: {
				t: texts[0],
				techs,
				stories
			}
		};
	};
</script>

<script lang="ts">
	export let t: Text;
	export let techs: Tech[];
	export let stories: Story[];
</script>

<HeaderComponent {t} />
<AboutComponent {t} />
<TechsComponent {t} {techs} />
<JourneyComponent {t} {stories} />
<LetsTalkComponent {t} />
<FooterComponent />
