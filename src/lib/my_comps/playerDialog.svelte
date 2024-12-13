<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import Input from '$lib/components/ui/input/input.svelte';
	import type { Player } from '$lib/constants';
	import { useDebounce } from 'runed';
	import StatsSlider from './StatsSlider.svelte';
	import { getRandomFootballer } from '$lib/my_utils';

	let { open = $bindable(), player }: { open: boolean; player?: Player } = $props();

	function _updatePlayerStat(stat: string, value: number) {
		console.log($state.snapshot(stat));
		console.log($state.snapshot(value));
	}

	const updatePlayerStat = useDebounce(
		(stat: string, value: number) => {
			console.log($state.snapshot(stat));
			console.log($state.snapshot(value));
			console.log($state.snapshot(player?.name));
			if (player.name === '') {
				//player.name = getRandomFootballer();
				console.log(getRandomFootballer());
			}
		},
		() => 500
	);

	const updatePlayerName = useDebounce(
		(e: KeyboardEvent) => {
			const el = e.target as HTMLInputElement;
			console.log(el?.value ?? '');
		},
		() => 500
	);
</script>

<Dialog.Root bind:open>
	<Dialog.Content>
		<div class="flex w-full flex-col items-center gap-4 py-4 pb-10">
			<div class="flex gap-4">
				<div class="flex flex-col items-center gap-1">
					<StatsSlider stat={'att'} callback={updatePlayerStat} value={[player?.stats.att ?? 1]}
					></StatsSlider>
				</div>
				<div class="flex flex-col items-center gap-1">
					<StatsSlider stat={'def'} callback={updatePlayerStat} value={[player?.stats.def ?? 1]}
					></StatsSlider>
				</div>
				<div class="flex flex-col items-center gap-1">
					<StatsSlider stat={'tec'} callback={updatePlayerStat} value={[player?.stats.tec ?? 1]}
					></StatsSlider>
				</div>
			</div>
			<div class="flex flex-col items-center gap-1">
				<Input
					onkeyup={updatePlayerName}
					class="text-center text-base"
					type="text"
					value={player?.name ?? ''}
				/>
			</div>
		</div>
		<!-- <div class="flex flex-col justify-center">
			{#if player}
				<input type="text" value={player.name} />
				<input type="number" value={player.stats.att} />
				<input type="number" value={player.stats.def} />
				<input type="number" value={player.stats.tec} />
			{:else}
				<input type="text" />
				<input type="number" />
				<input type="number" />
				<input type="number" />
			{/if}
		</div> -->
	</Dialog.Content>
</Dialog.Root>
