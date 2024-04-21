

<div class="layout">
	<main>
		<slot />
	</main>
</div>

<style>
	@media (min-width: 640px) {
		.layout {
			display: grid;
			gap: 2em;
			place-items: center;
	}
</style>
