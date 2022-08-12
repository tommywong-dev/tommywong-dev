<script context="module" lang="ts">
	import AboutComponent from '$lib/components/About.component.svelte';
	import HeaderComponent from '$lib/components/Header.component.svelte';
	import { getEnAboutQuery, getZhAboutQuery } from '$lib/graphql/about.query';
	import graphQLClient from '$lib/graphql/graphQLClient';
	import { getEnHeaderQuery, getZhHeaderQuery } from '$lib/graphql/header.query';
	import type About from '$lib/types/About.type';
	import type Header from '$lib/types/Header.type';

	import type { Load } from '@sveltejs/kit';

	export const load: Load = async () => {
		const [{ headers }, { abouts }] = await Promise.all([
			graphQLClient.request(getEnHeaderQuery),
			graphQLClient.request(getEnAboutQuery)
		]);

		return {
			props: {
				about: abouts[0],
				header: headers[0]
			}
		};
	};
</script>

<script lang="ts">
	export let header: Header;
	export let about: About;
</script>

<HeaderComponent {header} />
<AboutComponent {about} />
