<script>
	import dayjs from 'dayjs';

	import GitHub from './icons/GitHub.Icon.svelte';
	import LinkedIn from './icons/LinkedIn.Icon.svelte';
</script>

<footer>
	<a href="#resume" class="resume"> Résumé </a>
	<div class="social-links">
		<a href="https://github.com/tommywong-dev" target="_blank">
			<GitHub />
		</a>
		<a href="https://www.linkedin.com/in/tommy-wong-367237222/" target="_blank">
			<LinkedIn />
		</a>
	</div>
	<a href="https://github.com/tommywong-dev/tommywong-dev" target="_blank" class="copyright">
		Put together by Tommy Wong. Copyright © {dayjs().year()}
	</a>
</footer>

<style>
	a {
		display: inline-flex;
		color: white;
	}
	a:hover {
		color: white;
	}
	a::after {
		bottom: -3px;
		background: white;
	}

	footer {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		align-items: center;
		padding: 6rem 5rem 3rem;
		background: linear-gradient(to top, var(--gray-7-color), var(--dark-color));
	}

	.resume {
		display: flex;
		margin-right: auto;
	}

	.social-links {
		display: flex;
		justify-content: center;
		gap: 1rem;
		color: white;
	}
	.social-links > a {
		transition: 0.25s transform ease-out;
	}
	.social-links > a:hover {
		transform: translateY(-5px);
	}
	.social-links > a::after {
		background: none;
	}
	.social-links > a:hover::after {
		background: none;
	}

	.copyright {
		display: flex;
		justify-content: flex-end;
		margin-left: auto;
	}

	@media only screen and (max-width: 768px) {
		footer {
			grid-template-columns: 1fr;
			padding: 3rem;
			row-gap: 2rem;
		}

		.resume,
		.copyright {
			justify-content: center;
		}
	}
</style>
