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
      
      {#each data as datas}
        <h1>{datas.title}</h1>
        <p>{@html datas.content}</p>
        <hr />
        <p>{slug}</p>
        <hr />
  
      {/each}
    </ul>
  </section>
</main>
