<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog/index.js';

	type Player = {
		id: number;
		name: string;
		stats: {
			att: number;
			def: number;
			tec: number;
		};
	};

	let { open = $bindable(), player }: { open: boolean; player: Player | null } = $props();
</script>

<Dialog.Root bind:open>
	<Dialog.Content>
		<div class="flex flex-col justify-center">
			{#if player}
				<input type="text" bind:value={player.name} />
				<input type="number" bind:value={player.stats.att} />
				<input type="number" bind:value={player.stats.def} />
				<input type="number" bind:value={player.stats.tec} />
			{:else}
				<input type="text" />
				<input type="number" />
				<input type="number" />
				<input type="number" />
			{/if}
		</div>
	</Dialog.Content>
</Dialog.Root>
