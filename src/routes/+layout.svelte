<script lang="ts">
  import { page } from "$app/stores";

  import {
    Avatar,
    Button,
    Card,
    DarkMode,
    Dropdown,
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    P,
  } from "flowbite-svelte";
  import "../app.css";
  import CustomSidebar from "$lib/ui/customSidebar.svelte";
  import CustomNavBar from "$lib/ui/customNavBar.svelte";

  $: currentPage = $page.url.pathname;
  console.log(currentPage);
</script>

{#if currentPage !== "/"}
  <div
    class="flex w-full min-h-[100vh] relative bg-gray-100 dark:bg-slate-800 p-2 gap-4"
  >
    <CustomSidebar customSideClass="absolute h-[98vh]" />
    <div
      class=" ml-[270px] w-full rounded-3xl bg-gray-300 p-4 dark:bg-gray-700"
    >
      <CustomNavBar />
      <slot />
    </div>
  </div>
{:else}
  <div class="w-full min-h-[100vh] bg-gray-100 dark:bg-slate-800">
    <DarkMode class="absolute" />
    <slot />
  </div>
{/if}
