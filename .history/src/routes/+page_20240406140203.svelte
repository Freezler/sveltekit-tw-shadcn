<script lang="ts">
  import { AspectRatio } from "$lib/components/ui/aspect-ratio";
</script>

<AspectRatio
  ratio={16 / 9}
  class="bg-red-300 w-[100vw]">
  <img
    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    alt="alt"
    class="object-cover rounded-md" />
</AspectRatio>
<div
  class=" flex flex-col items-center justify-center w-[100vw] h-screen -z-10">
  <h1
    class="text-2xl bg-red-300 w-[35ch] text-center">
    Welcome to my SvelteKit -
    ShadCN-svelte -
    TailwindCSS starterkit
  </h1>
  <p>
    Visit <a
      href="https://kit.svelte.dev"
      >kit.svelte.dev</a> to read
    the documentation
  </p>
</div>
