<script lang="ts">
  import "../app.css";
  import Navbar from "../lib/components/ui/layout/navbar-component/navbar.svelte";
  import { onNavigate } from '$app/navigation';

onNavigate((navigat
</script>

<main>
  <Navbar />
  <slot />
</main>
