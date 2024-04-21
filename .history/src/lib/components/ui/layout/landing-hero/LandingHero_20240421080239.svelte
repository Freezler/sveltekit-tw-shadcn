<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
</script>

<div
  class="z-10 grid w-screen h-screen text-center place-items-center">
  <div
    class="bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')] w-screen h-full bg-cover bg-center flex flex-row items-center justify-center">
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
      <h1 class="flex items-center text-6xl font-medium text-neutral-400">
  Dive Into
  <span class="relative ml-3 h-[1em] w-36 overflow-hidden">
    <span
      class="absolute w-full h-full leading-none text-white -translate-y-full animate-slide"
    >
      Ideas
    </span>
    <span
      class="absolute h-full w-full -translate-y-full animate-slide leading-none text-white [animation-delay:0.83s]"
    >
      Tech
    </span>
    <span
      class="absolute h-full w-full -translate-y-full animate-slide leading-none text-white [animation-delay:1.83s]"
    >
      Art
    </span>
  </span>
</h1>
    </div>
  </div>
</div>

<style>
  :root {
    --heroBgColor: hsla(255, 27%, 59%, 0.5);
  }
</style>
