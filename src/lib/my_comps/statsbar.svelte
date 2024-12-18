<script lang="ts">
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { playerState } from '$lib/states.svelte';
	import Starrating from './starrating.svelte';

	type Stats = {
		att: number;
		def: number;
		tec: number;
	};

	let stats_A = $derived(
		playerState.value.activePlayers.reduce(
			(acc, p) => {
				if (p.team === 'team_a') {
					acc.att += p.stats.att[0];
					acc.def += p.stats.def[0];
					acc.tec += p.stats.tec[0];
				}
				return acc;
			},
			{ att: 0, def: 0, tec: 0 }
		)
	);
	let stats_B = $derived(
		playerState.value.activePlayers.reduce(
			(acc, p) => {
				if (p.team === 'team_b') {
					acc.att += p.stats.att[0];
					acc.def += p.stats.def[0];
					acc.tec += p.stats.tec[0];
				}
				return acc;
			},
			{ att: 0, def: 0, tec: 0 }
		)
	);

	let rating_A = $derived(getRating(stats_A));
	let rating_B = $derived(getRating(stats_B));

	function getRating(stats: Stats) {
		const totalPoints = stats.att + stats.def + stats.tec;
		const maxPoints = 150;
		const rating = (totalPoints / maxPoints) * playerState.value.squadDimension;
		return Math.round(rating * 10) / 10;
	}
</script>

<div class="flex h-32 w-full items-center justify-center gap-2 bg-gray-800 p-2 text-white">
	{@render teamCard(stats_A, rating_A, 'Team A')}
	<Separator orientation="vertical" />
	{@render teamCard(stats_B, rating_B, 'Team B')}
</div>

{#snippet teamCard(stats: Stats, rating: number, name: string)}
	<div class="flex size-full flex-col items-center justify-center">
		<span class="mb-2">{name}</span>
		<Starrating {rating} />
		<div class="mt-2 flex gap-2">
			<div class="flex flex-col items-center">
				<span>ATT</span>
				<span>{stats.att}</span>
			</div>
			<div class="flex flex-col items-center">
				<span>DEF</span>
				<span>{stats.def}</span>
			</div>
			<div class="flex flex-col items-center">
				<span>TEC</span>
				<span>{stats.tec}</span>
			</div>
		</div>
	</div>
{/snippet}
