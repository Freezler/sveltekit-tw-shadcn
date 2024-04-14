<script>
  import HamburgerNav from './hamburger/hamburger.svelte';
</script>

<div
  class="relative top-0 z-10 flex flex-row w-screen h-full list-none">
  <nav
    class="flex items-center w-full h-20 space-x-4 text-xl text-red-500 bg-transparent md:flex">
    <li
      class="items-center justify-center hidden gap-4 pl-4 mx-auto md:flex">
      <a href="/">Home</a>
      <a href="/#blank"
        >About</a>
      <a href="/#blank"
        >Posts</a>
    </li>
    <li
      class="absolute top-0 h-20 text-2xl text-red-500 right-[24px] md:hidden">
      <HamburgerNav />
    </li>
  </nav>
</div>
