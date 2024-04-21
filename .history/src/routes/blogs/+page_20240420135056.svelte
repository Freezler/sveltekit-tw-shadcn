<script>
  export let data;
</script>

<main class="w-screen h-full bg-red-200">
  <section
    class="grid items-start justify-center w-screen h-screen grid-cols-1 py-20 md:grid-cols-1 bg-indigo-950 z-200">
    <ul>
      <li><a href="/blog/one">one</a></li>
      <li><a href="/blog/two">two</a></li>
      <li><a href="/blog/three">three</a></li>
      {#each data.summaries as { slug, title, content }}
        <h1>{title}</h1>
        <p>{@html content}</p>
      {/each}
    </ul>
  </section>
</main>
