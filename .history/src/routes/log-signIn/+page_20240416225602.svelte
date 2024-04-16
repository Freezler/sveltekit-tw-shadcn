<script lang="ts">
  
	import { Button } from "$lib/components/ui/button/index.js";
	import * as Card from "$lib/components/ui/card/index.js";
	import { Label } from "$lib/components/ui/label/index.js";
	import { Input } from "$lib/components/ui/input/index.js";
  import { Apple } from 'lucide-svelte';
  import { Github} from 'lucide-svelte';



</script>
<Card.Root class="grid mt-12 items-center justify-center w-3/4 bg-white max-w-[620px] place-items-center">
	<Card.Header class="-space-y-0">
		<Card.Title class="text-sm sm:text-base md:text-lg lg:text-2xl">Create an account</Card.Title>
		<Card.Description class="text-[12px] sm:text-sm md:text-base ">Enter your email below to create your account</Card.Description>
	</Card.Header>
	<Card.Content class="grid gap-0 ">
		<div class="grid grid-cols-3 gap-2 mb-2">
			<Button variant="outline">
        <Github />
				
			</Button>
			<Button variant="outline">
				<Github />
				
			</Button>
      <Button variant="outline">
				<Github />
				
			</Button>
		</div>
		<div class="relative">
			<div class="absolute inset-0 flex items-center">
				<span class="w-full border-t" />
			</div>
			<div class="relative flex justify-center text-xs uppercase">
				<span class="text-[12px] px-2 bg-card text-muted-foreground"> Or continue with </span>
			</div>
		</div>
		<div class="grid gap-0">
			<Label class="text-[12px] sm:text-base md:text-lg lg:text-2xl" for="email">Email</Label>
			<Input id="email" type="email" placeholder="m@example.com" />
		</div>
		<div class="grid gap-0">
			<Label for="password">Apple</Label>
			<Input id="password" type="password" />
		</div>
	</Card.Content>
	<Card.Footer>
		<Button class="w-full border-[1px] hover:bg-indigo-950 hover:text-white duration-700">Create account</Button>
	</Card.Footer>
</Card.Root>

<style>
 
</style>