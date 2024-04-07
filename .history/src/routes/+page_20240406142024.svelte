<script lang="ts">
  import { AspectRatio } from "$lib/components/ui/aspect-ratio";
</script>

<div
  class="">
  <AspectRatio
    ratio={16 / 9}
    class="w-[full] bg-muted">
    <img
      src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      alt="alt"
      class="object-cover w-full h-screen" />
  </AspectRatio>
  <div class="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
  <h1
    class="text-2xl bg-red-300 w-[35ch] text-center z-10">
    Welcome to my SvelteKit
    ShadCN-svelte TailwindCSS
    starterkit
  </h1>
  <p>
    Visit <a
      href="https://kit.svelte.dev"
      >kit.svelte.dev</a> to read
    the documentation
  </p>
  </div>
</div>
