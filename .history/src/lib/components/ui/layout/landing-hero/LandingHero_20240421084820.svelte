<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
</script>



<div
  class="z-10 grid w-screen h-screen text-center place-items-center">
  <div
    class="flex flex-row items-center justify-center w-screen h-full bg-red-500 bg-center bg-cover">
    <div
    
      class="flex flex-col items-center justify-center border-2 border-red-500/25 rounded-xl max-w-2/3 bg-[--heroBgColor]">
      <h1
        class="text-3xl text-red-500 text-pretty max-w-[25ch] py-4 px-2">
        Welcome to my
        SvelteKit
        ShadCN-svelte
        TailwindCSS starterkit
      </h1>
      <p
        class="text-white text-prett max-w-[35ch]">
        You can learn more
        about the project by reading the
        <Button
          variant="outline"
          class="text-red-300 hover:text-white bg-blue-800 h-[48px] hover:bg-blue-400 transition-colors duration-700"
          href="https://github.com/Freezler/sveltekit-tw-shadcn">
           docs
        </Button> on github
      </p>
      
    </div>
  </div>
</div>

<style>
  :root {
    --heroBgColor: hsla(255, 27%, 59%, 0.5);
  }
</style>
