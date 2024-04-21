<script>

</script>

<div class="layout">
	<main>
		<slot />
	</main>
</div>

<style>
	@media (min-width: 640px) {
		.layout {
			display: grid;
      grid-column;
			gap: 2em;
	
		}
	}
</style>
