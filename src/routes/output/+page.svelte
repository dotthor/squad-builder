<script lang="ts">
	import { players } from '$lib/states.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

{#each players.value as player}
	<h1>{player.name}</h1>
{/each}
