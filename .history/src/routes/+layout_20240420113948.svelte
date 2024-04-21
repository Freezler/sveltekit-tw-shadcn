<script lang="ts">
  import "../app.css";
  import Navbar from "../lib/components/ui/layout/navbar-component/navbar.svelte";
  import { onNavigate } from "$app/navigation";
  import { AnimationEventHandler } from "svelte/elements";

  onAnimate((event) => {
    if (event.animationName === "fade-in") {
      (event as AnimationEventHandler).target.style.animation =
        "none";
    } else if (event.animationName === "fade-out") {
    }
  });
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
  class="grid w-full h-screen bg-indigo-950 place-items-center">
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

  :root::view-transition-old(root) {
    animation:
      300ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
      200ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
  }

  :root::view-transition-new(root) {
    animation:
      300ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
      200ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
  }
</style>
