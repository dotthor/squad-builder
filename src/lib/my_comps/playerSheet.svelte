<script lang="ts">
	import * as Drawer from '$lib/components/ui/drawer';
	import { Input } from '$lib/components/ui/input';
	import { getRandomFootballer } from '$lib/my_utils';
	import { useDebounce } from 'runed';
	import MySlider from './MySlider.svelte';
	import { playerState } from '$lib/states.svelte';

	let { open = $bindable(), player } = $props();

	const updatePlayer = useDebounce(
		(e: KeyboardEvent | undefined) => {
			if (player.name === '' && (!e || e.key !== 'Backspace')) {
				player.name = getRandomFootballer();
			}
			//console.log($state.snapshot(player));
			playerState.updatePlayer(player);
		},
		() => 500
	);
</script>

<Drawer.Root bind:open>
	<Drawer.Content>
		<div class="flex w-full flex-col items-center gap-4 py-4 pb-10">
			<div data-vaul-no-drag class="flex gap-4">
				<div class="flex flex-col items-center gap-1">
					<MySlider {updatePlayer} bind:value={player.stats.att}></MySlider>
				</div>
				<div class="flex flex-col items-center gap-1">
					<MySlider {updatePlayer} bind:value={player.stats.def}></MySlider>
				</div>
				<div class="flex flex-col items-center gap-1">
					<MySlider {updatePlayer} bind:value={player.stats.tec}></MySlider>
				</div>
			</div>
			<Input
				onkeyup={updatePlayer}
				placeholder="Nome"
				bind:value={player.name}
				class="w-4/6 text-base"
			/>
		</div>
	</Drawer.Content>
</Drawer.Root>
