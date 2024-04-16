<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Apple } from "lucide-svelte";
  import { Chrome } from "lucide-svelte";
  import { Github } from "lucide-svelte";
</script>

<Card.Root
  class="grid mt-12 items-center justify-center w-3/4 bg-white max-w-[620px] place-items-center pb-4">
  <Card.Header class=" -space-y-0">
    <Card.Title
      class="text-sm sm:text-base md:text-lg lg:text-2xl"
      >Creeer een account</Card.Title>
    <Card.Description
      class="text-[12px] sm:text-sm md:text-base "
      >gebruik de socvoer uw emailadres in om aan te melden.</Card.Description>
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
          Or continue with
        </span>
      </div>
    </div>
    <div class="grid h-12 md:grid-cols-[auto_278px] gap-2">
      <Label
        class="text-[12px] sm:text-base mt-2 "
        for="email">Email</Label>
      <Input
        id="email"
        type="email"
        placeholder="m@example.com"
        class="h-6" />
    </div>
    <div class="grid h-12 gap-2 md:grid-cols-[auto_278px]">
      <Label
        class="text-[12px] sm:text-base mt-4"
        for="password">Password</Label>
      <Input id="password" type="password" class="w-full h-6" />
    </div>
  </Card.Content>
  <Card.Footer>
    <Button
      class="w-full border-[1px] hover:bg-indigo-950 hover:text-white duration-700 text-sm mt-4"
      >Create account</Button>
  </Card.Footer>
</Card.Root>

<style>
</style>
