<script lang="ts">
  import "../app.css";
  import Navbar from "../lib/components/ui/layout/navbar-component/navbar.svelte";
  import
</script>

<main class="w-screen h-screen bg-black">
  <Navbar />
  <slot />
</main>
