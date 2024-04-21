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
<h3></h3>
<small>{datas.post.date}</small>
</div>
</main>