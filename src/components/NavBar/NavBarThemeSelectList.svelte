<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let availableThemes: string[];

	const dispatch = createEventDispatcher<{ selectTheme: string }>();
</script>

<div class="flex flex-col gap-2 overflow-auto max-h-[75vh]">
	{#each availableThemes as value}
		<button
			class="flex w-full btn flex-nowrap"
			data-theme={value}
			on:click={() => dispatch('selectTheme', value)}
		>
			<span class="flex-1 text-start">{value}</span>
			<span class="flex flex-none gap-[2px] items-center">
				<div class="badge badge-xs badge-neutral"></div>
				<div class="badge badge-xs badge-primary"></div>
				<div class="badge badge-xs badge-secondary"></div>
				<div class="badge badge-xs badge-accent"></div>
				<div class="badge badge-xs badge-info"></div>
			</span>
		</button>
	{/each}
</div>
