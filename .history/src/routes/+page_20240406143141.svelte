<script lang="ts">
  import { AspectRatio } from "$lib/components/ui/aspect-ratio";
</script>

<div class="w-full h-full bg-gradient-to-tr from-indigo-900 to-cyan-400">
  <AspectRatio
    ratio={16 / 9}
    class="w-screen bg-muted">
    <img
      src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      alt="alt"
      class="object-cover w-full h-screen opacity-50" />
  </AspectRatio>
  <div
    class=" z-10 text-center p-2 text-[#181414] opacity-full">
    <h1
      class="text-2xl bg-[hsla(0,0%,100%,.5)] ">
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
