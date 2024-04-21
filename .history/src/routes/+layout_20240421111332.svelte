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
  class="grid w-full bg-[hsla(285, 33%, 5%, 0.6)] bg-cover h-screen bg-gradient-to-tl from-[var(--heroBgColor)] via-[hsl(272,58%,20%)] to-[hsl(283,90%,78%)]">
  <Navbar />
  <slot />
</main>

<style>
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
    } to {
      opacity: 0;
    }
  }

  @keyframes slide-from-right {
    from {
      transform: scale(1.01);
    }
  }

  @keyframes slide-to-left {
    to {
      transform: scale(1.00);
    }
  }
  :root {
    --heroBgColor: hsla(285, 33%, 5%, 0.994);
  }

  :root::view-transition-old(root) {
    animation:
      cubic-bezier(0.175, 0.885, 0.32, 1.275) both fade-out,
      cubic-bezier(0.175, 0.885, 0.32, 1.275) both slide-to-left;
    animation-duration: 800ms;
  }

  :root::view-transition-new(root) {
    animation:
     cubic-bezier(0.175, 0.885, 0.32, 1.275) both fade-in,
     cubic-bezier(0.175, 0.885, 0.32, 1.275) both slide-from-right;
    animation-duration: 800ms;
  }
</style>
