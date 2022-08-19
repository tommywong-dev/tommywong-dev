<script lang="ts">
	import Email from './icons/Email.Icon.svelte';
	import Instagram from './icons/Instagram.Icon.svelte';
	import Twitter from './icons/Twitter.Icon.svelte';
	import type Text from '$lib/types/Text.type';
	import { createForm } from 'svelte-forms-lib';
	import * as yup from 'yup';
	import graphQLClient from '$lib/graphql/graphQLClient';
	import { createMessageMutation } from '$lib/graphql/message.mutation';
	import type Message from '$lib/types/Message.type';
	import SnackbarComponent from './Snackbar.component.svelte';
	import type SnackbarState from '$lib/types/SnackbarState.type';

	let messaging = false;
	let sent = false;
	let snackbarState: SnackbarState;

	export let t: Text;

	const { form, errors, state, handleReset, handleChange, handleSubmit } = createForm({
		initialValues: {
			name: '',
			email: '',
			message: ''
		},
		validationSchema: yup.object().shape({
			name: yup.string().required(),
			email: yup.string().email().required(),
			message: yup.string().required()
		}),
		onSubmit: async (values) => {
			if (sent) return;
			const trimmedValues = {} as Message;
			Object.keys(values).forEach((key) => {
				trimmedValues[key as keyof Message] = values[key as keyof Message].trim();
			});
			try {
				await graphQLClient.request(createMessageMutation, { data: trimmedValues });
				handleReset();
				messaging = false;
				sent = true;
				snackbarState = {
					open: true,
					variant: 'success',
					message: 'Message sent successfully!'
				};
			} catch (error: any) {
				console.error(error);
				snackbarState = {
					open: true,
					variant: 'danger',
					message: 'Failed to send message'
				};
			}
		}
	});
</script>

<section>
	<div class="lets-talk">
		<h3>{t.letsTalkTitle}</h3>
		<h4>
			{t.letsTalkDescription}
		</h4>
	</div>
	<div class="divider" />
	{#if messaging}
		<form on:submit|preventDefault={handleSubmit}>
			<div class="form-group">
				<label for="name">{t.formName}</label>
				<input
					type="text"
					name="name"
					on:change={handleChange}
					on:blur={handleChange}
					bind:value={$form.name}
					placeholder="Anonymous"
					class:error={$errors.name}
				/>
				{#if $errors.name}
					<small>{$errors.name}</small>
				{/if}
			</div>
			<div class="form-group">
				<label for="email">{t.formEmail}</label>
				<input
					type="email"
					name="email"
					on:change={handleChange}
					on:blur={handleChange}
					bind:value={$form.email}
					placeholder="anonymous@email.com"
					class:error={$errors.email}
				/>
				{#if $errors.email}
					<small>{$errors.email}</small>
				{/if}
			</div>
			<div class="form-group">
				<label for="message">{t.formMessage}</label>
				<textarea
					name="message"
					rows="5"
					on:change={handleChange}
					on:blur={handleChange}
					bind:value={$form.message}
					placeholder="I hate dark theme"
					class:error={$errors.message}
				/>
				{#if $errors.message}
					<small>{$errors.message}</small>
				{/if}
			</div>
			<div class="action-buttons">
				<button type="button" class="cancel" on:click={() => (messaging = false)}
					>{t.formCancel}</button
				>
				<button type="submit" disabled={$state.isSubmitting}>{t.formSubmit}</button>
			</div>
		</form>
	{:else}
		<div class="social-buttons">
			<a href="https://www.instagram.com/tommywong.dev/" target="_blank">
				<button class="instagram">
					<div>
						<Instagram />
						{t.socialInstagram}
					</div>
				</button>
			</a>
			<a href="https://twitter.com/tommywong_dev" target="_blank">
				<button class="twitter">
					<div>
						<Twitter />
						{t.socialTwitter}
					</div>
				</button>
			</a>
			<button class="email" on:click={() => (messaging = true)} disabled={sent}>
				<div>
					<Email />
					{t.socialEmail}
				</div>
			</button>
		</div>
	{/if}
	<SnackbarComponent state={snackbarState} />
</section>

<style>
	a::after,
	a:hover::after {
		background: none;
	}

	h3 {
		background: var(--primary-linear-gradient);
		-webkit-text-fill-color: transparent;
		-webkit-background-clip: text;
		background-clip: text;
	}

	section {
		display: grid;
		grid-template-columns: 1fr 2px 1fr;
		column-gap: 2rem;
		align-items: center;
	}

	button {
		width: 300px;
		padding: 0.75rem 2rem;
		border: none;
		border-radius: 0.5rem;
		cursor: pointer;
		display: flex;
		justify-content: center;
		background-color: var(--light-color);
		transition: 0.25s all ease-in-out;
	}

	button > div {
		width: 100px;
		display: flex;
		column-gap: 1rem;
		align-items: center;
	}

	button:hover {
		color: white;
		fill: white;
	}

	.lets-talk {
		padding: 3rem;
		padding-right: 5rem;
	}

	.divider {
		width: 2px;
		height: 100%;
		background: var(--gray-7-color);
	}

	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		row-gap: 2rem;
	}

	.form-group {
		display: flex;
		flex-direction: column;
		row-gap: 0.5rem;
	}

	label {
		color: var(--gray-1-color);
	}

	input,
	textarea {
		width: 280px;
		background-color: var(--gray-7-color);
		padding: 0.5rem 0.75rem;
		border-radius: 0.5rem;
		color: var(--gray-1-color);
		outline: none;
		border: none;
		resize: none;
	}
	input:-webkit-autofill,
	input:-webkit-autofill:hover,
	input:-webkit-autofill:focus,
	input:-webkit-autofill:active {
		box-shadow: 0 0 0 40px var(--gray-7-color) inset !important;
		-webkit-box-shadow: 0 0 0 40px var(--gray-7-color) inset !important;
	}
	input:-webkit-autofill {
		-webkit-text-fill-color: white !important;
	}

	.error {
		outline: 1px solid var(--danger-color);
	}

	small {
		color: var(--danger-color);
	}
	.action-buttons {
		display: flex;
		justify-content: space-between;
		width: 280px;
	}
	.action-buttons > button {
		width: 100px;
	}

	.cancel {
		background: var(--gray-7-color);
		color: white;
	}

	button[type='submit'] {
		background: white;
		transition: 0.2s all ease-out;
	}
	button[type='submit']:hover {
		color: black;
		box-shadow: 0 20px 16px -4px rgba(255, 255, 255, 0.3);
	}

	.social-buttons {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		row-gap: 1rem;
	}

	.instagram:hover {
		background: radial-gradient(
			circle at 30% 107%,
			#fdf497 0%,
			#fdf497 5%,
			#fd5949 45%,
			#d6249f 60%,
			#285aeb 90%
		);
	}

	.twitter:hover {
		background: #00acee;
	}

	.email:hover {
		background: var(--gray-7-color);
	}
	.email:disabled {
		fill: var(--gray-7-color);
		color: var(--gray-7-color);
		background: var(--gray-1-color);
		cursor: default;
	}

	@media only screen and (max-width: 768px) {
		section {
			grid-template-columns: 1fr;
			row-gap: 2rem;
		}

		.lets-talk {
			padding: 1rem;
			text-align: center;
		}
	}
</style>
