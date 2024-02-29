<script lang="ts">
	import '../app.css';
	import NavBar from '../components/NavBar/NavBar.svelte';
	import { availableThemes, currentTheme } from '../stores/themeStore';
</script>

<div class="flex flex-col h-screen max-h-screen min-h-screen app" data-theme={$currentTheme}>
	<NavBar
		on:selectTheme={(e) => currentTheme.set(e.detail)}
		availableThemes={[...$availableThemes]}
	/>

	<main class="flex-1 overflow-scroll">
		<slot />
	</main>
</div>
