<script lang="ts">
	import { Slider, type WithoutChildren } from 'bits-ui';

	//type Props = WithoutChildren<Slider.RootProps>;

	let {
		value = $bindable(),
		ref = $bindable(null),
		callback,
		stat,
		/* updatePlayer, */
		...restProps
	} /* : Props */ = $props();
</script>

<div class="h-40 md:max-w-[280px]">
	<Slider.Root
		onValueChange={(v) => {
			if (v[0] < 1) v[0] = 1;
			value = v;
			callback(stat, value);
			//updatePlayer(/* { key: '' } */);
		}}
		min={0}
		max={10}
		step={1}
		orientation="vertical"
		bind:value
		bind:ref
		{...restProps}
		class="relative flex h-full touch-none select-none justify-center"
	>
		{#snippet children({ thumbs, ticks })}
			<span class="relative h-full w-16 overflow-hidden rounded-xl border border-gray-300 bg-white">
				<Slider.Range class="absolute w-full rounded-xl bg-gradient-to-t from-[#203877] to-black" />
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
