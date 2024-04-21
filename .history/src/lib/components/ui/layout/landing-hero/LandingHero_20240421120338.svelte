<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
</script>

<div
  class="z-10 grid w-screen h-screen text-center place-items-center">
  <div
    class="flex flex-row items-center justify-center w-screen h-full">
    <div
      class="flex flex-col items-center justify-center rounded-xl max-w-2/3">
      <h1
        class="text-3xl bg-cover bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 bg-clip-text leading-1 tracking-tighter text-transparent text-pretty max-w-[25ch] py-4 px-2">
        Welcome to my
        <span
          class="font-semibold text-transparent uppercase bg-cover h-screen bg-gradient-to-tl from-[--vivid-sky-blue] via-color to-[--grape] text-700 bg-clip-text"
          >SvelteKit</span>
        <span
          class="font-semibold text-transparent uppercase bg-cover h-screen bg-gradient-to-tl from-[--vivid-sky-blue] via-color to-[--grape] text-700 bg-clip-text"
          >ShadCN-svelte</span>
        <span
          class="font-semibold text-transparent uppercase bg-cover h-screen bg-gradient-to-tl from-[--vivid-sky-blue] via-color to-[--grape] text-700 bg-clip-text">
          TailwindCSS</span> starterkit
      </h1>
      <p class="text-[--off-white] text-prett max-w-[35ch]">
        You can learn more about the project by reading the
        <Button
          variant="outline"
          class="text-[off-white] hover:text-white bg-blue-800 h-[48px] hover:bg-blue-400 transition-colors duration-700"
          href="https://github.com/Freezler/sveltekit-tw-shadcn">
          docs
        </Button> on github
      </p>
    </div>
  </div>
</div>

<style>
  span{
    font-size: clamp(2.3rem, 5vw, 4rem);
    text-wrap: pretty;
  }
</style>
