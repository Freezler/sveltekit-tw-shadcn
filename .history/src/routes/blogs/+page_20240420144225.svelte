<script >
  interface BlogData {
  title: string;
  content: string;
  slug: string;
}
import

export const data: BlogData[] = [


];
 
 
</script>

<main class="w-screen h-full bg-red-200">
  <section class="grid items-start justify-center w-screen h-screen grid-cols-1 py-20 md:grid-cols-1 bg-indigo-950 z-200">
    <div class="flex-row justify-center p-8 mx-auto text-center border-2 rounded-xl">
      <h1 class="mt-0 text-3xl text-center text-white">My Blog</h1>
    <figure class="grid items-center justify-center mt-4">
      <img src="https://images.unsplash.com/photo-1513021032795-a0af6e8e87ef?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="h-[172px] md-[400px] m-0" alt="pic of sumtin`">
      <figcaption class="mt-2 text-center text-red-200 underline font-semi bold font-montserrat">Walk the line</figcaption>
    </figure>
   #{#each data as item,i}
    <p class="text-white">{item.title}</p>
    <p class="text-white">{item.content}</p>
    <p class="text-white">{item.slug}</p>
   {/each}
    
  </div>
  </section>
</main>
