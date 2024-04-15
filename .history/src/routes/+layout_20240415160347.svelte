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

<main class="w-screen h-screen bg-black">
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
      transform: scale();
    }
  }

  @keyframes slide-to-left {
    to {
      transform: translateY(-60px);
    }
  }

  :root::view-transition-old(root) {
    animation:
      300ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
      300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
  }

  :root::view-transition-new(root) {
    animation:
      300ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
      300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
  }
</style>
