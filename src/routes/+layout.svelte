<script lang="ts">
  import "./layout.css";
  import { page } from "$app/stores";
  import { Button, Card, DarkMode } from "flowbite-svelte";
  import CustomSidebar from "$lib/ui/layout/customSidebar.svelte";
  import Customheader from "$lib/ui/layout/customHeader.svelte";
  interface Props {
    children?: import("svelte").Snippet;
  }

  let { children }: Props = $props();

  let currentPage = $derived($page.url.pathname);
</script>

{#if currentPage !== "/"}
  <div
    class="flex w-full min-h-screen relative bg-gray-200 dark:bg-gray-700 lg:p-2 gap-4"
  >
    <CustomSidebar />
    <div
      class=" lg:ml-67.5 w-full rounded-3xl bg-gray-100 p-4 dark:bg-gray-600"
    >
      <Customheader />
      {@render children?.()}
    </div>
    <!-- <DarkMode class="md:hidden block absolute bottom-5 right-5" /> -->
  </div>
{:else}
  <div class="w-full min-h-screen bg-gray-200 dark:bg-gray-700">
    <DarkMode class="absolute" />{@render children?.()}
  </div>
{/if}
