<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import { Github } from "lucide-svelte";
</script>

<div
  class="z-10 grid w-full h-screen mt-10 text-center place-items-center">
  <div
    class="flex flex-row items-center justify-center w-screen h-full">
    <div
      class="flex flex-col items-center justify-center h-full max-w-full rounded-xl">
      <h1
        class=" bg-cover bg-gradient-to-r from-[--chefchaouen-blue] via-[--palatinate-blue] to-[--vivid-sky-blue] bg-clip-text leading-6 md:leading-7 xl:leading-9 text-transparent text-pretty max-w-[25ch] py-0 px-2 font-inter">
        Welcome to my
        <span
          class="font-semibold text-transparent uppercase bg-cover h-screen bg-gradient-to-l from-[--vivid-sky-blue] via-color to-[--grape] text-700 bg-clip-text"
          >SvelteKit,</span>
        <span
          class="font-semibold text-transparent uppercase bg-cover h-screen bg-gradient-to-r from-[--vivid-sky-blue] via-color to-[--grape] text-700 bg-clip-text"
          >ShadCN-svelte &</span>
        <span
          class="font-semibold text-transparent uppercase bg-cover h-screen bg-gradient-to-l from-[--vivid-sky-blue] via-color to-[--grape] text-700 bg-clip-text">
          TailwindCSS</span> starterkit.
      </h1>
      <p
        class="text-[--off-white] text-pretty w-[25ch] md:max-w-[45ch] my-3">
        learn more about the project on github.io
      </p>
      <Button
          variant="outline"
          class="uppercase btn text-[white] hover:text-[vivid-sky-blue] bg-blue-800 h-6 mt-2 hover:bg-blue-400 transition-colors duration-700"
          href="https://github.com/Freezler/sveltekit-tw-shadcn">
          <Github />
        </Button>
    </div>
  </div>
</div>

<style>
  span {
    font-size: clamp(1.4rem, 4vw, 4rem);
    text-wrap: pretty;
  }

  h1 {
    font-size: clamp(1.3rem, 3vw, 3rem);
    text-wrap: pretty;
  }

  p {
    font-size: clamp(0.6rem, 2vw, 1rem);
  }

  
</style>
