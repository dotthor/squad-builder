<script lang="ts">
	import { mapToRange } from '$lib/my_utils';

	let { stats = $bindable(), nome } = $props();

	let rarity = $state('gold');

	let overall = $state(mapToRange(stats.att, stats.def, stats.tec));

	$effect(() => {
		overall = mapToRange(stats.att, stats.def, stats.tec);
		if (overall < 65) rarity = 'bronze';
		else if (overall < 75) rarity = 'silver';
		else rarity = 'gold';
		console.log(rarity, overall);
	});
</script>

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
