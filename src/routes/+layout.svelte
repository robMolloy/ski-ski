<script>
	import Header from './Header.svelte';
	import './styles.css';
	import '../app.css';
</script>

<div class="app">
	<Header />
	<div class="flex gap-5">
		<div>asd</div>
		<div>asd</div>
		<div>asd</div>
		<div>asd</div>
		<div>asd</div>
		<div>asd</div>
		<div>asd</div>
	</div>

	<main>
		<slot />
	</main>

	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>
