<script lang="ts">
  import {
    Sidebar,
    SidebarGroup,
    SidebarItem,
    SidebarBrand,
    DarkMode,
  } from "flowbite-svelte";
  export let customSideClass: string = "";
</script>

<!-- @component


```typescript

  let customSideClass: string = "";
``` 
-->

<Sidebar class="bg-gray-300 dark:bg-gray-700 rounded-3xl {customSideClass}">
  <SidebarItem label="test"></SidebarItem>
  <SidebarItem label="test"></SidebarItem>
  <SidebarItem label="test"></SidebarItem>
  <DarkMode class=" justify-self-end" />
</Sidebar>
