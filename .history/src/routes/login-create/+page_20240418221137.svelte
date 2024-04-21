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
      class="text-[12px] text-gray-700 sm:text-sm md:text-base "
      >Gebruik de social buttons om u aan te melden.</Card.Description>
  </Card.Header>
  <Card.Content class="grid gap-0 ">
    <div class="grid grid-cols-3 mb-4 md:gap-6">
      <Button
        variant="outline"
        class="hover:bg-green-300 hover:text-white">
        <Chrome />
      </Button>
      <Button
        variant="outline"
        class="hover:bg-indigo-950 hover:text-white">
        <Github />
      </Button>
      <Button
        variant="outline"
        class="hover:bg-stone-900 hover:text-white">
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
    <div class="grid h-12 gap-2 form-group">
      <Label class="text-[12px] sm:text-base mt-2 " for="email"
        >Email</Label>
      <Input
        id="email"
        type="email"
        placeholder="m@example.com"
        class="h-6 placeholder:text-[rgb(146,136,136)] text-xs" />
    </div>
    <div class="grid h-12 gap-2 form-group">
      <Label class="text-[12px] sm:text-base mt-4" for="password"
        >Wachtwoord</Label>
      <Input id="password" type="password" class="w-full h-6" />
    </div>
  </Card.Content>
  <Card.Footer>
    <Button
      class="w-full border-[1px] hover:bg-indigo-950 hover:text-white duration-700 text-sm mt-4"
      >Creeer account</Button>
  </Card.Footer>
</Card.Root>

<style>
  :root {
    --valid: hsl(140 80% 40%);
    --invalid: hsl(10 80% 40%);
    --input: hsl(0 0% 0%);
  }

  .form-group {
  --active: 0;
  container-type: inline-size;
  flex: 1;
}

.input {
  --is-valid: 0;
  --is-invalid: 0;
  border: 0;
  background:
    linear-gradient(var(--input), var(--input)) padding-box,
    linear-gradient(var(--invalid), var(--invalid)) calc((1 - var(--is-invalid)) * -100cqi) 0 / 100% 100% border-box,
    linear-gradient(var(--valid), var(--valid)) calc((1 - var(--is-valid)) * 100cqi) 0 / 100% 100% border-box,
    var(--input);
  border: 2px solid transparent;
  font-size: 2rem;
  padding: 1rem 2rem;
  background-repeat: no-repeat;
  background-size: 100% 100%;
/*   background-position:
    0 0,
    calc((1 - var(--is-invalid)) * -100cqi) 0,
    calc((1 - var(--is-valid)) * 100cqi) 0,
    0 0; */
  max-width: 100%;
  width: 100cqi;
  color: hsl(0 0% 80%);
  font-family: "Geist Sans", "SF Pro", sans-serif;
  font-weight: 40;
  border-radius: 12px;
  outline: none;
  box-shadow: 0 1px hsl(0 0% 100% / 0.35) inset,
    0 -1px hsl(0 0% 0% / 1) inset,
    0 10px 20px -5px hsl(0 0% 0% / 1);
}

.label {
  margin-bottom: 0.5rem;
  display: inline-block;
  padding-left: 2rem;
  opacity: calc(var(--active) + 0.45);
  transition: opacity 0.5s;
}
</style>
