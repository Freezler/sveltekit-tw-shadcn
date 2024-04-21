<script>
	/**
   * @type {any}
   */
	 export let datas;
</script>

<main>
{#each datas as item}
   <!-- content here -->
{/each}
<h1>{datas.post.title}</h1>
<div>{@html datas.post.content}</div>
</main>