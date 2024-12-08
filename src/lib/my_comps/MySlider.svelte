<script lang="ts">
	import { Slider, type WithoutChildren } from 'bits-ui';

	//type Props = WithoutChildren<Slider.RootProps>;

	let {
		value = $bindable(),
		ref = $bindable(null),
		updatePlayer,
		...restProps
	} /* : Props */ = $props();
</script>

<!-- <Slider.Root
	bind:value
	bind:ref
	{...restProps}
	class="relative flex w-full touch-none select-none items-center"
>
	{#snippet children({ thumbs, ticks })}
		<Slider.Range class="absolute h-full bg-foreground" />
		{#each thumbs as index}
			<Slider.Thumb
				{index}
				class={cn(
					'border-border-input hover:border-dark-40 active:scale-98 block size-[25px] cursor-pointer rounded-full border bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:bg-foreground dark:shadow-card'
				)}
			/>
		{/each}

		{#each ticks as index}
			<Slider.Tick {index} />
		{/each}
	{/snippet}
</Slider.Root> -->

<div class="h-40 md:max-w-[280px]">
	<Slider.Root
		onValueChange={(v) => {
			if (v[0] < 1) v[0] = 1;
			value = v;
			updatePlayer(/* { key: '' } */);
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
