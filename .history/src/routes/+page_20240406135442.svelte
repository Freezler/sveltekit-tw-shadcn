<h1 class="text-2xl bg-red-300 w-[35ch] text-center">Welcome to my SvelteKit - ShadCN-svelte - TailwindCSS starterkit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<script lang="ts">
  import { AspectRatio } from "$lib/components/ui/aspect-ratio";
</script>
 
<div class="w-[450px]">
  <AspectRatio ratio={16 / 9} class="bg-muted">
    <img src="..." alt="..." class="object-cover rounded-md" />
  </AspectRatio>
</div>