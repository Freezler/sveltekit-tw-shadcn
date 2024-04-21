import Root from "./aspect-ratio.svelte";

export { Root, Root as AspectRatio };


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
