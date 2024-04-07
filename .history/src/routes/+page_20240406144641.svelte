<script lang="ts">
  import { AspectRatio } from "$lib/components/ui/aspect-ratio";
</script>

<div
  class="absolute top-0 flex flex-col justify-center w-full h-full">
  <AspectRatio
    ratio={16 / 9}
    class="w-full h-full bg-muted">
    <img
      src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      alt="alt"
      class="object-cover h-full opacity-90" />
  </AspectRatio>
  <div
    class="relative top-0 z-10 text-center text-[#181414]">
    <h1
      class="text-2xl bg-[hsla(0,0%,100%,.5)]">
      Welcome to my SvelteKit
      ShadCN-svelte
      TailwindCSS starterkit
    </h1>
    <p>
      Visit <a
        href="https://git.freezler.com/sveltekit-tw-shadcn"
        >the project repo
      </a> to read the documentation
    </p>
  </div>
</div>
