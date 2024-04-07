<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
</script>

<div
  class="grid w-screen h-screen text-center place-items-center z-1000">
  <divages.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfH
    class="bg-[url('https://imx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')] w-screen h-full bg-cover bg-center flex flex-row items-center justify-center">
    <div
      class="flex flex-col items-center justify-center border-2 border-red-500/25 rounded-xl max-w-2/3 bg-[--borderColor]">
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
        about the project
        <Button
          variant="outline"
          class="w-[148px] text-red-300 hover:text-white bg-blue-800 h-[48px] hover:bg-blue-400 transition-colors duration-700"
          href="https://github.com/Freezler/sveltekit-tw-shadcn">
          documentation
        </Button> on github
      </p>
    </div>
  </divages.unsplash.com>
</div>

<!-- --borderColor: hsla(256, 53%, 34%, 0.5); -->