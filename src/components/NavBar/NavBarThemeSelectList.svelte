<script lang="ts">
	import { daisyBgColors, daisyContentColors } from '@/src/consts';
	import { currentTheme, availableThemes } from '@/src/stores/themeStore';
</script>

<div class="flex flex-col gap-2">
	{#each $availableThemes as theme}
		<div>
			<button
				class="flex flex-col w-full gap-2 btn min-h-10"
				data-set-theme={theme}
				{...theme === $currentTheme ? {} : { 'data-theme': theme }}
				on:click={(e) => currentTheme.set(theme)}
			>
				<span class="text-start">{theme}</span>
				<span class="flex flex-none gap-[2px] items-center">
					{#each daisyBgColors as daisyColor}
						<div class="tooltip" data-tip={daisyColor}>
							<div class={`badge badge-xs badge-${daisyColor}`}>
								<div class={`text-${daisyColor}-content`}>&middot;</div>
							</div>
						</div>
					{/each}
				</span>
			</button>
		</div>
	{/each}
</div>
