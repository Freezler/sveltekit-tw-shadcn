<script lang="ts">
  import { Button } from "$lib/components/ui/button";
</script>

<div
  class="w-screen grid  place-items-center h-screen text-center bg-[var(--background)]">
  <div class="bg-[url('htt')] h-full w-full">
    <h1 class="text-red-500">
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
    <Button variant="outline"
      >Get Started</Button>
  </div>
</div>
