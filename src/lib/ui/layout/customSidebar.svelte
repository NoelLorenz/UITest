<script lang="ts">
  import {
    Sidebar,
    SidebarGroup,
    SidebarItem,
    SidebarButton,
    uiHelpers,
    Avatar,
    Toggle,
  } from "flowbite-svelte";
  import {
    ChartOutline,
    GridSolid,
    MailBoxSolid,
    UserSolid,
  } from "flowbite-svelte-icons";
  import { page } from "$app/state";
  import { fa } from "svelty-picker/i18n";
  import { scale } from "svelte/transition";
  import CustomDarkmode from "../component/customDarkmode.svelte";
  let activeUrl = $state(page.url.pathname);
  const spanClass = "flex-1 ms-3 whitespace-nowrap";
  const demoSidebarUi = uiHelpers();
  let isDemoOpen = $state(false);
  const closeDemoSidebar = demoSidebarUi.close;
  const activeClass: string =
    "flex w-full p-2 bg-primary-500  rounded-2xl items-center [&>span]:transition-all [&>span]:duration-500 [&>span]:text-center";
  const nonActiveClass: string =
    "flex w-full p-2 bg-transparent dark:text-gray-100 rounded-2xl items-center hover:bg-primary-400 hover:text-gray-900 [&>span]:transition-all [&>span]:duration-500 [&>span]:text-center";

  let { onHover = $bindable() }: { onHover: boolean } = $props();

  $effect(() => {
    isDemoOpen = demoSidebarUi.isOpen;
    activeUrl = page.url.pathname;
  });
</script>

<SidebarButton
  onclick={demoSidebarUi.toggle}
  class="lg:mb-2 z-50 bg-primary-600 left-8 top-10 absolute"
/>
<Sidebar
  {activeUrl}
  backdrop={false}
  isOpen={isDemoOpen}
  closeSidebar={closeDemoSidebar}
  onmouseenter={() => (onHover = true)}
  onmouseleave={() => (onHover = false)}
  class="z-50 min-h-[98vh] bg-gray-100 p-4 dark:bg-gray-600 m-2 rounded-3xl w-fit "
  position="absolute"
  classes={{
    nonactive: "p-2",
    active: "p-2 ",
    div: "bg-transparent dark:bg-gray-600 p-0 flex flex-col gap-8 items-center w-full h-full",
  }}
>
  <SidebarGroup>
    <Avatar class="transition-all duration-500" size={!onHover ? "sm" : "lg"} />
  </SidebarGroup>
  <SidebarGroup class="w-full">
    <SidebarItem
      {activeClass}
      {nonActiveClass}
      label={!onHover ? "" : "dashboard"}
      href="/dashboard"
    >
      {#snippet icon()}
        <ChartOutline
          class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
        />
      {/snippet}
    </SidebarItem>
    <SidebarItem
      {activeClass}
      {nonActiveClass}
      label={!onHover ? "" : "components"}
      {spanClass}
      href="/components"
    >
      {#snippet icon()}
        <GridSolid
          class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
        />
      {/snippet}
      {#snippet subtext()}
        {#if onHover}
          <span
            class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300"
            >Pro</span
          >
        {/if}
      {/snippet}
    </SidebarItem>
  </SidebarGroup>
</Sidebar>
<!-- <div class="relative">
  <Sidebar
    {activeUrl}
    backdrop={false}
    isOpen={isDemoOpen}
    closeSidebar={closeDemoSidebar}
    params={{ x: -50, duration: 50 }}
    class="z-50 h-full w-full bg-green-500"
    position="absolute"
    classes={{ nonactive: "p-2", active: "p-2" }}
  >
    <div class="h-full w-full bg-green-500">
      <SidebarGroup class="">
        <SidebarItem label="Dashboard" href="/">
          {#snippet icon()}
            <ChartOutline
              class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
            />
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Kanban" {spanClass} href="/">
          {#snippet icon()}
            <GridSolid
              class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
            />
          {/snippet}
          {#snippet subtext()}
            <span
              class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300"
              >Pro</span
            >
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Inbox" {spanClass} href="/">
          {#snippet icon()}
            <MailBoxSolid
              class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
            />
          {/snippet}
          {#snippet subtext()}
            <span
              class="bg-primary-200 text-primary-600 dark:bg-primary-900 dark:text-primary-200 ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full p-3 text-sm font-medium"
              >3</span
            >
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Sidebar" href="/components/sidebar">
          {#snippet icon()}
            <UserSolid
              class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
            />
          {/snippet}
        </SidebarItem>
      </SidebarGroup>
    </div>
  </Sidebar>
</div> -->
