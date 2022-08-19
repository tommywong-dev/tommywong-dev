<script lang="ts">
	import type SnackbarState from '$lib/types/SnackbarState.type';

	import Error from './icons/Error.Icon.svelte';
	import Success from './icons/Success.Icon.svelte';

	export let state: SnackbarState = {
		open: false,
		variant: 'success',
		message: ''
	};
</script>

{#if state.open}
	<div
		class="snackbar-container"
		on:click={() => (state.open = false)}
		class:error={state.variant === 'danger'}
		class:success={state.variant === 'success'}
	>
		<div class="icon">
			{#if state.variant === 'success'}
				<Success />
			{:else if state.variant === 'danger'}
				<Error />
			{/if}
		</div>
		<div class="message">
			{state.message}
		</div>
	</div>
{/if}

<style>
	.snackbar-container {
		z-index: 2;
		position: fixed;
		bottom: 2rem;
		right: 2rem;
		width: 300px;
		padding: 1rem;
		color: var(--light-color);
		background: var(--gray-9-color);
		outline: 0.5px solid var(--gray-7-color);
		border-radius: 1rem;
		box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.2);

		display: flex;
		align-items: center;
		column-gap: 0.5rem;
		cursor: pointer;
		transition: 0.25s outline ease-in-out;
	}

	.error:hover {
		outline: 2px solid var(--danger-color);
	}

	.success:hover {
		outline: 2px solid var(--tertiary-color);
	}
</style>
