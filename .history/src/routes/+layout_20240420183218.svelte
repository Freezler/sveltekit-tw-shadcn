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

<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.r134.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js"></script>
<script>
VANTA.NET({
  el: "#net",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x6b16dc
})
</script>

<main class="grid w-full h-screen bg-center bg-cover place-items-center" id="net">
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
      transform: scale(1.0);
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
