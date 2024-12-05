<script lang="ts">
	import Center from '$lib/my_comps/center.svelte';
	import Statschart from '$lib/my_comps/statschart.svelte';
	import type { ChartOptions } from 'chart.js';

	//const labels = Utils.months({ count: 7 });
	const data = {
		labels: ['🛡️', '', '✨'],
		datasets: [
			{
				data: [10, 2, 10],
				borderWidth: 1
			}
		]
	};
	const options: ChartOptions<'radar'> = {
		elements: {
			line: {
				borderWidth: 3
			}
		},
		scales: {
			r: {
				min: 0,
				max: 10,
				ticks: {
					display: false,
					stepSize: 10
				}
			}
		},
		plugins: {
			legend: {
				display: false
			},
			tooltip: {
				enabled: false
			}
		}
	};
</script>

<Center>
	<div class="relative size-32 bg-red-100">
		<Statschart {data} {options}></Statschart>
	</div>
</Center>
