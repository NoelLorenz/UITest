<script lang="ts">
  import { DarkMode, progressStepper } from "flowbite-svelte";
  import { MoonSolid, SunSolid } from "flowbite-svelte-icons";
  export let className: string = "";
</script>

<DarkMode class={className}>
  {#snippet lightIcon()}
    <SunSolid color="yellow" />
  {/snippet}
  {#snippet darkIcon()}
    <MoonSolid />
  {/snippet}
</DarkMode>
