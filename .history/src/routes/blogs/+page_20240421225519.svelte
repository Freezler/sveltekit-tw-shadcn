<script>
  import posts from "./data.js";
  import Card from "$lib/components/ui/card/card.svelte";
</script>

<section
  class="grid items-center justify-center w-screen h-full pt-24 bg-center bg-cover z-200">
  <div
    class="flex-row justify-center py-8 mx-auto text-center border-0">
    <h1
      class="mt-0 text-3xl font-semibold text-center text-[--purple] mix-blend-difference">
      My Blog
    </h1>
    <figure class="grid items-center justify-center mt-4">
      <img
        src="https://images.unsplash.com/photo-1513021032795-a0af6e8e87ef?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        class="h-[172px] md-h-[320px] m-0"
        alt="pic of sumtin`" />
      <figcaption
        class="mt-2 text-center text-[--purple] underline font-semibold font-montserrat">
        webTechTalk
      </figcaption>
    </figure>
  </div>
  <div
    class="grid grid-cols-[1fr] w-full items-center justify-around gap-4 md:grid-cols-[1fr_1fr] grid-rows-auto mx-auto place-items-center h-full">
    {#each posts as post, i}
      <Card
        class="relative grid  grid-rows-[102px_274px] p-16 mt-4 border-2 m-2 grid-cols-[1fr] items-center justify-center place-items-center text-center bg-gradient-to-r from-[--background] to-[--purple2] min-w-[25ch] w-[35ch] max-w-1/3">
        <Card class="grid items-center justify-between border-none">
          <h2 class="text-lg text-center text-white text-pretty w-[26ch] ">
            <pre class="pl-[2px]">#{i}</pre>
            {post.title}
          </h2>

          <p class="p-0 text-xs text-center text-white text-pretty text-[--off-white]">
            by {post.author} on {post.date.slice(0, 10)}
          </p>
        </Card>
        <hr>
        <Card
          class="grid items-center justify-between text-center border-none">
          <p
            class=" my-0 text-center text-white w-[25ch] text-base text-pretty">
            {post.content}
          </p>
        </Card>
        <card-footer
          class="absolute w-full bottom-0 h-[40px] bg-[--grape] right-0object-cover rounded-b-md text-[--off-white]">
          <p>this applies to version {post.version}</p>
        </card-footer></Card>
    {/each}
  </div>
</section>

<style>
  :root {
    --purple: hsl(258, 90%, 66%);
    --purple2: rebeccapurple;
    --backgroundColor: hsla(258, 49%, 13%, 1);
  }
</style>
