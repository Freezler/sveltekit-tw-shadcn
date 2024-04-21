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
  class="grid w-full place-items-center bg-cover h-screen bg-gradient-to-br from-[rgba(0,0,0,1)] via-color to-[--grape]">
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

  :root::view-transition-old(root) {
    animation:
      cubic-bezier(0.175, 0.885, 0.32, 1.275) both fade-out,
      cubic-bezier(0.175, 0.885, 0.32, 1.275) both slide-to-left;
    animation-duration: 800ms;
  }

  :root::view-transition-new(root) {
    animation:
      cubic-bezier(0.175, 0.885, 0.32, 1.275) both fade-in,
      cubic-bezier(0.175, 0.885, 0.32, 1.275) both
        slide-from-right;
    animation-duration: 800ms;
  }

  com::view-transition-old(root) {
    animation:
      cubic-bezier(0.175, 0.885, 0.32, 1.275) both fade-out,
      cubic-bezier(0.175, 0.885, 0.32, 1.275) both slide-to-left;
    animation-duration: 800ms;
  }
  section::view-transition-new(root) {
    animation:
      cubic-bezier(0.175, 0.885, 0.32, 1.275) both fade-in,
      cubic-bezier(0.175, 0.885, 0.32, 1.275) both
        slide-from-right;
    animation-duration: 800ms;
  }
</style>
