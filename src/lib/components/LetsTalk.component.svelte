<script lang="ts">
	import Email from './icons/Email.Icon.svelte';
	import Instagram from './icons/Instagram.Icon.svelte';
	import Twitter from './icons/Twitter.Icon.svelte';

	let messaging = false;
</script>

<section>
	<div class="lets-talk">
		<h3>Let's Talk!</h3>
		<h4>
			If you feel like he is the one you are searching for, or there's something about the website
			you wanna critise, feel free to let him know!
		</h4>
	</div>
	<div class="divider" />
	{#if messaging}
		<form>
			<div class="form-group">
				<label for="name">Name</label>
				<input type="text" name="name" required />
			</div>
			<div class="form-group">
				<label for="email">Email</label>
				<input type="email" name="email" required />
			</div>
			<div class="form-group">
				<label for="message">Message</label>
				<textarea name="message" rows="5" required />
			</div>
			<div class="action-buttons">
				<button class="cancel" on:click={() => (messaging = false)}>Nvm</button>
				<button type="submit">Submit</button>
			</div>
		</form>
	{:else}
		<div class="social-buttons">
			<a href="https://www.instagram.com/tommywong.dev/" target="_blank">
				<button class="instagram">
					<div>
						<Instagram /> Instagram
					</div>
				</button>
			</a>
			<a href="https://twitter.com/tommywong_dev" target="_blank">
				<button class="twitter">
					<div>
						<Twitter /> Twitter
					</div>
				</button>
			</a>
			<button class="email" on:click={() => (messaging = true)}>
				<div>
					<Email /> Email
				</div>
			</button>
		</div>
	{/if}
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
</style>
