<script lang="ts">
	import { resorts } from '../consts';
	const sortedResorts = [...resorts].sort((a, b) => (a.name < b.name ? -1 : 1));
	const groupedAndSortedResorts: { [key: string]: typeof sortedResorts } = {};
	sortedResorts.forEach((x) => {
		const firstLetter = x.name.slice(0, 1);
		if (!(firstLetter in groupedAndSortedResorts)) groupedAndSortedResorts[firstLetter] = [];
		groupedAndSortedResorts[firstLetter].push(x);
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Piste app" />
</svelte:head>

<table class="table table-pin-rows">
	{#each Object.entries(groupedAndSortedResorts) as [key, groupedAndSortedResortsValues]}
		<thead>
			<tr>
				<th colspan="3">{key}</th>
			</tr>
		</thead>
		<tbody>
			{#each groupedAndSortedResortsValues as resort}
				<tr class="align-middle cursor-pointer hover">
					<td>{resort.name}</td>
					<td>{resort.country}</td>
					<td>
						<a href={`/${resort.name}`}>
							<button class="btn btn-primary btn-xs">&gt;</button>
						</a>
					</td>
				</tr>
			{/each}
		</tbody>
	{/each}
</table>
