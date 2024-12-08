<script lang="ts">
	import { mapToRange } from '$lib/my_utils';

	let { rarity, overall, att, def, tec, name } = $props();

	//let rarity = $state('gold');

	/* let overall = $state(
		mapToRange(
			stats.find((s: { label: string }) => s.label == 'Attacco').value[0],
			stats.find((s: { label: string }) => s.label == 'Difesa').value[0],
			stats.find((s: { label: string }) => s.label == 'Tecnica').value[0]
		)
	);

	$effect(() => {
		overall = mapToRange(
			stats.find((s: { label: string }) => s.label == 'Attacco').value[0],
			stats.find((s: { label: string }) => s.label == 'Difesa').value[0],
			stats.find((s: { label: string }) => s.label == 'Tecnica').value[0]
		);
		if (overall < 65) rarity = 'bronze';
		else if (overall < 75) rarity = 'silver';
		else rarity = 'gold';
		//console.log(rarity, overall);
	}); */
</script>

<div
	class="relative aspect-[9/12] w-48 bg-contain bg-center bg-no-repeat"
	style:background-image={"url('/imgs/bg_card_" + rarity + ".png')"}
>
	<div class="absolute left-4 top-9 flex flex-col items-center">
		<div class="flex flex-col items-center">
			<span class="text-2xl font-bold leading-6">{overall}</span>
			<span class="text-base">COC</span>
		</div>
	</div>
	<div
		class="absolute bottom-[93px] left-3 right-0 mx-auto aspect-[9/12] w-24 bg-[url('/imgs/gervino.webp')] bg-contain bg-center bg-no-repeat"
	></div>
	<span
		class="absolute bottom-[70px] flex w-full flex-col items-center text-lg font-bold leading-tight"
		>{name}</span
	>
	<div
		class="absolute bottom-[30px] flex w-full items-center justify-evenly font-bold leading-tight"
	>
		<div class="flex flex-col items-center">
			<span>ATT</span>
			<span>{att}</span>
		</div>
		<div class="flex flex-col items-center">
			<span>DIF</span>
			<span>{def}</span>
		</div>
		<div class="flex flex-col items-center">
			<span>TEC</span>
			<span>{tec}</span>
		</div>
	</div>
</div>
