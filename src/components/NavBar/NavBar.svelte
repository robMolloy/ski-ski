<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import NavBarThemeSelectList from './NavBarThemeSelectList.svelte';
	export let availableThemes: string[];

	const dispatch = createEventDispatcher();
</script>

<div class="sticky top-0 z-30 navbar bg-neutral text-neutral-content">
	<div class="flex-1">
		<a class="text-xl cursor-pointer" href="/">Piste</a>
	</div>
	<div class="flex-none">
		<ul class="px-1">
			<li>
				<div class="dropdown dropdown-bottom dropdown-end">
					<div tabindex="0" role="button" class="">Theme</div>
					<div tabindex="-1" class="dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52">
						<NavBarThemeSelectList
							on:selectTheme={(e) => dispatch('selectTheme', e.detail)}
							{availableThemes}
						/>
					</div>
				</div>
			</li>
		</ul>
	</div>
</div>
