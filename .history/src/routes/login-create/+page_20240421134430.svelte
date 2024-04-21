<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Apple } from "lucide-svelte";
  import { Chrome } from "lucide-svelte";
  import { Github } from "lucide-svelte";
</script>
<div class="grid h-screen text-center place-items-center">
<Card.Root
  class="grid  items-center justify-center  bg-gradient-to-br from-[--grape] via-[--vivid-sky-blue] to-[--dark-background] max-w-[620px] place-items-center pb-4 border-2 border-[--dark-background] shadow-md shadow-[--vivid-sky-blue]">
  <Card.Header class=" -space-y-0">
    <Card.Title
      class="text-sm sm:text-base md:text-lg lg:text-2xl"
      >Creeer een account</Card.Title>
    <Card.Description
      class="text-[12px] text-gray-700 sm:text-sm md:text-base "
      >Gebruik de social buttons om u aan te melden.</Card.Description>
  </Card.Header>
  <Card.Content class="grid gap-0 ">
    <div class="grid grid-cols-3 mb-4 md:gap-6">
      <Button variant="outline" class="hover:bg-green-300 hover:text-white">
        <Chrome />
        
      </Button>
      <Button variant="outline" class="hover:bg-indigo-950 hover:text-white">
        <Github />
      
      </Button>
      <Button variant="outline" class="hover:bg-stone-900 hover:text-white">
        <Apple />
      
      </Button>
    </div>
    <div class="relative">
      <div class="absolute inset-0 flex items-center">
        <span class="w-full border-t" />
      </div>
      <div
        class="relative flex justify-center text-xs uppercase">
        <span
          class="text-[12px] px-2 mb-0 text-muted-foreground">
          Of ga door met
        </span>
      </div>
    </div>
    <div class="grid h-12 gap-2">
      <Label
        class="text-[12px] sm:text-base mt-2 text-left "
        for="email">Email</Label>
      <Input
        id="email"
        type="email"
        placeholder="m@example.com"
        class="h-6 placeholder:text-[rgb(146,136,136)] text-xs"
        required />
    </div>
    <div class="grid h-12 gap-2 ">
      <Label
        class="text-[12px] sm:text-base mt-4"
        for="password">Wachtwoord</Label>
      <Input id="password" type="password" class="w-full h-6" required />
    </div>
  </Card.Content>
  <Card.Footer>
    <Button
      variant="outline"
      class="w-full border-[1px] hover:bg-indigo-950 hover:text-white duration-700 text-sm"
      
    
      >Creeer account</Button>
  </Card.Footer>
</Card.Root>
</div>


<style>
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
      animation-duration: 750ms;
     
  }
  @keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>