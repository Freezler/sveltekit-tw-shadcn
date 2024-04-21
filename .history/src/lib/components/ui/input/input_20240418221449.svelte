<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements";
	import type { InputEvents } from "./index.js";
	import { cn } from "$lib/utils.js";

	type $$Props = HTMLInputAttributes;
	type $$Events = InputEvents;

	let className: $$Props["class"] = undefined;
	export let value: $$Props["value"] = undefined;
	export { className as class };

	// Workaround for https://github.com/sveltejs/svelte/issues/9305
	// Fixed in Svelte 5, but not backported to 4.x.
	export let readonly: $$Props["readonly"] = undefined;
</script>

<input
	class={cn(
		"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
		className
	)}
	bind:value
	{readonly}
	on:blur
	on:change
	on:click
	on:focus
	on:focusin
	on:focusout
	on:keydown
	on:keypress
	on:keyup
	on:mouseover
	on:mouseenter
	on:mouseleave
	on:paste
	on:input
	on:wheel
	{...$$restProps}
/>
 <style>
	input {
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
 </style>