<script>
  import posts from "./data.js";
  import Card from "$lib/components/ui/card/card.svelte";
  
</script>


  <section
    class="grid items-center justify-center w-screen h-full pt-24 bg-center bg-cover z-200 ">
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
    <div class="grid grid-cols-[1fr] w-full items-center justify-around gap-2 lg:grid-cols-[1fr] grid-rows-auto mx-auto place-items-center">
      {#each posts as post}
        <Slug 
          class="relative grid grid-rows-[160px_200px] p-2 mt-16 border-2  grid-cols-[1fr] items-center justify-center place-items-center text-center bg-gradient-to-r from-[--background] to-[--purple2] min-w-[25ch] w-[55ch] max-w-1/3">
          <Card class="grid items-center justify-between">
            <h2 class="text-xl text-center text-white text-pretty">
              {post.title}
            </h2>
            
            <p class="text-center text-white text-1xl text-pretty">by {post.author} on {post.date.slice(0, 10)}</p>
          </Card>
          <Card class="grid items-center justify-between w-[35ch] text-center">
            <p
              class="p-0 my-0 text-center text-white text-1xl text-pretty ">
              {post.content}
            </p>
           
          </Card>
          <card-footer class="absolute bottom-0 h-[32px] bg-red-300 right-0object-cover rounded-b-md">
            <p>this applies to version {post.version}</p>
          </card-footer></Slug>
      {/each}
    </div>
  </section>


<style>
  :root {
    --purple: hsl(258, 90%, 66%);
    --purple2: rebeccapurple;
    --backgroundColor: hsla(258, 49%, 13%,1);
  }
</style>
