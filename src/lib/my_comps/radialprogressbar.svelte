<script>
	let { progress } = $props();
	const angle = 360 * (progress / 100);

	// Adapt the logic according to the approach
	const background = `radial-gradient(white 50%, transparent 51%),
    conic-gradient(transparent 0deg ${angle}deg, gainsboro ${angle}deg 360deg),
    conic-gradient(orange 0deg, yellow 90deg, lightgreen 180deg, green);`;

	//$: cssVarStyles = `--background:${background}`;
	let cssVarStyles = $derived(`--background:${background}`);
</script>

<div
	id="progress-circle"
	style={cssVarStyles}
	class="flex size-16 items-center justify-center rounded-[50%]"
>
	<span>{progress}</span>
</div>

<style>
	#progress-circle {
		background: var(--background);
		/* border-radius: 50%;
		width: 120px;
		height: 120px; */
		transition: all 500ms ease-in;
		will-change: transform;
	}
</style>
