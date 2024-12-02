<script lang="ts">
	import { players } from '$lib/states.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const team1 = data.teams?.team1;
	const team2 = data.teams?.team2;

	//console.log(data);
</script>

<div class="flex flex-col items-center justify-center">
	<div class="flex items-center justify-center gap-4">
		<div class="flex flex-col items-center justify-center gap-4">
			<h1 class="text-2xl font-bold">Team 1</h1>
			{#each team1 as player}
				<div class="flex flex-col items-center justify-center gap-2">
					<h2 class="text-xl font-semibold">{player.name}</h2>
					<div class="flex items-center">
						<div class="flex items-center gap-2">
							<span class="text-lg font-semibold">Attacco:</span>
							<span class="text-lg">{player.attValue}</span>
						</div>
						<div class="flex items-center gap-2">
							<span class="text-lg font-semibold">Difesa:</span>
							<span class="text-lg">{player.defValue}</span>
						</div>
						<div class="flex items-center gap-2">
							<span class="text-lg font-semibold">Tecnica:</span>
							<span class="text-lg">{player.tecValue}</span>
						</div>
					</div>
				</div>
			{/each}
		</div>
		<div class="flex flex-col items-center justify-center gap-4">
			<h1 class="text-2xl font-bold">Team 2</h1>
			{#each team2 as player}
				<div class="flex flex-col items-center justify-center gap-2">
					<h2 class="text-xl font-semibold">{player.name}</h2>
					<div class="flex items-center">
						<div class="flex items-center gap-2">
							<span class="text-lg font-semibold">Attacco:</span>
							<span class="text-lg">{player.attValue}</span>
						</div>
						<div class="flex items-center gap-2">
							<span class="text-lg font-semibold">Difesa:</span>
							<span class="text-lg">{player.defValue}</span>
						</div>
						<div class="flex items-center gap-2">
							<span class="text-lg font-semibold">Tecnica:</span>
							<span class="text-lg">{player.tecValue}</span>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
