<script lang="ts">
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import Starrating from './starrating.svelte';

	type Stats = {
		att: number;
		def: number;
		tec: number;
	};

	let { statsA, statsB }: { statsA: Stats; statsB: Stats } = $props();
</script>

<div class="flex h-32 w-full items-center justify-center gap-2 bg-gray-800 p-2 text-white">
	{@render teamCard({ att: 60, def: 60, tec: 60 }, 'Team A')}
	<Separator orientation="vertical" />
	{@render teamCard({ att: 60, def: 60, tec: 60 }, 'Team B')}
</div>

{#snippet teamCard(stats: Stats, name: string)}
	<div class="flex size-full flex-col items-center justify-center">
		<span class="mb-2">{name}</span>
		<Starrating rating={4} />
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
