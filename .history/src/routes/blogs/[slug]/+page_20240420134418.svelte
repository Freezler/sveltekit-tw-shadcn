<script>
	export let data;
</script>

<main>
{#each posts as item}
   <!-- content here -->
{/each}
<h1>{data.post.title}</h1>
<div>{@html data.post.content}</div>
</main>