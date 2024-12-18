<script>
	import Star from 'lucide-svelte/icons/star';
	import HalfStar from 'lucide-svelte/icons/star-half';

	let { rating } = $props();

	let stars = $derived(Math.floor(rating) <= 5 ? Math.floor(rating) : 5);
</script>

<div class="relative">
	<div class="flex gap-1">
		{#each { length: 5 }}
			<Star fill="#111" strokeWidth={0} />
		{/each}
	</div>
	<div class="absolute top-0 flex gap-1">
		{#each { length: stars }}
			<Star fill="#fde047" strokeWidth={0} />
		{/each}
		{#if rating % 1 > 0}
			<HalfStar fill="#fde047" strokeWidth={0} />
		{/if}
	</div>
	<!-- {stars}-{rating} -->
</div>
