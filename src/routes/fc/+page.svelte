<script lang="ts">
	import Center from '$lib/my_comps/center.svelte';
	import { Button } from '$lib/components/ui/button';
	import { playersV2 } from '$lib/states.svelte';
	import Formation from '$lib/my_comps/formation.svelte';
	import Bin from 'lucide-svelte/icons/trash';
</script>

<div class="relative h-dvh w-full bg-[url('/imgs/pitch2.png')] bg-center bg-no-repeat">
	<Center>
		<Button
			class="left-4 top-4"
			onclick={() => {
				console.log('resetting players');
				playersV2.reset();
			}}
			size="icon"
			variant="destructive"
		>
			<Bin /></Button
		>

		<Formation></Formation>
	</Center>
</div>
