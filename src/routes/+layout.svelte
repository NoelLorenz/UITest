<script lang="ts">
  import { page } from "$app/stores";

  import { Button, Card, DarkMode } from "flowbite-svelte";
  import "../app.css";
  import CustomSidebar from "$lib/ui/customSidebar.svelte";

  $: currentPage = $page.url.pathname;
  console.log(currentPage);
</script>

{#if currentPage !== "/"}
  <div
    class="flex w-full min-h-[100vh] relative bg-gray-100 dark:bg-slate-800 p-2 gap-4"
  >
    <CustomSidebar customSideClass="absolute h-[98vh]" />
    <div class=" ml-[270px] w-full rounded-3xl bg-gray-300 dark:bg-gray-700">
      <slot />
    </div>
  </div>
{:else}
  <div class="w-full min-h-[100vh] bg-gray-100 dark:bg-slate-800">
    <DarkMode class="absolute" />
    <slot />
  </div>
{/if}
