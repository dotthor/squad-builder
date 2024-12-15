<script lang="ts">
	import Starrating from './starrating.svelte';
</script>

<div class="flex h-32 w-full items-center justify-center gap-3 bg-gray-800 p-3 text-white">
	<div class="h-full w-1/2 rounded-lg bg-white">
		<Starrating rating={4} />
	</div>
	<div class="h-full w-1/2 rounded-lg bg-white"></div>
</div>
