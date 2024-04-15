<script lang="ts">
  import "../app.css";
  import Navbar from "../lib/components/ui/layout/navbar-component/navbar.svelte";

</script>

<main class="w-screen h-screen bg-vlack">
  <Navbar />
  <slot />
</main>
