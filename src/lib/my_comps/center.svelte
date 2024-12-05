<script lang="ts">
	/** What should we call the user? */
	let { children } = $props();
</script>

<!--
@component
Here's some documentation for this component.
It will show up on hover.

- You can use markdown here.
- You can also use code blocks here.
- Usage:
  ```tsx
  <main name="Arethra">
	```
  -->
<div class="flex h-dvh w-full items-center justify-center">
	{@render children()}
</div>
