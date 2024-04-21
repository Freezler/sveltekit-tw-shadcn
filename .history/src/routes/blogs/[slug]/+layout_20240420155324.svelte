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
      grid-columns: 1fr;
			gap: 2em;
	
		}
	}
</style>
