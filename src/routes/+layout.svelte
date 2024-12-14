<script lang="ts">
	import Bottombar from '$lib/my_comps/bottombar.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<div class="flex h-dvh w-full flex-col">
	{@render children()}
	<Bottombar />
</div>
