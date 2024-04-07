<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
</script>

<div
  class="grid h-screen text-center place-items-center bg-slate-900">
  <div
    class="bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')] size-full bg-cover bg-center flex flex-col justify-center">
    <h1 class="text-red-500">
      Welcome to my SvelteKit
      ShadCN-svelte
      TailwindCSS starterkit
    </h1>
    <p>
      <Button
        variant="outline"
        size="lg"
        >Visit <a
          href="https://git.freezler.com/sveltekit-tw-shadcn"
          > the project repo
        </a></Button> to read the
      documentation Get Started
    </p>
  </div>
</div>
