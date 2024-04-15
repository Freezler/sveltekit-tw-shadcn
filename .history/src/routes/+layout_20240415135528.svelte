<script>
  import "../app.css";
  import Navbar from "../lib/components/ui/layout/navbar-component/navbar.svelte";
  import { onNavigate } from '$app/navigation';
onNavigate((navigation) => {	if (!do.startViewTransition) return;Property 'startViewTransition' does not exist on type 'Document'.2339Property 'startViewTransition' does not exist on type 'Document'.
	return new Promise((resolve) => {		document.startViewTransition(async () => {Property 'startViewTransition' does not exist on type 'Document'.2339Property 'startViewTransition' does not exist on type 'Document'.			resolve();			await navigation.complete;		});	});});
</script>

<main>
  <Navbar />
  <slot />
</main>
