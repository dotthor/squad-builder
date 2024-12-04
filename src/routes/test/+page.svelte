<script lang="ts">
	import MySlider from '$lib/my_comps/MySlider.svelte';
	import { cn } from '$lib/utils';
	import { Slider } from 'bits-ui';
	import { Progress } from 'bits-ui';
	import { onMount } from 'svelte';

	let value = $state(0);
	let someValue = $state([5]);

	onMount(() => {
		const timer = setTimeout(() => (value = 66), 500);
		return () => clearTimeout(timer);
	});
</script>

<div class="flex h-dvh w-full flex-col items-center justify-center gap-10 bg-slate-200">
	<Progress.Root
		{value}
		max={100}
		class="relative mx-5 flex  h-32 w-full overflow-hidden rounded-[2rem] bg-red-900"
	>
		<div
			class="relative h-full w-full flex-1 rounded-[2rem] bg-red-500 transition-all duration-1000 ease-in-out"
			style={`transform: translateX(-${100 - (100 * (value ?? 0)) / 100}%)`}
		>
			<span class="absolute bottom-3 right-4 text-xl font-semibold text-white"> 66% </span>
		</div>
		<span class="absolute left-4 top-3 text-xl font-semibold text-white"> Attacco </span>
	</Progress.Root>

	<div class="h-40 md:max-w-[280px]">
		<Slider.Root
			min={1}
			max={10}
			step={1}
			orientation="vertical"
			bind:value={someValue}
			class="relative flex h-full touch-none select-none justify-center"
		>
			{#snippet children({ thumbs, ticks })}
				<span class="relative h-full w-16 overflow-hidden rounded-xl border border-black bg-white">
					<Slider.Range class="absolute w-full bg-yellow-500" />
				</span>
				{#each thumbs as index}
					<Slider.Thumb {index} />
				{/each}
				{#each ticks as index}
					<Slider.Tick {index} />
				{/each}
			{/snippet}
		</Slider.Root>
	</div>
	<MySlider value={someValue} />
</div>
