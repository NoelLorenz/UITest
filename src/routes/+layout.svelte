<script lang="ts">
  import "./layout.css";
  import { page } from "$app/stores";
  import { Button, Card, DarkMode } from "flowbite-svelte";
  import CustomSidebar from "$lib/ui/layout/customSidebar.svelte";
  import Customheader from "$lib/ui/layout/customHeader.svelte";

  $: currentPage = $page.url.pathname;


  console.log(currentPage);
</script>

{#if currentPage !== "/"}
  <div
    class="flex w-full min-h-screen relative bg-gray-100 dark:bg-gray-800 p-2 gap-4"
  >
    <CustomSidebar />
    <div class=" ml-67.5 w-full rounded-3xl bg-gray-200 p-4 dark:bg-gray-700">
      <Customheader />
    </div>
  </div>
{:else}
  <div class="w-full min-h-screen bg-gray-100 dark:bg-gray-800">
    <DarkMode class="absolute" /><slot></slot>
  </div>
{/if}
