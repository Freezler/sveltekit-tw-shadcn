<script>
  import { Menu } from 'lucide-svelte';
</script>

<div
  class="relative top-0 z-10 flex flex-row w-screen h-20">
  <nav
    class="items-center justify-between w-full h-full space-x-4 text-xl text-red-500 bg-transparent md:flex">
    <div class="items-center justify-center hidden gap-4 pl-4 mx-auto md:flex ">
      <a href="/">Home</a>
      <a href="/#blank">About</a>
      <a href="/#blank">Posts</a>
    </div>
</nav>
    <div class="flex mr-4 text-2xl text-red-500 te place-self-center md:hidden"><Menu /></div>
</div>

