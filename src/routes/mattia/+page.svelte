<script lang="ts">
	import MySlider from '$lib/my_comps/MySlider.svelte';
	import type { PageData } from './$types';
	import Bolt from 'lucide-svelte/icons/zap';
	import Anchor from 'lucide-svelte/icons/anchor';
	import Shield from 'lucide-svelte/icons/shield';
	import Eye from 'lucide-svelte/icons/eye';

	let stats = $state([
		{
			value: [5],
			label: 'Velocità'
		},
		{
			value: [5],
			label: 'Fisico'
		},
		{
			value: [5],
			label: 'Difesa'
		},
		{
			value: [5],
			label: 'Visione'
		}
	]);

	const icons = [Bolt, Anchor, Shield, Eye];
</script>

<div class="fixed flex h-dvh w-full flex-col">
	<div class="grow bg-gradient-to-t from-[#213b7e] to-[#3061db]"></div>
	<div class="grow bg-slate-100"></div>
</div>
<div class="relative flex h-dvh w-full flex-col items-center">
	<div class="mt-24 flex aspect-square w-11/12 flex-col rounded-[3rem] bg-white p-6">
		<div class="w-full grow border">Giacomo</div>
		<div class="flex grow items-center justify-evenly">
			{#each stats as stat, i (i)}
				{@const Icon = icons[i]}
				<div class="flex flex-col items-center gap-1">
					<MySlider bind:value={stat.value}></MySlider>
					<Icon />
					<span>{stat.value}</span>
				</div>
			{/each}
		</div>
	</div>
	<button class=" mb-6 mt-auto w-11/12 rounded-2xl bg-blue-900 p-4 text-lg font-bold text-white"
		>GENERA SQUADRA</button
	>
</div>
