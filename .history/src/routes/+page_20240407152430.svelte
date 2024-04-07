<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
</script>

<!-- landing page -->
<div
  class="grid w-screen h-screen text-center place-items-center z-1000">
  <div
    class="bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')] w-screen h-full bg-cover bg-center flex flex-row items-center justify-center">
    <div
      class="flex flex-col items-center justify-center border-2 border-red-500 h-2/4 max-w-2/3 bg-[hsla(0,0%,0%,0.5)]">
      <h1
        class="text-3xl text-red-500 text-pretty max-w-[25ch]">
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
          class="w-[148px] text-red-600 hover:text-white bg-blue-200 h-[48px] hover:bg-blue-400 transition"
          href="https://github.com/Freezler/sveltekit-tw-shadcn">
          documentation
        </Button> on github
      </p>
    </div>
  </div>
</div>
