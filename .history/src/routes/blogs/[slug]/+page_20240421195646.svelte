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
<div>
<h1>{datas.post.title}</h1>
<p>{@html datas.post.content}</p>
small
</div>
</main>