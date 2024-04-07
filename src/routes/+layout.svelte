<script lang="ts">
	import '../app.css';
	import NavBar from '../components/NavBar/NavBar.svelte';
	import { availableThemes, currentTheme } from '@/src/stores/themeStore';
</script>

<div class="flex flex-col h-screen max-h-screen min-h-screen app" data-theme={$currentTheme}>
	<NavBar />

	<main class="flex-1 overflow-auto">
		<div class="px-20">
			<slot />
		</div>
	</main>
</div>
