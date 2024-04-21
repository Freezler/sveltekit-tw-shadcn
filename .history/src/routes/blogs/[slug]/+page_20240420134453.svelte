<script>
	export let data;
</script>

<main>
{#each items as item}
   <!-- content here -->
{/each}
<h1>{item.post.title}</h1>
<div>{@html data.post.content}</div>
</main>