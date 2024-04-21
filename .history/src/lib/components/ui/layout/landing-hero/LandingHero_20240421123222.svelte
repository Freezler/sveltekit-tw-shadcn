<script lang="ts">
  import { Button, buttonVariants } from "$lib/components/ui/button/index.js";
  import { cn } from "$lib/utils";
</script>

<div
  class="z-10 grid w-screen h-screen text-center place-items-center">
  <div
    class="flex flex-row items-center justify-center w-screen h-full">
    <div
      class="flex flex-col items-center justify-center rounded-xl max-w-2/3">
      <h1
        class=" bg-cover bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 bg-clip-text leading-6 md:leading-7 xl:leading-9 text-transparent text-pretty max-w-[25ch] py-0 px-2 font-inter ">
        Welcome to my
        <span
          class="font-semibold  text-transparent uppercase bg-cover h-screen bg-gradient-to-l from-[--vivid-sky-blue] via-color to-[--grape] text-700 bg-clip-text"
          >SvelteKit</span>
        <span
          class="font-semibold text-transparent uppercase bg-cover h-screen bg-gradient-to-r from-[--vivid-sky-blue] via-color to-[--grape] text-700 bg-clip-text"
          >ShadCN-svelte</span>
        <span
          class="font-semibold text-transparent uppercase bg-cover h-screen bg-gradient-to-l from-[--vivid-sky-blue] via-color to-[--grape] text-700 bg-clip-text">
          TailwindCSS</span> starterkit
      </h1>
      <p class="text-[--off-white] text-pretty w-[25ch] md:max-w-[45ch] mt-4">
        You can learn more about the project by reading the
        <Button
          variant="outline"
          class="text-[off-white] hover:text-white bg-blue-800 h-[48px] hover:bg-blue-400 transition-colors duration-700"
          href="https://github.com/Freezler/sveltekit-tw-shadcn">
          docs
        </Button cn({variant: "outline")> on github
      </p>
    </div>
  </div>
</div>

<style>
  span{
    font-size: clamp(1.4rem, 4vw, 4rem);
    text-wrap: pretty;
  }

  h1{
    font-size: clamp(1.3rem, 3vw, 3rem);
    text-wrap: pretty;
  }

  p {
    font-size: clamp(0.6rem, 2vw, 1rem);
  }
</style>
