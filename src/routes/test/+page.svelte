<script lang="ts">
	import { Progress } from 'bits-ui';
	import { onMount } from 'svelte';

	let value = $state(0);

	onMount(() => {
		const timer = setTimeout(() => (value = 66), 500);
		return () => clearTimeout(timer);
	});
</script>

<div class="flex h-dvh w-full items-center justify-center bg-slate-200">
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
</div>
