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
  class="grid w-full bg-[hsla(285, 33%, 5%, 0.6)] mix-blend-difference bg-cover h-screen bg-gradient-to-tl from-[var(--heroBgColor)] 25% via-[hsl(291,55%,30%)] 45% to-[hsl(283,90%,78%)]">
  <Navbar />
  <slot />
</main>

<style>
  @keyframes fade-in {
    from {
      opacity: 0;
     
    }
  }

  @keyframes fade-out {
    to {
      opacity: 1;
      
    }
  }

  @keyframes slide-from-right {
    from {
      transform: scale(1);
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
 

  :root::view-transition-old(root) {
    animation:
      300ms cubic-bezier(0.95, 0.05, 0.795, 0.035) both fade-out,
      200ms cubic-bezier(0.95, 0.05, 0.795, 0.035) both slide-to-left;
      animation-duration: 150ms;
  

  }

  :root::view-transition-new(root) {
    animation:
      300ms cubic-bezier(0.95, 0.05, 0.795, 0.035) both fade-in,
      200ms cubic-bezier(0.95, 0.05, 0.795, 0.035) both slide-from-right;
      animation-duration: 150ms;
     
  }
  
</style>
