<script>
  /**
   * @type {any}
   */
  import  slug 
  export let datas;
</script>

<main>
  {#each datas as item}
    <!-- content here -->

    <div>
      <h1>{datas.post.title}</h1>
      <p>{@html datas.post.content}</p>
      <h3>{datas.post.author}</h3>
      <small>{datas.post.date}</small>
    </div>
  {/each}
</main>
