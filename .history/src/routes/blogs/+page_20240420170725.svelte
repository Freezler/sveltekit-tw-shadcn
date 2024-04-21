<script>
  import posts from "./data.js";
  import Card from "$lib/components/ui/card/card.svelte";
</script>

<main class="flex w-screen h-full bg-[--backgroundColor]">
  <section
    class="grid items-start justify-center w-screen h-full grid-cols-3 py-20 bg-[--purple2] md:grid-cols-1 z-200">
    <div
      class="flex-row justify-center py-8 mx-auto text-center border-0">
      <h1
        class="mt-0 text-3xl font-semibold text-center text-[--purple] mix-blend-difference">
        My Blog
      </h1>
      <figure class="grid items-center justify-center mt-4">
        <img
          src="https://images.unsplash.com/photo-1513021032795-a0af6e8e87ef?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          class="h-[172px] md-h-[3200px] m-0"
          alt="pic of sumtin`" />
        <figcaption
          class="mt-2 text-center text-[--purple] underline font-semibold font-montserrat">
          webTechTalk
        </figcaption>
      </figure>
      {#each posts as post}
        <Card
          class="grid grid-rows-[1fr_1fr] p-2 my-16 border-2 grid-cols-1 bg-gradient-to-r from-[--background] to-[--purple2]">
          <card-header class="grid items-center justify-center">
            <h2 class="text-2xl text-center text-white">
              {post.title}
            </h2>
            <hr />
            <p class="text-center text-white text-1xl text-pretty">by {post.author} on {post.date.slice(0, 10)}</p>
          </card-header>
          <card-content class="grid place-content-center">
            <p
              class="text-center text-white text-1xl p-2 my-1 text-pretty max-w-[45ch]">
              {post.content}
            </p>
            <hr />
          </card-content>
          <card-footer class="h-full bg-red-300 rounded-b-md">
            <p>this applies to version {post.version}</p>
          </card-footer></Card>
      {/each}
    </div>
  </section>
</main>

<style>
  :root {
    --purple: hsl(258, 90%, 66%);
    --purple2: rebeccapurple;
    --backgroundColor: hsla(258, 49%, 13%,1);
  }
</style>
