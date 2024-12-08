<script lang="ts">
	import { mapToRange } from '$lib/my_utils';
	import * as Drawer from '$lib/components/ui/drawer';
	import { Input } from '$lib/components/ui/input';
	import Futcardbig from './futcardbig.svelte';
	import MySlider from './MySlider.svelte';

	let { stats, nome } = $props();

	let open = $state(false);

	let rarity = $state('gold');

	let overall = $state(mapToRange(stats.att[0], stats.def[0], stats.tec[0]));

	$effect(() => {
		overall = mapToRange(stats.att[0], stats.def[0], stats.tec[0]);
		if (overall < 65) rarity = 'bronze';
		else if (overall < 75) rarity = 'silver';
		else rarity = 'gold';
		//console.log(rarity, overall);
	});
</script>

<Drawer.Root bind:open>
	<Drawer.Trigger>
		<div
			class="draggable-item relative aspect-[9/12] w-24 bg-contain bg-center bg-no-repeat"
			style:background-image={"url('/imgs/bg_card_" + rarity + ".png')"}
		>
			<div class="absolute left-1 top-4 flex flex-col items-center">
				<div class="flex flex-col items-center">
					<span class="text-base font-bold leading-3">{overall}</span>
					<span class="text-xs tracking-tight">COC</span>
				</div>
			</div>
			<div
				class="absolute bottom-[45px] left-4 right-0 mx-auto aspect-[9/12] w-12 bg-[url('/imgs/gervino.webp')] bg-contain bg-center bg-no-repeat"
			></div>
			<span
				class="absolute bottom-[16px] flex w-full flex-col items-center text-lg font-bold leading-tight"
				>{nome}</span
			>
		</div>
	</Drawer.Trigger>
	<Drawer.Content>
		<div class="flex w-full flex-col items-center gap-4 py-4">
			<Futcardbig att={stats.att} def={stats.def} tec={stats.tec} name={nome} {overall} {rarity} />
			<div data-vaul-no-drag class="flex gap-4">
				<!-- {#each stats as stat, i (i)}
					<div class="flex flex-col items-center gap-1">
						<MySlider bind:value={stat.value}></MySlider>
					</div>
				{/each} -->
				<div class="flex flex-col items-center gap-1">
					<MySlider bind:value={stats.att}></MySlider>
				</div>
				<div class="flex flex-col items-center gap-1">
					<MySlider bind:value={stats.def}></MySlider>
				</div>
				<div class="flex flex-col items-center gap-1">
					<MySlider bind:value={stats.tec}></MySlider>
				</div>
			</div>
			<Input placeholder="Nome" bind:value={nome} class="w-4/6 text-base" />
		</div>
	</Drawer.Content>
</Drawer.Root>
