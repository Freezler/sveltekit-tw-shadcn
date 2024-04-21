<script lang="ts">
  import "../app.css";
  import Navbar from "../lib/components/ui/layout/navbar-component/navbar.svelte";
  import { onNavigate } from "$app/navigation";
  onNavigate((navigation) => {
    if (!(document as any).startViewTransition) return;

    return new Promise((resolve) => {
      (document as any).startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
</script>

<main
  class="grid w-full h-screen bg-gradient-to-tl from-[var(--heroBgColor)] 25% via-[#461050] 35% to-[hsl(283,60%,18%)]">
  <Navbar />
  <slot />
</main>

<style>
  @keyframes fade-in {
    from {
      opacity: 0;
      background: black;
    }
  }

  @keyframes fade-out {
    to {
      opacity: 0;
      background: black;
    }
  }

  @keyframes slide-from-right {
    from {
      transform: scale(1.1);
    }
  }

  @keyframes slide-to-left {
    to {
      transform: scale(1);
    }
  }
:root {
  --heroBgColor: hsla(285, 33%, 5%, 0.994);
}
  --heroBgColor

  :root::view-transition-old(root) {
    animation:
      300ms linear both fade-out,
      200ms linear both slide-to-left;
      background: red;

  }

  :root::view-transition-new(root) {
    animation:
      300ms linear  both fade-in,
      200ms linear both slide-from-right;
      b
  }
  
</style>
